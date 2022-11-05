// =============== managing popup - login and registration ============

const btnLogin = document.getElementById('login');
const btnSignup = document.getElementById('signup');

btnLogin.addEventListener('click', () => {
  document.getElementById('pop').style.display = 'flex';
});

btnSignup.addEventListener('click', (e) => {
  document.getElementById('popup-body-login').style.display = 'none';
  document.getElementById('popup-body-signup').style.display = 'flex';
  e.preventDefault();
});

document.getElementById('btn-close').addEventListener('click', () => {
  document.getElementById('pop').style.display = 'none';
});

document.getElementById('btn-close-2').addEventListener('click', () => {
  document.getElementById('pop').style.display = 'none';
});

// =============== N A V - 2 ===========

const nav2Items = document.getElementById('home-decor');

nav2Items.addEventListener('click', () => {
  alert('aa');
  window.location.href = '../categories/categories.html';
});

document.getElementsByClassName('nav-2-item').addEventListener('click', () => {
  window.location.href = '../categories/categories.html';
});

// =============== swiper ============

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// =============== check if username and password mached ============
