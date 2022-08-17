function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId); // get the element by id
    const inputFieldValueString = inputField.value; // get the value from the element
    const inputFieldValue = parseFloat(inputFieldValueString);  // convert string value to a number
    inputField.value = '';
    return inputFieldValue;
}

document.getElementById('btn-deposit').addEventListener('click',function() {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    console.log(newDepositAmount);
});