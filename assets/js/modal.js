// Modal Management
document.addEventListener('DOMContentLoaded', function() {
    // Set up modal close button
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', hideLoginModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('loginModal');
        if (e.target === modal) {
            hideLoginModal();
        }
    });

    // Prevent modal from closing when clicking inside
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        // Reset form if exists
        const form = modal.querySelector('form');
        if (form) form.reset();
        
        // Show modal with animation
        modal.style.display = 'block';
        const content = modal.querySelector('.modal-content');
        content.classList.add('animate__bounceIn');
        content.classList.remove('animate__bounceOut');
        
        // Track that modal has been shown
        sessionStorage.setItem('modalShown', 'true');
    }
}

function hideLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        // Add hide animation
        const content = modal.querySelector('.modal-content');
        content.classList.remove('animate__bounceIn');
        content.classList.add('animate__bounceOut');
        
        // Hide after animation completes
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
}