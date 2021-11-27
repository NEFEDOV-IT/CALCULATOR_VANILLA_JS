const buttons = document.querySelectorAll('.num_btn')
const div = document.getElementById('div')
const multi= document.getElementById('multi')
const sub = document.getElementById('sub')
const sum = document.getElementById('sum')
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
            answer.innerHTML === '0' ? answer.innerHTML = button.innerHTML : answer.innerHTML += button.innerHTML
        }
        if (one) {
            if (!two) {
                two = answer.innerHTML = button.innerHTML
            } else {
                two = answer.innerHTML += button.innerHTML
            }
        }
        if (answer.innerHTML.length > 7) {
            answer.innerHTML = answer.innerHTML.slice(0, 7)
        }
    }
}

div.onclick = function() {
    operation = 'div'
    operationCalc(operation)
}

multi.onclick = function() {
    operation = 'multi'
    operationCalc(operation)
}

sub.onclick = function() {
    operation = 'sub'
    operationCalc(operation)
}

sum.onclick = function() {
    operation = 'sum'
    operationCalc(operation)
}

function operationCalc(operation) {
    if(one && two && operation) {
        answer.innerHTML = calc(operation, one, two)
    }
    if (!one) {
        one = answer.innerHTML
    }
}

function calc(operation, one, two) {

    const operators = {
        'sum': +one + +two,
        'multi': one * two,
        'sub': one - two,
        'div': one / two,
    }

    const result = operators[operation]
    return isFinite(result) ? result : 'Ошибка'
}

result.onclick = function () {
    if (one && two && operation) {
        answer.innerHTML = calc(operation, one, two)
        one = answer.innerHTML
        if (answer.innerHTML.length > 7) {
            answer.innerHTML = (+answer.innerHTML).toExponential(1)
        }
    }
}

deleteNumber.onclick = function () {
    if (answer.innerHTML.length === 1) {
        answer.innerHTML = '0'
        one = null
        two = null
        operation = null
    } else if(!operation) {
        answer.innerHTML = answer.innerHTML.slice(0,-1)
    } else if(operation) {
        two = two.slice(0, -1)
        answer.innerHTML = two
    }
}

reload.onclick = function () {
    answer.innerHTML = '0'
    operation = null
    one = null
    two = null
}

