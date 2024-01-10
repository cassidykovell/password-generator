// Assignment code here
var lowercaseGlobal = ['a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',]
var uppercaseGlobal = [ 'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z',]
var numbersGlobal = ['0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9']
var specialGlobal = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.',]

function generatePassword() {
  var userInput = prompt("How many characters would you like your pasword to have?:");
  userInput = parseInt(userInput); 

  if (isNaN(userInput) || userInput < 8 || userInput > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword()
  }

var lowerCase = confirm("Do you want to use lower case letters?");
console.log(lowerCase)

var upperCase = confirm("Do you want to use uppercase letters?");
console.log(upperCase)

var numbers = confirm("Do you want to use numbers?");
console.log(numbers)

var special = confirm("Do you want to use special characers?");
console.log(special)

var possibleCharaters = [] 

if (lowerCase===true) {
 possibleCharaters = possibleCharaters.concat(lowercaseGlobal);
 console.log(possibleCharaters)
}

if (upperCase===true) {
  possibleCharaters = possibleCharaters.concat(uppercaseGlobal);
  console.log(possibleCharaters)
 }

 if (numbers===true) {
  possibleCharaters = possibleCharaters.concat(numbersGlobal);
  console.log(possibleCharaters)
 }

 if (special===true) {
  possibleCharaters = possibleCharaters.concat(specialGlobal);
  console.log(possibleCharaters)
 }

 else if (lowerCase===false && upperCase===false && numbers===false && special && false) {
  alert("You have to choose one of the perameters either, lowercase, uppercase, numbers, or special characters!");
  return generatePassword()
 } 

 else {
  generatePassword()
 }

  for (i = 0; i < user.userInput.length; i++) {
    (possibleCharaters[Math.floor(Math.random() * possibleCharaters.length)]);
  }
};


// if user wants lowercase letters I have to add that to my array possible characters, if user wants upper case letter I have to add that to my array of possible characters, if my user want numbers then I add that 

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
