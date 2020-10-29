let sex = document.getElementById('sex');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let bmi = document.getElementById('final-result');
let form = document.getElementById('bmi-form');
let container = document.querySelector('.container');

// Checks if there is already data in local storage
if(localStorage.getItem('sex') != null){
  console.log('local');
  sex.value = localStorage.getItem('sex');
  height.value = localStorage.getItem('height');
  weight.value = localStorage.getItem('weight');
}

// Events
container.addEventListener('click', saveToLocalStorage);

form.addEventListener('submit', function(e){

//Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateBMI, 1000);

  e.preventDefault();
});

function calculateBMI (e) {
  // Calculate
  let heightM = height.value / 100;
  let final = weight.value / Math.pow(heightM, 2);
  final = final.toFixed(2);
  // Validation
  if( final > 0) {
  //Hide loader
  document.getElementById('loading').style.display = 'none';

  // Show results
  document.getElementById('results').style.display = 'block';

  // Initialize results
  bmi.textContent = final;
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
  function saveToLocalStorage (e) {
    if (e.target.classList.contains('save')){
      localStorage.clear();
      localStorage.setItem('sex', sex.value);
      localStorage.setItem('height', height.value);
      localStorage.setItem('weight', weight.value);
    }
  }







