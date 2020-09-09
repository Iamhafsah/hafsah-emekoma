let year = document.querySelector('.year');
let moon = document.querySelector('.moon');
let hafsah = document.querySelector('.hafsah');
let lightDark = document.querySelector('.light-dark');
let sun = document.querySelector('.sun');
let body = document.getElementsByTagName('body')[0];
let header = document.getElementsByTagName('header')[0];
let navUl = document.querySelectorAll('.nav-ul a');
let nameIntro = document.querySelector('.name-intro');
let projectCards = document.querySelectorAll('.project-container .card');
let projectImg = document.querySelectorAll('.project-container img');
let bodyIcons = document.querySelectorAll('.body a');
let toolBoxDiv = document.querySelectorAll('.tool-box div');
let toolBox = document.querySelectorAll('.tool-box img');
let contact = document.querySelectorAll('.more-info div');
let mailMe = document.querySelector('.mail-me');
let footerLine = document.querySelector('.footer-line');
let readMore = document.querySelectorAll('.articles-wrapper .read-more');



let date = new Date();
year.innerHTML = date.getFullYear();

moon.addEventListener('click', showDark);
sun.addEventListener('click', showLight);



// for the dark interface

function showDark(){
    
    // for the navigation li color
    for (let i = 0; i < navUl.length; i++) {
        navUl[i].style.color =  '#b7e8f8';
        navUl[i].addEventListener("mouseover", function(){
            navUl[i].style.borderBottom =  '2px solid #b7e8f8';
        })
        navUl[i].addEventListener("mouseleave", function(){
            navUl[i].style.borderBottom =  'none';
        });

    }

    // for project image container
    for (let card = 0; card < projectCards.length; card++) {
        projectCards[card].style.border = '2px solid #b7e8f8';
        projectCards[card].style.boxShadow = 'none';
    }

    // for project images
    for (let n = 0; n < projectImg.length; n++) {
        projectImg[n].style.border =  ' 5px solid #b7e8f8';
    }

    // for color of all icons
    for (let icon = 0; icon < bodyIcons.length; icon++) {
        bodyIcons[icon].style.color =  '#b7e8f8';
    }

    // articles box
    for (let read = 0; read < readMore.length; read++) {
        readMore[read].style.border = '2px solid #b7e8f8';
        readMore[read].style.boxShadow = 'none';
    }
    // for tool box styling
    for (let box = 0; box < toolBoxDiv.length; box++) {
        toolBoxDiv[box].style.border = '2px solid #b7e8f8';
        toolBoxDiv[box].style.boxShadow = 'none';
    }

    // for tool box image styling
    for (let tools = 0; tools < toolBox.length; tools++) {
        toolBox[tools].style.border = '5px solid #b7e8f8';
    }

    // contact section
    for (let info = 0; info < contact.length; info++) {
        contact[info].style.border = '2px solid #b7e8f8';
        contact[info].style.boxShadow = 'none';
    }

    // other element colors
    hafsah.style.color = ' #b7e8f8';
    header.style.backgroundColor = '#02091d';
    lightDark.style.backgroundColor = '#b7e8f8';
    moon.classList.add('hide');
    sun.classList.remove('hide');
    sun.style.color = '#02091d';
    body.style.backgroundColor =  '#02091d';
    body.style.color =   '#b7e8f8';
    nameIntro.style.backgroundImage = "url('/img/light.jpg')";    
    mailMe.style.border = '2px solid #b7e8f8';
    mailMe.style.boxShadow = 'none';
    footerLine.style.backgroundColor = '#b7e8f8';

}


// light interface

function showLight(){
    
    // for the navigation li color
    for (let i = 0; i < navUl.length; i++) {
        navUl[i].style.color = '#1E223F';
        navUl[i].addEventListener("mouseover", function(){
            navUl[i].style.borderBottom =  '2px solid #1E223F';
        })
        navUl[i].addEventListener("mouseleave", function(){
            navUl[i].style.borderBottom =  'none';
        });

    }

    // for project image container
    for (let card = 0; card < projectCards.length; card++) {
        projectCards[card].style.border = 'none';
        projectCards[card].style.boxShadow = '2px 1px 8px 3px rgb(176, 176, 240)';
    }

    // for project images
    for (let n = 0; n < projectImg.length; n++) {
        projectImg[n].style.border =  'none';
    }

    // for color of all icons
    for (let icon = 0; icon < bodyIcons.length; icon++) {
        bodyIcons[icon].style.color =  '#1E223F';
    }

    // articles box
    for (let read = 0; read < readMore.length; read++) {
        readMore[read].style.border = 'none';
        readMore[read].style.boxShadow ='2px 1px 8px 3px rgb(176, 176, 240)';
    }
    // for tool box styling
    for (let box = 0; box < toolBoxDiv.length; box++) {
        toolBoxDiv[box].style.border = 'none';
        toolBoxDiv[box].style.boxShadow ='2px 1px 8px 3px rgb(176, 176, 240)';
    }

    // for tool box image styling
    for (let tools = 0; tools < toolBox.length; tools++) {
        toolBox[tools].style.border = 'none';
    }

    // contact section
    for (let info = 0; info < contact.length; info++) {
        contact[info].style.border = 'none';
        contact[info].style.boxShadow = '2px 1px 8px 3px rgb(176, 176, 240)';
    }

    // other element colors
    hafsah.style.color = '#1E223F';
    header.style.backgroundColor = '#fff';
    lightDark.style.backgroundColor = '#1E223F';
    moon.classList.remove('hide');
    sun.classList.add('hide');
    sun.style.color = '#b7e8f8';
    body.style.backgroundColor =  '#fff';
    body.style.color =   '#1E223F';
    nameIntro.style.backgroundImage = "url('/img/dark-sparkle.jpg')";    
    mailMe.style.border = 'none';
    mailMe.style.boxShadow = '2px 1px 8px 3px rgb(176, 176, 240)';
    footerLine.style.backgroundColor = '#1E223F';

}

