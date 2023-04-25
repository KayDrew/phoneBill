
describe("The radio-bill function", function() {

    it("should be able to return the sms cost", function(){
        
        var bill= calculateRadio('sms');
        
        assert.equal(0.75, bill.smsBill2) // 
       

    });


    
    it("should be able to return the call cost", function(){
    	
        var bill= calculateRadio('call');
        
        assert.equal(2.75, bill.callBill2) // 
         
    });


    
    it("should be able to calculate the overall total cost", function(){
        
        var bill= calculateRadio('sms').smsBill2;
       
       
   bill+=calculateRadio('call').callBill2;
    
        
        assert.equal(3.50, bill) ;
       

    });

});