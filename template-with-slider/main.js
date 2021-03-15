var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch
	 
// Image List
images[0] = "img/1.jpg";
images[1] = "img/2.jpg";
images[2] = "img/3.jpg";
images[3] = "img/4.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;