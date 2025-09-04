// ------------------------------
// Dark/Light Mode Toggle
// ------------------------------
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ------------------------------
// Counter Game
// ------------------------------
let counter = 0;
const counterBtn = document.getElementById("counter-btn");
const counterValue = document.getElementById("counter-value");

counterBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

// ------------------------------
// FAQ Section (Collapsible)
// ------------------------------
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ------------------------------
// Form Validation
// ------------------------------
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMsg = document.getElementById("form-success");

  let valid = true;

  // Name Validation
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email Validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email (e.g. example@mail.com).";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password Validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all fields valid
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
