const $ = e => document.querySelector(e);

function transitionElements() {

	// animacao do titulo do header
	setTimeout(() => {
		$('.content-header p').classList.add('active');
		setTimeout(() => {
			$('.content-header p').style.opacity = '1';
		},2000)
	}, 1000);

	// animacao do subtitulo do header
	setTimeout(() => {
		$('.content-header h1').classList.add('active');
		setTimeout(() => {
			$('.content-header h1').style.opacity = '1';
		}, 2000)	
	}, 2000);

	// animacao do botao do header
	setTimeout(() => {
		$('.content-header button').classList.add('active');
		setTimeout(() => {
			$('.content-header button').style.opacity = '1';
		}, 2000)	
	}, 2000);


	/* --------------- Animacao dos cards --------------------------*/	

	const card = document.querySelectorAll('.video-content');

	setTimeout(() => {
		card.forEach(elem => {
			elem.classList.add('active-video');
			setTimeout(() => {
				elem.style.opacity = "1";
			}, 2000)
		})
	}, 2000)
	
}

transitionElements()