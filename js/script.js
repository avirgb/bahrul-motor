// Toggle Menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// // Search
// const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');

// document.querySelector('#search-btn').onclick = (e) => {
//     searchForm.classList.toggle('active')
//     searchBox.focus();
//     e.preventDefault();
// }

// const searchBtn = document.querySelector('#search-btn');
// document.addEventListener('click', function (e) {
//     if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
//         searchForm.classList.remove('active');
//     }
// });

// // Cart
// const shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector('#shopping-cart-btn').onclick = (e) => {
//     shoppingCart.classList.toggle('active');
//     e.preventDefault();
// }

// const cartBtn = document.querySelector('#shopping-cart-btn');
// document.addEventListener('click', function (e) {
//     if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
//         shoppingCart.classList.remove('active');
//     }
// });

// Modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtns = document.querySelectorAll('.item-detail-btn');

itemDetailBtns.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display ='flex';
        e.preventDefault();
    }
})

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display ='none';
    e.preventDefault();
}

window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}

// Active Menu With Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .navbar-nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('aktif');
                document.querySelector('.navbar .navbar-nav a[href*=' + id + ']').classList.add('aktif');
            })
        }
    })
}

