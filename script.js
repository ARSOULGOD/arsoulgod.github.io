// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;
const modal = document.getElementById('certificateModal');
const closeModal = document.querySelector('.close');

// Theme Toggle Functionality
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
}

// Smooth Scrolling for Navigation Links
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Certificate Modal Functions
function openCertificateModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCertificateModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Intersection Observer for Animations
function createIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Navbar Background on Scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = '0 2px 20px var(--shadow-color)';
    } else {
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = 'none';
    }
}

// Active Navigation Link Highlighting
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize Typing Effect
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
}

// Parallax Effect for Hero Section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-placeholder');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
}

// Skill Tags Animation
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('animate-tag');
    });
}

// Project Cards Hover Effect
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Contact Form Validation (if added later)
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.get('email') || !formData.get('email').includes('@')) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('message') || formData.get('message').length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}

// Utility Functions
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

// Performance Optimization: Throttle scroll events
const throttledScrollHandler = throttle(() => {
    handleNavbarScroll();
    highlightActiveNavLink();
    handleParallax();
}, 16); // ~60fps

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Initialize animations
    createIntersectionObserver();
    
    // Initialize typing effect
    setTimeout(initializeTypingEffect, 500);
    
    // Initialize project cards
    initializeProjectCards();
    
    // Initialize skill tags animation
    setTimeout(animateSkillTags, 1000);
    
    // Add event listeners
    themeToggle.addEventListener('click', toggleTheme);
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
    
    // Certificate modal
    if (modal) {
        closeModal.addEventListener('click', closeCertificateModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeCertificateModal();
            }
        });
    }
    
    // Scroll events
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Window resize handler
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    }, 250));
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeCertificateModal();
        }
    });
});

// Add CSS for additional animations
const additionalStyles = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .animate-tag {
        animation: tagFloat 0.6s ease-out forwards;
    }
    
    @keyframes tagFloat {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--nav-bg);
        backdrop-filter: blur(10px);
        border-top: 1px solid var(--border-color);
        padding: 1rem;
        box-shadow: 0 4px 20px var(--shadow-color);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex !important;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Console welcome message
console.log(`
🚀 Welcome to Arnav Rinawa's Portfolio!
📧 Contact: rinawarnav@gmail.com
🔗 Built with HTML, CSS, and JavaScript
✨ Features: Dark/Light theme, Responsive design, Smooth animations
`);
