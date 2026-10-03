const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });

  if (Object.values(data).some((value) => value === "")) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(data);
  form.reset();
});
