// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of the Menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);

// Menu Scroll On Desktops & Laptops
if (document.documentElement.clientWidth > 1024) {
  // Access Menu When Bottom Of Page Is Reached With Scroll Down
  window.onscroll = function(e) {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      toggleMenu();
    }
  };

  // Access Menu With Mouse Scroll Down
  var body = document.querySelector(".showMenu");
  body.addEventListener("wheel", toggleMenu);
}
