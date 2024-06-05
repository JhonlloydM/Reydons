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
// FOR UPDATE MESSAGE Lower part //
document.addEventListener('DOMContentLoaded', function() {
  showMessage();
});

document.getElementById('close-button').addEventListener('click', function() {
  hideMessage();
});
document.getElementById('close-button2').addEventListener('click', function() {
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
document.addEventListener('DOMContentLoaded', function() {
  var messageBox = document.getElementById('message-box');
  var closeButton = document.getElementById('close-button');
  var closeButton = document.getElementById('close-button2');
});
// order modal config. //
const orderButton = document.querySelector('.order-button');
const modal1 = document.getElementById('modal1');
const closeModalButton = document.querySelector('.order_modal-close');
const selectElement = document.getElementById('siomai-select');
const chiliGarlicRadioButtons = document.querySelectorAll('input[type="radio"][name^="chili-garlic"]');
const driedGarlicRadioButtons = document.querySelectorAll('input[type="radio"][name^="dried-garlic"]');

orderButton.addEventListener('click', () => {
  modal1.classList.add('active-modal1');
  document.body.classList.add('modal-open'); // Add class to body to prevent scrolling
});

closeModalButton.addEventListener('click', () => {
  closeModal();
  resetModalContent();
});

function closeModal() {
  modal1.classList.remove('active-modal1');
  document.body.classList.remove('modal-open'); // Remove class from body to enable scrolling
}

function resetModalContent() {
  // Reset select element to default option
  selectElement.selectedIndex = 0;
  
  // Reset chili-garlic radio buttons to unchecked state
  chiliGarlicRadioButtons.forEach(radioButton => {
    radioButton.checked = false;
  });

  // Reset dried-garlic radio buttons to unchecked state
  driedGarlicRadioButtons.forEach(radioButton => {
    radioButton.checked = false;
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // Get all "Order" buttons
  const orderButtons = document.querySelectorAll('.add-to-cart-btn');
  const modalCloseButton = document.querySelector('.order_modal-close');

  // Get the side panel and its elements
  const sidePanel = document.getElementById('sidePanel');
  const orderDetails = document.getElementById('orderDetails');
  const totalAmount = document.getElementById('totalAmount');
  const buyButton = document.getElementById('buyButton');
  const clearButton = document.getElementById('clearButton');
  const closeButton = document.getElementById('closeButton');

  let total = 0;
  let orders = {};

  // Clear button click event handler
  clearButton.addEventListener('click', () => {
    orders = {};
    total = 0;
    updateSidePanel();
  });
  modalCloseButton.addEventListener('click', function() {
    // Reset the selected items and total amount
    orders = {};
    total = 0;
    updateSidePanel();
  });

  // Add click event listeners to "Order" buttons
  orderButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentElement.querySelector('.productname').textContent.trim();
      const price = parseInt(button.parentElement.querySelector('.product-price').textContent.replace('₱', ''));
      total += price;

      if (orders[product]) {
        orders[product].quantity++;
      } else {
        orders[product] = {
          quantity: 1,
          price: price
        };
      }

      updateSidePanel();
    });
  });

  // Update side panel with order details
  function updateSidePanel() {
    orderDetails.innerHTML = '';
    total = 0; // Reset total amount

    Object.keys(orders).forEach(product => {
      const orderItem = document.createElement('div');
      orderItem.textContent = `${product} x${orders[product].quantity} ₱${orders[product].price * orders[product].quantity}`;

const deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; // Use Font Awesome trash can icon
deleteButton.classList.add('delete-button');
deleteButton.addEventListener('click', () => {
  // Decrease quantity by 1 if greater than 1, otherwise delete the item
  if (orders[product].quantity > 1) {
    orders[product].quantity--;
  } else {
    delete orders[product];
  }
  updateSidePanel(); // Update side panel to reflect changes
});

orderItem.appendChild(deleteButton);
orderDetails.appendChild(orderItem);

      orderItem.appendChild(deleteButton);
      orderDetails.appendChild(orderItem);

      // Add the price of this item to the total
      total += orders[product].price * orders[product].quantity;
    });

    totalAmount.textContent = `Total: ₱${total}`;

    // Show side panel
    sidePanel.classList.add('active');
  }

  // Buy button click event handler
  buyButton.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    // Reset orders and total
    orders = {};
    total = 0;
    // Hide side panel
    sidePanel.classList.remove('active');
  });

  // Close button click event handler
  closeButton.addEventListener('click', () => {
    sidePanel.classList.remove('active');
  });
});
// modal inside the product
document.addEventListener('DOMContentLoaded', () => {
  const infoIcon = document.querySelector('.product_content-info');
  const modal = document.querySelector('.modal-info');
  const closeModal = document.querySelector('.close-2ndmodal');

  infoIcon.addEventListener('click', () => {
      modal.style.display = 'block';
      setTimeout(() => {
          modal.classList.add('fade-in');
          modal.classList.remove('fade-out');
      }, 10);
  });

  closeModal.addEventListener('click', () => {
      modal.classList.remove('fade-in');
      modal.classList.add('fade-out');
      setTimeout(() => {
          modal.style.display = 'none';
      }, 300); // Match this duration with your CSS transition duration
  });

  window.addEventListener('click', (e) => {
      if (e.target !== modal && e.target !== infoIcon && !modal.contains(e.target)) {
          modal.classList.remove('fade-in');
          modal.classList.add('fade-out');
          setTimeout(() => {
              modal.style.display = 'none';
          }, 300); // Match this duration with your CSS transition duration
      }
  });
});














