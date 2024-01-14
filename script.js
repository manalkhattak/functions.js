// FUNCTION

                          // FUNCTION DECLARATION
// function greetUser(){
//     console.log("Welcome Ms.Manal!")
// }

                         // CALLING A FUNCTION
// greetUser() 
// greetUser()
// greetUser()

            // A FUNCTION WITH PARAMETER---PARAMETERIZED FUNCTION
// function greetUser(username){
//     console.log(`Welcome Ms.${username}!`)
// }
// greetUser('Sohana')

// function konBaraHai(a,b){
//     if (a > b){
//         console.log("A bara hai.")
//     }
//     else{
//         if (b > a){
//          console.log("B bara hai.")
//     }
//      else{
//         console.log("Koi bara nahi hai.")
//     }
//     }
// }
// konBaraHai(26,13)
// konBaraHai(4,4)

// Write a function that calculates the BMI of a person
// ask user his weight and height(BMI = w/h**2)

// function bmiCalc(weight,height){
//     BMI = weight/(height**2)

//     if (BMI >= 40){
//         return "Obese"
//     }
//     else if (BMI >= 25 && BMI <= 40){
//         return "Overweight"
//     }
//     else if (BMI >= 18.5 && BMI < 25){
//         return "Normal"
//     }
//     else{
//         return "Underweight"
//     }
    
// }
// let weightInKg = parseFloat(prompt("Please enter your weight in kilograms."))
// let heightInM = (parseFloat(prompt("Please enter your height in feet")))/3.3
// console.log(`Dear Sir you are ${bmiCalc(weightInKg,heightInM)}.`)
// console.log(`Your BMI is ${BMI}.`)


// function commission_calc(units, price) {
//     let commission = 0
//     let total_sales = unit_sale * unit_price


//     if (total_sales >= 100000) {
//         commission = total_sales * .10

//     }
//     else if (total_sales >= 50000) {
//         commission = total_sales * .5

//     }
//     else if (total_sales >= 30000) {
//         commission = total_sales * .3

//     }
//     else {
//         commission = total_sales * .1

//     }
//     console.log("Your commission is", commission)
// }
// let unit_sale = Number(prompt("Enter units of sold items"))
// let unit_price = Number(prompt("Enter price of sold items"))
// commission_calc(unit_sale, unit_price)