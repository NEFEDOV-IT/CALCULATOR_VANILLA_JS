const buttons = document.querySelectorAll('.num_btn')
const operations = document.querySelectorAll('.operation_btn')
const answer = document.getElementById('answer')
const deleteNumber = document.getElementById('delete')
const reload = document.getElementById('reload')
const result = document.getElementById('result')
let operation
let one
let two

for (let button of buttons) {
    button.onclick = function () {
        if (!one) {
            answer.innerHTML === '0' ? answer.innerHTML = button.innerHTML : answer.innerHTML += button.innerHTML;
        }
        if (one) {
            if (!two) {
                two = answer.innerHTML = button.innerHTML;
            } else {
                two = answer.innerHTML += button.innerHTML;
            }
        }
        if (answer.innerHTML.length > 7) {
            answer.innerHTML = answer.innerHTML.slice(0, 7)
        }
    }
}
for (let operationKey of operations) {
    operationKey.onclick = function () {
        if (one && two && operation) {
            answer.innerHTML = calc(operation, one, two);
        }
        operation = operationKey.innerHTML
        if (!one) {
            one = answer.innerHTML;
        }
    }
}

function getResult(result) {
    return `${result}`
}

function calc(operation, one, two) {

    const operators = {
        '+': getResult(+one + +two),
        '×': getResult(one * two),
        '–': getResult(one - two),
        '÷': getResult(one / two),
    }

    const result = operators[operation]
    return isFinite(result) ? result : 'Ошибка';
}

result.onclick = function () {
    if (one && two && operation) {
        answer.innerHTML = calc(operation, one, two);
        one = answer.innerHTML;
        if (answer.innerHTML.length > 7) {
            answer.innerHTML = (+answer.innerHTML).toExponential(1);
        }
    }
}

deleteNumber.onclick = function () {
    if (answer.innerHTML.length > 1) {
        answer.innerHTML = answer.innerHTML.slice(0, answer.innerHTML.length - 1)
    } else if (answer.innerHTML.length === 1) {
        answer.innerHTML = '0'
    }
}

reload.onclick = function () {
    answer.innerHTML = '0'
    one = null
    two = null
}


