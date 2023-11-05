const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");
const toggleNavbar = () => {
    nav_header.classList.toggle("Hactive");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
////////////////////////////////
window.addEventListener("scroll", function () {
    var header = document.querySelector(".all-head-item");
    header.classList.toggle("sticky", window.scrollY > 0);
})
///////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navBar ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navBar ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
//////////////////////
let text = "It is still being worked on"
function show(){
    alert(text);
}
