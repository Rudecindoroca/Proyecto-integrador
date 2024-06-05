let url = 'https://fakestoreapi.com/products';

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // Acá ya tenemos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        
        // Asignar directamente data al arrayDeProductos
        let arrayDeProductos = data;

        // El elemento HTML donde quiero hacer la modificación 
        let section = document.querySelector('.Recomendados');
        let allProductos = [];

        for (let i = 0; i < arrayDeProductos.length; i++) {
            // Dentro del for voy acumulando en la variable una estructura HTML por cada producto del array.
            allProductos += `<div class="productov">
                                <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                <p>Name: ${arrayDeProductos[i].title}</p>
                                <p>Category: ${arrayDeProductos[i].category}</p>
                                <p>Price: $${arrayDeProductos[i].price}</p>
                                <a href="detalle.html?id=${arrayDeProductos[i].id}">Ver detalle</a>
                            </div>`;
        }

        // Corregir el nombre del elemento section a section
        section.innerHTML = allProductos;

    })
    .catch(function(e) {
        console.log(e);
    });










