
const btnClean = document.querySelector('.send');
const btnSend = document.querySelector('.send');
const agree2 = document.querySelector('#agree2');
function buttons(evento) {
  if(agree2 === off){

    evento.preventDefault();
  }
  
}
window.onload = function() {
  
  btnSend.addEventListener('click', buttons);
}