function validateForm() {
    // Get values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Validate First Name
    if (!/^[A-Za-z]{4,}$/.test(firstName)) {
        alert("First name must contain only alphabets and be at least 4 characters long.");
        return false;
    }

    // Validate Last Name
    if (!/^[A-Za-z]+$/.test(lastName)) {
        alert("Last name must contain only alphabets.");
        return false;
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate Date of Birth
    if (!dob) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    // Validate Age
    if (!/^\d{2}$/.test(age)) {
        alert("Age should be a two-digit number.");
        return false;
    }

    // Validate Gender
    if (!gender) {
        alert("Please select a gender.");
        return false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits long.");
        return false;
    }

    // Validate Address
    if (!address.trim()) {
        alert("Address cannot be empty.");
        return false;
    }

    // Display Data in Table after validation
    displayFormData(firstName, lastName, email, dob, age, gender.value, phone, address);
    return false; // Prevent form submission
}

function displayFormData(firstName, lastName, email, dob, age, gender, phone, address) {
    const outputDiv = document.getElementById('output');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Show the output div
    outputDiv.style.display = 'block';

    // Clear previous data
    dataTable.innerHTML = '';

    // Create rows for each field
    const fields = [
        { label: 'First Name', value: firstName },
        { label: 'Last Name', value: lastName },
        { label: 'Email', value: email },
        { label: 'Date of Birth', value: dob },
        { label: 'Age', value: age },
        { label: 'Gender', value: gender },
        { label: 'Phone Number', value: phone },
        { label: 'Address', value: address }
    ];

    fields.forEach(field => {
        const row = dataTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = field.label;
        cell2.textContent = field.value;
    });
}
