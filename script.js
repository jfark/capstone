var thePortfolio = Vue.component('the-portfolio', {
	props: ['project'],
	template: `
		<div>
			<div><h2>{{project.title}}</h2></div>
			<div class="carousel-nav-buttons">
				<button class="previous-button" v-on:click="previous"><img src="images/Left.png"></button>
				<button class="next-button" v-on:click="next"><img src="images/Right.png"></button>
			</div>
			<div class="carousel" ref="carousel">
				<div v-for="room in project.rooms" class="carousel__cell">
					<div class="title_feature">
						<div class="carousel_title">
							<span class="highlight">{{room.title}}</span>
						</div>
						<img v-bind:src="room.image" alt="title"/>
					</div>	
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
			var cellRange = 9;
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


var theModal = Vue.component ('the-modal', {
	props: ['project'],
	template: `
		<div>
			<div v-for="rooms in project" id="modalCard">
				<div class="title_feature">{{room.title}}</div>
					<img v-bind:src="room.image" alt="title"/>
				</div>	
			</div>
		</div>`,
});

var projectOne = new Vue ({
	el: ".projectOne",
	data: {
		project: {
			title: 'Main Room, North Wall',
			rooms: [
				{
					title: "Main Room, North Wall",
					image: './images/main-room-north-wall/main-room-north-wall.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "...Title",
					image: 'images/main-room-north-wall/BF903.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF141.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Title",
					image: './images/main-room-north-wall/BF534.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF909.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF53.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Title",
					image: './images/main-room-north-wall/BF20.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Title; 1886–1888.",
					image: 'images/main-room-north-wall/BF709.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF65.jpg',
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
			title: 'Main Room, West Wall',
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
					image: './images/main-room-west-wall/01.01.58.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF36.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF533.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/BF359.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF583.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/01.01.63.jpg',
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
			title: 'Main Room, East Wall',
			rooms: [
				{
					title: "Main Room, East Wall",
					image: './images/main-room-east-wall/main-room-east-wall.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF934.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF701.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "...Title",
					image: './images/main-room-east-wall/BF807.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF895.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF1198.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "...Title",
					image: './images/main-room-east-wall/BF75.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF6.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF190.jpg',
					caption: 'A "reader" system developed to showcase pairs of important literary voices, such as W.E.B. DuBois and James Baldwin. The design was conceived to highlight the differences and similarities in tone by prominently displaying the year published, and by revealing pull quotes in an interactive scrollable manner.',
					link: "https://jfarkas.studio.mcad.edu/typography/readerforwebFinal/",

				}
			]
		}
	}
});

$(".carousel__cell").click(function(){
	$(this).toggleClass("next");
});

var modalContainer = new Vue({
	el: '#modalCard',
	data: {
	    headerMessage: "Graphic & Web Design",
		introMessage: "I am currently completing a master's degree in graphic and web design via the Minneapolis College of Art and Design (MCAD). Some recent work:",
	  }
});



