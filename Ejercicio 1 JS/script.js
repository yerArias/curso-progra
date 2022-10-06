//En este ejercicio hay 4 errores


// set inital value to zero
let count 0;
// select value and buttons
const value = document.querySelector("#value");  
const btns = document.querySelectorAll(".btns");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 6;
    }

    if (count > 0) {
      value.style.color = "blue";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count = 0) {   
      value.style.color = "orange";
    }
    value.textContent = count;
  });
});