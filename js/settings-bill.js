// get a reference to the sms or call radio buttons
var checkedRadio= document.querySelector("input[name='billItemTypeWithSettings']");
var checkedRadio1= document.querySelector("input[name='billItemTypeWithSettings1']");
// get refences to all the settings fields
var callTotalSettings=document.querySelector('.callTotalSettings');

var smsTotalSettings=document.querySelector('.smsTotalSettings');

var totalSettings=document.querySelector('.totalSettings');


//get a reference to the add button
var addButton=document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
var updateSettings=document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings


// create a variables that will keep track of all three totals.
var callTotal3=34.00
var smsTotal3=7.75;
var total3=41.75;


function settingsUpdated(){

}
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click',settingsUpdated);

function addItems(){

}

//add an event listener for when the add button is pressed
addButton.addEventListener('click',addItems);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
