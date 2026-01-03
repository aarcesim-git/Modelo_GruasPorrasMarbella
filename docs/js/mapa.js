var map = L.map('map').setView([36.5165, -4.8715], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([36.5165, -4.8715]).addTo(map)
    .bindPopup('Grúas Porras - Calle Hierro 13')
    .openPopup();