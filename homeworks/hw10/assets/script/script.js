// s1 outfit

/* the process: */
function dooks() {
	let numerous = document.getElementsByClassName("outfit");
	for (let i = 0; i < numerous.length; i++) {
		numerous[i].style.display = "none";
	}
	
}
let s1 = document.querySelector("#s1");



let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let s4 = document.querySelector("#s4");
let s5 = document.querySelector("#s5");



s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	
	/* 3. show #o1 outfit (set display to block)*/
	dooks();
	
	document.getElementById("o1").style.display = "block";
}


// s2 outfit
/* get #s2 outfit */
/* repeat process */

// s3 outfit
/* get #s3 outfit */
/* repeat process */

// s4 outfit
/* get #s4 outfit */
/* repeat process */
s2.onclick= function() {
	document.getElementById("body").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	
	/* 3. show #o1 outfit (set display to block)*/
	dooks();
	document.getElementById("o2").style.display = "block";
}


s3.onclick = function() {
	document.getElementById("body").style.display = "none";
	dooks();
	document.getElementById("o3").style.display = "block";
}

s4.onclick = function() {
	document.getElementById("body").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	
	/* 3. show #o1 outfit (set display to block)*/
	dooks();
	document.getElementById("o4").style.display = "block";
}


// s5 outfit
/* get #s5 outfit */
/* repeat process */
s5.onclick = function() {
	document.getElementById("body").style.display = "none";
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	
	/* 3. show #o1 outfit (set display to block)*/
	dooks();
	document.getElementById("o5").style.display = "block";
}


// strip outfit
let strip = document.getElementById("strip-button");
strip.onclick = function() {
	dooks();
	document.getElementById("body").style.display = "block";
}