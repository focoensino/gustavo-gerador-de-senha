
const inputPassword =document.querySelector("#password")


const inputLength =document.querySelector("#password-length")

document.querySelector("#copy-1").addEventListener("click",copy)
document.querySelector("#copy-2").addEventListener("click",copy)



let inputLengthValue = 8

function generatePassword(){
   const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

   let password =""

   for(let i = 0; i < inputLengthValue; i++){

const randomNumbers = Math.floor(Math.random()* chars.length)

password += chars.substring(randomNumbers,randomNumbers+1)

   }

inputPassword.value=password

console.log(password)


}

function copy(){

navigator.clipboard.writeText(inputPassword.value)

}





inputLength.addEventListener("input",function(){

   inputLengthValue = inputLength.value

   generatePassword()

   console.log(inputLengthValue)
   
})

generatePassword()