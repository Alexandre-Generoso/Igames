


const cat = localStorage.getItem('IdJogo');

fetch(`https://rawg.io/api/games/${cat}?token&key=3f790e1bc02c41f49c5ffb3cfbb0766e`)
	.then((res) => res.json())
		.then(data => {
			
			let str = ''
            
                const {name, background_image, rating, description, released, background_image_additional, ratings, metacritic_platforms} = data;
				    str = `
                    <h1 id="h1_info">${name}</h1>
                    <div class="row text-center">
                    <div id="carouselExampleControls" class="carrossel_img col-md-8 text-center carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="${background_image}" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${background_image_additional}" class="d-block w-100" alt="...">
                    </div>
    
                    </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
                    
                    <p id="titulo_descricao_info">Descricao:</p>
                    <p id="descricao">${description}</p>
                    <p id="rating">Rating: ${rating}</p>
                    <p id="rating">Comments: ${ratings[0].title}</p>

                    <p>Released: ${released}</p>
                  
                    
                    
                    `
                console.log(str);
				
			  
			
			document.getElementById('container-game').innerHTML = str;
		})




