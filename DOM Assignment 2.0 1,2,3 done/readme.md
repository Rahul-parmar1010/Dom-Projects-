# Dom Assignment

## **Task 1**

The use has to append a new element in the navigation menu named **Hire me** after the **project**.

### **After Update**

![Output Image](./firstAssignmentImage/task1Output.png)

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

![Output Image](./firstAssignmentImage/task2Output.png)

### **Project Solution**

```js
var input = document.querySelector("input");
input.value = "Search My Project";
```

## **Task 3**

The use has to change the paragragh and the new Chaged paragragh Should be **an Employee** and **iNeuron Intelligence Pvt Ltd** after the **update.**

### **After Update**

![Output Image](./firstAssignmentImage/task3Output.png)

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

![Output Image](./firstAssignmentImage/task4Output.png)

### **Project Solution**

```js
const image = document.getElementsByClassName("hero-right-section")[0];
image.getElementsByTagName("img")[0].src = "image/person-image.jpg";
```

## **Task 5**

The use has to create a new button in the hero section and the new button name should be **Suport me**after the **update.**

### **After Update**

![Output Image](./firstAssignmentImage/task5Output.png)

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

![Output Image](./secondAssignmentImage/task1Output.png)

### **Project Solution**

```js
let li = document.getElementsByTagName("li");
console.log(li[2].innerHTML);
li[2].innerText = "project";
```

## **Task 7**

The use has to append a new element Named as **Skills** and the sub **paragraph** inside the list of the elements .

### **After Update**

![Output Image](./secondAssignmentImage/task2Output.png)

### **Project Solution**

```js
// Find the parent container
var accordianWrapper = document.querySelector(".accordian-wrapper");

// Create a new accordian div
var newAccordian = document.createElement("div");
newAccordian.className = "accordian";

// Create a new heading
var newHeading = document.createElement("h3");
newHeading.textContent = "Skills";

// Create a new paragraph
var newParagraph = document.createElement("p");
newParagraph.textContent =
  "I Posses a very good command over the Full Stack Devlopment technologies Like MERN which can be seen in my work over the Github";

// Append the heading and paragraph to the new accordian div
newAccordian.appendChild(newHeading);
newAccordian.appendChild(newParagraph);

// Append the new accordian div to the parent container
accordianWrapper.appendChild(newAccordian);
```

## **Task 8**

The use has to Change placeholder inside the **User Inpute Board** and the value Should refleact inside the **User Outer Board** after \*\*Updating the code,

### **After Update**

![Output Image](./thirdAssignmentImage/task1Output.png)

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
