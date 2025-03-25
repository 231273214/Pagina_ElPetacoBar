document.addEventListener("DOMContentLoaded", function () {
    var latitud = 4.604813;
    var longitud = -72.926092;

    // Inicializa el mapa
    var map = L.map('map').setView([latitud, longitud], 15);

    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ícono personalizado
    var iconoPersonalizado = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/854/854878.png',
        iconSize: [40, 40],  
        iconAnchor: [20, 40], 
        popupAnchor: [0, -35] 
    });

    // Marcador ícono personalizado
    L.marker([latitud, longitud], {icon: iconoPersonalizado}).addTo(map)
        .bindPopup('📍 El Petaco Bar<br>Dirección: Cr 4 6 68, Villanueva, Colombia')
        .openPopup();
});
