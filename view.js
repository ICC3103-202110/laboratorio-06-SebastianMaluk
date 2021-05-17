const figlet = require("figlet")
const chalk = require("chalk")
const inquirer = require("inquirer")

function getTitle(){
    return chalk.green(
        figlet.textSync(
            "Unit Converter App",
            {
                horizontalLayout: "full",
                font: "Nancyj-Underlined"
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {
            "leftValue": leftValue,
            "leftUnit": leftUnit,
            "rightValue": rightValue,
            "rightUnit": rightUnit}
    ]
}

function inputForm(model){
    return inquirer.prompt([
        {
            name: "option",
            type: "confirm",
            message: "Left temperature is source? ",
            default: "(Y/n)",
        },
        {
            name: "tempValue",
            type: "number",
            message: "Temperature value to convert? ",
            default: 0,
        },
        {
            name: "from",
            type: "list",
            message: "From?",
            choices: ["Celsius", "Fahrenheit", "Kelvin"]
        },
        {
            name: "to",
            type: "list",
            message: "To? ",
            choices: ["Celsius", "Fahrenheit", "Kelvin"]
        }
    ])
}


function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    getTitle,
    inputForm,
    view
}
