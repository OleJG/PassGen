// Assignment Code
document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate");
    const passwordField = document.getElementById("password");
});
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

document.addEventListener("click", function () {
    const generateButton = document.getElementById("generate");
    const passwordField = document.getElementById("password");
  
    generateButton.addEventListener("click", function () {
        const passwordLength = prompt("Enter the length of the password (between 8 and 15 characters):");
        
        if (passwordLength === null || passwordLength === "") {
            alert("Please enter a valid password length.");
            return;
        }
  
        const length = parseInt(passwordLength);
  
        if (isNaN(length) || length < 8 || length > 15) {
            alert("Please enter a valid password length between 8 and 15 characters.");
            return;
        }
  
        const includeLowercase = confirm("Include lowercase characters?");
        const includeUppercase = confirm("Include uppercase characters?");
        const includeNumbers = confirm("Include numbers?");
        const includeSpecialChars = confirm("Include special characters?");
  
        if ((includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
            alert("Please select at least one character type to include.");
            return;
        }
  
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numericChars = "0123456789";
        const specialChars = "!@#$%^&*()_-+=<>?";
  
  
        
    });
  });