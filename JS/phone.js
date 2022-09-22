function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
     let newPhoneNumber;
    
     if(isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    
     }

     else{
        newPhoneNumber = previousPhoneNumber - 1;
     }
phoneNumberField.value = newPhoneNumber;

return newPhoneNumber;
    
}

function updatePhoneTotalPrice(newPhoneNumber){

     const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phn-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
document.getElementById('btn-phn-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(true);
updatePhoneTotalPrice(newPhoneNumber);
   
})

/* calculation of phone total*/
const phoneTotalElement = document.getElementById('phn-total');
const currentPhoneTotalString = phoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);

document.getElementById('btn-phn-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
})