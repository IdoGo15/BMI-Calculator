let sex = document.getElementById('sex');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let bmi = document.getElementsByClassName('final-result');
let form = document.getElementById('bmi-form');

// Events
form.addEventListener('submit', function(e){
  // Loader
  // document.getElementById('loading').style.display = 'block';

  setTimeout(calculateBMI, 0);

  e.preventDefault();
});

function calculateBMI (e) {
  // Calculate
  let heightM = height.value / 100;
  let final = weight.value / Math.pow(heightM, 2);
  final = final.toFixed(2);
}



