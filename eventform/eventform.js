const typeSelect = document.getElementById("type");
const studentGroup = document.getElementById("studentIdGroup");
const accessGroup = document.getElementById("accessCodeGroup");
const form = document.getElementById("eventForm");
const errorMessage = document.getElementById("errorMessage");

typeSelect.addEventListener("change", function () {
  if (typeSelect.value === "Student") {
    studentGroup.style.display = "block";
    accessGroup.style.display = "none";
  } else if (typeSelect.value === "Guest") {
    studentGroup.style.display = "none";
    accessGroup.style.display = "block";
  } else {
    studentGroup.style.display = "none";
    accessGroup.style.display = "none";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // STOP page refresh

  errorMessage.textContent = "";

  //  GET VALUES (must be inside here!)
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = typeSelect.value;
  const date = document.getElementById("date").value;

  // FULL FORM CHECK
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    type === "Choose one" ||
    date === ""
  ) {
    errorMessage.textContent = "Please fill out the entire form";
    return;
  }

  // EMAIL VALIDATION
  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email address";
    return;
  }

  //  STUDENT VALIDATION
  if (type === "Student") {
    const studentId = document.getElementById("studentId").value;

    if (studentId.length !== 9 || isNaN(studentId)) {
      errorMessage.textContent = "Student I# must be 9 digits";
      return;
    }
  }

  //  GUEST VALIDATION
  if (type === "Guest") {
    const accessCode = document.getElementById("accessCode").value;

    if (accessCode !== "EVENT131") {
      errorMessage.textContent = "Invalid event code";
      return;
    }
  }

  //  DATE VALIDATION
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate <= today) {
    errorMessage.textContent = "Please select a future date";
    return;
  }

  //  CREATE TICKET
errorMessage.textContent = "";

  const ticketOutput = document.getElementById("ticketOutput");

  ticketOutput.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type.toLowerCase()}</p>
    <p>${date}</p>
  `;
  form.reset();
  studentGroup.style.display = "none";
  accessGroup.style.display = "none";
});