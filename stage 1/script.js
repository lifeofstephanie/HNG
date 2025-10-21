document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  function updateTime() {
    timeElement.textContent = Date.now().toString();
  }
  updateTime();
  setInterval(updateTime, 1000);
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const fields = [fullName, email, subject, message];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  fields.forEach((field) => {
    const small = field.nextElementSibling;
    if (!field.value.trim()) {
      small.textContent = "This field is required";

      field.classList.add("input-error");
    }
  });
  if (email.value && !emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Please enter a valid email address";

    email.classList.add("input-error");
    isValid = false;
  }
  if (isValid) {
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    form.reset();
  } else {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  }

  setTimeout(() => {
    successMessage.style.display = "none";
    errorMessage.style.display = "none";
  }, 3000);
});
