//En este ejercicio hay 4 errores


// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");  
const btns = document.querySelectorAll(".btn");
console.log (btns)
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log (styles)
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "blue";
    }
    else if (count < 0) {
      value.style.color = "red";
    }
    else  {   
      value.style.color = "orange";
    }
    value.textContent = count;
  });
});