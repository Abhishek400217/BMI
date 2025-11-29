function calcBMI() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;

  let bmi = w / ((h/100) * (h/100));
  console.log(bmi)
  document.getElementById("result").innerHTML = "You'r BMI is: "+ bmi.toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click",calcBMI);