
describe("The text-bill function", function() {

    it("should be able to calculate the total cost for lowercase text", function(){
        
        assert.equal(2.25, calculateTextBill("call")) // 
        assert.equal(0.25, calculateTextBill("sms")) //     
    });


    it("should be able to calculate the total cost for uppercase text", function(){
        
        assert.equal(2.25, calculateTextBill("CALL")) // 
        assert.equal(0.25, calculateTextBill("SMS")) //     
    });
    
    
    it("should return zero when invalid or empty string is passed", function(){
        
        assert.equal(2.25, calculateTextBill("call")) // 
        assert.equal(0.25, calculateTextBill("sms")) //     
    });
    

});