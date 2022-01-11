const result = document.querySelector('.result')
const multipl = document.querySelector('.calc')
const divide = document.querySelector('.divide')

multipl.addEventListener('click', function(e) {
    const input1 = document.querySelector('.input1').value;
    const input2 = document.querySelector('.input2').value;
    e.preventDefault();
    let multi = input1 * input2;

    result.innerHTML = multi
})

divide.addEventListener('click', (d) => {
    const input1 = document.querySelector('.input1').value;
    const input2 = document.querySelector('.input2').value;
    d.preventDefault();
    let multi = input1 / input2;

    result.innerHTML = multi
})