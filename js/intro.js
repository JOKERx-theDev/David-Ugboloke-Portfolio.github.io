//WEBSITE LOADING
let loderPage = document.querySelector('.loading')

window.addEventListener('load',()=>{
    loderPage.style.display = 'none'
    preLoaded.style.display = 'block'

    sec = 0;
    timer = setInterval(()=>{
    sec ++
    if (sec >= 3){
        button.classList.add("buttonActive")
    }
    }, 1000)
    ()
})

//INTRO TO WEBSITE 
let preLoaded = document.querySelector('.onLoadContainer')
let loadedText = document.querySelector(".onLoadContent")
let button = document.querySelector(".loadedButton")
var timer;

window.history.forward()

function stopBack() {
    window.history.go(1);
  }
  window.history.forward();
  function noBack() {
      window.history.forward();
  }

  function preventBack(){window.history.forward();}
  setTimeout("preventBack()", 0);
  window.onunload=function(){null};

  window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.go(1);
};
document.addEventListener("backbutton", function(){}, false);
