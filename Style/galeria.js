document.addEventListener('DOMContentLoaded', function () {
  const images = [
    '../Media/Ejemplos/E1.jpg',
    '../Media/Ejemplos/E2.jpg',
    '../Media/Ejemplos/E3.jpg',
    '../Media/Ejemplos/E4.png',
    '../Media/Ejemplos/E5.png',
    '../Media/Ejemplos/E6.jpg',
    '../Media/Ejemplos/E7.jpg',
    '../Media/Ejemplos/E8.png',
    '../Media/Ejemplos/E9.jpg',
    '../Media/Ejemplos/E10.jpg',
    '../Media/Ejemplos/E11.png',
    '../Media/Ejemplos/E12.png'
  ];

  const gallery = document.getElementById('gallery');
  const prevButton = document.getElementById('boton-anterior');
  const nextButton = document.getElementById('boton-siguiente');

  let currentIndex = 0;
  const imagesPerPage = 1;

  function renderGallery() {
    gallery.innerHTML = '';
    const visibleImages = images.slice(currentIndex, currentIndex + imagesPerPage);
    visibleImages.forEach(src => {
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      const img = document.createElement('img');
      img.src = src;
      imageDiv.appendChild(img);
      gallery.appendChild(imageDiv);
    });
  }

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = images.length - 1; // Regresar a la última imagen si estás en la primera
    }
    renderGallery();
  });

  nextButton.addEventListener('click', function () {
    if (currentIndex + imagesPerPage < images.length) {
      currentIndex += 1;
    } else {
      currentIndex = 0; // Reiniciar a la primera imagen
    }
    renderGallery();
  });

  renderGallery();
});
