let btnToggleTheme = document.querySelector('.toggleTheme');

let body = document.querySelector('body');
let iframe = document.querySelector('iframe');

console.log(btnToggleTheme);

btnToggleTheme.onclick = (event) => {
    body.classList.toggle('dark-theme');
    iframe.classList.toggle('dark-theme');
}