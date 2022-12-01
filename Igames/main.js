





function loadGames(parametro, value){

	var urlGames = 'https://rawg.io/api/games?token&key=3f790e1bc02c41f49c5ffb3cfbb0766e'


	switch(parametro){
		case 'pages':
			urlGames = urlGames + '&page=' + value;
			break
		case 'search':
			urlGames+='&search=' + value;
			break
			
	}

	console.log(urlGames);

	fetch(urlGames)
		.then((res) => res.json())
			.then(data => {
				
				let str = ''
				
				
				for(let i = 3; i < data.results.length; i++){
					let jogo = data.results[i];
					str += `
					<div class="col">
					<div class="card shadow-sm">
					<img  width="100%" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" src="${jogo.background_image}">
		
					<div class="card-body bg-dark">
						<p class="card-text name_game_card text-center text-light">${jogo.name}</p>
						<p class="card-text text-center text-light">Data de lancamento: ${jogo.released}</p>
						<p class="card-text text-center text-light">Rating: ${jogo.rating}</p>
						<div class="d-flex justify-content-center align-items-center">
						<div class="btn-group">
							<button type="button" class="btn btn-md text-light bg-warning" onclick="pegarId(${jogo.id})">Mais detalhes</button>
						
						</div>
						</div>
					</div>
					</div>
				</div>



					`
				
				}
				document.getElementById('cards-container').innerHTML = str;

		})

		var urlCarrossel = 'https://rawg.io/api/games?token&key=3f790e1bc02c41f49c5ffb3cfbb0766e&genres=indie'

		fetch(urlGames)
		.then((res) => res.json())
			.then(data => {
				
				let strCarrossel = ''
				
				
				
					let jogo = data.results;
					strCarrossel += `
					<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
							<img src="${jogo[0].background_image}" style="max-height: 800px; class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<div class=" bg-dark mb-2 rounded bg-opacity-75 col-md-6 mx-auto">
								<h5>${jogo[0].name}</h5>
								<p>Released: ${jogo[0].released}</p>
								</div>
							</div>
							</div>
							<div class="carousel-item">
							<img src="${jogo[1].background_image}" style="max-height: 800px; class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
							<div class="bg-dark mb-2 rounded bg-opacity-75 col-md-6 mx-auto">
							<h5>${jogo[1].name}</h5>
							<p>Released: ${jogo[1].released}</p>
							</div>
							</div>
							</div>
							<div class="carousel-item">
							<img src="${jogo[2].background_image}" style="max-height: 800px;  class="d-block w-100 mw-100"  alt="...">
							<div class="carousel-caption d-none d-md-block">
							<div class="bg-dark mb-2 rounded bg-opacity-75 col-md-6 mx-auto" >
								<h5>${jogo[2].name}</h5>
								<p>Released: ${jogo[2].released}</p>
								</div>
							</div>
							</div>

							

						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>


					`
				
				
				document.getElementById('carousel_container_destaques').innerHTML = strCarrossel;

		})


			


		
		

}



function loadDevelopers(parametro, value){

var urlGames = `https://rawg.io/api/developers?token&key=3f790e1bc02c41f49c5ffb3cfbb0766e`
switch(parametro){
	case 'search':
		urlGames+='&search=' + value;
		break
	case 'pages':
		urlGames+='&page=' + value;
		break
}

fetch(urlGames)
	.then((res) => res.json())
		.then(data => {
			
			let str = ''
			
			for(let i = 0; i < data.results.length; i++){
				let developer = data.results[i];
				str += `
				<div class="col">
				<div class="card border border-warning">
				  <img  width="100%" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" src="${developer.image_background}">
	  
				  <div class="card-body bg-dark">
					<p class="card-text name_game_card text-center text-light">${developer.name}</p>
					<p class="card-text text-center text-light">Quantidade de jogos: ${developer.games_count}</p>
					<div class="d-flex justify-content-center align-items-center">
					  <div class="btn-group">
						
					
					  </div>
					  
					</div>
				  </div>
				</div>
			  </div>



				`
			  
			}
			document.getElementById('cards-container').innerHTML = str;

		})

		


		
		

}
function pegarId(id){
	localStorage.setItem('IdJogo', id);
	window.location.href = "detalhes.html"
}


function pagination(op){
	var currentPage = document.getElementById('currentPage').innerText;
	
	

	

	if(currentPage == null || currentPage == ''){
		currentPage = 1
	}
	console.log(currentPage)
	switch(op){
		case 'next':
			currentPage++
			
			
			
			
			break
		case 'last':
			if(currentPage < 2){
				currentPage = 1
			}else{
				currentPage--
			}
			break
		case 'load':
			currentPage = 1
			break
		
	}
	
	document.getElementById('currentPage').innerText = currentPage;
	document.getElementById('currentPage').value = currentPage;

	loadGames('pages', currentPage)
	

}


function paginationDevelopers(op){
	var currentPage = document.getElementById('currentPageDev').innerText;
	
	

	

	if(currentPage == null || currentPage == ''){
		currentPage = 1
	}
	console.log(currentPage)
	switch(op){
		case 'next':
			currentPage++
			
			
			
			
			break
		case 'last':
			if(currentPage < 2){
				currentPage = 1
			}else{
				currentPage--
			}
			break
		case 'load':
			currentPage = 1
			break
		
	}
	
	document.getElementById('currentPageDev').innerText = currentPage;
	document.getElementById('currentPageDev').value = currentPage;

	loadDevelopers('pages', currentPage)
	

}






