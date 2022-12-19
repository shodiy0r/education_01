




function openNav() {
  document.getElementById("mySidepanel").style.top = "0";
  document.getElementById("navbar_img").style.opacity = "-10";
}

function closeNav() {
  document.getElementById("mySidepanel").style.top = "-100%";
  document.getElementById("navbar_img").style.opacity = "1";
}
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src ="/img/soon.svg";
    }else{
        icon.src="/img/navbar_nav-moon.svg";
    }
}