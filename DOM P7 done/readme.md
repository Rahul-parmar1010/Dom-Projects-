## Project 7

### **Task 17**

The User has to Remove the languages that have 2.0 in their name(Every alternative language).

### **After Update**

![Output Image](./DOM%20P7/ass7.1-after.png)

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

![Output Image](./DOM%20P7/ass7.2-after.png)

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
