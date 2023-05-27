
// code for changing the logo image
const headerImage = document.querySelector('header .logo');
headerImage.src="./assets/ineuron-logo.png"


// Code for changing the $ price fromg $4 to $10
document.getElementsByClassName('app_price')[0].children[0].innerHTML = "$10";

// Created i new linkedin icon
const linkedinIcon = document.createElement('div');
linkedinIcon.classList.add('footer_social_ico');
linkedinIcon.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
// Append the new elementinto footer_social container
const socialMediaContainer = document.querySelector('.footer_social');
socialMediaContainer.appendChild(linkedinIcon);

