// StoryboardFlow Landing Page JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('#navMenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon && icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = 'none';
            }
        });
    }
    
    // Placeholder for hero image (to be replaced with actual image)
    const heroImage = document.getElementById('heroImage');
    if (heroImage && heroImage.src.includes('storyboard-hero.png')) {
        // Create a placeholder with a gradient background if image doesn't exist
        const parent = heroImage.parentElement;
        const placeholder = document.createElement('div');
        placeholder.style.width = '100%';
        placeholder.style.height = '400px';
        placeholder.style.background = 'linear-gradient(135deg, #4a6bff 0%, #7c4dff 100%)';
        placeholder.style.borderRadius = '10px';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.color = '#fff';
        placeholder.style.fontSize = '1.2rem';
        placeholder.style.fontWeight = 'bold';
        placeholder.innerHTML = '<div>StoryboardFlow Visualisierung</div>';
        
        // Replace the img with the placeholder
        parent.replaceChild(placeholder, heroImage);
    }
    
    // Animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        // Simple animation on scroll
        const animateOnScroll = function() {
            featureCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state
        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
        });
        
        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    }
    
    // Form validation for future implementation
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-white-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // For now, just show an alert
            // In a real implementation, this would open a modal or navigate to a signup page
            alert('Vielen Dank für dein Interesse! Die Beta-Anmeldung wird in Kürze freigeschaltet.');
            
            // Future implementation would include:
            // - Modal popup with email form
            // - Form validation
            // - AJAX submission to backend
            // - Success/error handling
        });
    });
});

// Intersection Observer for animations (modern browsers)
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('section');
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            sectionObserver.observe(section);
        });
        
        // Add CSS for visible sections
        const style = document.createElement('style');
        style.textContent = `
            .section-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    });
}
