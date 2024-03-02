document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.art-image');

    images.forEach(image => {
        console.log(image.alt); 
    }); 
}); 