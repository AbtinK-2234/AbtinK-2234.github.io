// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id

}




//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	unhideLightbox("doggo1")
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox

}
document.querySelector("#picture-1").onclick = unhideLightbox1;

// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1


// TODO: do the same for #picture-2, write a function and then make it run on click

function unhideLightbox2() {
	unhideLightbox("doggo2");
}

document.querySelector("#picture-2").onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox("doggo3");
}

document.querySelector("#picture-3").onclick = unhideLightbox3;




// TODO: do the same for #picture-3, write a function and then make it run on click






// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
