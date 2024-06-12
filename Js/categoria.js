
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let categoria = getQueryParam('category');
console.log(categoria);

let recomendados = document.querySelector('.Recomendado');

if (categoria){
    let url = `https://fakestoreapi.com/products/category/${categoria}`;

    fetch (url)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);

            let arrayDeProductos = data;

            let allRecomendados = '';

            for (let i = 0; i < arrayDeProductos.length; i++) {
                allRecomendados += `<div class ="productov">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p>Name: ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        <a href="detalle.html?id=${arrayDeProductos[i].id}">Ver detalle</a>
                                    </div>`;
            }
            recomendados.innerHTML = allRecomendados;
        })
        .catch(function(error){
            console.log(error);
        });
}

    



    










