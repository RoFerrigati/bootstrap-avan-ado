// Exemplo de interação com o carousel usando JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
        interval: 2000, // Troca de imagem a cada 2 segundos
        wrap: true
    });
});