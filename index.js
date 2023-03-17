const getData = localStorage.getItem("userData");
const userData = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

function signUp() {
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const lowerCaseValidate = /[a-z]/;
  const upperCaseValidate = /[A-Z]/;
  const numbers = /[0-9]/;
  const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!userEmail && !userPassword) {
    alert("Please input email and password");
  } else if (!userEmail) {
    alert("Please input email");
  } else if (!userPassword) {
    alert("Please input password");
  } else if (!emailValidate.test(userEmail)) {
    alert("Please input correct email");
  } else if (!lowerCaseValidate.test(userPassword)) {
    alert("Please add at least 1 lowercase letter");
  } else if (!upperCaseValidate.test(userPassword)) {
    alert("Please add at least 1 uppercase letter");
  } else if (!numbers.test(userPassword)) {
    alert("Please add at least 1 number")
  } else {
    alert("Sign Up Completed!");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "index.html";
  }

}

function signIn() {
 const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const lowerCaseValidate = /[a-z]/;
  const upperCaseValidate = /[A-Z]/;
  const numbers = /[0-9]/;
  const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  if (!userEmail && !userPassword) {
    alert("Please input email and password");
  } else if (!userEmail) {
    alert("Please input email");
  } else if (!userPassword) {
    alert("Please input password");
  } else if (!emailValidate.test(userEmail)) {
    alert("Please input correct email");
  } else if (!lowerCaseValidate.test(userPassword)) {
    alert("Please add at least 1 lowercase letter");
  } else if (!upperCaseValidate.test(userPassword)) {
    alert("Please add at least 1 uppercase letter");
  } else if (!numbers.test(userPassword)) {
    alert("Please add at least 1 number")
  } else {
    alert("Welcome to Homepage");
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    window.location.href = "homepage.html";
  }
}
