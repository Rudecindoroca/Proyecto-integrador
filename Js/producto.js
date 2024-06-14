function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let characterId = getQueryParam('id');


if (characterId) {
    let url = 'https://fakestoreapi.com/products';

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
           
            console.log(data);

            
            let producto = document.querySelector('.texto-producto')
            let photo = document.querySelector(".foto-principal")

            
            characterName.textContent = data.name;
            characterStatus.textContent += data.status;
            characterSpecies.textContent += data.species;
            characterImage.src = data.image;
            characterImage.alt = data.name;

            





            <h2>Apple IPhone 13 (128 GB) - Azul medianoche</h2>
                <ul>
                    <li>Memoria RAM: 4 GB</li>
                    <li> Super Retina XDR de 6.1 pulgadas.(1)</li>
                    <li>Modo Cine con baja profundidad de campo y cambios de enfoque automáticos en tus videos.</li>
                    <li>Sistema avanzado de dos cámaras de 12 MP (gran angular y ultra gran angular) con Estilos Fotográficos, HDR Inteligente 4, modo Noche y grabación de video 4K HDR en Dolby Vision.</li>
                    <li>Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision.</li>
                    <li>Chip A15 Bionic para un rendimiento fuera de serie.</li>
                    <li>Hasta 19 horas de reproducción de video.</li>
                    <li>Diseño resistente con Ceramic Shield.</li>
                    <li>Resistencia al agua IP68, líder en la industria.</li>
                    <li>iOS 15 con nuevas funcionalidades para aprovechar tu iPhone al máximo.</li>
                    <li>Compatibilidad con accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida.</li>
                </ul>
                <p>U$D 900</p>
                <a href="./cart.html" class="agregar-carrito">Agregar a tu carrito</a>
        })
        .catch(function(e) {
            console.log(e);
        });
} else {
    console.error('No hay un id en la URL');
}


