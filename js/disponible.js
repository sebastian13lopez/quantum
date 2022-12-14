//alert();

function esDisponible(){
    Swal.fire(
        '¡Producto disponible!',
        'Puede proceder con la compra ;)',
        'success'
      )
}

function noEsDisponible(){
    Swal.fire(
        '¡Producto no disponible!',
        'Por el momento no contamos con este producto  :/',
        'error'
      )
}