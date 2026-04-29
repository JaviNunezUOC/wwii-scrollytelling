/* SCROLL.JS — Animaciones y lógica completa */

gsap.registerPlugin(ScrollTrigger);

/* ── BARRA DE PROGRESO ─────────────────────────── */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct.toFixed(2) + '%';
  }, { passive: true });
}

/* ── NAV LATERAL ────────────────────────────────── */
function initSideNav() {
  const dots    = document.querySelectorAll('.nav-dot');
  const tooltip = document.getElementById('nav-tooltip');
  const sections = document.querySelectorAll('[data-section-index]');
  let timer;

  dots.forEach((dot, i) => {
    dot.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      const label = dot.dataset.label;
      if (!label) return;
      // Posicionar tooltip a la altura del dot
      const rect = dot.getBoundingClientRect();
      tooltip.style.top = (rect.top + rect.height / 2) + 'px';
      tooltip.style.transform = 'translateY(-50%)';
      tooltip.innerHTML = `<span>${label}</span>`;
      tooltip.classList.add('visible');
    });
    dot.addEventListener('mouseleave', () => {
      timer = setTimeout(() => tooltip.classList.remove('visible'), 200);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.dataset.sectionIndex);
        dots.forEach(d => d.classList.remove('active'));
        if (dots[idx]) dots[idx].classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
}

/* ── REVEALS GENÉRICOS ──────────────────────────── */
function initRevealAnimations() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal-up,.reveal-left,.reveal-right'));
        const delay = siblings.indexOf(entry.target) * 0.12;
        entry.target.style.transitionDelay = delay + 's';
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ── HERO ────────────────────────────────────────── */
function initHeroAnimation() {
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('.hero__kicker',   { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
    .to('.hero__title',    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')
    .to('.hero__stats',    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .to('.hero__cta',      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  gsap.to('.hero__bg-grid', {
    yPercent: 30, ease: 'none',
    scrollTrigger: { trigger: '#portada', start: 'top top', end: 'bottom top', scrub: true }
  });
  gsap.to('.hero__content', {
    y: 80, opacity: 0.2, ease: 'none',
    scrollTrigger: { trigger: '#portada', start: 'top top', end: 'bottom top', scrub: true }
  });
}

/* ── STICKY SPLIT con imágenes de Wikimedia ─────── */
function initStickySplit() {
  const steps = document.querySelectorAll('#contexto .scroll-step');
  if (!steps.length) return;

  const imgEl       = document.getElementById('sticky-real-img');
  const placeholder = document.getElementById('sticky-placeholder');
  const capEl       = document.getElementById('img-caption-contexto');

  function loadImage(src, alt, caption) {
    if (!src) return;
    const tmp = new Image();
    tmp.onload = () => {
      imgEl.src = src;
      imgEl.alt = alt || caption;
      imgEl.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };
    tmp.onerror = () => {
      imgEl.style.display = 'none';
      if (placeholder) { placeholder.style.display = 'flex'; placeholder.querySelector('.img-label').textContent = alt || '···'; }
    };
    tmp.src = src;
    if (capEl) capEl.textContent = caption || '';
  }

  // Cargar la primera imagen inmediatamente
  const first = steps[0];
  loadImage(first.dataset.src, first.dataset.caption, first.dataset.caption);
  first.classList.add('is-active');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        steps.forEach(s => s.classList.remove('is-active'));
        entry.target.classList.add('is-active');
        loadImage(entry.target.dataset.src, entry.target.dataset.caption, entry.target.dataset.caption);
      }
    });
  }, { threshold: 0.5 });

  steps.forEach(step => observer.observe(step));
}

/* ── TIMELINE ─────────────────────────────────────── */
function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container || !DATA.timeline) return;

  DATA.timeline.forEach((event, i) => {
    const isEven = i % 2 === 1;
    const html = `
      <div class="timeline-event" data-category="${event.category}">
        ${!isEven ? `<div class="event-content"><div class="event-year">${event.year}</div><div class="event-title">${event.title}</div><p class="event-desc">${event.desc}</p></div>` : '<div class="event-empty"></div>'}
        <div class="event-dot"><div class="event-dot__inner"></div></div>
        ${isEven  ? `<div class="event-content"><div class="event-year">${event.year}</div><div class="event-title">${event.title}</div><p class="event-desc">${event.desc}</p></div>` : '<div class="event-empty"></div>'}
      </div>`;
    container.insertAdjacentHTML('beforeend', html);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });
  container.querySelectorAll('.timeline-event').forEach(ev => observer.observe(ev));
}

/* ── PERSONAJES con filtro ───────────────────────── */
function initPersonCards() {
  const container = document.getElementById('cards-container');
  if (!container || !DATA.people) return;

  DATA.people.forEach(person => {
    const sideClass = person.side === 'ally' ? 'card-side--ally' : 'card-side--axis';
    const sideLabel = person.side === 'ally' ? 'Aliados' : 'Eje';
    const fotoHtml  = person.foto
      ? `<div class="card-photo-wrap"><img src="${person.foto}" alt="${person.name}" class="card-photo" loading="lazy"></div>`
      : '';
    container.insertAdjacentHTML('beforeend', `
      <article class="person-card" data-side="${person.side}">
        ${fotoHtml}
        <div class="card-body">
          <span class="card-side ${sideClass}">${sideLabel}</span>
          <h3 class="card-name">${person.name}</h3>
          <p class="card-role">${person.role}</p>
          <p class="card-bio">${person.bio}</p>
          <p class="card-years">${person.years}</p>
        </div>
      </article>`);
  });

  // Animación de entrada
  const cards = container.querySelectorAll('.person-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const all = Array.from(cards);
        setTimeout(() => entry.target.classList.add('is-visible'), all.indexOf(entry.target) * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  cards.forEach(c => observer.observe(c));

  // Filtro Aliados / Eje
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.side === filter;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
}

/* ── CONTADORES ANIMADOS ─────────────────────────── */
function initCountUp() {
  const numEls = document.querySelectorAll('.stat-number');
  if (!numEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target) || 0;
        const start = performance.now();
        const dur   = 1400;
        function tick(now) {
          const t   = Math.min((now - start) / dur, 1);
          const val = Math.round((t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2) * target);
          el.textContent = val.toLocaleString('es-ES');
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('es-ES');
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  numEls.forEach(el => observer.observe(el));
}

/* ── INICIALIZAR TODO ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initSideNav();
  initRevealAnimations();
  initHeroAnimation();
  initStickySplit();
  initTimeline();
  initPersonCards();
  initCountUp();
});
