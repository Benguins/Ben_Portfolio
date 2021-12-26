const carouselSlide = document.querySelector('.section03_Work01');
const carouselImages = document.querySelectorAll('.section03_Work01 img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth; // This gets us our img width for element 0

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function section03_Work01_Next (){
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
function section03_Work01_Previous (){
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'last_Img'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'first_Img'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});