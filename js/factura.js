const gastos = [
    { folio: "G88650", rfc: "RFC001", subtotal: 5000, iva: 800 },
    { folio: "G37141", rfc: "RFC002", subtotal: 7000, iva: 1120 },
    { folio: "G96881", rfc: "RFC003", subtotal: 7000, iva: 1120 },
    { folio: "G61152", rfc: "RFC004", subtotal: 7000, iva: 1120 },
    { folio: "G38819", rfc: "RFC005", subtotal: 7000, iva: 1120 },
    { folio: "G84739", rfc: "RFC006", subtotal: 5000, iva: 800 },
    { folio: "G89039", rfc: "RFC007", subtotal: 7000, iva: 1120 },
    { folio: "G49699", rfc: "RFC008", subtotal: 7000, iva: 1120 },
    { folio: "G77129", rfc: "RFC009", subtotal: 7000, iva: 1120 },
    { folio: "G67890", rfc: "RFC010", subtotal: 7000, iva: 1120 },
];

const ingresos = [
    { folio: "I54321", rfc: "RFC011", subtotal: 9000, iva: 1440 },
    { folio: "I81856", rfc: "RFC012", subtotal: 12000, iva: 1920 },
    { folio: "I79750", rfc: "RFC013", subtotal: 9000, iva: 1440 },
    { folio: "I41716", rfc: "RFC014", subtotal: 12000, iva: 1920 },
    { folio: "I68259", rfc: "RFC015", subtotal: 9000, iva: 1440 },
    { folio: "I86832", rfc: "RFC016", subtotal: 12000, iva: 1920 },
    { folio: "I11978", rfc: "RFC017", subtotal: 9000, iva: 1440 },
    { folio: "I34141", rfc: "RFC018", subtotal: 12000, iva: 1920 },
    { folio: "I49272", rfc: "RFC019", subtotal: 9000, iva: 1440 },
    { folio: "I98765", rfc: "RFC020", subtotal: 12000, iva: 1920 },
];

function cargarDatos(tablaId, datos) {
    const tbody = document.querySelector(`#${tablaId} tbody`);
    tbody.innerHTML = ""; // Limpia el contenido previo

    datos.forEach((dato) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${dato.folio}</td>
            <td>${dato.rfc}</td>
            <td>${dato.subtotal}</td>
            <td>${dato.iva}</td>
        `;
        tbody.appendChild(fila);
    });
}
function buscarEnTabla(tablaId, inputId) {
    const input = document.querySelector(inputId); // Input de búsqueda
    const filter = input.value.toLowerCase().trim(); // Texto ingresado (convertido a minúsculas y sin espacios extra)
    const tabla = document.querySelector(`#${tablaId}`);
    const filas = tabla.querySelectorAll("tbody tr");

    // Limpia el fondo de todas las filas
    filas.forEach((fila) => {
        fila.style.backgroundColor = ""; // Limpia el fondo de la fila
    });

    // Busca coincidencias y resalta la fila completa
    filas.forEach((fila) => {
        let filaCoincide = false; // Bandera para saber si la fila tiene una coincidencia

        fila.querySelectorAll("td").forEach((celda) => {
            if (filter !== "" && celda.textContent.toLowerCase().includes(filter)) {
                filaCoincide = true; // Marca la fila como coincidente
            }
        });

        if (filaCoincide) {
            fila.style.backgroundColor = "#cfe2f3"; // Resalta la fila completa
        }
    });
}
// Evento para el botón de buscar en la tabla de gastos
document.querySelector("#btnbuga").addEventListener("click", () => {
    buscarEnTabla("tabla-gastos", ".gastos-busqueda");
});

// Evento para el botón de buscar en la tabla de ingresos
document.querySelector("#btnbuin").addEventListener("click", () => {
    buscarEnTabla("tabla-ingresos", ".ingresos-busqueda");
});
// Precargar datos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarDatos("tabla-gastos", gastos);
    cargarDatos("tabla-ingresos", ingresos);
});