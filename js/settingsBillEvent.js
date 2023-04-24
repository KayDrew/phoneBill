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

function settingsUpdated(){
	
    
var smsCost=0.00;
var callCost=0.00;
var warningLevel =0.00;
var criticalLevel =0.00;

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
    
    //add an event listener for when the 'Update settings' button is pressed
    updateSettings.addEventListener('click',settingsUpdated);
    
    


function settingsBillEvent(){

    
for(let radioBtn of settingRadioBtns){

    if(radioBtn.checked)  {
        
       settingBillItem=radioBtn.value;
    }

}

if (total3>=warningLevel && total3<criticalLevel ){
	totalSettings.style.color="orange";
	}
 else if(total3>=criticalLevel){

totalSettings.style.color="red";

}

else{
	totalSettings.style.color="black";

	}


var roundedBillTotal3=total3.toFixed(2);
var roundedCallTotal3 =callTotal3.toFixed(2);
var roundedSmsTotal3 = smsTotal3.toFixed (2);

 totalSettings.innerHTML =roundedBillTotal3;
 smsTotalSettings.innerHTML=roundedSmsTotal3;
 callTotalSettings.innerHTML=roundedCallTotal3;


}


addButton3.addEventListener('click',addFunction);