const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generateButton = document.getElementById("generate-btn")
let passwordOne = document.getElementById ("password-one")
let passwordTwo = document.getElementById ("password-two")
let clearButton = document.getElementById('clear-btn')
let passwordLength = 15



function getRandomCharacter () {
for (let i = 0; i < characters.length; i++) {
    let randomIndex = Math.floor (Math.random()*characters.length)
    return characters [randomIndex]
}
}

function makePassword () {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}



function populatePasswordOne () {
let getPasswordOne = makePassword();
 passwordOne.textContent = getPasswordOne;

}

function populatePasswordTwo () {
    let getPasswordTwo = makePassword();
    passwordTwo.textContent = getPasswordTwo
   
}

function clearPasswords () {
passwordOne.textContent = " ";
passwordTwo.textContent = " "

}


