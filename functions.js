    let form = document.getElementById('contact_form');
    

    form.addEventListener('submit', function(event) {
    alert('¡Muchas gracias por contactarme! Te responderé tan pronto como sea posible');
    form.reset();
    event.preventDefault();
   
    });