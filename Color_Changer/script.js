// change color 

let body = document.querySelector("body")
document.getElementById("color-box").addEventListener('click', function (event) {
  let clickedBox = event.target;

  if (clickedBox.classList.contains("box")) {
    let color = clickedBox.style.backgroundColor;
    body.style.backgroundColor = color;
  }
})