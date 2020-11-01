let sex = document.getElementById('sex');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let bmi = document.getElementById('final-result');
let form = document.getElementById('bmi-form');
let container = document.querySelector('.container');
let bmiStatus = document.getElementById('bmiStatus');

// Checks if there is already data in local storage
if(localStorage.getItem('sex') != null){
  sex.value = localStorage.getItem('sex');
  height.value = localStorage.getItem('height');
  weight.value = localStorage.getItem('weight');
}

// Events

form.addEventListener('submit', function(e){

//Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateBMI, 1000);

  e.preventDefault();
});

function calculateBMI (e) {
  // Validation
  if(height.value > 0 && weight.value > 0) {
    // Calculate
    let heightM = height.value / 100;
    let final = weight.value / Math.pow(heightM, 2);
    final = final.toFixed(2);
     // Initialize results
    bmi.textContent = final;
    // Initialize range status
    if (final < 18.5) { bmiStatus.textContent = 'You are in the underweight range'; }
    else if (18.5 < final && final < 25) { bmiStatus.textContent = 'You are in the healthy weight range';}
    else if (25 < final && final < 29.9) { bmiStatus.textContent = 'You are in the overweight range';}
    else if (30 < final) { bmiStatus.textContent = 'You are in the obese range'; }

    //Hide loader
    document.getElementById('loading').style.display = 'none';
    // Show results
    document.getElementById('results').style.display = 'block';
    saveToLocalStorage();
  }

  else {
    // Hide Loader
    document.getElementById('loading').style.display = 'none';
    // Error
    showError('Please Enter Valid Height & Weight');
  }
}

  // Show Error
  function showError(error) {
    //Hide results
    document.getElementById('results').style.display = 'none';
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Creats new Error div
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    
    setTimeout(clearError, 3000);
  }

  function clearError() {
    document.querySelector('.alert').remove();
  }

  // Save to local storage
  function saveToLocalStorage () {
      localStorage.clear();
      localStorage.setItem('sex', sex.value);
      localStorage.setItem('height', height.value);
      localStorage.setItem('weight', weight.value);
  }

 









