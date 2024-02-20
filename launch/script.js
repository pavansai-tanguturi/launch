const showTime = () =>
{
	var curtain = document.getElementById("curtain");
	curtain.className = "open";
	
	var scene = document.getElementById("scene");
	scene.className = "expand";
	
	var starter = document.getElementById("starter");
	starter.className = "fade-out";
	
	setTimeout(() => {
        starter.style.display = 'none';
    }, 100);
}