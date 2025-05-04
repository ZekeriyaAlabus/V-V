document.addEventListener("DOMContentLoaded", () => {
    const fields = ["firstName", "lastName", "email", "password", "confirmPassword", "dob"];
    fields.forEach(id => {
      document.getElementById(id).addEventListener("input", validateField);
    });
  });
  
  function validateName(name) {
    return /^[A-Za-z]{2,10}$/.test(name);
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validatePasswordMatch(pass, confirmPass) {
    return pass.length >= 8 && pass === confirmPass;
  }
  
  function validateDOB(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    return !isNaN(birthDate) && birthDate < today;
  }
  
  function validateField(e) {
    const id = e.target.id;
    const value = e.target.value;
    const error = document.getElementById(id + "Error");
  
    if (id === "firstName" || id === "lastName") {
      if (!validateName(value)) {
        showError(id, `${id === "firstName" ? "First" : "Last"} Name must be 2–10 letters (A–Z only).`);
      } else {
        clearError(id);
      }
    }
  
    if (id === "email") {
      if (!validateEmail(value)) {
        showError(id, "Invalid email format.");
      } else {
        clearError(id);
      }
    }
  
    if (id === "password") {
      if (value.length < 8) {
        showError(id, "Password must be at least 8 characters.");
      } else {
        clearError(id);
      }
      validateField({ target: document.getElementById("confirmPassword") });
    }
  
    if (id === "confirmPassword") {
      const password = document.getElementById("password").value;
      if (!validatePasswordMatch(password, value)) {
        showError(id, "Passwords do not match.");
      } else {
        clearError(id);
      }
    }
  
    if (id === "dob") {
      if (!validateDOB(value)) {
        showError(id, "Date of birth must be in the past.");
      } else {
        clearError(id);
      }
    }
  }
  
  function showError(id, msg) {
    document.getElementById(id).classList.add("invalid");
    document.getElementById(id + "Error").innerText = msg;
  }
  
  function clearError(id) {
    document.getElementById(id).classList.remove("invalid");
    document.getElementById(id + "Error").innerText = "";
  }
  
  function handleSubmit() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
  
    if (
      !validateName(firstName) ||
      !validateName(lastName) ||
      !validateEmail(email) ||
      password.length < 8 ||
      !validatePasswordMatch(password, confirmPassword) ||
      !validateDOB(dob)
    ) {
      document.getElementById("errorMsg").innerText = "❌ Please fix the errors above.";
      document.getElementById("successMsg").innerText = "";
      return false;
    }
  
    const formData = { firstName, lastName, email, dob, password };
    localStorage.setItem("userRegistrationData", JSON.stringify(formData));
  
    document.getElementById("errorMsg").innerText = "";
    document.getElementById("successMsg").innerText = "✅ Verification Successful and Data Saved!";
    return false;
  }
  