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
			<div class="carousel"
				<div class="carousel__cell">
					<div class="carousel_title">
						<p>{{cell.title}}</p>
					</div
					<div><img v-bind:src="cell.image" alt="title"/></div>
				</div>
			</div
		</div>`,
			
	data: function() {
		return {carousel: []}
	},
	/*methods: {
		newTab: function(url){
			window.open(url, "_blank");
		}
	}*/
});

var carouselCell = new Vue ({
	el: ".carouselOverall",
	data: {
		carousel: [
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
				image: 'images/14.jpg',
			},
			{
				title: "Room 1",
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
