## Project 6

### **Task 14**

The use has to change the **logo-img** at the place of previous brand logo-image.

### **After Update**

![Output Image](./Output/DOM%20P3%20SS-1.png)

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

![Output Image](./Output/DOM%20P3%20SS-2.png)

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
