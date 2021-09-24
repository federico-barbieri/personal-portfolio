// INTRO

// NAV

const burgerMenu = document.querySelector('.fa-bars');

const burgerNav = document.querySelector('.burger-nav');

burgerMenu.addEventListener('touchstart', () =>{
  burgerMenu.style.display = 'none';
  burgerNav.style.display = 'flex';
})


// Road 2 Danish

const road = document.querySelector('.road');

const danish = document.querySelector('.danish');

const two = document.querySelector('.two');


const danishProject = document.getElementById('road-to-danish-project');

danishProject.addEventListener('mouseenter', () =>{
  road.innerHTML = 'Vej';
  danish.innerHTML = 'Dansk';
  two.innerHTML = 'til';
})

danishProject.addEventListener('mouseleave', () =>{
  road.innerHTML = 'Road';
  danish.innerHTML = 'Danish';
  two.innerHTML = '2';
})

// The Quote Library

const quoteTitle = document.querySelector('.quote-library-title');

const quoteProject = document.getElementById('quote-library-project');

quoteProject.addEventListener('mouseenter', () =>{
  quoteTitle.innerHTML = '"The Quote Library"';
})

quoteProject.addEventListener('mouseleave', () =>{
  quoteTitle.innerHTML = 'The Quote Library';
})
