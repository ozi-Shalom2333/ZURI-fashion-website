// Debounce function to limit the rate at which a function gets called.
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Go to Top Button
const goToTopButton = document.querySelector('.go-to-top');
if (goToTopButton) {
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > window.innerHeight * 0.5) {
            goToTopButton.classList.add('show-button');
        } else {
            goToTopButton.classList.remove('show-button');
        }
    }, 100));

    goToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isActive);
        if (isActive) {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        } else {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
    });
}

// Sticky Nav on Scroll
const nav = document.querySelector('nav');
if (nav) {
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, 100));
}

// Set Active Nav Link
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.getAttribute('data-page');
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('.')[0];
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});