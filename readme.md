# Dom Assignment

## Project 1,2,3

## **Task 1**

The use has to append a new element in the navigation menu named **Hire me** after the **project**.

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/firstAssignmentImage/task1Output.png)

### **Project Solution**

```js
const element = document.createElement("li");
element.innerHTML = "Hire Me";
let ul = document.querySelector("ul");
ul.appendChild(element);
console.log(ul);
```

## **Task 2**

The use has to change placeholder name of the serch box and the new place holder named will be **Search My Project** after the **update.**

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/firstAssignmentImage/task2Output.png)

### **Project Solution**

```js
var input = document.querySelector("input");
input.value = "Search My Project";
```

## **Task 3**

The use has to change the paragragh and the new Chaged paragragh Should be **an Employee** and **iNeuron Intelligence Pvt Ltd** after the **update.**

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/firstAssignmentImage/task3Output.png)

### **Project Solution**

```js
let a = document.getElementsByTagName("span");
console.log(a[1].innerHTML);
a[2].innerText = "an Employee";
a[3].innerText = "iNeuron Intelligence Pvt Ltd";
```

## **Task 4**

The use has to change the **Hero image** and the new Chaged Image should be uploaded after the **update.**

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/firstAssignmentImage/task4Output.png)

### **Project Solution**

```js
const image = document.getElementsByClassName("hero-right-section")[0];
image.getElementsByTagName("img")[0].src = "image/person-image.jpg";
```

## **Task 5**

The use has to create a new button in the hero section and the new button name should be **Suport me**after the **update.**

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/firstAssignmentImage/task5Output.png)

### **Project Solution**

```js
const btn = document.getElementsByClassName("hero-right-section-btns")[0];
const btnfisrt = btn.getElementsByTagName("button")[0];
const supportbtn = document.createElement("button");
supportbtn.innerText = "Support Me";
btnfisrt.after(supportbtn);
```

## **Task 6**

The use has to append a new element in the navigation bar named as **Project** in the about page.

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/secondAssignmentImage/task1Output.png)

### **Project Solution**

```js
let li = document.getElementsByTagName("li");
console.log(li[2].innerHTML);
li[2].innerText = "project";
```

## **Task 7**

The use has to append a new element Named as **Skills** and the sub **paragraph** inside the list of the elements .

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/secondAssignmentImage/task2Output.png)

### **Project Solution**

```js
// Find the parent container
var accordianWrapper = document.querySelector(".accordian-wrapper");

// Create a new div
var newAccordian = document.createElement("div");
newAccordian.className = "accordian";

// Create a new heading
var newHeading = document.createElement("h3");
newHeading.textContent = "Skills";

// Create a new paragraph
var newParagraph = document.createElement("p");
newParagraph.textContent =
  "I Posses a very good command over the Full Stack Devlopment technologies Like MERN which can be seen in my work over the Github";

// Append the heading and paragraph to the new  div
newAccordian.appendChild(newHeading);
newAccordian.appendChild(newParagraph);

// Append the new  div to the parent container
accordianWrapper.appendChild(newAccordian);
```

## **Task 8**

The use has to Change placeholder inside the **User Inpute Board** and the value Should refleact inside the **User Outer Board** after Updating the code,

### **After Update**

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3%20done/thirdAssignmentImage/task1Output.png)

### **Project Solution**

```js
// Change Placeholder Value of Output Form
const par = document.getElementsByClassName("mainLeftDetails")[0];
par.getElementsByTagName("input")[0].placeholder = "FSJS 2.0";
par.getElementsByTagName("input")[1].placeholder = "fsjs@ineuron.ai";
par.getElementsByTagName("textarea")[0].placeholder = "Hello Word";

// Change Placeholder Value of Input Form
const hel = document.getElementsByClassName("mainRight")[0];
const form = hel.getElementsByTagName("form")[0];
form.getElementsByTagName("input")[0].placeholder = "'FSJS 2.0";
form.getElementsByTagName("input")[1].placeholder = "fsjs@ineuron.ai";
form.getElementsByTagName("textarea")[0].placeholder = "Hello Word";

$(document).ready(function () {
  $(".userName").keyup(function () {
    let usenm = $(this).val();
    $(".enterName").val(usenm);
  });

  $(".userEmail").keyup(function () {
    let usereml = $(this).val();
    $(".enterMail").val(usereml);
  });

  $(".userMessage").keyup(function () {
    let usermsg = $(this).val();
    $(".enterMessage").val(usermsg);
  });
});
```

## DOM Project 4

### Task 9

Acording to the card image The User has to Set a different bottom Background colore and the text colore of each **card** after Update the **Project**

### **After Update**

![Output image](./DOM%20P4%20done/04_DOM%20Project/Output/DOM%20P1%20SS.png)

### Solution

```js
document
  .getElementsByClassName("slide-container")[0]
  .children[0].children[0].children[4].setAttribute(
    "style",
    "background-color:#ec9b3b;color:white;"
  );
document
  .getElementsByClassName("slide-container")[0]
  .children[0].children[0].children[4].children[2].setAttribute(
    "style",
    "color:white;"
  );

document
  .getElementsByClassName("slide-container")[0]
  .children[1].children[0].children[4].setAttribute(
    "style",
    "background-color:#ee5487;color:white;"
  );
document
  .getElementsByClassName("slide-container")[0]
  .children[1].children[0].children[4].children[2].setAttribute(
    "style",
    "color:white;"
  );

document
  .getElementsByClassName("slide-container")[0]
  .children[2].children[0].children[4].setAttribute(
    "style",
    "background-color:#f6901a;color:white;"
  );
document
  .getElementsByClassName("slide-container")[0]
  .children[2].children[0].children[4].children[2].setAttribute(
    "style",
    "color:white;"
  );

document
  .getElementsByClassName("slide-container")[0]
  .children[3].children[0].children[4].setAttribute(
    "style",
    "background-color:#82bb30;color:white;"
  );
document
  .getElementsByClassName("slide-container")[0]
  .children[3].children[0].children[4].children[2].setAttribute(
    "style",
    "color:white;"
  );

document
  .getElementsByClassName("slide-container")[0]
  .children[4].children[0].children[4].setAttribute(
    "style",
    "background-color:#4facff;color:white;"
  );
document
  .getElementsByClassName("slide-container")[0]
  .children[4].children[0].children[4].children[2].setAttribute(
    "style",
    "color:white;"
  );
```

## Project 5

### **Task 10**

The User has write Code for **Pro Subscription** Button inside the navbar and just after the contact button.

### **Task 11**

The User has add 7th element named as **Chinese** in the **Recipes** list item.

### **Task 12**

The User has to Change Color of All Menu Item.

### **Task 13**

The user has to write a Code For 6th Card Product.

### **After Update**

![Output image](./DOM%20P5%20done/05_DOM%20Project/Output/DOM%20P2%20SS.png)

### Solutions

```js
// Code For Pro Subscription Button Add
const anchor = document.createElement("a");
anchor.innerText = "Pro Subscription";
document
  .getElementsByClassName("navbar")[0]
  .children[0].children[2].append(anchor);
document
  .getElementsByClassName("navbar")[0]
  .children[0].children[2].children[1].setAttribute("href", "index.html");
document
  .getElementsByClassName("navbar")[0]
  .children[0].children[2].children[1].classList.add("btn");

// Code For Recipes List 7th Item Add
const seventhele = document.createElement("a");
seventhele.innerText = "Chinese (7)";
document
  .getElementsByClassName("tags-container")[0]
  .children[1].children[5].after(seventhele);
document
  .getElementsByClassName("tags-container")[0]
  .children[1].children[6].setAttribute("href", "#");

// Change Color All Menu Item
document.getElementsByClassName("nav-links")[0].style.color = "#8a2be2";
document.getElementsByClassName("card")[0].children[0].style.color = "#8a2be2";
document.getElementsByClassName("card")[1].children[0].style.color = "#8a2be2";
document.getElementsByClassName("card")[2].children[0].style.color = "#8a2be2";
document.getElementsByClassName("card")[3].children[0].style.color = "#8a2be2";
document.getElementsByClassName("card")[4].children[0].style.color = "#8a2be2";

// Code For 6th Card Product
const cardsix = document.createElement("div");
const aforcardsix = document.createElement("a");
const imgtag = document.createElement("img");
const h5tag = document.createElement("h5");
h5tag.innerText = "Rice Manchurian";
const peralast = document.createElement("p");
peralast.innerText = "Prep : 20min | Cook : 10min";
document.getElementsByClassName("recipe-gallery")[0].children[4].after(cardsix);
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].classList.add("card");
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].append(aforcardsix);
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].setAttribute("href", "#");
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].classList.add("recipe-text");

document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].append(imgtag);
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].children[0].setAttribute(
    "src",
    "img/rice_manchurian.jpg"
  );
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].children[0].classList.add("recipe-img");

document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].append(h5tag);
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].children[1].classList.add("recipe-name");
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].append(peralast);
document
  .getElementsByClassName("recipe-gallery")[0]
  .children[5].children[0].children[2].classList.add("recipe-disp");
document.getElementsByClassName("card")[5].children[0].style.color = "#8a2be2";
```

## Project 6

### **Task 14**

The use has to change the **logo-img** at the place of previous brand logo-image.

### **After Update**

![Output Image](./DOM%20P6%20done/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)

### **Project Solution**

```js
// code for changing the logo image
const headerImage = document.querySelector("header .logo");
headerImage.src = "./assets/ineuron-logo.png";
```

### **Task 15**

The use has to write a Code for changing the price from $4 to $10 inside the Premium EQ.

### **Task 16**

The use has to create new icon of linkedin inside the footer.

### **After Update**

![Output Image](./DOM%20P6%20done/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

### **Project Solution**

```js
// Code for changing the $ price fromg $4 to $10
document.getElementsByClassName("app_price")[0].children[0].innerHTML = "$10";
```

```js
// Created i new linkedin icon
const linkedinIcon = document.createElement("div");
linkedinIcon.classList.add("footer_social_ico");
linkedinIcon.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
// Append the new elementinto footer_social container
const socialMediaContainer = document.querySelector(".footer_social");
socialMediaContainer.appendChild(linkedinIcon);
```

## Project 7

### **Task 17**

The User has to Remove the languages that have 2.0 in their name(Every alternative language).

### **After Update**

![Output Image](./DOM%20P7%20done/DOM%20P7/ass7.1-after.png)

### **Project Solution**

```js
// Remove the languages with '2.0' using DOM
const languagesContainer = document.querySelector(".main__languages");
const languageLinks = languagesContainer.querySelectorAll("a");

languageLinks.forEach((link, index) => {
  const languageName = link.innerText;
  if (languageName.includes("2.0")) {
    languagesContainer.removeChild(link);
    languagesContainer.removeChild(
      languagesContainer.childNodes[index * 2 + 1]
    );
  }
});
```

### **Task 18**

Write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

### **After Update**

![Output Image](./DOM%20P7%20done/DOM%20P7/ass7.2-after.png)

### **Project Solution**

```js
// Get the input element and the form
const input = document.querySelector(".main__form-input");
const form = document.querySelector("form");

// Add an event listener to the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Get the text entered in the input box
  const text = input.value;

  // Refresh the page
  location.reload();
});

// Set the input box and submit button to enabled
input.disabled = false;
document.querySelector(".main__form-btn").disabled = false;
```

## Project 8

## **Task 19**

The use has to Add Overflow and border property in **New box**

### **After Update**

![Output Image](./DOM%20P8%20done/DOM%20P8/ass8.1-after.png)

### **Project Solution**

```js
// target all elements with class name "col-lg-4 new"
const elements = document.querySelectorAll(".col-lg-4.new");
// modifyed CSS properties
elements.forEach((element) => {
  element.style.border = "5px solid darkred";
  element.style.overflow = "auto";
});
```

## Project 9

## **Task 20**

The use has to change the text color of **h1 element**.

### **After Update**

![Output Image](./DOM%20P9%20done/DOM%20P9/ass9.1-after.png)

### **Project Solution**

```js
// Target the element
const h1Element = document.querySelector("h1.title");

// Change the text color
h1Element.style.color = "darkred";
```

## **Task 21**

The use has to change the Backgroud color of ** Add to card button**.

### **After Update**

![Output Image](./DOM%20P9%20done/DOM%20P9/ass9.2-after.png)

### **Project Solution**

```js
// target the button element with class name "add-to-cart"
const buttonElement = document.querySelector(".add-to-cart");

// Change the background color
buttonElement.style.backgroundColor = "darkred";
```
