const getLocalStorage = localStorage.getItem("email");

if (getLocalStorage !== null) {
  const collection = document.getElementsByClassName("data-name");
  collection[0].innerHTML = `Welcome, ${getLocalStorage}!`;
}

let data = [
  { name: "Anggih", age: 30, email: "anggih@gmail.com" },
  { name: "Dandi", age: 20, email: "dandi@yahoo.com" },
  { name: "Niken", age: 25, email: "niken@rocketmail.com" },
];


function showData() {
  let tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Delete</button></td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
}

// ADD DATA
function addData() {
  let name = document.querySelector("#inputName").value;
  let age = document.querySelector("#inputAge").value;
  let email = document.querySelector("#inputEmail").value;
  data.push({ name: name, age: age, email: email });
  showData();
}

// EDIT DATA
function editData(index) {
  let name = prompt("New Name:", data[index].name);
  let age = prompt("New Age:", data[index].age);
  let email = prompt("New Email:", data[index].email);
  data[index] = { name: name, age: age, email: email };
  showData();
}

// DELETE DATA
function deleteData(index) {
  data.splice(index, 1);
  showData();
}

// SHOW DATA WHILE LOADING
window.onload = function () {
  showData();
};
