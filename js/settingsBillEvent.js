// get a reference to the sms or call radio buttons
var settingRadioBtns =document.querySelectorAll("input[name='billItemTypeWithSettings']");

// get refences to all the settings fields
var callTotalSettings=document.querySelector('.callTotalSettings');

var smsTotalSettings=document.querySelector('.smsTotalSettings');

var totalSettings=document.querySelector('.totalSettings');

var callCostSetting =document.querySelector (".callCostSetting");
var smsCostSetting =document.querySelector (".smsCostSetting");

var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var warningLevelSetting =document.querySelector(".warningLevelSetting");

//get a reference to the add button
var addButton3=document.querySelector('.addBtn');

//get a reference to the 'Update settings' button
var updateSettings=document.querySelector('.updateSettings');

var total3=0; 
var callTotal3=0;
var smsTotal3=0; 
var smsCost3=0.00;
var callCost3=0.00;
var warningLevel3=0.00;
var criticalLevel3=0.00;



function settingsUpdated(){

var bill3= settingsBill();
callCost3=(parseFloat(callCostSetting.value));    
smsCost3=(parseFloat(smsCostSetting.value));
warningLevel3=(parseFloat(warningLevelSetting.value));
criticalLevel3=(parseFloat(criticalLevelSetting.value));

bill3.setCritical(criticalLevel3);
bill3.setWarning(warningLevel3);

var level= bill3.getLevel();

    if (level==="orange colour"){
        totalSettings.style.color="orange";
        }
     else if(level==="red colour"){
    
    totalSettings.style.color="red";
    
    }
    
    else{
        totalSettings.style.color="black";
    
        }

}


updateSettings.addEventListener('click',settingsUpdated);


function addFunction(){

    var billItem3="";

    for(let radio of settingRadioBtns){
        
        if(radio.checked)  {
           billItem3=radio.value;
    }
}  
    
var bill3= settingsBill();


bill3.setCallCost(callCost3);    
bill3.setSmsCost(smsCost3);
bill3.setWarning(warningLevel3);
bill3.setCritical(criticalLevel3);
warningLevel3=bill3.getWarning();
criticalLevel3= bill3.getCritical();

if(total3<criticalLevel3){

if(billItem3 ==="call"){
	
	bill3.makeCall();
	}
	
	else {
bill3.sendSms();
}
}

smsTotal3+=bill3.smsBill3();
callTotal3+=bill3.callBill3();
bill3.setTotal();
total3+=bill3.totalBill3();



var roundedBillTotal3=total3.toFixed(2);
var roundedCallTotal3 =callTotal3.toFixed(2);
var roundedSmsTotal3 = smsTotal3.toFixed (2);

 totalSettings.innerHTML =roundedBillTotal3;
 smsTotalSettings.innerHTML=roundedSmsTotal3;
 callTotalSettings.innerHTML=roundedCallTotal3;   


 if (total3>=warningLevel3 && total3<criticalLevel3 ){
    totalSettings.style.color="orange";
    }
 else if(total3>=criticalLevel3){

totalSettings.style.color="red";

}

else{
    totalSettings.style.color="black";

    }

}

addButton3.addEventListener('click',addFunction);