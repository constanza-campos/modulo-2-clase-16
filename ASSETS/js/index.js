//Validacion con JS puro
// const form = document.getElementById('form');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const nombre = document.getElementById('nombre').value;
//     const email = document.getElementById('email').value;
//     const asunto = document.getElementById('asunto').value;
//     const mensaje = document.getElementById('mensaje').value;
// 	const resultadoValidacion = document.getElementById('resultado-validacion');
// 	//Puedo ver los valores en la consola
//     console.log("Nombre:", nombre);
//     console.log("Email:", email);
// 	console.log("Asunto:", asunto);
//     console.log("Mensaje:", mensaje);

//     if (nombre ==="" || email === "" || mensaje === "" || asunto ==="") {

// 		resultadoValidacion.textContent = "Por favor, completa todos los campos del formulario.";

//         return;
//     } else {
// 		resultadoValidacion.textContent = "¡Mensaje enviado con éxito!";
//         form.reset();}
// });
$("form").ready(function () {
    $("form").on("submit", function (event) {
        if (!$("#nombre").val() || !$("#email").val() || !$("#asunto").val() || !$("#mensaje").val()) {
            alert("Por favor, completa todos los campos del formulario.");
            event.preventDefault();
            return;
        }
        else
        alert("Formulario enviado correctamente.");
        event.preventDefault();
        $("form")[0].reset();
    });
});

 $(document).ready(function () {
   $('nav a[href^="#"]').on('click', function (e) {
     e.preventDefault();

    let destino = $($(this).attr('href'));

    if (destino.length) {
      $('html, body').animate(
        {
          scrollTop: destino.offset().top  // Ajuste por altura del navbar
        },
        800 // velocidad del scroll (ms)
      );
 }
 });
});
