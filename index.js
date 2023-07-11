const arr = "qwertyuiop[]asdfghjkl;zxcvbnm,./{}<>?:()".split("");
const p = document.querySelector("p");

function random(max) {
  min = 0;
  max = Math.floor(max);
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  p.textContent = arr[res];
}

random(arr.length - 1);

window.addEventListener("keydown", (e) => {
  if (e.key == p.textContent) {
    random(arr.length - 1);
  }
});
