// Assignment code here

//Here I am setting the global variables for my criteria
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

//Here I am starting the function that will generate my random password
function generatePassword() {
  var userInput = prompt("How many characters would you like your password to have?");
  userInput = parseInt(userInput);

  if (isNaN(userInput) || userInput < 8 || userInput > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  }
//Above I am prompting the user to select how many characters that the user wants to have and setting a condtion about how many they can have 

//Below I am having the user confirm which criteria they want in their password
  var lowerCase = confirm("Do you want to use lowercase letters?");
  console.log(lowerCase);

  var upperCase = confirm("Do you want to use uppercase letters?");
  console.log(upperCase);

  var numbers = confirm("Do you want to use numbers?");
  console.log(numbers);

  var special = confirm("Do you want to use special characters?");
  console.log(special);

  var possibleCharacters = [];

//Below I am setting conditions for what criteria the user wants and outlining that they have to choose one
  if (lowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowercaseGlobal);
    console.log(possibleCharacters);
  }

  if (upperCase === true) {
    possibleCharacters = possibleCharacters.concat(uppercaseGlobal);
    console.log(possibleCharacters);
  }

  if (numbers === true) {
    possibleCharacters = possibleCharacters.concat(numbersGlobal);
    console.log(possibleCharacters);
  }

  if (special === true) {
    possibleCharacters = possibleCharacters.concat(specialGlobal);
    console.log(possibleCharacters);
  } else if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    alert("You have to choose one of the parameters: lowercase, uppercase, numbers, or special characters!");
    return generatePassword();
  }

  var password = "";

  for (var i = 0; i < userInput; i++) {
    password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  }

//When all condition are met they will recieve their passeord
  return password;
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
