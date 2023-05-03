// get a reference to the textbox where the bill type is to be entered
var billType=document.querySelector('.billTypeText');

//get a reference to the add button
var addButton=document.querySelector('.addToBillBtn');
//create a variable that will keep track of the total bill
var total=0;
var callTotal=0;
var smsTotal=0;

    var totalText=document.querySelector('.totalOne');
var callBill=document.querySelector('.callTotalOne');

var smsBill=document.querySelector('.smsTotalOne');


function textBillEvent(){


   let billItem2=billType.value.toLowerCase();
   
   var bill2=calculateTextBill(billItem2);

total+=bill2.totalBill();
callTotal+=bill2.callBill();
smsTotal+=bill2.smsBill();


if(total>30.00 && total<50.00){

    totalText.style.color="orange";

}

else if(total>50.00){
totalText.style.color="red";
}

else{
billTotal.style.color="black";
}

    totalText.innerHTML=total;
    callBill.innerHTML=callTotal;
    smsBill.innerHTML=smsTotal;

}


addButton.addEventListener('click',textBillEvent);


