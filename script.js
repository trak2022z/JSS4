/*
 * CSE 154
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked. Currently incomplete
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


//MouseEnter
let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);


//MouseOver
// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);
