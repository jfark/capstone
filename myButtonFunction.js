var carousel = document.querySelector('.carouselCell');
var cells = carousel.querySelectorAll('.carouselNode');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;

export function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

nextButton: function(){
    selectedIndex++;
    rotateCarousel();
};
previousButton: function(){
    selectedIndex--;
    rotateCarousel();
};

