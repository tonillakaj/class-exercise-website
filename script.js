function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (user === "student" && pass === "1234") {
        message.innerText = "Access Granted! Your grade is an A+ (hopefully).";
        message.style.color = "green";
    } else {
        message.innerText = "Invalid credentials. Try again!";
        message.style.color = "red";
    }
}