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
