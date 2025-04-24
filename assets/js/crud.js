document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        enableEditFeatures();
    }
});

function enableEditFeatures() {
    // Add edit buttons to projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn';
            editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
            editBtn.style.display = 'none';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i> Delete';
            deleteBtn.style.display = 'none';
            
            const btnContainer = document.createElement('div');
            btnContainer.className = 'project-actions';
            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(deleteBtn);
            
            card.querySelector('.project-info').appendChild(btnContainer);
            
            // Show buttons
            setTimeout(() => {
                editBtn.style.display = 'inline-block';
                deleteBtn.style.display = 'inline-block';
            }, 500);
            
            // Add event listeners
            editBtn.addEventListener('click', function() {
                editProject(card.dataset.id);
            });
            
            deleteBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this project?')) {
                    deleteProject(card.dataset.id);
                }
            });
        });
    }
    
    // Add "Add New" button to sections
    addSectionControls();
}

function disableEditFeatures() {
    // Remove all edit buttons
    document.querySelectorAll('.edit-btn, .delete-btn').forEach(btn => {
        btn.remove();
    });
}

function addSectionControls() {
    // Add to projects section
    const projectsSection = document.querySelector('.projects .container');
    if (projectsSection) {
        const addBtn = document.createElement('button');
        addBtn.style.display = 'none';
        
        projectsSection.querySelector('h2').insertAdjacentElement('afterend', addBtn);
        
        setTimeout(() => {
            addBtn.style.display = 'inline-block';
        }, 500);
        
        addBtn.addEventListener('click', addProject);
    }
    
    // Similarly add to skills and activities sections
}

function addProject() {
    // Show add project form/modal
    const title = prompt('Enter project title:');
    if (title) {
        // In a real app, you would add to DOM and send to server
        console.log('Adding project:', title);
        showNotification('Project added successfully', 'success');
    }
}

function editProject(id) {
    // Show edit form with existing data
    const newTitle = prompt('Enter new title:');
    if (newTitle) {
        // In a real app, you would update DOM and send to server
        console.log('Editing project', id, 'with new title:', newTitle);
        showNotification('Project updated successfully', 'success');
    }
}

function deleteProject(id) {
    // In a real app, you would remove from DOM and send to server
    console.log('Deleting project', id);
    showNotification('Project deleted successfully', 'success');
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