document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

function navegacionFija(){

    const barra = document.querySelector('.header')

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
    });
    

    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal');
    //pasar el elemento como unico para actuar sobre ellos
    enlaces.forEach( function( enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            
            // scroll lento
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria () {
    const galeria = document.querySelector('.galeria-imagenes'); //nombre de la clase de las etiquetas en las que queremos trabajar

    // Sacamos las imagenes de la capeta con un for
    for( let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');  //se crea img en el html
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; // asignar un atributo personalizado a la etiqueta

        // console.log(imagen); -> <img src="build/img/thumb/1.webp">


        //Anadir la funcion mostrar imagen
        imagen.onclick = mostrarImagen;
        
        // crear etiquetas li
        const lista = document.createElement('LI'); 
        lista.appendChild(imagen); // agregar estructura de img a etiq li

        galeria.appendChild(lista); //agregar li a galeria
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);

    // generar imagen grande
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


    // Boton para cerra la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // cuando se da en cualquier parte cerrar imagen
    overlay.onclick = function () {
        overlay.remove();
        // poder hacer scroll cundo se cierra
        body.classList.remove('fijar-body');
        
    }

    // cerrar imagen con boton
    cerrarImagen.onclick = function () {
        overlay.remove();
        // poder hacer scroll cundo se cierra
        body.classList.remove('fijar-body');

    }

    // anadir simbolo de cerrar imagen
    overlay.appendChild(cerrarImagen);

}