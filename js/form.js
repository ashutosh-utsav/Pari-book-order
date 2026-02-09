const form = document.getElementById("bookOrderForm");
const statusText = document.getElementById("formStatus");

// 🔴 REPLACE THIS WITH YOUR GOOGLE SCRIPT URL (next step)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwkyX_2KmcFntUv9NgJcdJoI1IrQt5zLWlY12RFi24G5KQsZmIx53Z11mb-SMiaCCSb5Q/exec";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusText.textContent = "Submitting, please wait...";

  const formData = new FormData(form);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      statusText.textContent =
        "Thank you. Our team will contact you shortly.";
      form.reset();
    })
    .catch(() => {
      statusText.textContent =
        "Something went wrong. Please try again later.";
    });
});
