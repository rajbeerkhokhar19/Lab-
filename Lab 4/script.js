var map;


function initMap(lat, lon) {
    map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            document.getElementById('latitude').textContent = latitude;
            document.getElementById('longitude').textContent = longitude;

            initMap(latitude, longitude); 
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

getLocation(); // Call the function to get the location


document.getElementById('return-button').addEventListener('click', function () {
    if (map) {
        map.setView([document.getElementById('latitude').textContent, document.getElementById('longitude').textContent], 13);
    }
});
