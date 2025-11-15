let sushi = parseFloat(localStorage.getItem("puntuacion"));

if (isNaN(sushi)) {
  console.log("isNaN");
  sushi = 1;
  localStorage.setItem("puntuacion", sushi);
  console.log(sushi);
}

function moreSushis() {
  sushi = sushi * 1.001;
  localStorage.setItem("puntuacion", sushi);
  console.log(sushi);
  document.getElementById("Sushis").textContent = sushi.toFixed(6) + "🍣";
}
