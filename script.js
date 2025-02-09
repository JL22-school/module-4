const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    
    let isValid = true;  // Flag for overall form validity

    // Clear previous error messages
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('phoneNumberError').innerText = '';

    // Validate First Name
    const firstName = document.getElementById('firstName').value;
    if (firstName.trim().length < 2) {
        document.getElementById('firstNameError').innerText = 'First name must be at least 2 characters.';
        isValid = false;
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName').value;
    if (lastName.trim().length < 2) {
        document.getElementById('lastNameError').innerText = 'Last name must be at least 2 characters.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters, contain one number and one uppercase letter.';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    // Validate Age
    const age = document.getElementById('age').value;
    if (age && (age < 18 || age > 100)) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100.';
        isValid = false;
    }

    // Validate Phone Number
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber && !/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
        document.getElementById('phoneNumberError').innerText = 'Phone number must be in format XXX-XXX-XXXX.';
        isValid = false;
    }
    
    if (isValid) {
        let formData = {
            firstName,
            lastName,
            email,
            password,
            age: age ? Number(age) : undefined,
            phoneNumber: phoneNumber || undefined
        };
        console.log(JSON.stringify(formData, null, 2));
    }
});
