// target all elements with class name "col-lg-4 new"
const elements = document.querySelectorAll('.col-lg-4.new');

// modifyed CSS properties
  
elements.forEach(element => {
 element.style.border = '5px solid darkred';
 element.style.overflow = 'auto';
});



