let calculateButton = document.getElementById("calculate")

calculateButton.addEventListener("click", decide)


function decide(){
    let inputinicial = document.getElementById("initialChoose")

    if (inputinicial.value === "Celsius"){
        conversionCelsius()
    } else if (inputinicial.value === "Kelvin"){
        conversionKelvin()
    } else if (inputinicial.value === "Fahrenheit"){
        conversioFahrenheit()
    }
}


function conversionCelsius(){

    let initialTemperature = parseFloat(document.getElementById("initialTemperature").value)
    let inputConversion = document.getElementById("temperatureChoose")
    let spanMensaje = document.getElementById("mensaje")

 
    if (inputConversion.value === "Fahrenheit"){
        let fahConversion = (initialTemperature*(9/5))+32

        spanMensaje.innerHTML = "Result in Fahrenheit is: " + fahConversion.toFixed(2)
        
    } else if (inputConversion.value === "Kelvin"){
        let kelConversion = initialTemperature + 273.15

        spanMensaje.innerHTML = "Result in Kelvin is: " + kelConversion.toFixed(2)
    } else {
        alert("Choose a different convertion factor")
    }
}
function conversionKelvin(){
    let initialTemperature = parseFloat(document.getElementById("initialTemperature").value)
    let inputConversion = document.getElementById("temperatureChoose")
    let spanMensaje = document.getElementById("mensaje")
 
    if (inputConversion.value === "Fahrenheit"){
        let fahConversion = 1.8*(initialTemperature-273.15)+32

        spanMensaje.innerHTML = "Result in Fahrenheit is: " + fahConversion.toFixed(2)
        
    } else if (inputConversion.value === "Celsius"){
        let celConversion = initialTemperature - 273.15

        spanMensaje.innerHTML = "Result in Celsius is: " + celConversion.toFixed(2)
    } else {
        alert("Choose a different convertion factor")
    }
}

function conversioFahrenheit(){
    let initialTemperature = parseFloat(document.getElementById("initialTemperature").value)
    let inputConversion = document.getElementById("temperatureChoose")
    let spanMensaje = document.getElementById("mensaje")
 
    if (inputConversion.value === "Celsius"){
        let fahConversion = (initialTemperature-32)*(5/9)

        spanMensaje.innerHTML = "Result in Celsius is: " + fahConversion.toFixed(2)
        
    } else if (inputConversion.value === "Kelvin"){
        let kelConversion = (initialTemperature-32)*(5/9)+273.15

        spanMensaje.innerHTML = "Result in Kelvin is: " + kelConversion.toFixed(2)
    } else {
        alert("Choose a different convertion factor")
    }
}


