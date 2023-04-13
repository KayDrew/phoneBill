// get a reference to the textbox where the bill type is to be entered
var billType=document.querySelector('.billTypeText');

//get a reference to the add button
var addButton=document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var total=0.00;
var callTotal=0.00;
var smsTotal=0.00;



var callBill=document.querySelector('.callTotalOne');

var smsBill=document.querySelector('.smsTotalOne');

//add an event listener for when the add button is pressed
function addButtonClicked(){

  

    var billItem=billType.value.toLowerCase();

    var totalText=document.querySelector('.totalOne');
    

    if(billItem=="call"){

        total+=2.75;
        callTotal+=2.75;
    }
    
    else if(billItem=="sms"){
        total+=0.75;
        smsTotal+=0.75;
    }

    
if(total>30.00 && total<50.00){

    totalText.style.color="orange";

}

else if(total>50.00){
totalText.style.color="red";
}

else{
billTotal.style.color="black";
}

    var roundedBillTotal=total.toFixed(2);
    var roundedCallTotal=callTotal.toFixed(2);
    var roundedSmsTotal=smsTotal.toFixed(2);

    totalText.innerHTML=roundedBillTotal;
    callBill.innerHTML=roundedCallTotal;
    smsBill.innerHTML=roundedSmsTotal;

}
addButton.addEventListener('click',addButtonClicked);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
