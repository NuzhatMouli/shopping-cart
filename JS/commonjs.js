function getTextElementValueById(elementId){
/* calculation of phone total*/
const phoneTotalElement = document.getElementById(elementId);
const currentPhoneTotalString = phoneTotalElement.innerText;
const currentPhoneTotal = parseInt(currentPhoneTotalString);
return currentPhoneTotal;
}


function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phn-total');
   const currentCaseTotal = getTextElementValueById('case-total');
   
   const currentSubTotal = currentPhoneTotal + currentCaseTotal;
   const subTotalElement=document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotal;
}