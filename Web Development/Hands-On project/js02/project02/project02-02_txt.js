/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Alejandro 
      Date: 02/05

      Filename: project02-02.js
 */
 function verifyForm(){
      var input = document.getElementById("name");
      var name = input.value;
      var input = document.getElementById("email");
      var email = input.value;
      var input = document.getElementById("phone");
      var phone = input.value;

      if (name && email && phone){
            window.alert("Thank you!");
      }
      else{
            window.alert("Please fill in all fields.");
      }
 }
document.getElementById("submit").addEventListener("click",verifyForm);

//This will check the fields,  if they are empy will display
//a message. 


