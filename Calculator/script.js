const buttons = document.querySelectorAll('button');
const display = document.getElementById('display')

for (let button of buttons) {

  button.addEventListener('click', (event) => {

    let value = event.target.innerText;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (event) {
        display.value = 'Invalid Operation';
      }
    } else {
      display.value += value;
    }

    

  })
}