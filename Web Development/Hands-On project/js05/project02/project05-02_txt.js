"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Alejandro Manrique
      Date:   23/03/05

      Filename: project05-02.js
*/
const images = document.getElementsByTagName("img");
const photoBucket = document.getElementById("photo_bucket");
const photoList = document.getElementById("photo_list");
for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function() {
        if (this.parentNode.id === "photo_bucket") {
          // create a new li element and append the image to it
          const newItem = document.createElement("li");
          photoList.appendChild(newItem);
          newItem.appendChild(this);
        } else {
          // remove the li element and append the image to photoBucket
          const oldItem = this.parentNode;
          photoBucket.appendChild(this);
          oldItem.parentNode.removeChild(oldItem);
        }
      });
    }
    
    
    
