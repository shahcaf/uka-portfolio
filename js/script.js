// DOM Elements
const preloader = document.querySelector('.preloader');
const progressBar = document.querySelector('.progress-bar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-link');

// Preloader Animation
function initPreloader() {
    // Ensure elements exist
    if (!preloader || !progressBar) return;
    
    // Reset styles
    preloader.style.display = 'flex';
    progressBar.style.width = '0%';
    
    // Create loading text element if it doesn't exist
    let loadingText = document.querySelector('.loading-text');
    if (!loadingText) {
        loadingText = document.createElement('div');
        loadingText.className = 'loading-text';
        document.querySelector('.preloader-logo').appendChild(loadingText);
    }
    loadingText.textContent = 'LOADING';
    
    // Simulate loading progress with realistic increments
    let progress = 0;
    const loadingPhrases = [
        { min: 0, max: 20, text: 'INITIALIZING...' },
        { min: 20, max: 50, text: 'LOADING ASSETS...' },
        { min: 50, max: 80, text: 'FINALIZING...' },
        { min: 80, max: 100, text: 'ALMOST THERE...' }
    ];
    
    // Clear any existing intervals to prevent multiple instances
    if (window.loadingInterval) {
        clearInterval(window.loadingInterval);
    }
    
    window.loadingInterval = setInterval(() => {
        // Increment progress with random variation for realism
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
            console.log(`Progress: ${progress}%`); // Debug log
        }
        
        // Update loading text based on progress
        const currentPhase = loadingPhrases.find(p => progress >= p.min && progress <= p.max);
        if (currentPhase && loadingText) {
            loadingText.textContent = currentPhase.text;
        }
        
        // Complete loading when progress reaches 100%
        if (progress >= 100) {
            clearInterval(window.loadingInterval);
            
            // Add loaded class to trigger exit animations
            if (preloader) {
                preloader.classList.add('loaded');
                
                // Enable scroll after a short delay
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                    // Remove preloader from DOM after animations complete
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 1000);
                }, 500);
            }
        }
    }, 100);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start the preloader
    initPreloader();
    
    // Animate image items
    const imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Close mobile menu when clicking a nav link
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
});

// Sticky Navigation with Throttle
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class based on scroll position
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling with Offset
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    offset: (anchor, toggle) => {
        // Don't add offset if it's a section link
        if (toggle && toggle.getAttribute('href').startsWith('#')) {
            return 80; // Height of your header
        }
        return 0;
    },
    updateURL: false
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItem?.classList.add('active');
        } else {
            navItem?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Initialize Particles.js if available
if (typeof particlesJS !== 'undefined') {
    particlesJS('hero-particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#e2b04c' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#e2b04c',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}

// Add animation to stats counters
function animateStats() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Simple animation for image items on scroll
function animateOnScroll() {
    const imageItems = document.querySelectorAll('.image-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    imageItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations for any elements that need them
    animateOnScroll();
    
    // Initialize stats animation when they come into view
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats')) {
                animateStats();
            }
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with animations
document.querySelectorAll('section, .animate-on-scroll').forEach(section => {
    observer.observe(section);
});
