export function initMap() {
    var coordenadas = { lat: 40.7128, lng: -74.0060 };
    var zoom = 12;

    var map = new google.maps.Map(document.getElementById("mapa"), {
        center: coordenadas,
        zoom: zoom
    });

    var marcador = new google.maps.Marker({
        position: coordenadas,
        map: map,
        title: "Nueva York"
    });
}