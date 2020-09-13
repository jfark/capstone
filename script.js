/*--------Code from JF Portfolio-------*/

Vue.component ('the-portfolio', {
	props: ['project'],
	template: `
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
				title: "DuBois + Baldwin Reader / MCAD Spring 2019: Typography",
				image: 'images/reader.png',
				caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
				link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				
			},
			{
				title: "Future Shuttle Album Art",
				image: 'images/fs.jpg',
				caption: "Design of album artwork and cassette tape shell.",
				link: "https://lillernetapes.bandcamp.com/album/won-goes",
				
			},
			{
				title: "Digital Illustration / Animation",
				image: 'images/plantsfull.gif',
				caption: "Drawn and designed during an Adobe Illustrator course at the Parsons School of Design.",
				link: false,
			},
			{
				title: "Hand & Digitally-Drawn Typeface / MCAD Spring 2019: Typography",
				image: 'images/typeface.png',
				caption: "Challenged to create a full, uppercase typeface using only a ruler, I drew the initial iteration of this typeface using the markings of a bathroom sink on an architect's ruler.",
				link: false,
				
			},
			{
				title: '"My Practice" / MCAD Fall 2018: Design in Context',
				image: 'images/practice.png',
				caption: 'Prompted to define my design practice, I created a website inspired by the tactile experience of paging through pop-up books as a child. Charged with incorporating readings of design history and theory, I paid close attention to Jessica Helfandâ€™s â€œDematerialization of Screen Spaceâ€ while completing this project.',
				link: "https://jfarkas.studio.mcad.edu/dic/finalproject/",
				
			},
			{
				title: "Annotated Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster2.png',
				caption: "An interactive poster with a hover effect that causes a subtle alternating focus on text views. Footnotes link out to related information.",
				link: "https://jfarkas.studio.mcad.edu/dic/poster2/",
				
			},
			{
				title: "Isabella Stuart Gardner Homepage Recreation / MCAD Fall 2018: Web Development",
				image: 'images/isg.png',
				caption: "Asked to recreate an admired web page using HTML & CSS only, I chose the Isabella Stuart Gardner Museum homepage, and designed it for a viewport width of approximately 1220px.",
				link: "https://jfarkas.studio.mcad.edu/webdev/final-project/",
				
			},
			{
				title: "Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster1.png',
				caption: "An early poster assignment for Design in Context addressing readings related to graphic design history and theory.",
				link: false,
				
			},
			{
				title: "Future Shuttle Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/fssite.png',
				caption: "A small multi-page band website built from scratch using HTML & CSS.",
				link: "https://jfarkas.studio.mcad.edu/webdev/wk10/assign10/",
				
			},
			{
				title: "Oberlin College Press Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/ocpress.png',
				caption: "An early assignment while learning HTML/CSS positioningâ€”we were asked to re-design a web page of our choice.",
				link: "https://jfarkas.studio.mcad.edu/webdev/wk9/assign9/",
				
			},
		]
	},
	methods: {
			addProject: function(){
				let project = {
					title: this.titleInput,
					image: this.imageInput,
					caption: this.captionInput,
					link: false,
				};
				this.portfolio.unshift(project);
				this.titleInput = this.imageInput = this.captionInput = "";
			}
		}
});

$(".portfolioNode").click(function () {
              $(this).toggleClass("next");
          });
		  
$(".nodeLink").mouseover(function () {
            $(this).click();
        });

var myAppSecond = new Vue({
  el: '#myTrick',
  data: {
    headerMessage: "Graphic & Web Design",
	  introMessage: "I am currently completing a master's degree in graphic and web design via the Minneapolis College of Art and Design (MCAD). Some recent work:",
  },
  methods: {
    reverseMessage: function () {
      this.headerMessage = this.headerMessage.split('').reverse().join('')
    }
  }
});


/*--------Code from Perfect Wave Carousel Project-------*/

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
