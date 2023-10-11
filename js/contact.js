//WEBSITE LOADING
let loderPage = document.querySelector('.loading')

window.addEventListener('load',()=>{
    loderPage.style.display = 'none'
})


const username = document.getElementById('Name')
let email = document.getElementById('Email')
let message = document.getElementById('Message')
let contactButton = document.getElementById('contactMeContentButton')
let form = document.getElementById('form')
let formSuccess = document.getElementById('contactMeContentSuccess')
let currentDate = document.getElementById('contactMeOutputDate')

//PRE VIEW ASSINGING
let namePreView = document.getElementById('contactMeOutputTextName')
let emailPreView = document.getElementById('contactMeOutputTextEmail')
let MessagePreView = document.getElementById('contactMeOutputTextMessage')
let myName = "David";


username.addEventListener('input', ()=>{
    namePreView.innerHTML = `"`+username.value+`"`
    username.maxLength = "35"
})

email.addEventListener('input', ()=>{
    emailPreView.innerHTML = `"`+email.value+`"`
    email.maxLength = "40"
})

message.addEventListener('input', ()=>{
    MessagePreView.innerHTML = `"`+message.value+`"`
})


//DATE
let now = new Date() 
let dates = now.getDate()
let month = now.getMonth()+1
let day = now.getDay()
// FIXING DAY
if (day == 1 ){
    day = 'Mon'
}
else if(day == 2){
    day = 'Tue'
}
else if(day == 3){
    day = 'Wed'
}
else if(day == 4){
    day = 'Thr'
}
else if(day == 5){
    day = 'Fri'
}
else if(day == 6){
    day = 'Sat'
}
else if(day == 0){
    day = 'Sun'
}
//FIXING MONTHS
if(month == 1){
    month = 'Jan'
}
else if(month == 2){
    month = "Feb"
}
else if(month == 3){
    month = "Mar"
}
else if(month == 4){
    month = "Apr"
}
else if(month == 5){
    month = "May"
}
else if(month == 6){
    month = "Jun"
}
else if(month == 7){
    month = "Jul"
}
else if(month == 8){
    month = "Aug"
}
else if(month == 9){
    month = "Sep"
}
else if(month == 10){
    month = "Oct"
}
else if(month == 11){
    month = "Nov"
}
else if(month == 12){
    month = "Dec"
}


if (dates < 10){
    dates = "0" + dates
}

currentDate.textContent = '"' + day + ' ' + dates + ' ' + month + '"'


let formDate = currentDate.innerText





//SEND EMIAL
function sendMail(params){
    var tempParams = {
        MY: myName,
        Sendername:document.getElementById('Name').value,
        Senderemail:document.getElementById('Email').value,
        Sendermessage:document.getElementById('Message').value,
        Senderdate:formDate,
    }
    if(username.value == "" || email.value == '' || message.value == "" ){
    }else{
        emailjs.send('service_unz9efs', 'template_wg6wnx8',tempParams)
        .then(function(res){
            console.log('sucess', res.status)
        })
        form.addEventListener('submit',function(e){
            e.preventDefault()
            console.log('yes')
            
        form.classList.add('formTextInactive')
        formSuccess.classList.add('formSuccessActive')
        })
    }
}

//HAM BURGER MENU//
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
  hamburger.classList.toggle("active-nav");
  navMenu.classList.toggle("is-active");
  body.classList.toggle("onscroll")
});
