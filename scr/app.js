//Szeri Bendegúz
//2023.05.19
//I/2/N Szoft



const doc = {
    tbody: document.querySelector('#tbody')
};
const state = {
    host: 'http://localhost:8000/',
    ships: []
};
 
window.addEventListener('load', () => {
    init();
});
 
function init() {
    getShip();
}
 
function getShip() {
    let endpoint = 'ships';
    let url = state.host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        state.ships = result;
        render();
    });
}
 
function render() {
    var rows = '';
    state.ships.forEach( ships => {
        var row = `
        <tr>
            <td>${ships.name}</td>
            <td>${ships.length}</td>
            <td>${ships.price}</td>
            <td>${ships.person}</td>
            <td>${ships.trailer}</td>
        </tr>
        `;
        rows += row;
        console.log(ships.name)
    })
    doc.tbody.innerHTML = rows;
}
