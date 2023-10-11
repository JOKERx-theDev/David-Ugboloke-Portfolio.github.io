const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            //BACKGROUND
            //HERO
            entry.target.classList.add('h11');
            entry.target.classList.add('h22');
            entry.target.classList.add('h33');
            //DISCOVER
            entry.target.classList.add('d11');
            //ABOUT
            entry.target.classList.add('a11');

            entry.target.classList.add('part1');
        } else{
            //BACKGROUND
            entry.target.classList.remove('b11')
            //HERO
            entry.target.classList.remove('h11')
            entry.target.classList.remove('h22')
            entry.target.classList.remove('h33')
            //DISCOVER
            entry.target.classList.remove('d11')
            //ABOUT
            entry.target.classList.remove('a11')

            entry.target.classList.remove('part1');
        }
    });
});
//HERO
const hiddenElements = document.querySelectorAll('.h1')
hiddenElements.forEach((el) => observer.observe(el));

const hidden1Elements = document.querySelectorAll('.h2')
hidden1Elements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll('.h3')
hidden2Elements.forEach((el) => observer.observe(el));

//DISCOVER
const hidden3Elements = document.querySelectorAll('.d1')
hidden3Elements.forEach((el) => observer.observe(el));
//ABOUT
const hidden4Elements = document.querySelectorAll('.a1')
hidden4Elements.forEach((el) => observer.observe(el));
//BACKGROUND
const hidden0Elements = document.querySelectorAll('.part')
hidden0Elements.forEach((el) => observer.observe(el));




let sectionsEls = document.querySelectorAll('.section')
let navLinkEls = document.querySelectorAll('.nav_link')


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



