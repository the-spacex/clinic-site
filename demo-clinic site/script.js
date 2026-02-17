// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // Close mobile menu
    });
});

// Basic form submission (alert for demo; replace with real handling)

document.querySelector('.contact-form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
}