const buttonLogin = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const formInput = document.querySelectorAll('.right-content form input');
const formContent = document.querySelector('.right-content form');
const registerButton = document.querySelector('#facebook-register');
const genderInputs = document.querySelectorAll('.gender input');
const genderContent = document.getElementById('genderx');
const rightContent = document.querySelectorAll('.right-content')[0];
document.getElementById('data').DatePickerX.init();
document.getElementById('data').removeAttribute('readonly');

let sexvar = '';
let bool = false;
let counter = 0;

function removeChild() {
  genderContent.removeChild(genderContent.lastChild);
}

function createElementOptionalSex() {
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  div.appendChild(input);
  genderContent.appendChild(div);
}

function sexValidate() {
  const sex = genderInputs;
  sex[0].addEventListener('click', function () {
    sexvar = 'Feminino';
    if (bool) {
      counter = 0;
      bool = false;
      removeChild();
    }
  });

  sex[1].addEventListener('click', function () {
    sexvar = 'Masculino';
    if (bool) {
      counter = 0;
      bool = false;
      removeChild();
    }
  });

  sex[2].addEventListener('click', function () {
    sexvar = 'Personalizado';
    bool = true;
    counter += 1;
    if (bool && counter <= 1) {
      createElementOptionalSex();
    }
  });
}

sexValidate();

buttonLogin.addEventListener('click', function () {
  alert(userData.value);
});

function formAlert() {
  const alert = document.createElement('p');
  alert.innerText = 'Campos inválidos';
  formContent.appendChild(alert);
}

registerButton.addEventListener('click', function (xis) {
  let count = 0;
  formInput.forEach((key) => {
    if (key.value === '') {
      count += 1;
    }
  });
  if (count >= 1 || sexvar === '') {
    xis.preventDefault();
    formAlert();
  } else {
    const name = document.getElementsByName('firstname')[0].value;
    const lastname = document.getElementsByName('lastname')[0].value;
    const contactinf = document.getElementsByName('phone_email')[0].value;
    const bd = document.getElementsByName('birthdate')[0].value;
    const divResult = document.createElement('div');
    const fullName = `${name} ${lastname}`;
    rightContent.innerHTML = '';
    rightContent.appendChild(divResult);
    divResult.innerHTML =
    `Olá, ${fullName}
    Contato: ${contactinf}
    Data de Nascimento: ${bd}
    Gênero: ${sexvar}`;
  }
});
