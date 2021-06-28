const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const body = document.querySelector("body");
body.style = `background-color: ${
  colors[randomIntegerFromInterval(0, colors.length - 1)]
}`;

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

let id;

const start = () => {
  id = setInterval(() => {
    body.style = `background-color: ${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
  }, 1000);
  btnStart.setAttribute("disabled", true);
  btnStop.removeAttribute("disabled");
};

const stop = () => {
  clearInterval(id);
  id = 0;
  btnStop.setAttribute("disabled", true);
  btnStart.removeAttribute("disabled");
};

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
