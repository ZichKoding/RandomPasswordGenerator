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
  let len = prompt("Choose a password length between 8 and 128 characters long");

  // validating user input
  if (parseInt(len)){
    if (parseInt(len) < 8 || parseInt(len) > 128) {
      alert("Please enter a valid number!");
      passwordLength();
    }
  } 
  else {
    alert("Enter a valid number!");
    passwordLength();
  }

  return len;
};

// Determining character types function
var charTypes = function() {
  var theTypes = "";
  //Ask if the user wants lower and upper case letters in their password
  let letters = confirm("Would you like lower and upper case letters in your password?");
  if (letters) {
    lowerUpperabcs

    if (theTypes === "") {
      theTypes = lowerUpperabcs;
    } else {
      theTypes += lowerUpperabcs;
    }

  } else {
    var lowerUpperabcs = "";
  }
  
  // Ask if user wants numbers in their password
  let nums = confirm("Would you like numbers in your password?");
  if (nums) {
    numberItems

    if (theTypes === "") {
      theTypes = numberItems;
    } else {
      theTypes += numberItems;
    }

  } else {
    var numberItems = "";
  }

  // Ask if user wants special characters in their password
  let specs = confirm("Would you like special characters in your password?");
  if (specs) {
    specialChars = (
      '!@#$%^&*()-_=+`~[]{}|:;"",<.>/?'
    );
    
    if (theTypes === "") {
      theTypes = specialChars;
    } else {
      theTypes += specialChars;
    }
    
  } else {
    specialChars = "";
  }

  // Validating if User confirmed any character types.
  if (
    lowerUpperabcs === "" &&
    numberItems === "" &&
    specialChars === ""
  ) {
    alert("Please confirm at least ONE character type to add to your generated password!");
    charTypes();
  }
  else {
    return theTypes;
  }
};

// Declaring Variables
var specialChars = (
  '!@#$%^&*()-_=+`~[]{}|:;"",<.>/?'
);
var numberItems = (
  '0123456789'
);
var lowerUpperabcs = (
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
);


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
