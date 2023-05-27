## DOM Project 4

### Task 9

Acording to the card image The User has to Set a different bottom Background colore and the text colore of each **card** after Update the **Project**
![Output image](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

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
