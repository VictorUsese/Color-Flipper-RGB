/*const redBtn = document.getElementById('red-btn');
const greenBtn = document.getElementById('green-btn');
const blueBtn = document.getElementById('blue-btn');
const randomBtn = document.getElementById('random-btn');

redBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
})

greenBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
})

blueBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
})

randomBtn.addEventListener('click', () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})*/


const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('red')) {
      document.body.style.backgroundColor = 'red';
    } else if (btn.classList.contains('green')) {
      document.body.style.backgroundColor = 'green';
    } else if (btn.classList.contains('blue')) {
      document.body.style.backgroundColor = 'blue';
    } else if (btn.classList.contains('random')) {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})` 
    }
  })
})





