const passwordBox = document.getElementById("password");
const length = 20;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

const allChar = upperCase + lowerCase + numbers + specialCharacters;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');
    passwordBox.value = password;
}

function copyPassword(){
    if (passwordBox.value) {
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                showCopiedMessage();
            })
            .catch(err => console.error("Failed to copy: ", err));
    }

}

function showCopiedMessage() {
    copiedMessage.classList.remove("hidden");
    setTimeout(() => {
        copiedMessage.classList.add("hidden");
    }, 2000);
}
