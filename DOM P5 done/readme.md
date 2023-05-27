## Project 5

### **Task 10**

The User has write Code for **Pro Subscription** Button inside the navbar and just after the contact button.

### **Task 11**

The User has add 7th element named as **Chinese** in the **Recipes** list item.

### **Task 12**

The User has to Change Color of All Menu Item.

### **Task 13**

The user has to write a Code For 6th Card Product.

### Output Image

![Output image](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

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
