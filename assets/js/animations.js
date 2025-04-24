document.addEventListener('DOMContentLoaded', function() {
    // Create floating bubbles and shapes
    createBubbles();
    createFloatingShapes();
    
    // Animate elements when they come into view
    setupScrollAnimations();
    
    // Add hover effects
    setupHoverEffects();
    
    // Initialize dynamic text
    setupDynamicText();
    
    // Initialize floating action button
    setupFAB();
});

function createBubbles() {
    const bubbleContainer = document.querySelector('.floating-bubbles');
    
    if (bubbleContainer) {
        // Clear existing bubbles
        bubbleContainer.innerHTML = '';
        
        // Create bubbles
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('li');
            
            // Random size between 10 and 120px
            const size = Math.random() * 110 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            // Random position
            bubble.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10 and 40s
            const duration = Math.random() * 30 + 10;
            bubble.style.animationDuration = `${duration}s`;
            
            // Random delay
            bubble.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random opacity
            bubble.style.opacity = Math.random() * 0.5 + 0.1;
            
            bubbleContainer.appendChild(bubble);
        }
    }
}

function createFloatingShapes() {
    const shapesContainer = document.querySelector('.floating-shapes');
    
    if (shapesContainer) {
        // Clear existing shapes
        shapesContainer.innerHTML = '';
        
        // Create shapes
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            
            // Random size between 20 and 150px
            const size = Math.random() * 130 + 20;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            
            // Random position
            shape.style.left = `${Math.random() * 100}%`;
            
            // Random animation duration between 10 and 50s
            const duration = Math.random() * 40 + 10;
            shape.style.animationDuration = `${duration}s`;
            
            // Random delay
            shape.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random shape (circle or square)
            if (Math.random() > 0.5) {
                shape.style.borderRadius = '50%';
            }
            
            // Random color from predefined set
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c', '#e67e22', '#34495e'];
            shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            shapesContainer.appendChild(shape);
        }
    }
}

function setupScrollAnimations() {
    const animateOnScroll = (elements, animationClass) => {
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add(animationClass);
            }
        });
    };
    
    // Animate elements when they come into view
    const animateElements = () => {
        animateOnScroll(document.querySelectorAll('.project-card'), 'fade-in');
        animateOnScroll(document.querySelectorAll('.skill-item'), 'fade-in');
        animateOnScroll(document.querySelectorAll('.activity-item'), 'fade-in');
    };
    
    // Initial check
    animateElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateElements);
}

function setupHoverEffects() {
    // Add wave animation to social icons on hover
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('animate__swing');
        });
        
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('animate__swing');
        });
    });
    
    // Add pulse animation to buttons on hover
    const buttons = document.querySelectorAll('.btn, .auth-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('animate__pulse');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('animate__pulse');
        });
    });
}

function setupDynamicText() {
    const textContainer = document.querySelector('.dynamic-text-container');
    if (!textContainer) return;
    
    const texts = [
        " I'm  a web developer passionate about building user-friendly, visually appealing, and functional websites and web applications. ",
        "Whether I’m coding a web app or watching a 90-minute soccer match, I’m all about precision, flow, and results. ",
        "I’ve worked on a variety of projects that showcase my growing skills in front-end and back-end development.",
        "I enjoy solving real-world problems through clean code and thoughtful design.",
        "Let's create something awesome together!"
    ];
    
    let currentIndex = 0;
    
    const changeText = () => {
        textContainer.style.minHeight = textContainer.offsetHeight + 'px';
        
        // Fade out current text
        const typingElement = textContainer.querySelector('.typing-animation');
        if (typingElement) {
            typingElement.style.animation = 'fadeOut 0.5s forwards';
        }
        
        setTimeout(() => {
            // Update text
            currentIndex = (currentIndex + 1) % texts.length;
            textContainer.innerHTML = `<p class="typing-animation">${texts[currentIndex]}</p>`;
            
            // Fade in new text
            const newTypingElement = textContainer.querySelector('.typing-animation');
            newTypingElement.style.animation = 'fadeIn 0.5s forwards, typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
        }, 500);
    };
    
    // Change text every 8 seconds
    setInterval(changeText, 8000);
}

function setupFAB() {
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            alert("Let's get in touch! Send me a message.");
        });
    }
}