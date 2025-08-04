const statusShow = document.getElementById("statusShow");

const btn = document.getElementById('add');

let check = 0;

btn.addEventListener('click', (e) => {
  if (check == 0) {
    statusShow.innerHTML = "Friend";
    statusShow.style.color = "#1eff11";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#5e5d5dff";
    check = 1;
  } else {
    statusShow.innerHTML = "Stranger";
    statusShow.style.color = "#ff0000";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "#1eff11";
    check = 0;
  }

})