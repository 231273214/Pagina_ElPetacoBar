document.addEventListener("DOMContentLoaded", function () {
var latitud = 4.604813;
var longitud = -72.926092;
var map = L.map('map').setView([latitud, longitud], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    }).addTo(map);
L.marker([latitud, longitud]).addTo(map)
    .bindPopup('📍 El Petaco Bar<br>Dirección: Cr 4 6 68, Villanueva, Colombia')
    .openPopup();
}); 
var iconoPersonalizado = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/854/854878.png',
        iconAnchor: [20, 40], 
        popupAnchor: [0, -35] 
    });
    L.marker([latitud, longitud], {icon: iconoPersonalizado}).addTo(map)
        .bindPopup('📍 Mi Negocio<br>Dirección: Calle 123, Boyacá')
        .openPopup();