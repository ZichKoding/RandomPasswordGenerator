// Assignment code here

// Generate password function
var generatePassword = function(len) {
  let genPass = "";
  len = passwordLength();
  let lettersNumsSpecs = charTypes();
  // loop through and choose random items
  for (let i = 0; i < len; i++) {
    // Randomly choose which character type
    let passChars = Math.floor(Math.random() * lettersNumsSpecs.length) + 1;
    // Randomly choose a character type and add it to genPass variable
    if (genPass === "") {
      genPass = lettersNumsSpecs[passChars];
    }
    else {
      genPass += lettersNumsSpecs[passChars];
    }
  }
  return genPass;
};

// Determining password length function
var passwordLength = function() {
  // save validation for that GitHub issue.
  let len = prompt("Choose a password length between 8 and 128 characters long");
  return len;
};

// Determining character types function
var charTypes = function() {
  /* Add validation later */

  //Ask if the user wants lower and upper case letters in their password
  let letters = confirm("Would you like lower and upper case letters in your password?");
  if (letters) {
    var lowerUpperabcs = (
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    );
  } else {
    var lowerUpperabcs = "";
  }
  
  // Ask if user wants numbers in their password
  let nums = confirm("Would you like numbers in your password?");
  if (nums) {
    var numberItems = (
      '0123456789'
    );
  } else {
    var numberItems = "";
  }

  // Ask if user wants special characters in their password
  let specs = confirm("Would you like special characters in your password?");
  if (specs) {
    var specialChars = (
      '!@#$%^&*()-_=+`~[]{}|:;"",<.>/?'
    );    
  } else {
    var specialChars = "";
  }
  
  let whatCharTypes = (lowerUpperabcs + numberItems + specialChars)

  return whatCharTypes;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
