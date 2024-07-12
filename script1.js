const container = document.querySelector('.container');


const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';

// console.log(cloneContainer);
document.body.appendChild(cloneContainer);

 cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');


const darkContainerImg = document.querySelector('#dark-container .home-img img');

darkContainerImg.src = '1.png';


toggleIcons.forEach(toggle => { 
   toggle.addEventListener('click',() => { 

    toggle.classList.add('disabled') ;
    setTimeout(() => {
      toggle.classList.remove('disabled');
    },1500);

    icons.forEach(icon => { 
        icon.classList.toggle('bx-sun');
    });

    container.classList.toggle('active');
    darkContainer.classList.toggle('active');


   });
});

/**---------typing effect------------- */

var typingEffect = new Typed(".typedText",{
  Strings: ["Designer", "Coder", "Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed:80,
  backDelay:2000,
})

