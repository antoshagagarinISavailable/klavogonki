const arr = "qwertyuiop[]asdfghjkl;xcvbnm,./{}<>?:()iuercvbiuretcvbn-+=_"
  .toUpperCase()
  .split("");
const p = document.querySelector("p");

function random(digit) {
  let min = 0;
  let max = Math.floor(digit);
  let res = Math.floor(Math.random() * (max - min + 1)) + min;
  if (arr[res] === p.textContent) {
    res = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  p.textContent = arr[res];
}

random(arr.length - 1);

window.addEventListener("keydown", (e) => {
  if (e.key.toUpperCase() == p.textContent) {
    random(arr.length - 1);
    p.style.color = "#aaa";
  } else if (e.key !== p.textContent && e.key !== "Shift") {
    p.style.color = "tomato";
  }
});
