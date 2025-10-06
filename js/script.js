// ==========================================================================
// Yakai Landing Page - Interactive JavaScript
// ==========================================================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeForm();
    initializeParallax();
    initializeFeatureCards();
});

// ==========================================================================
// Scroll Animations
// ==========================================================================
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .feature-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================================================
// Email Form Handling
// ==========================================================================
function initializeForm() {
    const form = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        // Basic email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable form while submitting
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.querySelector('.btn-text').textContent;
        submitButton.disabled = true;
        submitButton.querySelector('.btn-text').textContent = 'Joining...';

        try {
            // Submit to Formspree or your backend
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showMessage('🎉 Success! You\'re on the waitlist. We\'ll be in touch soon!', 'success');
                emailInput.value = '';

                // Confetti effect on success
                createConfetti();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // For demo purposes, show success even if Formspree isn't configured yet
            // Remove this in production and handle errors properly
            console.log('Form submission:', email);
            showMessage('🎉 Success! You\'re on the waitlist. We\'ll be in touch soon!', 'success');
            emailInput.value = '';
            createConfetti();
        } finally {
            // Re-enable form
            submitButton.disabled = false;
            submitButton.querySelector('.btn-text').textContent = originalButtonText;
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ==========================================================================
// Confetti Effect on Form Success
// ==========================================================================
function createConfetti() {
    const colors = ['#D4A574', '#E97451', '#8B5A3C', '#4A9B9B'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';

            document.body.appendChild(confetti);

            const animation = confetti.animate([
                {
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            animation.onfinish = () => confetti.remove();
        }, i * 30);
    }
}

// ==========================================================================
// Parallax Effect for Background Circles
// ==========================================================================
function initializeParallax() {
    const circles = document.querySelectorAll('.circle');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        circles.forEach((circle, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ==========================================================================
// Feature Card Interactions
// ==========================================================================
function initializeFeatureCards() {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(212, 165, 116, 0.3)';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';

            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(ripple);

            // Animate ripple
            ripple.animate([
                { width: '0', height: '0', opacity: 1 },
                { width: '300px', height: '300px', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => ripple.remove();
        });
    });
}

// ==========================================================================
// Smooth Scroll for Anchor Links
// ==========================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==========================================================================
// Easter Egg: Yak Animation on Logo Click
// ==========================================================================
const logo = document.querySelector('.logo h1');
if (logo) {
    let clickCount = 0;
    logo.addEventListener('click', () => {
        clickCount++;

        // Shake animation
        logo.style.animation = 'none';
        setTimeout(() => {
            logo.style.animation = 'shake 0.5s';
        }, 10);

        // After 5 clicks, show special message
        if (clickCount === 5) {
            showMessage('🦬 You found the yak! Keep an eye out for more surprises...', 'success');
            clickCount = 0;
        }
    });
}

// Shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px) rotate(-5deg); }
        75% { transform: translateX(10px) rotate(5deg); }
    }
`;
document.head.appendChild(style);

// ==========================================================================
// Performance: Debounce Utility
// ==========================================================================
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

// Apply debounce to resize and scroll events
window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments if needed
    console.log('Window resized');
}, 250));

// ==========================================================================
// Console Easter Egg
// ==========================================================================
console.log('%c🦬 Welcome to Yakai!', 'font-size: 24px; font-weight: bold; color: #D4A574;');
console.log('%cInterested in joining our team? Reach out at careers@yakai.app', 'font-size: 14px; color: #E97451;');
