// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloNombres = [];
//funcion para limpiar el input 
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
//funcion para agregar los nombres al presionar boton añadir agrega los nombres a un array (variable gobal arregloNombres)
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    let lista = document.getElementById("listaAmigos");
    if (nombre != "") {
    lista.innerHTML += '<li>' + nombre + '</li>';
    arregloNombres.push(nombre);
    limpiarCaja();
    } else{
      alert('ingresa un nombre');
    }    
    
}
//fuincion que utiliza el arreglo de los nombres (arregloNombres) ingresados en la funcion agregarAmigo para sortear el amigo
// y escribe el nombre en la otra lista html: id='resultado'
function sortearAmigo() {
    let lista = document.getElementById("resultado");
    let tamaño = arregloNombres.length;
    
    let indice = Math.floor(Math.random()*tamaño);
    console.log(indice);
    lista.innerHTML = arregloNombres[indice] 
    
 }   
let btnAnadir = document.querySelector('.button-add');
    btnAnadir.addEventListener('clic', function(){
        agregarAmigo();
    }) 
let btnsortear = document.querySelector('.button-draw');
    btnAnadir.addEventListener('clic', function(){
        sortearAmigo();
    })


