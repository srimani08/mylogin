const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbtn");


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        loginbtn.click();
    }
});

loginbtn.addEventListener("click", function() {
    

    if(username.value === "admin" && password.value === "1234") {
        alert("Login Successful!");
    } else {
        alert("Invalid Credentials.");
    }
});
