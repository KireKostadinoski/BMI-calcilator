// Get references to the radio buttons and divs
const metricBtn = document.getElementById('metricBtn');
const imperialBtn = document.getElementById('imperialBtn');

const metricInputDiv = document.getElementById("metricInputDiv");
const imperialInputDiv = document.getElementById("imperialInputDiv");

const state = document.getElementById("state");
const idealWeigth = document.getElementById("idealWeigth");

// Add event listeners for the radio buttons
metricBtn.addEventListener('change', function() {
  if (metricBtn.checked) {
    metricInputDiv.classList.remove('hidden');
    imperialInputDiv.classList.add('hidden');
  }
});

imperialBtn.addEventListener('change', function() {
  if (imperialBtn.checked) {
    imperialInputDiv.classList.remove('hidden');
    metricInputDiv.classList.add('hidden');
  }
});

// Initial state (hide one div on page load)
window.onload = function() {
  metricInputDiv.classList.remove('hidden'); // Show metric div by default
  imperialInputDiv.classList.add('hidden'); // Hide imperial div by default
};

const cmInput = document.getElementById("cmInput");
const kgInput = document.getElementById("kgInput");

const bmiValue = document.getElementById('bmiValue');

function calculateBMI() {
  const heightInCm = parseFloat(cmInput.value) || 0;
  const weightInKg = parseFloat(kgInput.value) || 0;

  if (heightInCm > 0 && weightInKg > 0) {
    // Convert height to meters
    const heightInMeters = heightInCm / 100;

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    bmiValue.textContent = bmi.toFixed(1);

    // Change the state based on BMI
    changeState(bmi);

    // Calculate the ideal weight range (18.5 and 24.9 are the healthy BMI range)
    const minWeight = (18.5 * (heightInMeters * heightInMeters)).toFixed(1);
    const maxWeight = (24.9 * (heightInMeters * heightInMeters)).toFixed(1);

    // Display the ideal weight range
    idealWeight.innerHTML = `${minWeight} kg - ${maxWeight} kg`;
  } else {
    // Handle invalid input (e.g., when fields are empty or values are 0)
    bmiValue.textContent = 'Invalid input';
    idealWeight.innerHTML = '';
  }
}

// Add event listeners to calculate BMI when the user inputs values
cmInput.addEventListener('input', calculateBMI);
kgInput.addEventListener('input', calculateBMI);

const feetInput = document.getElementById('feetInput');
const inchInput = document.getElementById('inchInput');
const stInput = document.getElementById('stInput');
const lbsInput = document.getElementById('lbsInput');

function calculateImperialsBMI() {
  const feet = parseFloat(feetInput.value) || 0;
  const inches = parseFloat(inchInput.value) || 0;
  const stones = parseFloat(stInput.value) || 0;
  const pounds = parseFloat(lbsInput.value) || 0;

  // Convert height to total inches
  const totalInches = (feet * 12) + inches;
  
  // Convert height to meters
  const heightMeters = totalInches * 0.0254;
  
  // Convert stones and pounds to total pounds
  const totalPounds = (stones * 14) + pounds;
  
  // Convert weight to kilograms
  const weightKg = totalPounds * 0.453592;

  // Calculate BMI
  const bmi = weightKg / (heightMeters * heightMeters);
  
  // Display the BMI value
  bmiValue.textContent = bmi.toFixed(2);

  // Update BMI state (Underweight, Healthy weight, etc.)
  changeState(bmi);

  // Calculate the ideal weight range based on the height in inches
  let from = Math.round((18.5 / 703) * Math.pow(totalInches, 2) * 10) / 10;
  let to = Math.round((24.9 / 703) * Math.pow(totalInches, 2) * 10) / 10;

  // Display the ideal weight range
  idealWeight.innerHTML = from + " lbs - " + to + " lbs";
}

// Add event listeners to trigger BMI calculation
feetInput.addEventListener('input', calculateImperialsBMI);
inchInput.addEventListener('input', calculateImperialsBMI);
stInput.addEventListener('input', calculateImperialsBMI);
lbsInput.addEventListener('input', calculateImperialsBMI);



function changeState(bmi) {
  if(bmi < 18.5) state.innerHTML = "Underweight";
  else if(bmi < 25) state.innerHTML = "Healthy weight";
  else if(bmi < 30) state.innerHTML = "Overweight";
  else if(bmi >= 30) state.innerHTML = "Obese";
}

// Add event listeners to trigger BMI calculation
feetInput.addEventListener('input', calculateImperialsBMI);
inchInput.addEventListener('input', calculateImperialsBMI);
stInput.addEventListener('input', calculateImperialsBMI);
lbsInput.addEventListener('input', calculateImperialsBMI);

