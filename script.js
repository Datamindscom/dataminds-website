function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Form submitted. We'll contact you soon.");
  closePopup();
}