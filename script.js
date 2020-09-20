Vue.component('the-portfolio', {
	props: ['project'],
	template: `
		<div>
			<div><p>{{project.title}}</p></div>
			<div class="carousel-nav-buttons">
				<button class="previous-button" v-on:click="previous">Previous Slide</button>
				<button class="next-button" v-on:click="next">Next Slide</button>
			</div>
			<div class="carousel" ref="carousel">
				<div v-for="room in project.rooms" class="carousel__cell">
					<div class="carousel_title">
						<span class="highlight">{{room.title}}</span>
					</div>
					<img v-bind:src="room.image" alt="title"/>	
				</div>
			</div>
		</div>
		`,
	data: function() {
		return {
			selectedIndex: 0
		}
	},
	methods: {
		rotateCarousel: function() {
			var cellCount = this.project.rooms.length;
			var cellRange = 8;
			var theta = 360 / cellRange;
			var cellSize = this.$refs.carousel.offsetWidth/cellCount;
			var radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellRange ) );
			var angle = theta * this.selectedIndex * -1;
			this.$refs.carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
				'rotateY' + '(' + angle + 'deg)';
		},
		next: function() {
			this.selectedIndex++;
			this.rotateCarousel();
		},
		previous: function() {
			this.selectedIndex--;
			this.rotateCarousel();
		}
	}
});

var projectOne = new Vue ({
	el: ".projectOne",
	data: {
		project: {
			title: 'Project 1',
			rooms: [
				{
					title: "KEVIN Room",
					image: './images/14.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Room 2",
					image: 'images/14.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Room 3",
					image: 'images/14.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				}
			]
		}
	}
});

var projectTwo = new Vue ({
	el: ".projectTwo",
	data: {
		project: {
			title: 'Project 2',
			rooms: [
				{
					title: "Room 1",
					image: './images/33.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Room 2",
					image: 'images/33.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Room 3",
					image: 'images/33.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				}
			]
		}
	}
});

var projectThree = new Vue ({
	el: ".projectThree",
	data: {
		project: {
			title: 'Project 3',
			rooms: [
				{
					title: "Room 1",
					image: './images/60.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Room 2",
					image: 'images/60.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Room 3",
					image: 'images/60.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				}
			]
		}
	}
});
