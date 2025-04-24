document.addEventListener('DOMContentLoaded', function() {
    // Sample data - in a real app, this would come from a database
    const projects = [
        {
            id: 1,
            title: "Ontario Parks Project",
            description: "Designed and developed a web-based application aimed at increasing year-round engagement with Ontario Parks, addressing the challenge they are facing.",
            image: "project-1.png",
            tags: ["HTML", "CSS", "JavaScript"],
            demoLink: "http://codeneeraj.free.nf/ixd/main.html",
            codeLink: "https://github.com/NeerajCR7-web/ixd-project"
        },
        {
            id: 2,
            title: "BallonDor Award Management  System",
            description: "It is a web-based content management system (CMS) designed to facilitate the organization and management of the prestigious Ballon d'Or awards.",
            image: "project-2.jpg",
            tags: ["C#", "HTML", "CSS", "JavaScript"],
            demoLink: "https://padlet.com/christinebittle/passion-project-async-presentations-jn16e3wljfv2nju7/wish/PR3NWxOvz0JyZb0O",
            codeLink: "https://github.com/NeerajCR7-web/BallonDor"
        },

        {
            id: 3,
            title: "Smart Gesture Gloves",
            description: "•	Designed and developed Arduino-based smart gloves that translated hand gestures into real-time text and audio output, enabling non-verbal individuals (especially those with speech disabilities) to communicate more effectively.",
            image: "project-3.png",
            tags: ["Arduino Nano", "Flex Sensors", "Accelerator", "Bluetooth Module"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Line Follower Robot",
            description: "A Line Follower Robot is an autonomous vehicle designed to detect and follow a pre-defined path using infrared or optical sensors. It is commonly used to demonstrate basic robotics, sensor integration, and control systems.",
            image: "project-4.jpeg",
            tags: ["Arduino UNO", "IR Sensors", "Motor Drivers"],
            demoLink: "#",
            codeLink: "#"
        },
        {
            id: 5,
            title: "Crypto Analyzer",
            description: "A web application that displays cryptocurrency market data and related news articles in one place, providing investors with valuable insights.",
            image: "project-5.png",
            tags: ["Express.js", "API", "CORS middleware", "CSS3"],
            demoLink: "#",
            codeLink: "https://github.com/NeerajCR7-web/crypto-analyzer"
        }
    ];

    const skills = [
        {
            name: "Frontend Development",
            description: "Building responsive and interactive user interfaces",
            icon: "fas fa-code"
        },
        {
            name: "Backend Development",
            description: "Server-side logic and database management",
            icon: "fas fa-server"
        },
        
        {
            name: "Arduino Development",
            description: "Building hardware prototypes and IoT solutions with Arduino",
            icon: "fas fa-microchip"
        },

        {
            name: "Rasberry Pi Development",
            description: "Creating embedded systems and single-board computer projects",
            icon: "fas fa-robot"
        },
        {
            name: "UI/UX Design",
            description: "Creating intuitive and visually appealing designs",
            icon: "fas fa-paint-brush"
        }
    ];

    const activities = [
        {
            title: "Student Peer Mentor",
            date: "Dec 2024 - Present",
            description: "Organized and led interactive mentorship sessions, helping new students transition smoothly into college life and succeed academically."
        },
        {
            title: "Third Runners-up in National Soccer Tournament",
            date: "Sept 2019",
            description: "Led the university attain the second runners-up position in Nationals.."
        },
        {
            title: "Open Source Contributor",
            date: "2020 - Present",
            description: "Contributed to various open-source projects, helping to improve documentation and fix bugs."
        }
    ];

    // Load projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <img src="assets/images/${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="demo">Live Demo</a>
                    <a href="${project.codeLink}" class="code">View Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Load skills
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item fade-in';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
        `;
        skillsContainer.appendChild(skillItem);
    });

    // Load activities
    const activitiesList = document.querySelector('.activities-list');
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item fade-in';
        activityItem.innerHTML = `
            <h3>${activity.title}</h3>
            <span class="date">${activity.date}</span>
            <p>${activity.description}</p>
        `;
        activitiesList.appendChild(activityItem);
    });

    // Enhanced mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate each nav link
        document.querySelectorAll('.nav-links li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Add animation to nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.querySelectorAll('.nav-links li').forEach(link => {
                link.style.animation = '';
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});