function auth() {
    var user_email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (user_email == "kemifeyi19@gmail.com") {
        location.href = "https://semicolon.africa";
    } else {
        document.getElementById("error").innerHTML = "Wrong email";
    }
}