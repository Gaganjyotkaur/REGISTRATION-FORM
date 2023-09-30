document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display registration data
    const resultDiv = document.getElementById("registration-result");
    resultDiv.innerHTML = `
        <h2>Registration Successful</h2>
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>Password: *********</p>
    `;
});
