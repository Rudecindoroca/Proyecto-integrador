function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let ProductoId = getQueryParam('id');


if (ProductoId) {
    let url = `https://fakestoreapi.com/products/${ProductoId}`;

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);

            
         

            let fotoProducto = document.querySelector('.foto');
            let textoProducto = document.querySelector('.texto-producto');
            let titulo = document.querySelector('.titulo')
            let informacionProducto = document.querySelector(`.informacion`)
            let precio = document.querySelector(`.precio`)

          

            fotoProducto.src =data.image;
            titulo.textContent =data.title
            informacionProducto.textContent = data.description
            precio.textContent='$'+data.price




        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}

// creo un array vacio para ir completando con los datos que vas agregando
let carrito = [];
//Recupero el storage
let recuperoStorage = localStorage.getItem('cartItems');
//Veo si hay algo en el storage
if(recuperoStorage != null){
    // Hago parse
    let recuParse = JSON.parse(recuperoStorage)
    carrito = recuParse

}



let agregar = document.querySelector(`.agregar-carrito`);

agregar.addEventListener(`click`, function(e) {

    e.preventDefault()
    carrito.push(ProductoId)
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem('cartItems', carritoString)
  

    alert('Producto agregado al carrito')
    console.log("carrito:", carrito)
    console.log("localstorage: ", localStorage)

})





