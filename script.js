// Inicializar el mapa centrado en Córdoba
const map = L.map('map').setView([-31.4, -64.18], 7); // Coordenadas de Córdoba

// Agregar un mapa base (fondo de mapa)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para cargar las capas GeoJSON
function cargarCapa(archivo, estilo, nombre) {
    fetch(archivo)
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, { style: estilo }).addTo(map); // Agregar capa al mapa
        })
        .catch(error => console.error('Error cargando', nombre, error));
}

// Estilos para cada capa (opcional)
const estiloDepartamentos = {
    color: "blue",
    weight: 2,
    fillOpacity: 0.1
};

const estiloPuentes = {
    color: "green",
    weight: 3
};

const estiloRutas = {
    color: "red",
    weight: 1
};

// Cargar las tres capas
cargarCapa('depa.geojson', estiloDepartamentos, "Departamentos");
cargarCapa('puentes.geojson', estiloPuentes, "Puentes");
cargarCapa('rutas.geojson', estiloRutas, "Rutas");


    