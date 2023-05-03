
describe("The text-bill function", function() {


    it("should be able to return the cost for lowercase text", function(){
    
    var bill=calculateTextBill("call");
        assert.equal(2.75, bill.callBill()) // 
        
         bill=calculateTextBill("sms");
        assert.equal(0.75, bill.smsBill()) //     
    });


    it("should be able to return the cost for uppercase text", function(){
            var bill=calculateTextBill("CALL");
        assert.equal(2.75, bill.callBill()) // 
        
         bill=calculateTextBill("SMS");
        assert.equal(0.75, bill.smsBill()) //     
    
        
    });
    
    
    it("should return zero when invalid or empty string is passed", function(){
        
        
        var bill=calculateTextBill("");
        assert.equal(0,bill.callBill()) // 
        assert.equal(0,bill.smsBill()) //     
    });


    it("should be able to return the overall total cost ", function(){

        var bill=calculateTextBill("CALL");
       // bill+=calculateTextBill("sms");
       // bill+=calculateTextBill("call");

    assert.equal(2.75, bill.totalBill()) // 
         

    
});
    
       

});