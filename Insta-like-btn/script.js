const pic = document.getElementById('pic');

const heart = document.getElementById("heart");

pic.addEventListener('dblclick', () => {
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  heart.style.opacity = "0.8";
  setTimeout(() => {
    heart.style.opacity = "0";
  }, 500);
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 600);
})