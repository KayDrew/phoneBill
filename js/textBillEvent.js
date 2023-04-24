// get a reference to the textbox where the bill type is to be entered
var billType=document.querySelector('.billTypeText');

//get a reference to the add button
var addButton=document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var total=0.00;
var callTotal=0.00;
var smsTotal=0.00;

    var totalText=document.querySelector('.totalOne');
var callBill=document.querySelector('.callTotalOne');

var smsBill=document.querySelector('.smsTotalOne');


function textBillEvent(){


   let billItem=billType.value.toLowerCase();
   
   var bill=calculateTextBill(billItem);

total+=bill.totalBill;
callTotal +=bill.callBill;
smsTotal+=bill.smsBill;


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


addButton.addEventListener('click',textBillEvent);


