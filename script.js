// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Toggle mobile menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burgerMenu.classList.toggle('toggle');
});

// Form validation part
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
      // Pang send ng form data sa server
      contactForm.reset();
  }
});

//function para sa mavalidate input nila
function validateForm() {
  let isValid = true;

  if (nameInput.value === '') {
      isValid = false;
      showError(nameInput, 'Please enter your name');
  } else {
      showSuccess(nameInput);
  }

  if (emailInput.value === '') {
      isValid = false;
      showError(emailInput, 'Please enter your email');
  } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      showError(emailInput, 'Please enter a valid email');
  } else {
      showSuccess(emailInput);
  }

  if (messageInput.value === '') {
      isValid = false;
      showError(messageInput, 'Please enter your message');
  } else {
      showSuccess(messageInput);
  }

  return isValid;
}

function showError(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');

  formControl.classList.add('error');
  errorText.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;

  formControl.classList.remove('error');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//para dun sa skill percentage, yung line sa ilalim nun magdedepend sa percentage ng proficiency ko sa skill
document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
      const progress = skill.querySelector(".progress");
      const percentage = skill.querySelector(".skill-percentage");

      skill.addEventListener("mouseenter", function() {
          const skillPercentage = parseInt(percentage.innerText);
          progress.style.transform = `scaleX(${skillPercentage / 100})`;
      });

      skill.addEventListener("mouseleave", function() {
          progress.style.transform = "scaleX(0)";
      });
  });
}); 

if ('this_is' == /an_example/) {
  of_beautifier();
} else {
  var a = b ? (c % d) : e[f];
}

// Check if dark mode preference is set
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply dark mode if preference is set or user has already enabled it
if (localStorage.getItem('darkModeEnabled') === 'true' || prefersDarkMode) {
  document.documentElement.classList.add('dark');
}

// Toggle dark mode
function toggleDarkMode() {
  const isDarkModeEnabled = document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
}