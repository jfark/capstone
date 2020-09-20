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


Vue.component ('the-carousel', {
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
	},
	
	/*import myButtonFunction from "myButtonFunction.js";
	methods: {
		nextButton: function() {
			const first = this.carousel.shift() this.carousel = this.carousel.concat(first)
		},
		previousButton: function() {
			const last = this.carousel.pop() this.carousel = [last].concat(this.carousel)
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
				id: '1',
			},
			{
				title: "Second",
				image: 'images/33.jpg',
				id: '2',
			},
			{
				title: "Third",
				image: 'images/14.jpg',
				id: '3',
			},
			{
				title: "Fourth",
				image: 'images/14.jpg',
				id: '4',
			},
			{
				title: "Fifth",
				image: 'images/14.jpg',
				id: '5',
			},
			{
				title: "Sixth",
				image: 'images/14.jpg',
				id: '6',
			},
			{
				title: "Seventh",
				image: 'images/14.jpg',
				id: '7',
			},
			{
				title: "Eighth",
				image: 'images/14.jpg',
				id: '8',
			},
			{
				title: "Ninth",
				image: 'images/14.jpg',
				id: '9',
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
