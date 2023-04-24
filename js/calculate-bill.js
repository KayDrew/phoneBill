
function calculateBillFunction (items){
	
var stringArr=items.split(',');
  var totalCost=0;

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

return totalCost;
}