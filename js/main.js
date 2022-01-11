const result = document.querySelector('.result')
const calc = document.querySelector('.calc')
calc.addEventListener('click', () => {
    const km = document.querySelector('.km').value
    let mile = Math.trunc(km * 0.621371192)
    result.innerHTML = `${mile} mile`
})