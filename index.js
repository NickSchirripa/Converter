let inputEl = document.getElementById("input-el")
let convert = document.getElementById("convert")
let length1 = document.getElementById("length")
let volume2 = document.getElementById("volume")
let weight2 = document.getElementById("weight")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204
const feetToMeter = 0.3048
const gallonsToLiters = 3.78541
const poundToKilo = 0.453592

convert.addEventListener("click", function() {
   let baseLine = inputEl.value 
   length1.textContent = `${baseLine} meter = ${baseLine * meterToFeet.toFixed(3)} feet | ${baseLine} feet = ${baseLine * feetToMeter.toFixed(3)} meters` 
   volume2.textContent = `${baseLine} liters = ${baseLine * literToGallon.toFixed(3)} gallons | ${baseLine} gallons = ${baseLine * gallonsToLiters.toFixed(3)} liters`
   weight2.textContent = `${baseLine} kilograms = ${baseLine *kiloToPound.toFixed(3)} pounds | ${baseLine} pounds = ${baseLine * poundToKilo.toFixed(3)} kilograms`
   
})