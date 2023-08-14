document.querySelector("button").addEventListener("click", convertTemperature);

function convertTemperature() {
  let temp = Number(document.querySelector("#tempConv").value);

  temp *= 9 / 5 + 32;

  document.querySelector("#newTemperature").innerText = temp;
}
