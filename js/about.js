//WEBSITE LOADING
let loderPage = document.querySelector('.loading')

window.addEventListener('load',()=>{
    loderPage.style.display = 'none'
})


let folder = document.querySelector('.aboutProfile')
let folderFile = document.querySelector('#aboutProfilefolder')
let files = document.querySelector('.aboutProfileFiles')
let file1 = document.querySelector('#aboutProfileFile1')
let file2 = document.querySelector('#aboutProfileFile2')
let presonalBtn = document.querySelector('.presonalInfo')
let professionalBtn = document.querySelector('.professionalInfo')
let presonalClose = document.querySelector('.presonalInfoClose')
let professionalClose = document.querySelector('.professionalInfoClose')
let personalContent = document.querySelector('.personalInfoContent')
let professionalContent = document.querySelector('.professionalInfoContent')
let personalPara = document.querySelector('.personalInfoP')
let professionalPara = document.querySelector('.professionalInfoP')


folder.addEventListener('click' , ()=>{
    folderFile.classList.toggle('aboutProfilefolderActive')
    files.classList.toggle('aboutProfileFilesActive')
})

file1.addEventListener('click' , ()=>{
    presonalBtn.classList.add('presonalInfoActive')
    personalContent.classList.add('personalInfoContentActive')
    professionalContent.classList.remove('professionalInfoContentActive')
    professionalBtn.classList.remove('professionalInfoActiveBorder')
    presonalBtn.classList.add('presonalInfoActiveBorder')
})

file2.addEventListener('click' , ()=>{
    professionalBtn.classList.add('professionalInfoActive')
    personalContent.classList.remove('personalInfoContentActive')
    professionalContent.classList.add('professionalInfoContentActive')
    professionalBtn.classList.add('professionalInfoActiveBorder')
    presonalBtn.classList.remove('presonalInfoActiveBorder')
})

personalPara.addEventListener('click' ,()=>{
    presonalBtn.classList.add('presonalInfoActiveBorder')
    professionalBtn.classList.remove('professionalInfoActiveBorder')
    personalContent.classList.add('personalInfoContentActive')
    professionalContent.classList.remove('professionalInfoContentActive')
})

professionalPara.addEventListener('click' , ()=>{
    professionalBtn.classList.add('professionalInfoActiveBorder')
    presonalBtn.classList.remove('presonalInfoActiveBorder')
    personalContent.classList.remove('personalInfoContentActive')
    professionalContent.classList.add('professionalInfoContentActive')
})

presonalClose.addEventListener('click',()=>{
    presonalBtn.classList.remove('presonalInfoActive')
    professionalBtn.classList.add('professionalInfoActive')
    personalContent.classList.remove('personalInfoContentActive')
    professionalBtn.classList.add('professionalInfoActiveBorder')
    personalContent.classList.remove('personalInfoContentActive')
    professionalContent.classList.add('professionalInfoContentActive')
})

professionalClose.addEventListener('click', ()=>{
    professionalBtn.classList.remove('professionalInfoActive')
    presonalBtn.classList.add('presonalInfoActive')
    presonalBtn.classList.add('presonalInfoActiveBorder')
    personalContent.classList.add('personalInfoContentActive')
    professionalContent.classList.remove('professionalInfoContentActive')
})


//HAM BURGER MENU//
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("is-active");
  body.classList.toggle("onscroll")
});
