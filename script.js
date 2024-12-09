const temp = document.getElementById('temp');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');
const convert = document.getElementById('convert');
const conversion = document.getElementById('conversion');
let result;

function answer() {

  if (toFahrenheit.checked && toCelsius.checked) {
    conversion.innerHTML = 'Please select only one conversion type';
  
  } else if (toCelsius.checked) {
    result = (temp.value - 32) * 5 / 9;
    conversion.innerHTML = `${temp.value}°F is ${result}°C`;

  } else if (toFahrenheit.checked) {
    result = (temp.value * 9 / 5) + 32;
    conversion.innerHTML = `${temp.value}°C is ${result}°F`;
    
    
  } else {
    conversion.innerHTML = 'Please choose a conversion type';
  }
}
