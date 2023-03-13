const boton = document.getElementById('Boton_comentarios');
const seccion_comentarios = document.getElementById('zona_c');
const seccion_footer = document.getElementById('zona_f');

boton.addEventListener('click',() => 
{
    if (seccion_comentarios.style.display == 'none'){
    	seccion_comentarios.style.display = 'grid';
        
        seccion_footer.style.gridRow = 6;        
    }
  else{
    seccion_comentarios.style.display = 'none';
    //Cambiamos la disposicion para dejar el footer en su posicion
    seccion_footer.style.gridRow = 5;      
  }
}
);