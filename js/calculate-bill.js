
function calculateBillFunction (items){
	
	var str=items.replace(/ +/g, "");
	
var stringArr=str.split(',');
  var totalCost=0;
  var warning= 20;
  var critical= 30;

  if(stringArr.length>0){

for(let i=0;i<stringArr.length;++i){

    var billItem1=stringArr[i].toLowerCase();

    if(billItem1==='call'){
        totalCost+=2.75;

    }

    else if(billItem1==='sms'){

        totalCost+=0.75;
    }
}

  }




function getTotalCost(){

    var result= totalCost.toFixed(2);
    return result;
}


function getLevel(){

    if(totalCost>=warning && totalCost<critical){  
        return "orange colour";
    }

    else  if(totalCost>=critical){  
        return "red colour";
    }


}

function getWarning(){

    return warning;
}

function getCritical(){

    return critical;
}




return{getTotalCost,
    getLevel,
    getWarning,
    getCritical
    
}

}