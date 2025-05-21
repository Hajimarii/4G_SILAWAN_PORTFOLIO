document.addEventListener('DOMContentLoaded', () => {

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      navbar.classList.toggle('active');
      menuIcon.classList.toggle('bx-x');
    };

    window.onscroll = () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };
  }


  if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Web Designer', 'Problem Solver'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
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
        alert('Please fill in all fields.');
      }
    });
  }

});
