document.getElementsByTagName("h1")[0].style.fontSize = "4vw";
document.getElementsByTagName("h2")[0].style.fontSize = "2vw";
document.getElementsByTagName("h3")[0].style.fontSize = "2vw";


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
            let nombre =prompt("Escribe el nombre del producto:\n1-Ladrillo\n2-Cemento\n3-Cal\n4-Arena\n5-Piedra\n6-Montante\n7-Solera\n8-Masilla\n9-Placa de Yeso\n10-Cinta");
            if (nombre != "") {
                buscarProd(nombre);
            }else{
            alert("Ingrese un nombre de producto válido");
            }
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

function buscarProd(nombProd) {
    let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase().includes(nombProd.toLowerCase()));
    if (productoEncontrado !=undefined) {
        alert(`La tarea fue encontrada:\nNOMBRE:${productoEncontrado.nombre} \nMedidas: ${productoEncontrado.medida} \nMarca: ${productoEncontrado.marca} \nPrecio: ${productoEncontrado.precio}`);
    }else {
        alert("Producto no Encontrado")
    }
}