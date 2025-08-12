(function ($) {
    "use strict";
    if (!window.fetch) {
        alert('Tu navegador no soporta algunas funciones necesarias para enviar el formulario. Por favor, actualiza tu navegador.');
        return;
    }

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

// document.getElementById('invitacionForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Create an object to hold the form data
//     const formData = new FormData(this)
    
//     var JSONData = {};

//     // Iterate over form elements and add them to the formData object
//     for (var [k,v] of formData) {
//         JSONData[k] = v;
//     }
//     console.log(JSONData); // Log the formData object for debugging
//     // Convert the formData object to a JSON string
//     const jsonData = JSON.stringify(JSONData);

//     console.log(jsonData); // Log the JSON data for debugging

//     // Send the JSON data to the server using fetch
//     fetch('https://roci-jose.devxolotl.com/api/submit', {
//         method: 'POST',
//         //mode: 'no-cors',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: jsonData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         alert('¡Gracias por confirmar tu invitación! Nos vemos pronto.');
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });


window.addEventListener('load', function () {
    const audio = document.getElementById('pista');
    audio.play().catch(function(error) {
    console.warn('Autoplay falló:', error);
    });
});

document.getElementById('companions').addEventListener('change', function() {
    const selectedValue = this.value;
    const companionsList = document.getElementById('companionsList');
    companionsList.innerHTML = ''; // Clear previous entries
    if(selectedValue>0) {
       for(let i=0; i<selectedValue; i++) {
            const companionItem = document.createElement('input');
            companionItem.type = 'text';
            //companionItem.name = `companion${i+1}`;
            companionItem.placeholder = `Invitado ${i+1}`;
            companionItem.className = 'form-control bg-secondary border-0 py-4 px-3 companioname';
            companionItem.required = true;
            //companionItem.innerHTML = `<input type="text" name="companion${i+1}" placeholder="Invitado ${i+1}"  class="form-control bg-secondary border-0 py-4 px-3" required>`;
            companionsList.appendChild(companionItem);
        }
    }
});

document.getElementById('submitbtn').addEventListener('click', function() {
    const companionInputs = document.querySelectorAll('.companioname');
    const companionsNames = Array.from(companionInputs)
        .map(input => input.value.trim())
        .filter(val => val !== '')
        .join(',  ');
    console.log(companionsNames);

    const companinput = document.getElementById('companions_names');
    companinput.value = companionsNames;
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('invitacionForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var formData = new FormData(form);
            var JSONData = {};

            // Compatibilidad máxima usando forEach
            formData.forEach(function(value, key) {
                // Si ya existe la clave, convierte el valor en array
                if (Object.prototype.hasOwnProperty.call(JSONData, key)) {
                    if (!Array.isArray(JSONData[key])) {
                        JSONData[key] = [JSONData[key]];
                    }
                    JSONData[key].push(value);
                } else {
                    JSONData[key] = value;
                }
            });

            var jsonData = JSON.stringify(JSONData);

            fetch('https://roci-jose.devxolotl.com/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonData
            })
            .then(function(response) { return response.json(); })
            .then(function(data) {
                alert('¡Gracias por confirmar tu invitación! Nos vemos pronto.');
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        });
    }
});