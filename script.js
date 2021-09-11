// variables for the different types of characters
var lowerABCs = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
lowerABCs = lowerABCs.split(" ");

var upperABCs = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
upperABCs = upperABCs.split(" ");

var numberItems = "0 1 2 3 4 5 6 7 8 9"
numberItems = numberItems.split(" ");

var specialChars = "! @ # $ % ^ & * ( ) ` ~ - _  + = { } [ ] ; : ' , . / < > ? |" + '"';
specialChars = specialChars.split(" ");


// Generate password function
var generatePassword = function() {
  let genPassword = charTypes();
  return genPassword;
};

// Determining password length function
var passwordLength = function() {
  var len = prompt("Choose a password length between 8 and 128 characters long");

  // validating user input
  if (parseInt(len)){
    if (parseInt(len) < 8 || parseInt(len) > 128) {
      alert("Please enter a number between 8 and 128!");
      passwordLength();
    }
  } 
  // validating if the user did not enter an integer
  else {
    alert("Enter a valid number!");
    passwordLength();
  }
  return parseInt(len);
};

// Determining character types function
var charTypes = function() {
  // object to store what character types the user requested
  var theTypes = [];

  // getting the user inputs
  var len = passwordLength();
  var lower = confirm("Would you like lowercase letters in your password?");
  var upper = confirm("Would you like uppercase letters in your password?");
  var nums = confirm("Would you like numbers letters in your password?");
  var specs = confirm("Would you like symbols letters in your password?");

  // if the user confirms they want lowercase, uppercase, numbers, or symbols it wil push that type of characters to theTypes
  if (lower) { 
     theTypes.push(lowerABCs);
  }
  if (upper) {
    theTypes.push(upperABCs);
  }
  if (nums) {
    theTypes.push(numberItems);
  }
  if (specs) {
    theTypes.push(specialChars);
  } 
  // if user doesn't confirm any character type then we call the charTypes() function again
  if (
    !lower &&
    !upper &&
    !nums &&
    !specs
  ) {
    alert("Please choose at least one type of characters you would like in your password!");
    charTypes();
  }

  // creates password contents off of types and length. 
  var thePass = "";

  for (var i =0; i < len; i++) {
    // if thePass is equal to the length the users desired length it will break the loop to ensure it does not go over the desired length
    if (thePass.length === len) {
      break;
    }
    // keep adding characters if thePass length does not match the user's desired length
    else if (thePass.length < len) {

      // This conditional statement ensures at least one of each character type selected is in thePass
      if (i < theTypes.length) {
        if (thePass === "") {
          thePass = theTypes[i][Math.floor(Math.random() * theTypes[i].length)];
        } else {
          thePass += theTypes[i][Math.floor(Math.random() * theTypes[i].length)];
        }

      }
      // if theTypes object length is less than i then randomly choose a character from any object in the array.
      else if (theTypes.length <= i) {
        // created a variable randomItem to keep from having to type out the random key
        var randomItem = Math.floor(Math.random() * theTypes.length);

        // randomly choosing a character to add to the pass word from the object
        thePass += theTypes[randomItem][Math.floor(Math.random() * theTypes[randomItem].length)];
        console.log(thePass);

      }
      console.log(thePass.length + " characters!");
    }
  }
  return thePass;
};


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
