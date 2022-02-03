const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
  if(pageYOffset > 100){
    toTop.classList.add("active");
  }
  else {
    toTop.classList.remove("active");
  }
});
