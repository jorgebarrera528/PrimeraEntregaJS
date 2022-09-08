//Se declara la funcion producto que determinará que producto escogio cliente
function producto(){
   
    switch (opcion) {
       case 1: 
            alert("Escogiste " + producto1.descripcion);
            cantidad();
            break;
        case 2: 
            alert("Escogiste " + producto2.descripcion);
            cantidad();
            break;
        case 3: 
            alert("Escogiste " + producto3.descripcion);
            cantidad();
            break;
        case 4: 
            alert("Escogiste " + producto4.descripcion);
            cantidad();
            break;
        case 5:  
            alert("Escogiste " + producto5.descripcion);
            cantidad();
            break;
        default: 
            alert("No escogiste producto");
            break;
        }
        
}

//Se declara la funcion cantidad que determinará la cantidad de productos a comprar por cliente
function cantidad(){
    let c = parseInt(prompt("Indique la cantidad a comprar"));
    if(opcion === 1){
        alert("Se agrega al carrito de compras " + c + " " + producto1.descripcion);
    } else if(opcion === 2){
        alert("Se agrega al carrito de compras " + c + " " + producto2.descripcion);
    } else if(opcion === 3){
        alert("Se agrega al carrito de compras " + c + " " + producto3.descripcion);
    } else if(opcion === 4) {
        alert("Se agrega al carrito de compras " + c + " " + producto4.descripcion);
    } else if(opcion === 5){
        alert("Se agrega al carrito de compras " + c + " " + producto5.descripcion);
    }

}
//Se crea una clase para simular llenado de productos en sistema 
class Producto {
    constructor(codigo, descripcion){
        this.codigo = codigo; 
        this.descripcion = descripcion;
    }
}


let producto1 = new Producto(1, "Cargador de Celular");
let producto2 = new Producto(2, "Audifono");
let producto3 = new Producto(3, "Smartwatch");
let producto4 = new Producto(4, "Mouse");
//let producto5 = new Producto(5, "Teclado");
const prods = [producto1,producto2,producto3,producto4]; 

let producto5 = new Producto(5, "Teclado");
prods.push(producto5);

alert("Se ingresaron productos al sistema: " + JSON.stringify(prods));  //Se publica los productos ingresados en sistema para la venta. 


//Inicio de simulador Carrito de compras
alert("Carrito de compras... darle aceptar para continuar");

   alert("Has ingresado a comprar");


let opcion= parseInt(prompt("Escoger producto " + producto1.codigo + " " + producto1.descripcion + " - " + producto2.codigo + " " + producto2.descripcion + " - " + producto3.codigo + " " + producto3.descripcion + " - " + producto4.codigo + " " + producto4.descripcion + " - " + producto5.codigo + " " + producto5.descripcion));  
    producto();
    let pregunta = prompt("¿Quiere ingresar otra compra: si o no ");
    if(pregunta === "si"){
        alert("Volver a cargar la pagina");
    }else if(pregunta === "no"){
        alert("Se cierra carrito de compras");
    }