
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');


thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    
    mainImage.src = thumbnail.src;

   
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.style.opacity = '1';
    }, 100); 
  });
});
