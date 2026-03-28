// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Save form data to localStorage
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            let inquiries = JSON.parse(localStorage.getItem('kingbackpacker_inquiries') || '[]');
            inquiries.push(formData);
            localStorage.setItem('kingbackpacker_inquiries', JSON.stringify(inquiries));
            
            // Show success message
            const successDiv = document.getElementById('form-success');
            if (successDiv) {
                successDiv.style.display = 'flex';
            }
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (successDiv) {
                    successDiv.style.display = 'none';
                }
            }, 5000);
        }
    });
    
    // Real-time validation on blur
    const inputs = ['name', 'email', 'phone', 'service', 'message'];
    inputs.forEach(field => {
        const input = document.getElementById(field);
        if (input) {
            input.addEventListener('blur', () => validateField(field));
            input.addEventListener('input', () => clearError(field));
        }
    });
});

function validateForm() {
    let isValid = true;
    const fields = ['name', 'email', 'phone', 'service', 'message'];
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}-error`);
    
    if (!input || !error) return true;
    
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch(fieldName) {
        case 'name':
            if (!value) {
                isValid = false;
                errorMessage = 'Please enter your name';
            }
            break;
        case 'email':
            if (!value) {
                isValid = false;
                errorMessage = 'Please enter your email';
            } else if (!/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email';
            }
            break;
        case 'phone':
            if (!value) {
                isValid = false;
                errorMessage = 'Please enter your phone number';
            }
            break;
        case 'service':
            if (!value) {
                isValid = false;
                errorMessage = 'Please select a visa type';
            }
            break;
        case 'message':
            if (!value) {
                isValid = false;
                errorMessage = 'Please describe your travel plans';
            } else if (value.length < 10) {
                isValid = false;
                errorMessage = 'Please provide more details (at least 10 characters)';
            }
            break;
    }
    
    if (isValid) {
        error.style.display = 'none';
        input.style.borderColor = 'var(--border)';
    } else {
        error.textContent = errorMessage;
        error.style.display = 'block';
        input.style.borderColor = '#ef4444';
    }
    
    return isValid;
}

function clearError(fieldName) {
    const error = document.getElementById(`${fieldName}-error`);
    const input = document.getElementById(fieldName);
    if (error) error.style.display = 'none';
    if (input) input.style.borderColor = 'var(--border)';
}
