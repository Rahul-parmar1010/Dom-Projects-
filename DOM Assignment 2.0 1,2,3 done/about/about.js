let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


//Tast1: Target the li and change the name 
let li = document.getElementsByTagName('li');
console.log(li[2].innerHTML);
li[2].innerText = 'project';

// Tast2:
// Find the parent container
var accordianWrapper = document.querySelector('.accordian-wrapper');

// Create a new accordian div
var newAccordian = document.createElement('div');
newAccordian.className = 'accordian';

// Create a new heading
var newHeading = document.createElement('h3');
newHeading.textContent = 'Skills';

// Create a new paragraph
var newParagraph = document.createElement('p');
newParagraph.textContent = 'I Posses a very good command over the Full Stack Devlopment technologies Like MERN which can be seen in my work over the Github';

// Append the heading and paragraph to the new accordian div
newAccordian.appendChild(newHeading);
newAccordian.appendChild(newParagraph);

// Append the new accordian div to the parent container
accordianWrapper.appendChild(newAccordian);
