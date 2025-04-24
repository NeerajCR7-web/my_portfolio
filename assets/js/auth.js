// Authentication and User Management
document.addEventListener('DOMContentLoaded', function() {
    // Initialize authentication state
    initializeAuth();

    // Setup form event listeners
    setupAuthForms();
});

function initializeAuth() {
    // Check if we're on an auth page
    const isAuthPage = window.location.pathname.includes('/auth/');
    
    // Update UI based on auth state
    updateAuthUI();

    // Show login modal if not logged in and not on auth page
    if (!isAuthPage && !isLoggedIn()) {
        setTimeout(showLoginModal, 1000);
    }
}

function setupAuthForms() {
    // Handle main login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Handle modal login form submission
    const modalLoginForm = document.getElementById('modalLoginForm');
    if (modalLoginForm) {
        modalLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Handle register form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegistration();
        });
    }
}

function handleLogin() {
    // In a real app, you would validate credentials with a server
    const email = document.getElementById('loginEmail')?.value || 'user@example.com';
    const password = document.getElementById('loginPassword')?.value || 'password';

    // For demo purposes, we'll just log the attempt
    console.log('Login attempt with:', { email, password });

    // Set user as logged in
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Update UI
    updateAuthUI();
    
    // Show success notification
    showNotification('Login successful!', 'success');
    
    // Hide login modal if open
    hideLoginModal();
    
    // Enable admin features
    enableEditFeatures();
}

function handleRegistration() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Validate form
    if (!validateRegistrationForm(name, email, password, confirmPassword)) {
        return;
    }

    // In a real app, you would send this to a server
    console.log('Registration data:', { name, email, password });
    
    // For demo, we'll just log them in
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Show success message
    showNotification('Registration successful! You are now logged in.', 'success');
    
    // Redirect to home page
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
}

function validateRegistrationForm(name, email, password, confirmPassword) {
    let isValid = true;
    
    // Name validation
    if (!name) {
        showError('registerNameError', 'Name is required');
        isValid = false;
    } else {
        hideError('registerNameError');
    }
    
    // Email validation
    if (!email) {
        showError('registerEmailError', 'Email is required');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        showError('registerEmailError', 'Please enter a valid email');
        isValid = false;
    } else {
        hideError('registerEmailError');
    }
    
    // Password validation
    if (!password) {
        showError('registerPasswordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('registerPasswordError', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        hideError('registerPasswordError');
    }
    
    // Confirm password validation
    if (!confirmPassword) {
        showError('registerConfirmPasswordError', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('registerConfirmPasswordError', 'Passwords do not match');
        isValid = false;
    } else {
        hideError('registerConfirmPasswordError');
    }
    
    return isValid;
}

function logoutUser() {
    // Clear auth state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    
    // Update UI
    updateAuthUI();
    
    // Show logout notification
    showNotification('Logged out successfully', 'info');
    
    // Disable admin features
    disableEditFeatures();
    
    // Show login modal after 1 second
    setTimeout(showLoginModal, 1000);
}

function updateAuthUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authDropdown = document.getElementById('authDropdown');
    
    if (authDropdown) {
        if (isLoggedIn) {
            const userEmail = localStorage.getItem('userEmail') || 'User';
            authDropdown.innerHTML = `
                <a href="#" class="user-avatar-container">
                    <img src="assets/images/profile.jpg" alt="User" class="user-avatar">
                    <span class="auth-indicator"></span>
                </a>
                <div class="dropdown-content">
                    <a href="#"><i class="fas fa-user"></i> ${userEmail}</a>
                    <a href="#" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Logout</a>
                </div>
            `;
            
            // Add logout event
            document.getElementById('logoutBtn')?.addEventListener('click', function(e) {
                e.preventDefault();
                logoutUser();
            });
        } else {
            authDropdown.innerHTML = `
                <a href="#" id="openLogin" class="login-btn">
                    <i class="fas fa-sign-in-alt"></i> Login
                </a>
            `;
            
            // Add login event
            document.getElementById('openLogin')?.addEventListener('click', function(e) {
                e.preventDefault();
                showLoginModal();
            });
        }
    }
}

function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

function hideError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

function enableEditFeatures() {
    console.log('Admin features enabled');
    // In a real app, you would show edit/delete buttons, etc.
}

function disableEditFeatures() {
    console.log('Admin features disabled');
    // In a real app, you would hide edit/delete buttons, etc.
}

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
        sessionStorage.setItem('modalShown', 'true');
    }
}

function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}