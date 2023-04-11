
const calculateBtn= document.querySelector(".calculateBtn");

var total = document.querySelector(".billTotal");

const str=document.querySelector(".billString");

function calculateBtnClicked(){
    
    var billString = str.value;
    
    var billItems = billString.split(",");
    
    var billTotal = 0;
    
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    var roundedBillTotal = billTotal.toFixed(2);
    total.innerHTML = roundedBillTotal;

    if(roundedBillTotal>20.00 && roundedBillTotal<30.00){

        total.style.color="orange";

    }

   else if(roundedBillTotal>30.00){
    total.style.color="red";
    }



}

calculateBtn.addEventListener('click', calculateBtnClicked);