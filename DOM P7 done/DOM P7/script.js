

// Get the input element and the form
const input = document.querySelector('.main__form-input');
const form = document.querySelector('form');

// Add an event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  // Get the text entered in the input box
  const text = input.value;

  // Refresh the page
  location.reload();
});

// Set the input box and submit button to enabled
input.disabled = false;
document.querySelector('.main__form-btn').disabled = false;



// Remove the languages with '2.0' using DOM manipulation
const languagesContainer = document.querySelector('.main__languages');
const languageLinks = languagesContainer.querySelectorAll('a');

languageLinks.forEach((link, index) => {
  const languageName = link.innerText;
  if (languageName.includes('2.0')) {
    languagesContainer.removeChild(link);
    languagesContainer.removeChild(languagesContainer.childNodes[index * 2 + 1]);
  }
});