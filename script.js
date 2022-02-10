const toTop = document.querySelector(".to-top");

window.addEventListener("load", carregar);
window.addEventListener("scroll",()=>{
  if(pageYOffset > 100){
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active");
  }
});

function carregar (){
  var msg = document.getElementById('msg');
  var img = document.getElementById('foto-do-dia');
  var fundo = document.querySelector('.hora-do-dia');
  var data = new Date();
  var hour = data.getHours();
  msg.innerHTML = `Agora são ${hour} horas.`

  if(hour >= 0 && hour < 12){
    //dia, e2cd9f
    img.src = "Photos/manha.jpg";
    fundo.style.background = '#e2cd9f';
  }
  else if(hour >= 12 && hour <= 18){
    //tarde
    img.src = "Photos/tarde.jpg";
    fundo.style.background = '#b9846f';
  }
  else{
    //noite
    img.src = "Photos/noite.jpg";
    fundo.style.background = '#515154';
  }

}
