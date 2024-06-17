// recipero localstorage 

let recuperoStorage = localStorage.getItem(`cartItems`);
console.log("localstorage: ", localStorage)
let mensaje = "Tu carrito esta vacio";
let lista = document.querySelector(`.Productos`)
let elementosCarrito = "";


//Veo si hay algo en el storage
if(recuperoStorage == null){
    // Hago parse
    
    let empty = document.querySelector(`.empty`);
    empty.innerText = mensaje;

} else {
    carrito =[];
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i <carrito.length; i++){
        const productoId = carrito[i];
        const url = `https://fakestoreapi.com/products/${productoId}`;
        //fetch 
        fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);
            elementosCarrito += `<div class ="productov">
                                    <img src=${data.image} alt='${data.title}'>
                                    <p>Nombre : ${data.title}</p>
                                    <p>Price: $${data.price}</p>
                
                                </div>`;

                                lista.innerHTML = elementosCarrito;


        })
        .catch(function(e){
            console.log(e);
        })
        var finalizarCompraLink = document.getElementById('finalizarCompra');

        finalizarCompraLink.addEventListener('click', function() {
            // Borrar todo el localStorage
            localStorage.clear();

        })



        
      









        
    }


}


