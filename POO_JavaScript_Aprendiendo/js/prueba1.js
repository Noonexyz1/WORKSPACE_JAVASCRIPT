console.log("Hola Mundo desde Consola otra vez");
 
/**TEMPLATE STRING */
let nombre = prompt("Ingrese nombre para saludar");

let datos = document.getElementById("idParrafo");
datos.innerHTML = ` 
    <h1>Soy una caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
`;


class Persona {
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    caminarPersona(){
        console.log("Estoy caminando...");
    }

}

let persona1 = new Persona("Diego", 25, 50.54);
persona1.caminarPersona();
console.log(persona1);



let nombres = ["Diego", "Mamani", "Ramos"];
let divNombres = document.getElementById("idNombreArray");

divNombres.innerHTML = "<h1>Listado de nombres</h1>";
divNombres.innerHTML += "<ul>";

nombres.forEach(nom => {
    divNombres.innerHTML += "<li>" + nom + "</li>";
});

divNombres.innerHTML = "</ul>";


/*FUNCIONES*/
let miInformacion = (nom, apell) => {
    let misDatosConHtml = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nom}</h2>
        <h3>Y apellido: ${apell}</h3>
    `;

    return misDatosConHtml;
};

let imprimir = () => {
    let cajaImpresion = document.getElementById("idNombreArray");
    cajaImpresion.innerHTML = miInformacion("Diego", "Mamani");    
    
}

imprimir();


