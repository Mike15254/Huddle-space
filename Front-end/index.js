const Username = document.getElementById('Username');
const  Secondname= document.getElementById('Secondname');
const Firstname = document.getElementById('Firstname');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const check = document.getElementById('check');
const spinner = document.getElementById('spinner');
const button = document.getElementById('connect');

var username_valid = false;
var password_valid = false;
var firstname_valid = true;
var secondname_valid = true;
var email_valid = true;



username.oninput = function () {
  if (this.value.length > 4) {
    username_valid = true;
  } else {
    username_valid = false;
  }
  form_valid(username_valid, password_valid);
};

password.oninput = function () {
  if (this.value.length > 8) {
    password_valid = true;
  } else {
    password_valid = false;
  }

  form_valid(username_valid, password_valid);
};

function form_valid(username_valid, password_valid, firstname_valid, secondname_valid, email_valid) {
  if (username_valid && password_valid && email_valid && firstname_valid && secondname_valid) {
    spinner.style.display = 'none';
    check.style.display = 'block';
    button.classList.add('valid');
    check.classList.add('up');
  } else {
    spinner.style.display = 'block';
    check.style.display = 'none';
    button.classList.remove('valid');
    check.classList.remove('up');
  }
}
