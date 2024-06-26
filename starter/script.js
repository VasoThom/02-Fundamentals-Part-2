/* Write your code below. Good luck! 🙂 


CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array total containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/


const calcTip = (bill) => {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip;
}

console.log(calcTip(100))

let bills = [125, 555, 44]


let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);















/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

*/





let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

let markBMI = mark.calcBMI();
let johnBMI = john.calcBMI();
/*if (mark.bmi > john.bmi) {
  console.log(`Mark Miller's BMI ${mark.bmi} is higher than John Smith's ${john.bmi}!`);
} else if (mark.bmi < john.bmi) {
  console.log(`John Smith's BMI ${john.bmi} is higher than Mark Miller's ${mark.bmi}!`);
} else {
  console.log("Mark Miller and John Smith have the same BMI!");
}*/

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}






const calcTip1 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
let bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips1 = [];
let totals = [];

for (let i = 0; i < bills1.length; i++) {
    const tip = calcTip1(bills1[i]);
    tips1.push(tip);
    const total = bills1[i] + tip;
    totals.push(total);
}

console.log("Tips:", tips1);
console.log("Totals:", totals);


const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};


const average = calcAverage(totals);
console.log("Average:", average);




