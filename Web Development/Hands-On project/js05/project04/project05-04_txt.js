"use strict";
/* JavaScript 7th Edition
Chapter 5
Project 05-04

css

  Project to display footnotes in a popup window
  Author: Alejandro Manrique
  Date:   23/03/05 

  Filename: project05-04.js

*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// Loop through the phrases list and add click event handlers to each element
for (let i = 0; i < phrases.length; i++) {
phrases[i].onclick = function() {

javascript

// Create phrase element
let phrase = document.createElement("h1");
phrase.textContent = this.textContent;

// Create footnote element
let footnote = document.createElement("p");
footnote.textContent = footnotes[i];
footnote.style.fontStyle = "italic";
footnote.style.fontSize = "1.2em";

// Create close button element
let closeButton = document.createElement("input");
closeButton.type = "button";
closeButton.value = "Close Footnote";
closeButton.style.display = "block";
closeButton.style.margin = "10px auto";

// Create popup window
let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");

// Apply styles to popup window body
popup.document.body.style.backgroundColor = "ivory";
popup.document.body.style.fontSize = "16px";
popup.document.body.style.padding = "10px";

// Add elements to popup window body
popup.document.body.appendChild(phrase);
popup.document.body.appendChild(footnote);
popup.document.body.appendChild(closeButton);

// Add onclick event handler to close button
closeButton.onclick = function() {
  popup.close();
};

};
}