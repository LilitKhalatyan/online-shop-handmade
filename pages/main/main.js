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

// document.getElementsByClassName('home-decor').addEventListener('click', () => {
//   window.location.href = '../categories/categories.html';
// });

// =============== F O O T E R  ===========

// =============== F O O T E R  - Subscribe

const btnSubscribe = document.getElementById('btn-subscribe');
const subscribeInpt = document.getElementById('subscribe-inpt');
const subscribePopup = document.getElementById('subscribe-popup');
console.log(subscribeInpt.placeholder.placeholder);
btnSubscribe.addEventListener('click', () => {
  alert('aa');
  subscribePopup.style.display = 'flex';
});

document.getElementById('btn-close-subscribe').addEventListener('click', () => {
  subscribeInpt.placeholder = 'Enter your e-mail to subscribe'; // to fix later
  subscribePopup.style.display = 'none';
});
