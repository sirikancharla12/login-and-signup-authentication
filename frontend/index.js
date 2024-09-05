// import axios from 'axios';


const signupButton = document.getElementById("signupbtn");
const loginButton = document.getElementById("loginbtn");
const messageElement = document.getElementById('message');

async function signup() {
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await axios.post('http://localhost:3000/signup', {
            username,   
            email,
            password
        });

        
        messageElement.textContent = "Signed up!";
    } catch (error) {
        console.error(error);
        messageElement.textContent = "Signing up failed user already exists";
    }
}

async function login() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await axios.post('http://localhost:3000/login', {
            username,
            email,
            password
        });

        
        const token = response.data.token;
        console.log("Token:", token);
        messageElement.textContent = `Login success! Welcome back ${username}`;
    } catch (error) {
        console.error(error);
        messageElement.textContent = "Login failed, try again!";
    }
}

// Attach event handlers to buttons
signupButton.onclick = signup;
loginButton.onclick = login;
