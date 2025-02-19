document.addEventListener("DOMContentLoaded", function () {
    console.log("Frontend is ready!");
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "index.html";  // Redirect to homepage
        } else {
            alert("Invalid credentials, try again.");
        }
    })
    .catch(error => console.error("Error:", error));
});
