document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = storedUsers.find(user => user.username === username && user.password === password);
    
    if (user) {
        window.location.href = 'main.html';
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = storedUsers.some(user => user.username === username);

    if (userExists) {
        document.getElementById('register-error').textContent = 'Username already exists';
    } else {
        storedUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        window.location.href = 'main.html';
    }
});
