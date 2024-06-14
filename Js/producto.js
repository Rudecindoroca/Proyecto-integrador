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

