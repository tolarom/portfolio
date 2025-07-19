/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});
/*===== PROJECT IMAGE DISPLAY =====*/
const project1 = [
    "assets/img/project1_1.png",
    "assets/img/project1_2.png",
    "assets/img/project1_3.png"
  ];
let currentIndex1 = 0;

function showImage1(index) {
  document.getElementById('carouselImg1').src = project1[index];
}

function prevImage1() {
  currentIndex1 = (currentIndex1 - 1 + project1.length) % project1.length;
  showImage1(currentIndex1);
}

function nextImage1() {
  currentIndex1 = (currentIndex1 + 1) % project1.length;
  showImage1(currentIndex1);
}

const project2 = [
    "assets/img/project2_1.png",
    "assets/img/project2_2.png",
    "assets/img/project2_3.png",
    "assets/img/project2_4.png"
  ];
let currentIndex2 = 0;

function showImage2(index) {
  document.getElementById('carouselImg2').src = project2[index];
}

function prevImage2() {
  currentIndex2 = (currentIndex2 - 1 + project2.length) % project2.length;
  showImage2(currentIndex2);
}

function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % project2.length;
  showImage2(currentIndex2);
}

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text,  .education__img, .project__description, .project__description__3',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .education__description, .project__img__container, .contact__icon',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .contact__input',{interval: 200}); 
