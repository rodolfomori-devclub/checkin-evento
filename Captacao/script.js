// Global Variables
let loadingProgress = 0;
let particles = [];
let animationId;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoading();

    initializeParticleSystem();
    setupTypingEffect();
    setupScrollAnimations();
    setupIntersectionObserver();
});

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Simulate loading progress
    const progressInterval = setInterval(() => {
        loadingProgress += Math.random() * 15;
        
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            clearInterval(progressInterval);
            
            // Complete loading
            setTimeout(() => {
                progressBar.style.width = '100%';
                progressText.textContent = '100%';
                
                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                        startMainAnimations();
                    }, 800);
                }, 500);
            }, 300);
        } else {
            progressBar.style.width = loadingProgress + '%';
            progressText.textContent = Math.round(loadingProgress) + '%';
        }
    }, 100);
}

// Custom cursor removed - using default browser cursor

// Particle System
function initializeParticleSystem() {
    const container = document.getElementById('particle-container');
    const particleSymbols = [
        'const', 'function', 'var', 'let', 'if', 'else', 'for', 'while',
        '{}', '[]', '()', '=>', '&&', '||', '===', '!==',
        'HTML', 'CSS', 'JS', 'AI', 'API', 'JSON', 'DOM', 'HTTP',
        '<div>', '</div>', '{', '}', ';', ':', '=', '+',
        'React', 'Node', 'Vue', 'Python', 'Git', 'VS Code'
    ];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particleSymbols[Math.floor(Math.random() * particleSymbols.length)];
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = 8 + Math.random() * 4;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + 2) * 1000);
    }
    
    // Create particles continuously (responsive to screen size)
    function spawnParticles() {
        const isMobile = window.innerWidth <= 768;
        const spawnRate = isMobile ? 1500 : 500; // Slower on mobile
        
        createParticle();
        setTimeout(spawnParticles, spawnRate + Math.random() * 1000);
    }
    
    // Only start particles if not on mobile or if user has good performance
    const isMobile = window.innerWidth <= 768;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!hasReducedMotion && (!isMobile || navigator.hardwareConcurrency > 2)) {
        spawnParticles();
    }
}

// Typing Effect
function setupTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.getAttribute('data-text');
    const speed = 100;
    let i = 0;
    
    typingElement.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typing with delay
    setTimeout(typeWriter, 1000);
}

// Scroll Animations
function setupScrollAnimations() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
        
        // Header background on scroll
        const header = document.querySelector('.header');
        if (scrolled > 100) {
            header.style.background = 'rgba(2, 10, 19, 0.95)';
        } else {
            header.style.background = 'rgba(2, 10, 19, 0.9)';
        }
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Stagger animations for multiple elements
                if (entry.target.classList.contains('step-item') || 
                    entry.target.classList.contains('benefit-card') ||
                    entry.target.classList.contains('schedule-item')) {
                    
                    const siblings = [...entry.target.parentNode.children];
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.step-item, .benefit-card, .testimonial-card, .schedule-item, .company-logo');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// FAQ Functionality
function toggleFAQ(element) {
    const faqItem = element.parentNode;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item.active').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}

// Navigation Functions
function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
        offerSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function purchaseAction() {
    // Simulate purchase process
    showNotification('Redirecionando para o checkout...', 'success');
    
    // Add some visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Processando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        
        // In a real scenario, redirect to payment processor
        // window.location.href = 'https://checkout.example.com';
        showNotification('Demo: Checkout seria aberto aqui!', 'info');
    }, 2000);
}

function contactSupport() {
    // Open DevClub support WhatsApp
    const supportUrl = 'https://go.rodolfomori.com.br/suporte';
    
    showNotification('Abrindo suporte do DevClub...', 'success');
    
    // Open support link in new tab
    window.open(supportUrl, '_blank');
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(55, 227, 89, 0.1);
        border: 1px solid var(--primary);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        color: var(--text-primary);
        font-weight: 500;
        backdrop-filter: blur(10px);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    return icons[type] || icons.info;
}

// Add notification animations to CSS dynamically
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-icon {
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
}

// Counter Animation
function animateCountUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const animate = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(animate);
        } else {
            element.textContent = target;
        }
    };
    
    animate();
}

// Price Animation
function animatePrice() {
    const priceElements = document.querySelectorAll('.current-price, .current-price-large');
    
    priceElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.textShadow = '0 0 50px var(--primary)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
            element.style.textShadow = '0 0 30px var(--primary)';
        });
    });
}

// Form Validation (if needed)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth Scroll for all anchor links
function setupSmoothScroll() {
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
}

// Performance optimization
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

// Lazy load images (if any are added later)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Start main animations after loading
function startMainAnimations() {
    setupSmoothScroll();
    animatePrice();
    addNotificationStyles();
    setupLazyLoading();
    
    // Add entrance animations to main elements
    const mainElements = document.querySelectorAll('.hero-content, .section-header');
    mainElements.forEach((element, index) => {
        element.style.animation = `fade-in-up 0.8s ease ${index * 0.2}s both`;
    });
}

// Window load event
window.addEventListener('load', () => {
    // Additional setup after all resources are loaded
    console.log('Landing page fully loaded');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Resize handler
window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments if needed
    const isMobile = window.innerWidth <= 768;
    
    // Adjust particle system for mobile
    if (isMobile) {
        // Reduce particles on mobile for better performance
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index % 2 === 0) {
                particle.style.display = 'none';
            }
        });
    }
    
    // Ensure no horizontal overflow
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
}, 250));

// Visibility change handler (for performance optimization)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Export functions for external use (if needed)
window.BootcampLanding = {
    scrollToOffer,
    purchaseAction,
    contactSupport,
    toggleFAQ,
    showNotification
}; 