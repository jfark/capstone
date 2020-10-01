/*--------Code from JF Portfolio-------*/

/* for ref from HTML
			<div class="carouselOverall">
				<div class="carouselCell" v-cloak>
					<div is="the-carousel" 
					v-for="cell in carousel"
					v-bind:project="cell">
					</div>
				</div>
			</div>

*/

Vue.component ('the-whole-carousel',{
	props: ['whole-carousel'],
	template: `
		<div class="carousel-nav-buttons">
			<button">Previous Slide</button>
			<button>Next Slide</button>
		</div>
	`,
	data: function() {
		
	}
});

Vue.component ('the-carousel-elements', {
	props: ['cell'],
	template: `
		<div class="carouselNode">
			<div class="carousel">
				<div class="carousel__cell">
					<div class="carousel_title">
						<p>{{cell.title}}</p>
					</div>
					<div><img v-bind:src="cell.image" alt="title"/></div>
				</div>
			</div>
		</div>`,
			
	data: function() {
		return {carousel: []}
		//return {selectedIndex: 0}
	}
	/*methods: {
		rotateCarousel: function(){
			//var carousel = document.querySelector('.carouselCell');
			//var cells = carousel.querySelectorAll('.carouselNode');
			//var cellCount; cellCount set from cells-range input value
			var cells = this.carousel.length
			//var selectedIndex = 0;
			var cellWidth = this.carousel.offsetWidth;
			var cellHeight = this.carousel.offsetHeight;
			var radius, theta;
			var angle = theta * selectedIndex * -1;
			this.$refs.carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
		    rotateY + '(' + angle + 'deg)';
		},
		previous: function(){
			this.selectedIndex--;
			this.rotateCarousel();
		},
		next: function(){
			console.log("Hello world!");
			this.selectedIndex++;
			this.rotateCarousel();
		}

			/*function rotateCarousel() {
			  var angle = theta * selectedIndex * -1;
			  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
			    rotateFn + '(' + angle + 'deg)';
			}
		}
	}
	*/
});

var carouselCell = new Vue ({
	el: ".carouselOverall",
	data: {
		carousel: [
			{
				title: "First",
				image: 'images/14.jpg',
			},
			{
				title: "Second",
				image: 'images/33.jpg',
			},
			{
				title: "Third",
				image: 'images/14.jpg',
			},
			{
				title: "Fourth",
				image: 'images/14.jpg',
			},
			{
				title: "Fifth",
				image: 'images/14.jpg',
			},
			{
				title: "Sixth",
				image: 'images/14.jpg',
			},
			{
				title: "Seventh",
				image: 'images/14.jpg',
			},
			{
				title: "Eighth",
				image: 'images/14.jpg',
			},
			{
				title: "Ninth",
				image: 'images/14.jpg',
			},
		]
	},
	
});

/*var portfolioProjects = new Vue ({
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




/*--------Code from Vincent Humeau CSS 3D Demo-------*/
