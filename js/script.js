// toggle class active untuk hamberger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di click
document.querySelector("#hamberger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};


// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
// searchBox untuk mengambil inputnya
const searchBox = document.querySelector("#search-box");
// ketika tb_search di click
document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    //searchbox diambil agar ketika di click lgsung focus ke inputan dan tidak perlu harus klik lagi di box input
    searchBox.focus();
    // e.preventDefault() = ini agar aksi default tidak di lakukan, biasa digunakan untuk submitform atau ingin pindah ke sebuah link tapi kita tidak mau melakukannya, penggunaan ini untuk membajak a pada html search-buttom agar ketika kita klik icon search di tentang kami atau menu dia tidak akan kembali ke bagian atas
    e.preventDefault();
}


//toggle class active untuk Shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika tb_shopping-cart di click
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
}






//klik di sembarang window atau diluar element
const hm = document.querySelector('#hamberger-menu');

// sb = search_btn
const sb = document.querySelector("#search-button");

// SC = Shopping-cart icon
const sc = document.querySelector("#shopping-cart-button");


// akan mendengarkan atau kasih event listener pada saat kita mengklik mousee, tapi akan di tangkap ketika di luar sidebar
document.addEventListener('click', function (e) {
    //untuk sidebar
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

    // untuk search box
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }

    // untuk shopping-card
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }

})





// modal box

const itemDetailModal = document.querySelector("#item-detail-modal");

const itemDetailButtons = document.querySelectorAll(".item-detail-button");

//kita harus kasih tau dulu mana itemDetailButtons yang di click karena bentuk nya nodelist. caranya kita lopping menggunakan forEach().
itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        // kita ubah nonflex jadi flex dulu
        itemDetailModal.style.display = 'flex';
        // preventDefault digunakan untuk event a tidak dijalankan
        e.preventDefault();
    };

});


// button close icon
const itemDetailCloseBtn = document.querySelector(".close-icon");

itemDetailCloseBtn.onclick = (e) => {
    itemDetailModal.style.display = "none";

    // e.preventDefault agar ketika di klik closenya, tidak akan ke skrol ke atas atau kembali ke home.
    e.preventDefault();
}



//klik di luar modal
// kenapa kita pake pake target modal? 
// karena ketika item detail tampil kan model box, seluruh bagian hitam transparan selain box putih item detail itu merupakan bagian modal, jadi ketika kita kasih target === modal di klik maka displaynya akan none, dan juga untuk box warna putih itu merupakan bagian dari modal-container
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none"
    }
}