const form = document.querySelector(".form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const personalNumber = document.querySelector("#personal-number");
const mobileNumber = document.querySelector("#mobile-number");
const jobDescription = document.querySelector("#job-description");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");
const jobDescriptionError = document.querySelector("#job-description-error");
const formSection = document.querySelector(".form-section");

const filter =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function checkUserName() {
  if (nameInput.value.length <= 1 || nameInput.value.length > 15) {
    nameError.textContent = "min 1 charakter max 15";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");

    return false;
  }
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Username is required";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    return false;
  }
  if (!/^[a-zA-Z]*$/g.test(nameInput.value)) {
    nameError.textContent = "please write only letters";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
    nameInput.classList.add("correct");
    return true;
  }
}
function checkEmail() {
  if (filter.test(emailInput.value) === false) {
    emailError.textContent = "Please enter a valid email address";

    emailInput.classList.remove("correct");
    emailInput.classList.add("error");

    return false;
  }
  if (emailInput.validity.valid === false) {
    emailError.textContent = "Email is required";

    if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address";
    }
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");

    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    return true;
  }
}
function checkPassword() {
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else if (/[a-zA-Z0-9]/.test(passwordInput.value) === false) {
    passwordError.textContent = "Password must contain numbers or letters";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else if (
    passwordInput.value.length < 8 ||
    passwordInput.value.length > 20
  ) {
    passwordError.textContent = "min 8 characters max20";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
    passwordInput.classList.add("correct");
    return true;
  }
}
function checkPersonalNumber() {
  /*  if (personalNumber.validity.valid === false) {
    personalNumberError.textContent = "personal number is required";
    personalNumber.classList.remove("correct");
    personalNumber.classList.add("error");
    return false;
  } */
  if (personalNumber.value.length != 11) {
    personalNumberError.textContent = "you need 11 number";
    personalNumber.classList.remove("correct");
    personalNumber.classList.add("error");
    return false;
  } else {
    personalNumberError.textContent = "";
    personalNumber.classList.remove("error");
    personalNumber.classList.add("correct");
    return true;
  }
}
function chekMobile() {
  if (mobileNumber.value.length != 9) {
    mobileNumberError.textContent = "you need 9 number";
    mobileNumber.classList.remove("correct");
    mobileNumber.classList.add("error");
    return false;
  } else {
    mobileNumberError.textContent = "";
    mobileNumber.classList.remove("error");
    mobileNumber.classList.add("correct");
    return true;
  }
}
function checkDescription() {
  if (jobDescription.value.length > 50) {
    jobDescriptionError.textContent = "max 50 letter";
    jobDescription.classList.remove("correct");
    jobDescription.classList.add("error");
    return false;
  } else {
    jobDescriptionError.textContent = "";
    return true;
  }
}

nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
personalNumber.addEventListener("input", checkPersonalNumber);
mobileNumber.addEventListener("input", chekMobile);
jobDescription.addEventListener("input", checkDescription);
const dialog = document.querySelector("dialog");
const nemail = dialog.querySelector("#email");
const nepass = dialog.querySelector("#password");
const repeatpass = dialog.querySelector("#second-password");
const nemailEror = dialog.querySelector("#email-error");
const nepassEror = dialog.querySelector("#password-error");
const repeatpassEror = dialog.querySelectorAll("#secend-password-error");
const closebtn = dialog.querySelector(".registration-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUserNameValid = checkUserName();
  const isEmailValid = checkEmail();
  const isPAsswordValid = checkPassword();
  const isPersonalvalid = checkPersonalNumber();
  const isMobilevalid = chekMobile();
  const isDesckriptionvalid = checkDescription();

  if (
    isUserNameValid &&
    isEmailValid &&
    isPAsswordValid &&
    isPersonalvalid &&
    isMobilevalid &&
    isDesckriptionvalid
  ) {
    dialog.close();
    form.submit();
  } else {
    formSection.classList.add("form-remove");
    dialog.show();
  }
});
function closedialog() {
  formSection.classList.remove("form-remove");
  dialog.close();
}
closebtn.addEventListener("click", closedialog);
function checknEmail() {
  if (filter.test(nemail.value) === false) {
    nemailEror.textContent = "Please enter a valid email address";

    nemail.classList.remove("correct");
    nemail.classList.add("error");

    return false;
  }
  if (nemail.validity.valid === false) {
    nemailEror.textContent = "Email is required";

    if (nemail.validity.typeMismatch) {
      nemailEror.textContent = "Please enter a valid email address";
    }
    nemail.classList.remove("correct");
    nemail.classList.add("error");

    return false;
  } else {
    nemailEror.textContent = "";
    nemail.classList.remove("error");
    nemail.classList.add("correct");
    return true;
  }
}
function checknePassword() {
  if (nepass.value.trim() === "") {
    nepassEror.textContent = "Password is required";
    nepass.classList.remove("correct");
    nepass.classList.add("error");
    return false;
  } else if (/[a-zA-Z0-9]/.test(nepass.value) === false) {
    nepassEror.textContent = "Password must contain numbers or letters";
    nepass.classList.remove("correct");
    nepass.classList.add("error");
    return false;
  } else if (nepass.value.length < 8 || nepass.value.length > 20) {
    nepassEror.textContent = "min 8 characters max 20";
    nepass.classList.remove("correct");
    nepass.classList.add("error");
    return false;
  } else {
    nepassEror.textContent = "";
    nepass.classList.remove("error");
    nepass.classList.add("correct");
    return true;
  }
}
function chekrepss() {
  if (repeatpass.value !== nepass.value) {
    repeatpassEror.textContent = "the password does not match";
    repeatpass.classList.remove("correct");
    repeatpass.classList.add("error");
    return false;
  } else {
    repeatpassEror.textContent = "";
    repeatpass.classList.remove("error");
    repeatpass.classList.add("correct");
    return true;
  }
}
nemail.addEventListener("input", checknEmail);
nepass.addEventListener("input", checknePassword);
repeatpass.addEventListener("input", chekrepss);

dialog.addEventListener("submit", (e) => {
  const isnemail = checknEmail();
  const isnepass = checknePassword();
  const isrepeatpass = chekrepss();
  if (isnemail && isnepass && isrepeatpass) {
    dialog.submit();
  } else {
    dialog.show();
  }
});
