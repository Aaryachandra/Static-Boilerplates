const togglePasswordButton = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Show";
  }
});

function showSignUpForm() {
  document.getElementById("SignUp").style.display = "block";
  document.getElementById("login").style.display = "none";
}
function showLoginForm() {
  document.getElementById("SignUp").style.display = "none";
  document.getElementById("login").style.display = "block";
}
const firebaseConfig = {
  apiKey: "AIzaSyB-46tGmmVhiFOuDAikU-7I-5il_S65uf0",
  authDomain: "login-with-firebase-data-20ff9.firebaseapp.com",
  projectId: "login-with-firebase-data-20ff9",
  storageBucket: "login-with-firebase-data-20ff9.appspot.com",
  messagingSenderId: "699324783266",
  appId: "1:699324783266:web:bc81daa22e16e01e1f95fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

function register() {
  email = document.getElementById("email").value;
  full_name = document.getElementById("full_name").value;
  number = document.getElementById("number").value;
  password = document.getElementById("password").value;

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is out of line");
    return;
  }
  if (
    validate_field(full_name) == false ||
    validate_password(number) == false
  ) {
    alert("one or more fields are out of line");
    return;
  }
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser;
      var database_ref = database.ref();
      var user_data = {
        email: email,
        full_name: full_name,
        number: number,
        password: password,
        last_login: Date.now(),
      };
      database_ref.child("users/" + user.uid).set(user_data);
      alert("User Created");
    })
    .catch(function () {
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
