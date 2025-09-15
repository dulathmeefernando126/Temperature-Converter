const button = document.getElementById("btn");
const celsius = document.getElementById("celsius");
const kelvin = document.getElementById("kelvin");

button.addEventListener("click", function() {
    if(kelvin.value === "") {
        let newValue = convertToKelvin(celsius.value);
        kelvin.value = `${newValue}`;
    }
    else {
        let newValue = convertToCelsius(kelvin.value);
        celsius.value = `${newValue}`;
    }
})

function convertToKelvin(Value) {
    let Cels = parseFloat(Value);
    let newTemp = Cels + 274.15;
    return newTemp;
}

function convertToCelsius(Value) {
    let kel = parseFloat(Value);
    let newTemp = kel - 274.15;
    return Math.floor(newTemp);
}