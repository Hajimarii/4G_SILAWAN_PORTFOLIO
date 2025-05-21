let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
     navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active'); 
}

const typed = new Typed('.multiple-text', {
     strings: ['Frontend Developer', 'Web Designer', 'Problem Solver'],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 1000,
     loop: true
});


document.querySelector('form').addEventListener('submit', function(e) {
     const inputs = this.querySelectorAll('input, textarea');
     let valid = true;
     inputs.forEach(input => {
          if (!input.value.trim()) {
               input.style.borderColor = 'red';
               valid = false;
          } else {
               input.style.borderColor = 'var(--main-color)';
          }
     });
     if (!valid) {
          e.preventDefault();
          alert("Please fill in all fields.");
     }
});

