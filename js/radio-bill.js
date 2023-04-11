// get a reference to the sms or call radio buttons
var checkedButton=document.querySelector("input[name='billItemType']");

//get a reference to the add button
var addButton=document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill

var bill=document.querySelector('.totalTwo');

//add an event listener for when the add button is pressed
function addButtonClicked(){


var callTotal=34.50;


var smsTotal=3.00;


var total=37.50;

if(checkedButton.checked){
var billItem=checkedButton.value;


if(billItem=='call'){

    total+=2.75;
    callTotal+=2.75;
}

else{
    total+=0.75;
}

}

total.toFixed(2);


bill.innerHTML=total;
callBill.innerHTML=callTotal;
smsBill.innerHTML=smsTotal;

if(total>30.00 && total<50.00){

    bill.style.color="orange";

}

else if(roundedBillTotal>50.00){
bill.style.color="red";
}

//alert(total);
}

addButton.addEventListener('click',addButtonClicked);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
