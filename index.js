//создаем массив тех симолов, что будут в тренажере
const arr = "qwertyuiop[]asdfghjkl;'`xcvbnm,./".split("");
const p = document.querySelector("p");
//рандомный рендер символа
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
//слушатель по нажатию на клавиатуру
window.addEventListener("keydown", (e) => {
  if (e.key == p.textContent) {
    random(arr.length - 1);
  } else if (e.key !== p.textContent && e.key !== "Shift") {
    p.classList.add("errorAnim");
  }
});
//слушатель чтобы снять класс анимации после завершения анимации
p.addEventListener("animationend", () => {
  p.classList.remove("errorAnim");
});
