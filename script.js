/*
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */


/*
Strict mode makes several changes to normal JavaScript semantics:

Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.
 */
"use strict";

//Click
let demoButton = document.getElementById("demo-btn");
demoButton.addEventListener("click", changeImage);

/**
 * changeImage - Change the image src of the pokeball to mystery.gif
 */
function changeImage() {
  let pokeballImg = document.getElementById("pokeball");
  pokeballImg.src = "img/mystery.gif";
}


