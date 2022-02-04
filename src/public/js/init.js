jQuery(document).ready(function($) {

    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4, 6, 8, 10];

    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function() {

        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 3000, function() {
            $(this).remove()
        });


    }, 350);

});

// Scroll Informacion

window.addEventListener('scroll', function() {
    let logotipo = document.getElementById('sec-2');
    let animacion = document.getElementById('animado');
    let palabras = document.getElementById('informacion');
    let posicionObj1 = logotipo.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight;

    if (posicionObj1 < tamañoDePantalla) {
        logotipo.style.animation = 'textoZ 3s ease-out';
        animacion.style.animation = 'mostrarIzq 3s ease-out';
        palabras.style.animation = 'mostrarDer 3s ease-out';
    }
});

// Scroll Services

window.addEventListener('scroll', function() {
    let picture1 = document.getElementById('foto1');
    let picture2 = document.getElementById('foto2');
    let picture3 = document.getElementById('foto3');
    let picture4 = document.getElementById('foto4');
    let picture5 = document.getElementById('foto5');
    let posicionObj3 = picture1.getBoundingClientRect().top;
    let tamañoDeWeb = window.innerHeight;

    if (posicionObj3 < tamañoDeWeb) {
        picture1.style.animation = 'mostrarArriba 2s ease-out';
        picture2.style.animation = 'mostrarArriba 1s ease-out';
        picture3.style.animation = 'mostrarArriba 2s ease-out';
        picture4.style.animation = 'mostrarArriba 1s ease-out';
        picture5.style.animation = 'mostrarArriba 3s ease-out';

    }
});

// Scroll Beneficios

window.addEventListener('scroll', function() {
    let zoomeado1 = document.getElementById('zoom1');
    let zoomeado2 = document.getElementById('zoom2');
    let zoomeado3 = document.getElementById('zoom3');
    let zoomeado4 = document.getElementById('zoom4');
    let zoomeado5 = document.getElementById('zoom5');
    let posicionObj3 = zoomeado1.getBoundingClientRect().top;
    let tamañoDeWeb = window.innerHeight;

    if (posicionObj3 < tamañoDeWeb) {
        zoomeado1.style.animation = 'textoZ 2.5s ease-out';
        zoomeado2.style.animation = 'textoZ 2.5s ease-out';
        zoomeado3.style.animation = 'textoZ 2.5s ease-out';
        zoomeado4.style.animation = 'textoZ 2.5s ease-out';
        zoomeado5.style.animation = 'textoZ 2.5s ease-out';

    }
});

$(document).ready(main);

var contador = 1;

function main() {
    $('.bt-menu').click(function() {


        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            $("#btnMenu").addClass("menu_bar_a_hover");
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
            $("#btnMenu").removeClass("menu_bar_a_hover");
        }
    });
};