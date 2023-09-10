var characterLenght = 8;
var choiceArr = [];
// Added variables of different criteria for the password
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>', ',', '.'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment code here
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();  //either true or false
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLenght; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
      choiceArr = [];

   characterLenght = parseInt(prompt("How many characters long for your new password? (8 - 128 characters")); //NaN

    if(isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {  //Hoping this is all false
        alert("Character length has to be a number, 8 - 128 digits. Please try again.")
        return false;
    }
// Added if statements to let user choose between different options
    if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowercase);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(uppercase);
    }
    if (confirm("Would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(special);
    }
    if (confirm("Would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numbers);
    }
    return true;
}