/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: Alejandro Manrique
    Date: 01-29-2023  

    Filename: project01-04.js
*/

//define variables for home and work addresses
var homeStreet = "1 Main St."
var homeCity = "Sicilia."
var homeState = "MA."
var homeCode = "02103."
var workStreet = "15 Oak Ln."
var workCity = "Central City."
var workState = "MA."
var workCode = "02104."

function clickFuction(){
    document.getElementById("first").style.color="red";
}

document.getElementById('homeaddr').innerHTML = homeStreet + "<br>" + homeCity + homeState + homeCode;
document.getElementById('workaddr').innerHTML = workStreet + "<br>" + workCity + workState + workCode;



document.getElementById('').value = variable;

document.getElementById("test8").onclick = function(){
    document.getElementById("test8").style.fontWeight = "bold"; // Call a function inside a get element
}