// Agregar un evento de cambio al menú desplegable
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.addEventListener('change', function() {
  // Obtener el valor de la opción seleccionada
  const selectedOption = this.value;

  // Si se seleccionó una opción, desplazarse a la sección correspondiente
  if (selectedOption) {
    window.location.href = selectedOption;
  }
});
