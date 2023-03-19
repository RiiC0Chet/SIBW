const boton = document.getElementById('Boton_comentarios');

// Seccion del grid donde estan  los comentarios
const seccion_comentarios = document.getElementById('zona_c');

const seccion_footer = document.getElementById('zona_f');
const boton_comentarios = document.getElementById('boton_comentarios');

// parrafo donde se introducen los comentarios tras boton
const comentarios = document.getElementById('Parrafo_comentarios');

// Donde se introduce el comentario por teclado
const introductor_texto = document.getElementById('comentario');
const introductor_correo = document.getElementById('correo');
const introductor_nombre  = document.getElementById('nombre_comentario');

// creamos una variable de fecha
const fecha = new Date();

const palabrasProhibidas = ["zapato", "escalera"]; // vector de palabras prohibidas

// comprobamos si se eta metiendo palabras prohibidas y las quitamos
introductor_texto.addEventListener("input", function(event) {
  var texto = event.target.value; // obtenemos el texto introducido en la caja de comentarios
  palabrasProhibidas.forEach(palabra => {
    const expresionRegular = new RegExp(palabra, "gi");
    texto = texto.replace(expresionRegular, "*".repeat(palabra.length)); // reemplazamos la palabra por asteriscos
  });
  event.target.value = texto; // actualizamos el contenido de la caja de comentarios
});


// funcion con la que vamos a comprobar el correo
function validarCorreoElectronico(correo) {
  // Expresión regular para validar un correo electrónico
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Comprobamos si el correo cumple con la expresión regular
  if (expresionRegular.test(correo)) {
    return true;
  } else {
    return false;
  }
}

boton.addEventListener('click',() => 
{
    if (seccion_comentarios.style.display == 'none'){
    	seccion_comentarios.style.display = 'grid';
      comentarios.style.display = 'inline';
        seccion_footer.style.gridRow = 6;        
    }
  else{
    seccion_comentarios.style.display = 'none';
    comentarios.style.display = 'none';
    //Cambiamos la disposicion para dejar el footer en su posicion
    seccion_footer.style.gridRow = 5;      
  }
}
);

boton_comentarios.addEventListener('click',() => 
{
  // Comrpobamos primero antes que nada, que no esten vacios los campos
  if(introductor_correo.value == '' || introductor_correo.value == '' || introductor_correo.value == '' )
    alert('Tienes que introducir todos los campos para poder añadir el comentario');
  else if (!validarCorreoElectronico(introductor_correo.value))
    alert('¡Correo invalido!');
  else {
    var encabezado= new String();

    encabezado += introductor_nombre.value;
    encabezado += ': '; 

    encabezado += fecha.getDate();
    encabezado += '/';
    encabezado += fecha.getMonth()+1;
    encabezado += '/23';

    encabezado += ' | ';
    
    encabezado += fecha.getHours();
    encabezado += ':';
    encabezado += fecha.getMinutes();

    // le metemos negrita al encabezado con el nombre y las fechas
    comentarios.innerHTML += encabezado.bold();

    comentarios.innerHTML += '<br>';
    comentarios.innerHTML += introductor_texto.value;
    comentarios.innerHTML += '<br>';

  }

}

);