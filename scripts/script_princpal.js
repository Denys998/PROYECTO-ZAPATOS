window.onload = function() {
    alert("Bienvenido a la página!");
  };

  document.addEventListener('DOMContentLoaded', function() {
    var botonesAgregar = document.querySelectorAll('.agregar-carrito');
    var listaCarrito = document.getElementById('lista-carrito');
    var totalElemento = document.getElementById('total');
    var total = 0;
    
    botonesAgregar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var nombre = boton.getAttribute('data-nombre');
            var precio = parseInt(boton.getAttribute('data-precio'));
            var cantidadInput = boton.previousElementSibling;
            var cantidad = parseInt(cantidadInput.value);
            
            if (cantidad > 0) {
                var subtotal = precio * cantidad;

                var item = document.createElement('li');
                item.textContent = `${cantidad} x ${nombre} - s/${subtotal}`;
                listaCarrito.appendChild(item);

                total += subtotal;
                totalElemento.textContent = total.toFixed(2);
            } else {
                alert("Por favor ingresa una cantidad válida");
            }
        });
    });
});

  