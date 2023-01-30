// alerta
// alert("que pedo morro")

// variables
let nombre = "roberto"
nombre = "carlos"

// constante
const apellidos = "salama"

// otra variable
let altura = 1.85


// imprimirla 
// esto imprime en el doom(pagina)
// document.write(nombre)
// esto imprime en consola
console.log(nombre);
console.log(altura);

// concatenacion
let concatenacion = nombre + " " + apellidos;
console.log(concatenacion);

// selecionar elementos del doom (pagina)
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
     <h1>soy una caja de datos</h1>
     <h2>mi nombre es: ${concatenacion}</h2>
     <h3> mido: ${altura}</h3>
`

// condiciones
altura = 1.75;

if(altura >= 1.85){
    datos.innerHTML += "<h1>eres una persona alta</h1>"
}else{
    datos.innerHTML += "<h1>eres un minion</h1>"
}

// bucles
// el bucle for tiene tres cpndiciones
// for(inicilizador; condicion; incrementador )
for(let year = 2000; year <= 2023; year ++){
    datos.innerHTML += `<h2>estamos en el año: ${year}</h2>`;
}  

// arrays
let nombres = ["roberto", "carlos", "pepe"];

let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[0];
divNombres.innerHTML = "<h1>listado de nombres</h1><ul>";

nombres.forEach(nombre => {
    divNombres.innerHTML += `<li>${nombre}</li>`
});

// for (let nombre of nombres){
//     divNombres.innerHTML += `<li>${nombre}</li>`
// }

divNombres.innerHTML += "</ul>"

// funciones
const miInformacio = (nombre, altura) => {
      let misDatos =  `
       <h1>soy una caja de datos</h1>
       <h2>mi nombre es: ${nombre}</h2>
       <h3> mido: ${altura}</h3>
  `;

  return misDatos
}


const imprimir = () => {
    
    let datos = document.querySelector("#datos");
    datos.innerHTML = miInformacio ("rober hernandez", 1.70)
}

imprimir();


