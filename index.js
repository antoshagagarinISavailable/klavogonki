const arr = "qwertyuiop[]asdfghjkl;zxcvbnm,./{}<>?:()iuercvbiuretcvbn".split(
  ""
);
const p = document.querySelector("p");

function random(max) {
  let min = 0;
  max = Math.floor(max);
  let res = Math.floor(Math.random() * (max - min + 1)) + min;
  if (arr[res] === p.textContent) {
    res = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  p.textContent = arr[res];
}

random(arr.length - 1);

window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() == p.textContent) {
    random(arr.length - 1);
    p.style.color = "#aaa";
  } else if (e.key !== p.textContent && e.key !== "Shift") {
    p.style.color = "tomato";
  }
});
