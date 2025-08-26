// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');
    
    // Set first section as active
    sections[0].classList.add('active');
    
    // Navigation click event
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Function to animate skill bars when they come into view
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 300);
            }
        });
    }
    
    // Trigger animation on page load for visible skills
    animateSkillBars();
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Portfolio item hover effect enhancement
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(37, 99, 235, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Add smooth scrolling for anchor links
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
    
    // Add animation to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Randomize animation delays
        particle.style.animationDelay = `${index * 2}s`;
    });
});