 const passwordBox = document.getElementById("password")
// const length = 8

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerCase = "abcdefghijklmnopqrstuvwxyz"
// const numbers = "0123456789"
// const specialChar = "~!#$%^&*_-/\."
// const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!#$%^&*_-/\."

//function generatePassword(){
    // let password =""

    // password += upperCase[Math.floor(Math.random() * upperCase.length)]
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    // password += numbers[Math.floor(Math.random() * numbers.length)]
    // password += specialChar[Math.floor(Math.random() * specialChar.length)]
    
    // while(length>password.length){
    //     password += allChars[Math.floor(Math.random() * allChars.length)]
    // }


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*+_-.';

function generatePassword(length) {
        let password = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
         password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
     
    passwordBox.value = password
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}