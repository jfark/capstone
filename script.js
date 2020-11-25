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
					title: "Pierre-Auguste Renoir. Reclining Nude (La Source), c.1895.",
					image: 'images/main-room-north-wall/BF903.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne. Madame Cézanne with Green Hat (Madame Cézanne au chapeau vert), 1891–1892.",
					image: 'images/main-room-north-wall/BF141.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne. Gardener (Le Jardinier), c. 1885 (possibly later).",
					image: './images/main-room-north-wall/BF534.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Paul Cézanne. The Bellevue Plain; The Red Earth (La Plaine de Bellevue; Les Terres rouges), 1890–1892.",
					image: 'images/main-room-north-wall/BF909.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Pierre-Auguste Renoir. Girl with Basket of Fish (Pêcheuse de poissons), c. 1890.",
					image: 'images/main-room-north-wall/BF53.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne. Boy in a Red Vest (Le Garçon au gilet rouge), 1888–1890.",
					image: './images/main-room-north-wall/BF20.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Pierre-Auguste Renoir. Bathing Group, 1916.",
					image: 'images/main-room-north-wall/BF709.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Pierre-Auguste Renoir. Girl with Basket of Oranges (Marchande d'oranges), c. 1890.",
					image: 'images/main-room-north-wall/BF65.jpg',
					caption: 'Artwork info',

				}
			]
		}
	},
	methods: {
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
			};
			this.rooms.unshift(project);
			this.titleInput = this.imageInput = this.captionInput = "";
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
					title: "Georges Seurat. Models (Poseuses), 1886–1888.",
					image: 'images/main-room-west-wall/BF811.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne. The Card Players (Les Joueurs de cartes), 1890–1892.",
					image: 'images/main-room-west-wall/BF564.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Unidentified Maker. Door Hinge, 18th century.",
					image: './images/main-room-west-wall/01.01.58.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Paul Cézanne. Leda and the Swan (Léda au cygne), c. 1880 (possibly later).",
					image: 'images/main-room-west-wall/BF36.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Jean-Baptiste-Camille Corot. Mme de Larochenoire, Wife of the Painter (Mme de Larochenoire, femme du peintre), c. 1870.",
					image: 'images/main-room-west-wall/BF533.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Maurice Brazil Prendergast. The Beach 'No. 3', c. 1914–1915.",
					image: './images/main-room-west-wall/BF359.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Henri Rousseau. View of the Quai d' Asnières (Vue du quai d'Asnières); also called The Canal and Landscape with Tree Trunks (Le Canal and Paysage avec troncs d'arbre), between April and December 1900.",
					image: 'images/main-room-west-wall/BF583.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Unidentified Maker. Keyhole Escutcheon, 16th century.",
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
					title: "Paul Cézanne. The Large Bathers (Les Grandes baigneuses), 1895–1906.",
					image: 'images/main-room-east-wall/BF934.jpg',
					caption: 'Artwork info',

				},
				{
					title: "William James Glackens. The Raft, 1915.",
					image: 'images/main-room-east-wall/BF701.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Tintoretto (Jacopo Robusti). Two Apostles, Late 16th century.",
					image: './images/main-room-east-wall/BF807.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Jean-Baptiste-Camille Corot. Mme Lemaistre, née Blanche Sennegon, Niece of Corot (Mme Lemaistre, née Blanche Sennegon, nièce de Corot), 1831.",
					image: 'images/main-room-east-wall/BF895.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Jean-Siméon Chardin. The Copper Water Urn, 1732–1740.",
					image: 'images/main-room-east-wall/BF1198.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Honoré Daumier. The Hypochondriac (Le Malade imaginaire), 1860–1863.",
					image: './images/main-room-east-wall/BF75.jpg',
					caption: 'Artwork info',
				},
				{
					title: "Pierre-Auguste Renoir. Environs of Berneval, 1879.",
					image: 'images/main-room-east-wall/BF6.jpg',
					caption: 'Artwork info',

				},
				{
					title: "Paul Cézanne. The Large Pear (La Grosse poire), 1895–1898.",
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




