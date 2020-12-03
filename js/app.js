// Constructores
function seguro(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}
function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;
    
    const selectYear = document.querySelector('#year');
    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => { 
    ui.llenarOpciones(); // Llena el select con los años
})

eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const brand = document.querySelector('#marca').value;

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    
    // Leer el tipo de cobertura
    const type = document.querySelector('input[name="tipo"]:checked').value;
    
    if(brand === '' || year === '' || type === '') {
        console.log('llene todo hpta!');
    } else {
        console.log('no era tan dificil pai');
    }


    

}