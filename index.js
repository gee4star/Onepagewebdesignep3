// let background_section = document.selectElementById(`background-section`)
// let span = document.querySelector(`span`)
// var myPar = document.getElementById('par') //caches (saves to a variable) the element above in the HTML with id par to a variable called myPar
//    let myDiv = document.createElement('div'); //This creates a new element under "Par" with one "div" element

// myDiv.className = 'example'; //gives the new div made above a classname of 'example'
// myDiv.appendChild(document.createTextNode('New element text')); //appends a child to myDiv which has the text inside it New element text

// document.body.replaceChild(myDiv, myPar); //PUTS the new text just written in Javascript from myDiv and now this text: New element text replaces the text in myPar: Example Text


function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give content
  const newContent = document.createTextNode("WE ARE OPEN YEAR ROUND!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
addElement();

let submit= document.getElementById("btn");
submit.addEventListener("click", myAlert);
function myAlert(){
    alert("Thanks!");
}
let pushMeFirst= document.getElementById("btn2");
pushMeFirst.addEventListener("click", myAlert2);
function myAlert2(){
    alert("Welcome!");
}
// var input = document.getElementById('username');
// input.oninvalid = function(event) {
// 	event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
// }

const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", (e) => {
  log.appendChild(
    object.assign(document.createElement("li"), {
      textContent: JSON.stringify(e.target.value),
    }),
  );
});
document.getElementById("bInfo").innerHTML = 
    " The screen height is " + screen.height; 
document.getElementById("bInfo2").innerHTML = 
    "The available screen width is " + screen.availWidth;  

const label = document.querySelectorAll('label');
const count = label.length;

for (let i = 0; i < count; i++) {
    label[i].style.textShadow = " 2px 2px #558ABB";
}

let paragraph = document.createElement("p");
paragraph.innerText="Contact Us: 602-8675309";
document.body.appendChild(paragraph);

