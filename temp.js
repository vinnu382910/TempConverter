function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    let temperatureInputVal = temperatureInput.value;
    let resultElement = document.getElementById("result");
    console.log(temperatureInputVal);
    if (temperatureInputVal === "") {
        resultElement.textContent = "Please Enter a Vail Input";
    }

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperature + 459.67) * 5 / 9;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) - 459.67;
        } else {
            convertedTemperature = temperature;
        }
    }

    resultElement.textContent = convertedTemperature.toFixed(2) + " " + toUnit;
}
