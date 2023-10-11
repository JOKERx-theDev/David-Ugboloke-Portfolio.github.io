//WEBSITE LOADING
let loderPage = document.querySelector('.loading')
let preLoaded = document.querySelector('.p')
preLoaded.style.display = 'none'
window.addEventListener('load',()=>{
    loderPage.style.display = 'none'
    preLoaded.style.display = 'block'
})

let projectListHeader = document.querySelector('.projectListHeader')
let projectListHeaderIcon = document.querySelector('#projectListHeaderi')
let projectList = document.querySelector('.projectList')
let projectLists = document.querySelector('.projectLists')

projectListHeader.addEventListener('click' , ()=>{
    projectListHeader.classList.toggle('projectListHeaderActive')
    projectListHeaderIcon.classList.toggle('projectListHeaderiActive')
    projectList.classList.toggle('projectListActive')
    projectLists.classList.toggle('projectListsActive')
})

//HAM BURGER MENU//
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector(".body")
let htmls = document.querySelector('.html')

  hamburger.addEventListener ("click" , () =>{
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("is-active");
  body.classList.toggle("onscroll")
  htmls.classList.toggle('scrolled')
});
