#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.yellowBright.bold("\n\t Wellcome to Muhammad Amsal Cli Calculator\n"));
let numbers = await inquirer.prompt([
    {
        type: "number",
        message: chalk.blue.bold("Please Enter First Number"),
        name: "firstNumber"
    },
    {
        type: "number",
        message: chalk.blue.bold("Please Enter Second Number"),
        name: "secondNumber"
    },
    {
        type: "list",
        message: chalk.blue.bold("Select One Operator to Perform Operation"),
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"]
    }
]);
if (numbers.operator === "Addition") {
    console.log(chalk.yellowBright.bold(`\n\tAnswer is ${numbers.firstNumber + numbers.secondNumber}`));
}
else if (numbers.operator === "Subtraction") {
    console.log(chalk.yellowBright.bold(`\n\tAnswer is ${numbers.firstNumber - numbers.secondNumber}`));
}
else if (numbers.operator === "Multiplication") {
    console.log(chalk.yellowBright.bold(`\n\tAnswer is ${numbers.firstNumber * numbers.secondNumber}`));
}
else if (numbers.operator === "Divison") {
    console.log(chalk.yellowBright.bold(`\n\tAnswer is ${numbers.firstNumber / numbers.secondNumber}`));
}
else {
    console.log("\n\t Please Write a Number");
}
