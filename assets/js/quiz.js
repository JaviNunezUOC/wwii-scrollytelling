/* QUIZ.JS — Quiz interactivo sobre la Segunda Guerra Mundial */

const QUIZ_QUESTIONS = [
  {
    q: "¿En qué fecha comenzó oficialmente la Segunda Guerra Mundial con la invasión de Polonia?",
    options: ["1 de septiembre de 1939", "3 de septiembre de 1939", "1 de enero de 1940", "28 de junio de 1919"],
    correct: 0
  },
  {
    q: "¿Qué nombre recibió la invasión alemana de la Unión Soviética en junio de 1941?",
    options: ["Operación Overlord", "Operación Dynamo", "Operación Barbarroja", "Operación León Marino"],
    correct: 2
  },
  {
    q: "¿Cuántos soldados aliados fueron evacuados en la Operación Dynamo (Dunkerque)?",
    options: ["Unos 100.000", "Unos 200.000", "Unos 338.000", "Unos 500.000"],
    correct: 2
  },
  {
    q: "¿Qué batalla marcó el punto de inflexión definitivo en el frente oriental?",
    options: ["Batalla de Moscú", "Batalla de Kursk", "Batalla de Berlín", "Batalla de Stalingrado"],
    correct: 3
  },
  {
    q: "¿En qué año y mes tuvo lugar el Desembarco de Normandía (Día D)?",
    options: ["Junio de 1943", "Junio de 1944", "Agosto de 1944", "Septiembre de 1944"],
    correct: 1
  },
  {
    q: "¿Qué país sufrió las mayores pérdidas humanas durante la Segunda Guerra Mundial?",
    options: ["Alemania", "Polonia", "China", "Unión Soviética"],
    correct: 3
  },
  {
    q: "¿Cómo se llamó el matemático que lideró el descifrado del código Enigma en Bletchley Park?",
    options: ["Albert Einstein", "Alan Turing", "John von Neumann", "Norbert Wiener"],
    correct: 1
  },
  {
    q: "¿Cuál fue el primer país en recibir una bomba atómica en combate?",
    options: ["Tokio", "Osaka", "Hiroshima", "Nagasaki"],
    correct: 2
  },
  {
    q: "¿En qué fecha se celebra el VE Day (Día de la Victoria en Europa)?",
    options: ["30 de abril", "2 de mayo", "8 de mayo", "15 de agosto"],
    correct: 2
  },
  {
    q: "¿Qué conferencia de 1945 estableció las bases del orden mundial de posguerra?",
    options: ["Conferencia de Múnich", "Conferencia de Teherán", "Conferencia de Yalta", "Conferencia de Ginebra"],
    correct: 2
  }
];

function initQuiz() {
  const container  = document.getElementById('quiz-container');
  const questionEl = document.getElementById('quiz-question');
  const optionsEl  = document.getElementById('quiz-options');
  const barEl      = document.getElementById('quiz-bar');
  const labelEl    = document.getElementById('quiz-label');
  const cardEl     = document.getElementById('quiz-card');
  const resultEl   = document.getElementById('quiz-result');
  const scoreEl    = document.getElementById('quiz-score');
  const msgEl      = document.getElementById('quiz-msg');
  const restartBtn = document.getElementById('quiz-restart');

  if (!container || !questionEl) return;

  let current = 0;
  let score   = 0;

  const msgs = [
    [0, 3,  "Sigue estudiando — la historia tiene mucho que enseñarte."],
    [4, 6,  "Buen intento. Estás en el buen camino."],
    [7, 8,  "¡Muy bien! Tienes buenos conocimientos sobre la WWII."],
    [9, 10, "¡Excelente! Eres un auténtico experto de la Segunda Guerra Mundial."]
  ];

  function showQuestion() {
    const q = QUIZ_QUESTIONS[current];
    const pct = (current / QUIZ_QUESTIONS.length) * 100;
    barEl.style.width = pct + '%';
    labelEl.textContent = `Pregunta ${current + 1} de ${QUIZ_QUESTIONS.length}`;
    questionEl.textContent = q.q;
    optionsEl.innerHTML = '';

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleAnswer(i));
      optionsEl.appendChild(btn);
    });
  }

  function handleAnswer(selected) {
    const q    = QUIZ_QUESTIONS[current];
    const btns = optionsEl.querySelectorAll('.quiz-option');

    btns.forEach(btn => btn.disabled = true);
    btns[q.correct].classList.add('correct');
    if (selected !== q.correct) btns[selected].classList.add('incorrect');
    else score++;

    setTimeout(() => {
      current++;
      if (current < QUIZ_QUESTIONS.length) {
        showQuestion();
      } else {
        showResult();
      }
    }, 1200);
  }

  function showResult() {
    barEl.style.width = '100%';
    cardEl.style.display   = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = `${score} / ${QUIZ_QUESTIONS.length}`;
    const msg = msgs.find(([min, max]) => score >= min && score <= max);
    msgEl.textContent = msg ? msg[2] : '';
  }

  function restartQuiz() {
    current = 0;
    score   = 0;
    cardEl.style.display   = 'block';
    resultEl.style.display = 'none';
    showQuestion();
  }

  restartBtn.addEventListener('click', restartQuiz);

  // Iniciar cuando el quiz entre en viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showQuestion();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(container);
}

document.addEventListener('DOMContentLoaded', initQuiz);
