// let path = require('path')
// let filename = path.join(__dirname,'login','Login.html')

// let login = document.getElementById('log').addEventListener('click',(even)=>{
//     console.log(filename);
// });

function navigateToLogin() {
    // Get the current URL
    var currentUrl = window.location.href;
    // Extract the directory part of the URL
    var currentDirectory = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    // Construct the relative path to Login.html
    var relativePath = currentDirectory + "/login/Login.html";

    // Navigate to the relative path
    window.location.href = relativePath;
}

function navigateToRegister() {
    // Get the current URL
    var currentUrl = window.location.href;
    // Extract the directory part of the URL
    var currentDirectory = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    // Construct the relative path to Login.html
    var relativePath = currentDirectory + "/Registration/Registration.html";

    // Navigate to the relative path
    window.location.href = relativePath;
}