/*--------Code from JF Portfolio-------*/

Vue.component ('the-portfolio', {
	props: ['project'],
	template: `
		<div class="carousel">
			<div class="carousel__cell"><p>{{project.title}}</p></div>
			<div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide1}}</span>
				</div>
				<img v-bind:src="project.image1" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide2}}</span>
				</div>
				<img v-bind:src="project.image2" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide3}}</span>
				</div>
				<img v-bind:src="project.image3" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide4}}</span>
				</div>
				<img v-bind:src="project.image4" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide5}}</span>
				</div>
				<img v-bind:src="project.image5" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide6}}</span>
				</div>
				<img v-bind:src="project.image6" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide7}}</span>
				</div>
				<img v-bind:src="project.image7" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide8}}</span>
				</div>
				<img v-bind:src="project.image8" alt="title"/>
			</div>
		    <div class="carousel__cell">
				<div class="carousel_title">
					<span class="highlight">{{project.slide9}}</span>
				</div>
				<img v-bind:src="project.image9" alt="title"/>
			</div>
			
		  </div>
		</div>

		<div class="carousel-options">
		    <label>
		      <input class="cells-range" type="range" min="3" max="15" value="9" />
		    </label>
			<div class="carousel-nav-buttons">
			    <button class="previous-button"></button>
			    <button class="next-button"></button>
			</div>
			    
			    <label class="orientation">
					Orientation:
			      <input type="radio" name="orientation" value="horizontal" checked />
			      horizontal
			    </label>
			    <label class="orientation">
			      <input type="radio" name="orientation" value="vertical" />
			      vertical
			    </label>
		</div>
					
		<div class="portfolioNode">
			<h3 class="nodeTitle">{{project.title}}</h3>
			<p class="nodeCaption">{{project.caption}}</p>
			<div class="nodeImageContainer">
				<div class="nodeImage"><img v-bind:src="project.image" alt="title"/></div>
			</div>
			<a class="nodeLink" href="#" v-if="project.link!==false" v-on:mouseover.prevent="newTab(project.link)">Link to Project</a>
		</div>`,
	data: function() {
		return {portfolio: []}
	},
	methods: {
		newTab: function(url){
			window.open(url, "_blank");
		}
	}
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 1",
				image: 'images/reader.png',
				image1: 'images/60.jpg',
				image2: 'images/33.jpg',
				image3: 'images/14.jpg',
				
				
			},
		]
	},
	
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall2",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 2",
				image: 'images/reader.png',
				image2: 'images/33.jpg',
				
			},
			
		]
	},
	
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall3",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 3",
				image: 'images/reader.png',
				image3: 'images/14.jpg',
				caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
				link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				
			},
			
		]
	},
	
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall4",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 4",
				image: 'images/reader.png',
				caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
				link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				
			},
			
		]
	},
	
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall5",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 5",
				image: 'images/reader.png',
				caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
				link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				
			},
			
		]
	},
	
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall6",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Room 6",
				image: 'images/reader.png',
				caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
				link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				
			},
			
		]
	},
	
});





/*--------Code from Perfect Wave Carousel Project-------*/

/*
var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

var cellsRange = document.querySelector('.cells-range');
cellsRange.addEventListener( 'change', changeCarousel );
cellsRange.addEventListener( 'input', changeCarousel );



function changeCarousel() {
  cellCount = cellsRange.value;
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

var orientationRadios = document.querySelectorAll('input[name="orientation"]');
( function() {
  for ( var i=0; i < orientationRadios.length; i++ ) {
    var radio = orientationRadios[i];
    radio.addEventListener( 'change', onOrientationChange );
  }
})();

function onOrientationChange() {
  var checkedRadio = document.querySelector('input[name="orientation"]:checked');
  isHorizontal = checkedRadio.value == 'horizontal';
  rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  changeCarousel();
}

// set initials
onOrientationChange();

/*--------Code from Vincent Humeau CSS 3D Demo-------*/
