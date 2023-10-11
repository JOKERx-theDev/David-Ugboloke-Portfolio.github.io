let sectionsEls = document.querySelectorAll('.section')
let navLinkEls = document.querySelectorAll('.link')
let nav = document.querySelector(".nav")


let currentSection = 'hero';
window.addEventListener('scroll', () =>{
    sectionsEls.forEach(sectionsEl =>{
        if (window.scrollY >= (sectionsEl.offsetTop - sectionsEl.clientHeight / 2)){
            currentSection = sectionsEl.id;
        }
    })

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)){
            document.querySelector(".active").classList.remove('active')
            navLinkEl.classList.add('active')
        }
    })

    if (nav){
        nav.classList.add("scrolled")
    }

})

  //HAM BURGER MENU//
  const hamburger = document.querySelector('.ham-burg')
  const navMenu = document.querySelector('.nav-menu')
  const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
    hamburger.classList.toggle("active-nav");
    navMenu.classList.toggle("is-active");
    body.classList.toggle("onscroll")
});
