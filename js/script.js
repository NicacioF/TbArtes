let currentIndex = 0;

function moveCarousel(direction) {
    const carouselIner = document.querySelector('.carrosel-inner');
    const item = document.querySelectorAll('.carrosel-item');
    const totalItem = item.length;

    currentIndex += direction;

    if(currentIndex< 0) {
        currentIndex = totalItem - 1;
    }
    else if (currentIndex >= totalItem){
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    carouselIner.style.transform = `translateX(${offset}%)`;
}