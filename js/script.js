// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di click
document.querySelector("#hamberger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};


//klik di sembarang window untuk menutup side bar

const humberger = document.querySelector('#hamberger-menu');

// akan mendengarkan atau kasih event listener pada saat kita mengklik mousee, tapi akan di tangkap ketika di luar sidebar
document.addEventListener('click', function (e) {
    if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

})