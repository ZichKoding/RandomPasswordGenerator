// Assignment code here

// declaring variables
const lowerUpperabcs = (
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
);
const numberItems = (
  '0123456789'
);
const specialChars = (
  '!@#$%^&*()-_=+`~[]{}|:;"",<.>/?'
);

var passwordLength = function() {
  // save validation for that GitHub issue.
  let len = prompt("Choose a password length between 8 and 128 characters long");
  return len;
}

var generatePassword = function(len) {
  let genPass = "";
  len = passwordLength();
  // loop through and choose random items
  for (i = 0; i < len; i++) {
    let letters = Math.floor(Math.random() * lowerUpperabcs.length) + 1;
    genPass += lowerUpperabcs[letters];

    let nums = Math.floor(Math.random() * numberItems.length) +1;
    genPass += numberItems[nums];

    let specchar = Math.floor(Math.random() * specialChars.length) +1;
    genPass += specialChars[specchar];
  }

  return genPass;
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
