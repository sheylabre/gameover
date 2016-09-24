window.addEventListener("load",function(){
	var foto = document.getElementsByClassName("foto");

	for (var i=0; i<foto.length; i++) {
		foto[i].addEventListener("mouseover",function(e){
		e.preventDefault();
		cambioLogo(this);
		});

		foto[i].addEventListener("mouseout",function(){
		outColor(this);
		});

	}


	function cambioLogo(box){
		if ( box.dataset.numero == 0){
			box.style.backgroundImage="url(img/cynandmayra.jpg)";
			box.style.backgroundSize="cover";
			box.style.backgroundRepeat= "no-repeat"
			box.style.backgroundPositionX = "-30px";
		} else if(box.dataset.numero == 1){
			box.style.backgroundImage="url(img/lizandsheyla.jpg)";
			box.style.backgroundSize="cover";
			box.style.backgroundRepeat= "no-repeat";
			box.style.backgroundPositionX = "-40px";
		} else if (box.dataset.numero == 2) {
			box.style.backgroundImage="url(img/liliandale.jpg)";
			box.style.backgroundSize="cover";
			box.style.backgroundRepeat= "no-repeat"
			box.style.backgroundPositionX = "-70px";
		}
	}
	function outColor(box){
	//	box.style.backgroundColor= "orange";
		box.style.backgroundImage= null;
	}
});