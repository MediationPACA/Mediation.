const apiKey = "YOUR_API_KEY";  // Ceci sera remplacé par GitHub Actions

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

function initMap() {
  // Initialisation de la carte ici
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: 43.603354, lng: 6.588334 },
    mapId: 'DEMO_MAP_ID'
  });

  updateData();
  setInterval(updateData, 10000);
}
