let zero = document.querySelector('#zero')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eigth = document.querySelector('#eigth')
let nine = document.querySelector('#nine')
let divi = document.querySelector('#divi')
let multi = document.querySelector('#multi')
let sub = document.querySelector('#sub')
let som = document.querySelector('#som')
let result = document.querySelector('#equal')
let comma = document.querySelector('#comma')
let view = document.querySelector('#viewArea')
let count = ""

zero.onclick = insert
one.onclick = insert
two.onclick = insert
three.onclick = insert
four.onclick = insert
five.onclick = insert
six.onclick = insert
seven.onclick = insert
eigth.onclick = insert
nine.onclick = insert
divi.onclick = insert
multi.onclick = insert
sub.onclick = insert
som.onclick = insert
comma.onclick = insert
result.onclick = res

function insert(){
    count += this.value
    view.textContent = count
}

function res(){
    let x = eval(count)
    count = ""
    view.textContent = x
}