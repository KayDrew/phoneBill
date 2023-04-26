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
var smsCost=0.00;
var callCost=0.00;
var warningLevel =0.00;
var criticalLevel =0.00;



function settingsUpdated(){

    
callCost=parseFloat(callCostSetting.value);    
smsCost=parseFloat(smsCostSetting.value);
warningLevel =parseFloat(warningLevelSetting.value);
criticalLevel=parseFloat(criticalLevelSetting.value);

    if (total3>=warningLevel && total3<criticalLevel ){
        totalSettings.style.color="orange";
        }
     else if(total3>=criticalLevel){
    
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
    
var bill3= settingsBill(billItem3);

var billSms=bill3.smsFunc;
var billCall=bill3.callFunc;
var critical=bill3.criticalFunc;
var warning=bill3.warningFunc;

billSms=smsCost;
billCall=callCost;
critical=criticalLevel;
warning=warningLevel;

total3=bill3.totalBill3;
smsTotal3=bill3.smsBill3;
callTotal3=bill3.callBill3;

var roundedBillTotal3=total3.toFixed(2);
var roundedCallTotal3 =callTotal3.toFixed(2);
var roundedSmsTotal3 = smsTotal3.toFixed (2);

 totalSettings.innerHTML =roundedBillTotal3;
 smsTotalSettings.innerHTML=roundedSmsTotal3;
 callTotalSettings.innerHTML=roundedCallTotal3;   

}



addButton3.addEventListener('click',addFunction);