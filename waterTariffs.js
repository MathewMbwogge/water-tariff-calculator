console.log("Hello!, based on your consumption;");

let consumption = Number(prompt("Enter your water metre reading in litres"));
let household = prompt("Are you an indigent household? (Yes/No)");

const step = [6000, 10500, 35000];
const rate = [0.01573, 0.02238, 0.03177, 0.06976];

let tariff;
if (consumption <= step[0]) {
    tariff = consumption * rate[0];
} else if (consumption > step[0] && consumption <= step[1]) {
    tariff = (step[0] * rate[0]) + ((consumption - step[0]) * rate[1]);
} else if (consumption > step[1] && consumption <= step[2]) {
    tariff = (step[0] * rate[0]) + ((consumption - step[0]) * rate[2]);
} else if (consumption > step[2]) {
    tariff = (step[0] * rate[0]) + ((consumption - step[0]) * rate[3]);
} else {
    tariff = "unknown";
    console.log("Invalid input");
    alert("Invalid input");
}

let condition;
if (consumption <= 10500 && household === "Yes") {
    tariff = 0;
} else if (consumption <= 10500 && household === "No") {
    tariff = tariff;
} else if (consumption > 10500 && household === "Yes") {
    tariff = tariff;
} else if (consumption > 10500 && houldhold === "No") {
    tariff = tariff;
} else {
    tariff = "unknown";
    console.log("Invalid input");
    alert("Invalid input");
}
console.log("Your water tariff for this month is £" + tariff.toFixed(2));
alert("Your water tariff for this month is £" + tariff.toFixed(2));
