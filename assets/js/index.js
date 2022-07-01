const getMoon = document.querySelector('#lua');
const getSun = document.querySelector('#sol');
function mudarLua() {
    getMoon.classList.add('colocar');
    document.body.style.backgroundColor = '#F1F1F1'; // #F1F1F1
    getSun.classList.remove('tirar');
}
function mudarSol() {
    getSun.classList.add('tirar');
    document.body.style.backgroundColor = '#292C35'; //#292C35
    getMoon.classList.remove('colocar');
} 
getMoon.addEventListener('click', mudarLua);
getSun.addEventListener('click', mudarSol);