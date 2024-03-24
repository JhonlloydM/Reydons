/*=========== menu show btn ============ */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      /* MENU SHOW */
 if(navToggle) {
    navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
    })
 }
  /* MENU SHOW Y HIDDEN */
  if(navClose){
   navClose.addEventListener('click',() =>{
      navMenu.classList.remove('show-menu')
   })
  }

  /* remove menu mobile */
  const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

  /* active links nav- button */
  const sections = document.querySelectorAll('section[id]');

/*========================================== Service  modal ==========================*/
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
  // Add the 'modal-open' class to the body when the modal is active
  document.body.classList.add('modal-open');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
    // Remove the 'modal-open' class from the body when the modal is closed
    document.body.classList.remove('modal-open');
  });
});

modalViews.forEach((modalView) => {
  modalView.addEventListener('click', (event) => {
    if (event.target === modalView) {
      modalView.classList.remove('active-modal');
      // Remove the 'modal-open' class from the body when the modal is closed by clicking outside
      document.body.classList.remove('modal-open');
    }
  });
});
/*========================================== Service ==========================*/



function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop;
}
function scrollActive() {
  const scrollY = getScrollY();

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const menuLink = document.querySelector('.nav_menu a[href*="#' + sectionId + '"]');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      menuLink.classList.add('active-link');
    } else {
      menuLink.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* change background header */

function scrollHeader(event) {
   const nav = document.getElementById('header');
   if (event.currentTarget.scrollY >= 80) {
     nav.classList.add('scroll-header');
   } else {
     nav.classList.remove('scroll-header');
   }
 }
 
 window.addEventListener('scroll', scrollHeader);

 /* back to top btn */
 function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');
   if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');

  else {
   scrollUp.classList.remove('show-scroll');
 }
}
 window.addEventListener('scroll', scrollUp);

 /* Dark theme */
 const themeButton = document.getElementById('theme-button')
 const darkTheme = 'dark-theme'
 const iconTheme = 'uil-sun'  

 // Previously selected topic (if user selected)
 const selectedTheme = localStorage.getItem('selected-theme')
 const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'uil-moon': 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
}
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark 
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme) 
themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme) 
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose 
localStorage.setItem('selected-theme', getCurrentTheme()) 
localStorage.setItem('selected-icon', getCurrentIcon())
})
// FOR UPDATE MESSAGE //
document.addEventListener('DOMContentLoaded', function() {
  showMessage();
});

document.getElementById('close-button').addEventListener('click', function() {
  hideMessage();
});

function showMessage() {
  var messageBox = document.getElementById('message-box');
  messageBox.style.bottom = '20px'; // Slide up animation
}

function hideMessage() {
  var messageBox = document.getElementById('message-box');
  messageBox.style.bottom = '-100%'; // Slide down animation
}






