function update(input, model){
    const {option} = input
    const {tempValue} = input
    const {from} = input
    const {to} = input
    var result = 0
    if (from === "Celsius") {
        if (to === "Celsius") {
            result = tempValue
        } else if (to === "Fahrenheit") {
            result = (tempValue * 9/5) + 32
        } else if (to === "Kelvin") {
            result = tempValue + 273
        }
    } else if (from === "Fahrenheit") {
        if (to === "Fahrenheit") {
            result = tempValue
        } else if (to === "Celsius") {
            result = (tempValue - 32) * 5/9
        } else if (to === "Kelvin") {
            result = (tempValue - 32) * 5/9 + 273.15
        }
    } else if (from === "Kelvin") {
        if (to === "Kelvin") {
            result = tempValue
        } else if (to === "Celsius") {
            result = tempValue - 273.15
        } else if (to === "Fahrenheit") {
            result = (tempValue - 273.15) * 9/5 + 32
        }
    }
    if (option) {
        return {
            ...model,
            leftValue: tempValue,
            leftUnit: from,
            rightValue: result,
            rightUnit: to
        }
    } else {
        return {
            ...model,
            leftValue: result,
            leftUnit: to,
            rightValue: tempValue,
            rightUnit: from
    }
    }
}

module.exports = {
    update
}
