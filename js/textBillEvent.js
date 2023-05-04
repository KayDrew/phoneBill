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
   
   var bill2=calculateTextBill();
   
  bill2.callOrSms(billItem2);
 
  
 bill2.setTotal();

total+=bill2.totalBill(); 
callTotal+=bill2.callBill();
smsTotal+=bill2.smsBill();

var warning=bill2.getWarning();
var critical=bill2.getCritical();



if(total>=warning && total<critical){

    totalText.style.color="orange";

}

else if(total>critical){
totalText.style.color="red";
}

else{
totalText.style.color="black";
}

var roundedTotal=total.toFixed(2);
var roundedCallTotal= callTotal.toFixed(2);
var roundedSmsTotal= smsTotal.toFixed(2);

    totalText.innerHTML=roundedTotal;
    callBill.innerHTML=roundedCallTotal;
    smsBill.innerHTML=roundedSmsTotal;

}


addButton.addEventListener('click',textBillEvent);


