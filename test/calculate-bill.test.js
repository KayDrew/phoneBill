
describe("The calculate-bill function", function() {

    it("should be able to calculate the total cost for lowercase text", function(){
        
        assert.equal(4.25, calculateBillFunction("sms,sms,call")) // 
        assert.equal(8.25, calculateBillFunction("call,call,call")) // 
      

    });


    it("should be able to calculate the total cost for uppercase and mixed case text", function(){
        
        assert.equal(4.25, calculateBillFunction("SMS,SMS,CALL")) // 
        assert.equal(8.25, calculateBillFunction("calL,CALL,CAll")) //   

    });

    it("should return zero when invalid or no text is entered", function(){
        
        assert.equal(0, calculateBillFunction("smscallsms")) // 
        assert.equal(0, calculateBillFunction("")) // 
      

    });

});