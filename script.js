document.addEventListener('DOMContentLoaded', function() {
  // Acordeón para temas principales
  document.querySelectorAll('.tema-titulo').forEach(titulo => {
    titulo.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('activo');
      const subtemas = this.nextElementSibling;
      subtemas.style.maxHeight = this.classList.contains('activo') 
        ? subtemas.scrollHeight + "px" 
        : "0";
    });
  });

  // Acordeón para subtemas
  document.querySelectorAll('.subtema-titulo').forEach(subtitulo => {
    subtitulo.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('activo');
      const contenido = this.nextElementSibling;
      contenido.style.display = this.classList.contains('activo') 
        ? 'block' 
        : 'none';
    });
  });
});
function mostrarSubtema(id) {
  const elemento = document.getElementById(id);
  const todosSubtemas = document.querySelectorAll('.contenido-subtema');
  const todosLinks = document.querySelectorAll('.subtema-link');
  
  // Cerrar todos primero
  todosSubtemas.forEach(subtema => {
    if (subtema.id !== id) {
      subtema.style.display = 'none';
      // Remover clase activa de otros subtemas
      const linkAsociado = subtema.previousElementSibling;
      if (linkAsociado) linkAsociado.classList.remove('subtema-activo');
    }
  });
  
  // Alternar el seleccionado
  if (elemento.style.display === 'block') {
    elemento.style.display = 'none';
    event.currentTarget.classList.remove('subtema-activo');
  } else {
    elemento.style.display = 'block';
    event.currentTarget.classList.add('subtema-activo');
    // Hacer scroll suave hasta el subtema
    elemento.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
