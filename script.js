document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // 🌟 PROFILE CARD (Stage 0)
  // ==============================
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    const updateTime = () => {
      timeElement.textContent = Date.now();
    };
    updateTime();
    setInterval(updateTime, 1000); // updates every second
  }

  // ==============================
  // 📩 CONTACT FORM (Stage 1)
  // ==============================
  const form = document.getElementById("contactForm");
  if (form) {
    const success = document.getElementById("success");

    // Hide all error messages initially
    document.querySelectorAll("small").forEach((el) => {
      el.classList.add("error");
      el.style.display = "none";
      el.style.color = "red";
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Collect inputs
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      // Reset messages
      document.querySelectorAll(".error").forEach((el) => {
        el.textContent = "";
        el.style.display = "none";
      });
      success.style.display = "none";
      success.textContent = "";

      // Validation
      let isValid = true;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.value.trim() === "") {
        const el = document.getElementById("error-name");
        el.textContent = "Full name is required.";
        el.style.display = "block";
        isValid = false;
      }

      if (email.value.trim() === "") {
        const el = document.getElementById("error-email");
        el.textContent = "Email is required.";
        el.style.display = "block";
        isValid = false;
      } else if (!emailPattern.test(email.value)) {
        const el = document.getElementById("error-email");
        el.textContent = "Please enter a valid email.";
        el.style.display = "block";
        isValid = false;
      }

      if (subject.value.trim() === "") {
        const el = document.getElementById("error-subject");
        el.textContent = "Subject is required.";
        el.style.display = "block";
        isValid = false;
      }

      if (message.value.trim() === "") {
        const el = document.getElementById("error-message");
        el.textContent = "Message is required.";
        el.style.display = "block";
        isValid = false;
      } else if (message.value.trim().length < 10) {
        const el = document.getElementById("error-message");
        el.textContent = "Message must be at least 10 characters.";
        el.style.display = "block";
        isValid = false;
      }

      // Success message
      if (isValid) {
        success.style.display = "block";
        success.textContent = "✅ Message sent successfully!";
        form.reset();
      }
    });
  }
});
