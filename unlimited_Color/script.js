let randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color
}

let randColor;

let startChangingColor = function () {
  randColor = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
    }, 100);
}

let stopChangingColor = function () {
  clearInterval(randColor);
  randColor = null;
}

document.getElementById("start").addEventListener('click', startChangingColor);

document.getElementById("stop").addEventListener('click', stopChangingColor)