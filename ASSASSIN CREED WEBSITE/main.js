var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
       },
    pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  const dot1 = document.querySelector('#first')
  const dot2 = document.querySelector("#second")
  const dot3 = document.querySelector("#third")
  const para1 = document.querySelector('.fea-para1')
  const para2 = document.querySelector('.fea-para2')
  const para3 = document.querySelector('.fea-para3')
  const head1 = document.querySelector(".head1")
  const head2 = document.querySelector(".head2")
  const head3 = document.querySelector(".head3")
    dot1.addEventListener("click" , () =>{
    para1.classList.toggle("para1");
});

    dot2.addEventListener ("click" , () =>{
    para2.classList.toggle("para2");
});

    dot3.addEventListener ("click" , () =>{
    para3.classList.toggle("para3");
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show1');
            entry.target.classList.add('show2');
            entry.target.classList.add('show3');
        } else{
            entry.target.classList.remove('show')
            entry.target.classList.remove('show1')
            entry.target.classList.remove('show2')
            entry.target.classList.remove('show3')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

const hidden1Elements = document.querySelectorAll('.hidden1')
hidden1Elements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll('.hidden2')
hidden2Elements.forEach((el) => observer.observe(el));

const hidden3Elements = document.querySelectorAll('.hidden3')
hidden3Elements.forEach((el) => observer.observe(el));

  //HAM BURGER MENU//
  const hamburger = document.querySelector('.ham-burg')
  const navMenu = document.querySelector('.nav-menu')
  const body = document.querySelector(".body")

  hamburger.addEventListener ("click" , () =>{
    hamburger.classList.toggle("active-nav");
    navMenu.classList.toggle("is-active");
    body.classList.toggle("onscroll")
});