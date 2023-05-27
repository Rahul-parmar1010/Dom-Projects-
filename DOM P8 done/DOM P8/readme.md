## Project 8

## **Task 19**

The use has to Add Overflow and border property in **New box**

### **After Update**

![Output Image](./ass8.1-after.png)

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
