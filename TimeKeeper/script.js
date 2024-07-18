function Employee() {
  document.getElementById("Employee").style = "display: block";
  document.getElementById("applyLeave").style = "display: none";
  document.getElementById("updateEmployee").style = "display: none";
  document.getElementById("viewEmployee").style = "display: none";
  document.getElementById("addEmployee").style = "display: none";
  document.getElementById("TimeCard1").style = "display: none";
}

function applyLeave() {
  document.getElementById("applyLeave").style = "display: block";
  document.getElementById("Employee").style = "display: none";
  document.getElementById("updateEmployee").style = "display: none";
  document.getElementById("viewEmployee").style = "display: none";
  document.getElementById("addEmployee").style = "display: none";
  document.getElementById("TimeCard1").style = "display: none";
}

function updateEmployee() {
  document.getElementById("updateEmployee").style = "display: block";
  document.getElementById("applyLeave").style = "display: none";
  document.getElementById("Employee").style = "display: none";
  document.getElementById("viewEmployee").style = "display: none";
  document.getElementById("addEmployee").style = "display: none";
  document.getElementById("TimeCard1").style = "display: none";
}

function viewEmployee() {
  document.getElementById("viewEmployee").style = "display: block";
  document.getElementById("updateEmployee").style = "display: none";
  document.getElementById("applyLeave").style = "display: none";
  document.getElementById("Employee").style = "display: none";
  document.getElementById("addEmployee").style = "display: none";
  document.getElementById("TimeCard1").style = "display: none";
}

function addEmployee() {
  document.getElementById("addEmployee").style = "display: block";
  document.getElementById("viewEmployee").style = "display: none";
  document.getElementById("updateEmployee").style = "display: none";
  document.getElementById("applyLeave").style = "display: none";
  document.getElementById("Employee").style = "display: none";
  document.getElementById("TimeCard1").style = "display: none";
}

function TimeCard1() {
  document.getElementById("TimeCard1").style = "display: block";
  document.getElementById("addEmployee").style = "display: none";
  document.getElementById("viewEmployee").style = "display: none";
  document.getElementById("updateEmployee").style = "display: none";
  document.getElementById("applyLeave").style = "display: none";
  document.getElementById("Employee").style = "display: none";
}

(function () {
  "use strict";

  // Fetch all the forms to apply custom Bootstrap validation styles
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over each form and prevent default submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
