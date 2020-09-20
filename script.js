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
			/*var cellRange = 8;*/
			var theta = 360 / cellCount;
			var cellSize = this.$refs.carousel.offsetWidth/cellCount;
			var radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
			var angle = theta * this.selectedIndex /* -1*/;
			this.$refs.carousel.style.transform = 'rotateY' + '(' + angle + 'deg) translateZ(' + radius + 'px) ';
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
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/main-room-west-wall.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF811.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF564.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/main-room-west-wall.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF811.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF564.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/main-room-west-wall.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF811.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF564.jpg',
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
