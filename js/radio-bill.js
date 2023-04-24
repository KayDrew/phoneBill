var checkedRadio2 =document.querySelectorAll("input[name='billItemType']");

var totalTwo=document.querySelector('.totalTwo');
var callTotalTwo=document.querySelector('.callTotalTwo');
var smsTotalTwo=document.querySelector('.smsTotalTwo');

var add1=document.querySelector('.radioBillAddBtn');

var callTotal2=0.00;
var total2=0.00;
var smsTotal2=0.00;

function calculateRadio(){
	
var billItem2="";

for(let radio of checkedRadio2){
	
  if(radio.checked)  {
	 billItem2=radio.value;
    	
    if(billItem2==="call"){
    callTotal2 +=2.75;
    total2+=2.75;    
}

else if(billItem2==="sms"){
	smsTotal2+=0.75;
        total2+=0.75;
	}


}
      
      
       }

           
if(total2>=30.00 && total2<50.00){

    totalTwo.style.color="orange";

}

else if(total2>=50.00){
totalTwo.style.color="red";
}

else{
totalTwo.style.color="black";
}
    
      var roundedBillTotal2=total2.toFixed(2);
      var roundedCallTotal2=callTotal2.toFixed(2);
      var roundedSmsTotal2=smsTotal2.toFixed(2);
    
totalTwo.innerHTML=roundedBillTotal2;
    callTotalTwo.innerHTML=roundedCallTotal2;
    smsTotalTwo.innerHTML=roundedSmsTotal2;
}

add1.addEventListener('click',calculateRadio);
