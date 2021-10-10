document.querySelector('.burger-menu').addEventListener('click', (e) => {
  document.querySelector('.burger-menu').classList.toggle('active')
  document.querySelector('.header-content').classList.toggle('active')
  if(document.querySelector('.burger-menu').classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
})