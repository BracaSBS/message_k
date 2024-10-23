// Seleccionar las imágenes y el modal
const images = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('imgModal');
const captionText = document.querySelector('.caption');
const closeModal = document.querySelector('.close');

// Al hacer clic en la imagen, abrir modal
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
    });
});

// Cerrar el modal
closeModal.onclick = function() { 
    modal.style.display = "none";
}
