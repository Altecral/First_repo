"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-05

      Project to create a Concentration game with flipping tiles
      Author: Alejandro Manrique
      Date:   23/03/05 

      Filename: project05-05.js
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration)



// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = 0; i <= allTiles.length; i++) {
      
      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length*Math.random());
      
      // Randomly insert a tile before the current tile in the loop
      board.insert(board.children[i], board.children[randomIndex]);      
   }
}


// Function that sets up the game play
function playConcentration() {
   let tilesFlipped = 0;
   let firstFlipped;
   let secondFlipped;

   for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].addEventListener("click", function() {
         if (this.lastElementChild.className === "back") {
            tilesFlipped++;
            
            if (tilesFlipped === 1) {
               firstFlipped = this;
               firstFlipped.appendChild(firstFlipped.firstElementChild);
            } else if (tilesFlipped === 2) {
               secondFlipped = this;
               secondFlipped.appendChild(secondFlipped.firstElementChild);
               
               if (firstFlipped.lastElementChild.src === secondFlipped.lastElementChild.src) {
                  tilesFlipped = 0;
               } else {
                  let timeID = window.setTimeout(flipBack, 1000);
               }
            }
         }
      });
   }
}

function flipBack() {
   if (!(firstFlipped.lastElementChild.src === secondFlipped.lastElementChild.src)) {
      firstFlipped.removeChild(firstFlipped.firstElementChild);
      secondFlipped.removeChild(secondFlipped.firstElementChild);
   }
   tilesFlipped = 0;
}


