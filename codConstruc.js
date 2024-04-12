function saludar() {
    let nombre1 = prompt("Ingresa tu nombre");
    alert("Buenas noches, " + nombre1);
}
saludar();

let opcion = parseInt(prompt("Elige la opcion a ejecutar:\n1- Mostrar lista de Productos\n2-Mostrar Productos por tipo de Construcción\n3- Buscar por Productos\n0- Salir"));

while (opcion != 0) {
    switch (opcion) {
        case 1:
            console.table(productos);
            
            break;
        case 2:
            let tipoConst = parseInt(prompt("Elige el Tipo de Construcción:\n1-Construcción Tradicional\n2-Construcción en Seco"));
            filtrarPorTipo(tipoConst);
            break;
        case 3:
            let porProd = parseInt(prompt("Elige el producto:\n1-Ladrillo\n2-Cemento\n3-Cal\n4-Arena\n5-Piedra\n6-Montante\n7-Solera\n8-Masilla\n9-Placa de Yeso\n10-Cinta"));
            mostrarPorProd(porProd);
        default:
            alert("Opción Invalida");
            break;
    }
    opcion = parseInt(prompt("Elige la opcion a ejecutar:\n1- Mostrar lista de Productos\n2-Mostrar Productos por tipo de Construcción\n3- Buscar por Productos\n0- Salir"));

}

function filtrarPorTipo(tipoConstruccion) {
    let tipoConst =[];
    if (tipoConstruccion ==1) {
        tipoConst = productos.filter(producto => producto.tipoConstruccion.toLowerCase() == "tradicional");
    }else if (tipoConstruccion){
        tipoConst = productos.filter(producto => producto.tipoConstruccion.toLowerCase() =="en seco" );
    }else{
        alert("Ingrese un valor válido");
    }
    console.table(tipoConst);
    }

    function mostrarPorProd(nombre) {
        let porProd = []; 
        if (nombre == 1) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "ladrillo");
        }else if (nombre == 2) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "cemento");
        }else if (nombre == 3) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "cal");
        }else if (nombre == 4) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "arena");
        }else if (nombre == 5) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "piedra");
        }else if (nombre == 6) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "montante");
        }else if (nombre == 7) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "solera");
        }else if (nombre == 8) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "masilla");
        }else if (nombre == 9) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "placa de yeso");
        }else if (nombre == 10) {
            porProd = productos.filter(producto => producto.nombre.toLowerCase()== "cinta"); 
        }else{
            alert("Ingrese un valor válido");
        }
        console.table(porProd);           
    }