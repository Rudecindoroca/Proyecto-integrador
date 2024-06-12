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
        let recomendados = document.querySelector('.Recomendados');
        let ProductosPopulares = document.querySelector('.Productos');
        let PrendasPopulares = document.querySelector('.Prendas');

        let allRecomendados = '';
        let allProductosPopulares = '';
        let allPrendasPopulares = '';
        
        let contadorDePrendas = 0;
        let contadorDePopulares = 0;
        let contadorDeRecomendados = 0;





        for (let i = 0; i < arrayDeProductos.length; i++) {

            if ((arrayDeProductos[i].category == `men's clothing`|| arrayDeProductos[i].category == `women's clothing`) && (contadorDePrendas < 4)){
                allPrendasPopulares += `<div class ="productov">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p>Name: ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        <a href="detalle.html?id=${arrayDeProductos[i].id}">Ver detalle</a>
                
                            
                                      </div>`;
                contadorDePrendas++;
            }else if ((arrayDeProductos[i].category == `jewelery`) && (contadorDePopulares < 4)) {
                 allProductosPopulares += `<div class ="productov">
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p>Name: ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        <a href="detalle.html?id=${arrayDeProductos[i].id}">Ver detalle</a>
                                    </div>`;
                contadorDePopulares++; 

            

            }else if ((arrayDeProductos[i].category == `electronics`) && ( contadorDeRecomendados < 4)) {
                allRecomendados += `<div class ="productov" >
                                        <img src=${arrayDeProductos[i].image} alt='${arrayDeProductos[i].title}' />
                                        <p>Name: ${arrayDeProductos[i].title}</p>
                                        <p>Category: ${arrayDeProductos[i].category}</p>
                                        <p>Price: $${arrayDeProductos[i].price}</p>
                                        <a href="detalle.html?id=${arrayDeProductos[i].id}">Ver detalle</a>
                                    </div>`;
                contadorDeRecomendados++;
            }

        }

        
        // Corregir el nombre del elemento section a section
        recomendados.innerHTML = allRecomendados;
        ProductosPopulares.innerHTML = allProductosPopulares;
        PrendasPopulares.innerHTML = allPrendasPopulares;

    })
    .catch(function(e) {
        console.log(e);
    });
