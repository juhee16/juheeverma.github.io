// script.js

// Responsive nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Smooth scroll to sections
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("show"); // Close nav on mobile
      }
    });
  });

  // Contact form validation
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let error = "";

    if (!name || !email || !message) {
      error = "All fields are required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      error = "Enter a valid email address.";
    }

    if (error) {
      e.preventDefault();
      alert(error);
    }
  });
});
