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
					<div class="title_feature"
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
		},
		addProject: function () {
			let project = {
				title: false,
				rooms: [
					{
						title: this.titleInput,
						image: this.imageInput,
						caption: this.captionInput,
					}
				]
			}
		}
	}
});


var projectOne = new Vue ({
	el: ".projectOne",
	data: {
		titleInput: "",
		imageInput: "",
		captionInput: "",
		project: {
			title: 'Main Room, North Wall',
			rooms: [
				{
					title: "Main Room, North Wall",
					image: './images/main-room-north-wall/main-room-north-wall.jpg',
					caption: 'Artwork info',
				},
				{
					title: "...Title",
					image: 'images/main-room-north-wall/BF903.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF141.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Title",
					image: './images/main-room-north-wall/BF534.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF909.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF53.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Title",
					image: './images/main-room-north-wall/BF20.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Title; 1886–1888.",
					image: 'images/main-room-north-wall/BF709.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Title",
					image: 'images/main-room-north-wall/BF65.jpg',
					caption: 'Artwork info',

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
					caption: 'Artwork info',
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF811.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF564.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/01.01.58.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF36.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/BF533.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Main Room, West Wall",
					image: './images/main-room-west-wall/BF359.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Georges Seurat; Models (Poseuses); 1886–1888.",
					image: 'images/main-room-west-wall/BF583.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne; The Card Players (Les Joueurs de cartes); 1890–1892.",
					image: 'images/main-room-west-wall/01.01.63.jpg',
					caption: 'Artwork info',

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
					caption: 'Artwork info',
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF934.jpg',
					caption: 'Artwork info',

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF701.jpg',
					caption: 'Artwork info',

				},
				{
					title: "...Title",
					image: './images/main-room-east-wall/BF807.jpg',
					caption: 'Artwork info',
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF895.jpg',
					caption: 'Artwork info',

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF1198.jpg',
					caption: 'Artwork info',

				},
				{
					title: "...Title",
					image: './images/main-room-east-wall/BF75.jpg',
					caption: 'Artwork info',
				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF6.jpg',
					caption: 'Artwork info',

				},
				{
					title: "...Title",
					image: 'images/main-room-east-wall/BF190.jpg',
					caption: 'Artwork info',

				}
			]
		}
	}
});

$(".carousel__cell").click(function(){
	$(this).toggleClass("next");
});




