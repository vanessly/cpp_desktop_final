// Light and Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light-mode") {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}

modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Toggle Light Mode';
        localStorage.setItem("theme", "dark-mode");
    } else {
        modeToggle.textContent = 'Toggle Dark Mode';
        localStorage.setItem("theme", "light-mode");
    }
});


// Listen for window resize events to remove "hidden" class
window.addEventListener('resize', function() {
    if (window.innerWidth >= 650) {
        document.querySelector('nav > ul').classList.remove('show');
    }
});

// Mobile navigation toggle
const navToggle = document.getElementById('mobile-menu');
navToggle.addEventListener('click', function() {
    document.querySelector('nav > ul').classList.toggle('show');
});

if (localStorage.getItem('lightMode') === 'enabled') {
    document.body.classList.add('light-mode')
  }
