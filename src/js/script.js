function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let display = document.getElementById("display").value;
  try {
      document.getElementById("display").value = eval(display);
  } catch (error) {
      document.getElementById("display").value = "Erro";
  }
}
function toggleTheme() {
  if(document.body.classList.value == 'light'){
    document.body.classList.remove('light');
    document.body.classList.toggle("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.toggle('light');
  }
}
document.getElementById("tema").addEventListener("click", toggleTheme);