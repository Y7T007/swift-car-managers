document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Loading...';

    fetch('https://swift-car-django-server-4c51acec5937.herokuapp.com/managers/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('manager_id', data.manager_id);
            localStorage.setItem('manager_name', data.manager_name);
            window.location.href = '/dashboard';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Login failed. Please check your credentials.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Sign In';
        });
});