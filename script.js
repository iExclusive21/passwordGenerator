//Declaring Variables 
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = lowerCharacters.map(element => {
  return element.toUpperCase()
})
// ['A', 'B', 'C']
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", ",", "<", ">", "?", "/"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var passwordTextEl = document.querySelector("#password");
  passwordTextEl.value = generatePassword(generatePrompts());
}

function generatePassword(result) {
  var passwordHolder = result[0];
  var passwordLength = result[1];
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * passwordHolder.length);
    password = password + passwordHolder[randomChar];
    
  }

  return password;
}

function generatePrompts(error) {
  var passwordPrompt = "How many characters would you like your password to contain?";
  var displayPrompt = '';
  
  //Conditional
  if (error) {
    displayPrompt = error + ' ' + passwordPrompt;
  } else {
    displayPrompt = passwordPrompt;
  }
//storing the result from user input
  var promptResult = prompt(displayPrompt);
// if promptResult isn't a number call generatePrompts again with the second paramenter true to show the length error along with the password prompt
  if (isNaN(promptResult)) {
    return generatePrompts('Please enter only numerical values 0-9.');
  }

  // Converting user input from a string to a number and storing it 
  var passwordLength = parseInt(promptResult);

  // if passwordLength is less than 8 
  if (passwordLength < 8) {
    return generatePrompts('Password must be at least 8 characters.');
  } else if (passwordLength > 128) {
    return generatePrompts('Password must be less than 128 characters.');
  }

  var passwordHolder = [];

  if (confirm("Please Click Ok to confirm including special characters")) {
    passwordHolder = passwordHolder.concat(specialCharacters);
  }
  if (confirm("Please click OK to confirm including lowercase letters")) {
    passwordHolder = passwordHolder.concat(lowerCharacters);
  }
  if (confirm("Please click OK to confirm including uppercase letters")) {
    passwordHolder = passwordHolder.concat(upperCharacters);
  }
  if (confirm("Please click OK to confirm including numbers")) {
    passwordHolder = passwordHolder.concat(nums);
  }

  // User clicks "cancel" for all options.
  if (passwordHolder.length < 1) {
    return generatePrompts('You did not select any password criteria. Please try again.');
  }
  
  // No errors.
  return [passwordHolder, passwordLength];
};
