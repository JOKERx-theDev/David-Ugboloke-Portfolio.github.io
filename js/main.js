
//WEBSITE LOADING
let loderPage = document.querySelector('.loading')

window.addEventListener('load',()=>{
    loderPage.style.display = 'none'
})
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
document.addEventListener("backbutton", function(){}, false);

//HAM BURGER MENU//
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("is-active");
  body.classList.toggle("onscroll")
});
