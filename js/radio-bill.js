var checkedRadio= document.querySelector("input[name='billItemType']");
var checkedRadio1= document.querySelector("input[name='billItemType1']");
var totalTwo=document.querySelector('.totalTwo');
var callTotalTwo=document.querySelector('.callTotalTwo');
var smsTotalTwo=document.querySelector('.smsTotalTwo');

var add1=document.querySelector('.radioBillAddBtn');

var callTotal2=34.50;
var total2=37.50;
var smsTotal2=3.00;

function calculateRadio(){

    if(checkedRadio.checked){
        checkedRadio1.disabled=true;
    callTotal2+=2.75;
    total2+=0.75;
    }
    if(checkedRadio1.checked){
        checkedRadio.disabled=true;
        smsTotal2+=0.75;
        total2+=0.75;
    }
totalTwo.innerHTML=total2;
    callTotalTwo.innerHTML=callTotal2;
}

add1.addEventListener('click',calculateRadio);