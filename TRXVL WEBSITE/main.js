
  //HAM BURGER MENU//
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')
  const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("is-active");
  body.classList.toggle("onscroll")
});


let emailButton = document.querySelector("#emailButton")
let phoneButton = document.querySelector("#numberButton")
let neText = document.querySelector(".neText")
let phoneInput = document.querySelector(".neInput1")
let emailInput = document.querySelector(".neInput2")

emailButton.addEventListener("click" , ()=>{
    emailButton.classList.add("neActive")
    phoneButton.classList.remove("neActive")
    neText.innerHTML = "Enter your email address to receive a link to download the app."
    phoneInput.classList.add("phoneIsActive")
    emailInput.classList.add("emailIsActive")
})
phoneButton.addEventListener("click" , ()=>{
    phoneButton.classList.add("neActive")
    emailButton.classList.remove("neActive")
    neText.innerHTML = "Enter your phone number to receive a text with a link to download the app."
    phoneInput.classList.remove("phoneIsActive")
    emailInput.classList.remove("emailIsActive")
})




const mobileView = document.querySelector(".androidMenu")
let firstScroll = window.scrollY

let e = 4


window.addEventListener("scroll" , () => {
    if(firstScroll >= window.scrollY){
        mobileView.classList.remove("androidMenuHidden")
    }
    else{
        mobileView.classList.add("androidMenuHidden")
    }
})




const input = document.querySelector("#telPhone");

// initialise plugin
const iti = window.intlTelInput(input, {
  utilsScript: "/intl-tel-input/js/utils.js?1690975972744"
});


// on keyup / change flag: reset

input.addEventListener('change', reset);
input.addEventListener('keyup', reset);

