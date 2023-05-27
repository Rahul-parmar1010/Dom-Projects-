// <!--Add hire me--> 
const element = document.createElement("li");
  element.innerHTML=('Hire Me');
  let ul=document.querySelector('ul');
  ul.appendChild(element);
console.log(ul);
  
// <!--change place holder name -->
  
var input = document.querySelector('input');
input.value = 'Search My Project';

// <!--change Paraghraph -->
let a = document.getElementsByTagName('span');
console.log(a[1].innerHTML);
a[2].innerText = 'an Employee';
a[3].innerText = 'iNeuron Intelligence Pvt Ltd';
              
// <!--chreate new button -->
function buttonCreate() {
      var x = document.createElement("BUTTON");
      var t = document.createTextNode("NEW BUTTON");
      x.appendChild(t);
      document.body.appendChild(x);
   }

    // <!-- Right Div for Image and Button -->
    const image = document.getElementsByClassName("hero-right-section")[0];
    image.getElementsByTagName("img")[0].src = "image/person-image.jpg";

    // <!-- div for putting the button -->
    const btn = document.getElementsByClassName("hero-right-section-btns")[0];
    const btnfisrt = btn.getElementsByTagName("button")[0];

    //Create Element
    const supportbtn = document.createElement("button");
    supportbtn.innerText = "Support Me";
    btnfisrt.after(supportbtn);

