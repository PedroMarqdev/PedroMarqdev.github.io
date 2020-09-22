const cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'black';
const pixelBoard = document.querySelector('#pixel-board');
function pixelCor() {
  const pixel = document.querySelectorAll('.pixel');
  pixel.forEach((item) => {
    item.addEventListener('click', function () {
      item.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  });
}

function stylePixel() {
  const caixa = document.createElement('div');
  caixa.className = 'pixel';
  caixa.style.backgroundColor = 'white';
  caixa.style.height = '40px';
  caixa.style.width = '40px';
  caixa.style.border = '1px solid black';
  caixa.style.display = 'inline-block';
  pixelBoard.appendChild(caixa);
}
function inputSize() {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue > 50) {
    return (inputValue = 50);
  } else if (inputValue < 5) {
    return (inputValue = 5);
  }
  return inputValue;
}
function RgbAlea() {
  cores[1].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  cores[2].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  cores[3].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
}

function nulll() {
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
  }
}
RgbAlea();
window.onload = function () {
  cores[0].classList.add('selected');
  pixelCor();
};
function generatePixel(quadrados) {
  for (let index = 0; index < quadrados; index += 1) {
    stylePixel();
  }
}
generatePixel(25);
// Cor preta selecionada
cores[0].addEventListener('click', function () {
  for (let index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[0].classList.add('selected');
});
// Cor azul selecionada
cores[1].addEventListener('click', function () {
  for (let index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[1].classList.add('selected');
});
// Cor vermelha selecionada
cores[2].addEventListener('click', function () {
  for (let index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[2].classList.add('selected');
});
// Cor verde selecionada
cores[3].addEventListener('click', function () {
  for (let index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[3].classList.add('selected');
});
const pixel = document.querySelectorAll('.pixel');
const apaga = document.querySelector('.clear');
function apagao() {
  pixel.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
}
apaga.addEventListener('click', apagao);
const inputButton = document.querySelector('#generate-board');
function removeAll() {
  while (pixelBoard.firstElementChild) {
    pixelBoard.removeChild(pixelBoard.firstElementChild);
  }
}
inputButton.addEventListener('click', function () {
  nulll();
  const inputValue = inputSize();
  pixelBoard.style.height = `${inputValue * 42}px`;
  pixelBoard.style.width = `${inputValue * 42}px`;
  removeAll();
  generatePixel(inputValue * inputValue);
  pixelCor();
});
