// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

hamburger.addEventListener('click', () => {
    navMenuWrapper.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenuWrapper.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Nav Slider Animation
const navSlider = document.querySelector('.nav-slider');
const navLinks = document.querySelectorAll('.nav-menu li a');

function moveSlider(target) {
    if (!navSlider || !target) return;

    const linkRect = target.getBoundingClientRect();
    const wrapperRect = navMenuWrapper.getBoundingClientRect();

    const left = linkRect.left - wrapperRect.left;
    const width = linkRect.width;

    navSlider.style.left = `${left}px`;
    navSlider.style.width = `${width}px`;
}

// Initialize slider position
window.addEventListener('load', () => {
    const activeLink = document.querySelector('.nav-menu li a.nav-active');
    if (activeLink) {
        moveSlider(activeLink);
    }
});

// Move slider on click
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('nav-active'));
        this.classList.add('nav-active');
        moveSlider(this);
    });
});

// Update slider on window resize
window.addEventListener('resize', () => {
    const activeLink = document.querySelector('.nav-menu li a.nav-active');
    if (activeLink) {
        moveSlider(activeLink);
    }
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

function updateNavbarBackground() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', () => {
    updateNavbarBackground();
    lastScroll = window.pageYOffset;
});

// Initial call
updateNavbarBackground();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.service-card, .strength-item, .project-card, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add fade-in class style
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Duplicate review and partner tracks for infinite scroll
function duplicateTrack(trackSelector) {
    const track = document.querySelector(trackSelector);
    if (track) {
        const items = track.innerHTML;
        track.innerHTML = items + items;
    }
}

duplicateTrack('.review-track');
duplicateTrack('.partner-track');

// Pause animations on hover
document.querySelectorAll('.review-track, .partner-track').forEach(track => {
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message (in real implementation, send to server)
        alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');

        // Reset form
        contactForm.reset();
    });
}

// Counter animation for track section
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when track section is visible
const trackSection = document.querySelector('.track');
const amountNumber = document.querySelector('.amount-number');

if (trackSection && amountNumber) {
    const trackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(amountNumber, 16);
                trackObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    trackObserver.observe(trackSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle-input');

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    if (themeToggle) themeToggle.checked = false;
} else {
    // Default to dark mode
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.checked = true;
}

// Toggle theme on switch change
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        // Update navbar background on theme change
        updateNavbarBackground();
    });
}
