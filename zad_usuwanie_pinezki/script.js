



//Button who active deleteBool
const button = document.getElementById('btn')

//Boolean who let me delete marker
let deleteBool = false

//Button function to enable boolean
button.addEventListener('click',()=>{
    deleteBool = true
})

// Function to delete marker
const deleteMarker = (e) => {
    if (deleteBool) {
        e.target.removeFrom(map)
        deleteBooly = false
    }
}

//Initiate map
var mapOptions = {
    center: [49.756940830873724, 18.626051340428333],
    zoom: 18
}

// Tworzę obiekt mapy
var map = new L.map('map', mapOptions);


// Tworzę obiekt warstwy
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');

//Create one marker
let marker = L.marker([49.756940830873724, 18.626051340428333]).addTo(map)
//Add Marker Function
marker.on('click', deleteMarker)


// Dodaję warstwę do mapyA
map.addLayer(layer);
