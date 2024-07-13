const form = document.getElementById("registrationForm");

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthDate = document.getElementById("birthDate").value;
  const email = document.getElementById("email").value;
  const insurance = document.getElementById("insurance").value;
  const terms = document.getElementById("terms").checked;

  if (!firstName || !lastName) {
    alert("Please enter your full name.");
    return;
  }

  if (!birthDate) {
    alert("Please enter your birth date.");
    return;
  }

  if (!email) {
    alert("Please enter your email address.");
    return;
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!insurance) {
    alert("Please enter your insurance.");
    return;
  }

  if (!terms) {
    alert("Please agree to the terms of service.");
    return;
  }

  alert("Form submitted successfully!");
}

form.addEventListener("submit", function (e) {
  validateForm();
  e.preventDefault();
});
