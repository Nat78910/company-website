document.addEventListener("DOMContentLoaded", function() {
    var funLinks = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'http://www.zoomquilt.org/',
        'http://www.patience-is-a-virtue.org/',
        'https://cat-bounce.com/',
        'https://isitchristmas.com/',
        'http://endless.horse/',
        'http://corndog.io/',
        'http://www.hackertyper.com/',
        'http://www.trashloop.com/',
        'http://papertoilet.com/',
        'https://quickdraw.withgoogle.com/',
        'https://heeeeeeeey.com/',
        'http://eelslap.com/',
        'https://smashthewalls.com/',
        'https://jacksonpollock.org/',
        'http://www.movenowthinklater.com/',
        'http://www.rrrgggbbb.com/',
        'http://www.koalastothemax.com/',
        'https://thezen.zone/',
        'http://corndogoncorndog.com/',
        'https://chrismckenzie.com/'

    ]



    var keys = [];
    var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    $(document).keydown(function(keyEvent) {
        keys.push(keyEvent.keyCode);
        if (keys.length > code.length) {
            keys.shift();
        }
        if (keys.toString() == code.toString()) {
            var takeMeToRandomLink = Math.floor(Math.random() * funLinks.length);
            window.open(funLinks[takeMeToRandomLink], "_blank");
        }

        if (keyEvent.ctrlKey && keyEvent.shiftKey && keyEvent.keyCode == 'I'.charCodeAt(0)) {

            toastr.error("This feature has been disabled by your Administrator", "Code Central");
            return false;
        }
        if (keyEvent.ctrlKey && keyEvent.shiftKey && keyEvent.keyCode == 'J'.charCodeAt(0)) {
            toastr.error("This feature has been disabled by your Administrator", "Code Central");
            return false;
        }
        if (keyEvent.ctrlKey && keyEvent.keyCode == 'U'.charCodeAt(0)) {
            toastr.error("This feature has been disabled by your Administrator", "Code Central");
            return false;
        }

    });
    var pattern = ['r', 'i', 'c', 'k', 'r', 'o', 'l', 'l'];
    var current = 0;

    var keyHandler = function(event) {

        // If the key isn't in the pattern, or isn't the current key in the pattern, reset
        if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
            current = 0;

            return;
        }

        // Update how much of the pattern is complete
        current++;

        // If complete, alert and reset
        if (pattern.length === current) {
            current = 0;
            window.open("https://xanderendre.com/rickroll/", "_blank");
        }

    };

    // Listen for keydown events
    document.addEventListener('keydown', keyHandler, false);
});


// Fade Out text On Navbar

$(document).ready(function(){
    $("[href]").each(function(){
        if(this.href==window.location.href){
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
    });
});

// NavBar Animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navwords');
    const navLinks = document.querySelectorAll('.navwords li')
    


    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');  
    });

}


navSlide();

//new navbar stuff
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

document
  .getElementById("options")
  .querySelectorAll("input[name='navtype']")
  .forEach((option) => {
    option.addEventListener("change", (e) => {
      const navType = e.target.id.split("-").join(" ");
      navbarMenu.classList = navType;
    });
  });
