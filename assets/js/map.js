/* MAP.JS — Mapa interactivo */

function initMap() {
  const mapEl = document.getElementById('map-container');
  if (!mapEl || !DATA.mapMarkers) return;

  const allMarkers = [];

  const map = L.map('map-container', { center: [48, 15], zoom: 4, zoomControl: false, attributionControl: false });

  L.control.zoom({ position: 'bottomright' }).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 18
  }).addTo(map);

  function createIcon(type) {
    const colors = { ally: '#4a7c9e', axis: '#c9402a', battle: '#e8a048' };
    const color  = colors[type] || '#888';
    return L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,0.3);box-shadow:0 0 0 4px ${color}33;cursor:pointer;"></div>`,
      iconSize: [14, 14], iconAnchor: [7, 7], popupAnchor: [0, -12]
    });
  }

  DATA.mapMarkers.forEach(marker => {
    const m = L.marker([marker.lat, marker.lng], { icon: createIcon(marker.type) })
      .addTo(map)
      .bindPopup(`<div class="popup-title">${marker.name}</div><div class="popup-year">${marker.year}</div><p class="popup-desc">${marker.desc}</p>`, { maxWidth: 220 });
    m._layer = marker.layer;
    m._type  = marker.type;
    allMarkers.push(m);
  });

  document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.map-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const layer = btn.dataset.layer;
      allMarkers.forEach(m => {
        if (layer === 'all' || m._layer === layer) { if (!map.hasLayer(m)) map.addLayer(m); }
        else { if (map.hasLayer(m)) map.removeLayer(m); }
      });
      const views = { all: { center: [35,10], zoom: 3 }, europe: { center: [50,15], zoom: 4 }, pacific: { center: [25,155], zoom: 3 }, africa: { center: [15,20], zoom: 3 } };
      const v = views[layer] || views.all;
      map.flyTo(v.center, v.zoom, { duration: 1.2 });
    });
  });

  new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { setTimeout(() => map.invalidateSize(), 100); } });
  }, { threshold: 0.1 }).observe(mapEl);
}

document.addEventListener('DOMContentLoaded', initMap);
