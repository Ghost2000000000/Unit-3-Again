/* Declare variables below to save the different sections (divs) of your story*/
let buttonOne = document.querySelector(".option-one");
let opening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");

let buttonTwo = document.querySelector(".option-two");
let optionTwoScreen =
document.querySelector(" .option-two-screen");








/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/

buttonOne.onclick = function() {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";

};
buttonTwo.onclick = function() {
    opening.style.display = "none";
    optionTwoScreen.style.display = "none";

};




