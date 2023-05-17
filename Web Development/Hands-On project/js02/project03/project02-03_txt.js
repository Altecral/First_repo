/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Alejandro 
      Date: 02/05 

      Filename: project02-03.js
 */
let square = document.getElementById("square");
let feedback = document.getElementById("feedback");

square.onmouseover = function() {
  feedback.innerHTML = "You're hovering over the square";
};

square.onmouseout = function(){
      feedback.innerHTML = "";
}

let triangle = document.getElementById("triangle");
let feedback2 = document.getElementById("feedback");

triangle.onmouseover = function() {
  feedback2.innerHTML = "You're hovering over the triangle";
};

triangle.onmouseout = function(){
      feedback2.innerHTML = "";
}

let circle = document.getElementById("circle");
let feedback3 = document.getElementById("feedback");

circle.onmouseover = function() {
  feedback3.innerHTML = "You're hovering over the circle";
};

circle.onmouseout = function(){
      feedback3.innerHTML = "";
}