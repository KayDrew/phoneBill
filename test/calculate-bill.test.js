
describe("The calculate-bill function", function() {

    it("should be able to calculate the total cost for lowercase text", function(){

        var bill= calculateBillFunction("SMS,SMS,CALL");
        
        assert.equal(4.25, bill.getTotalCost()) // 
      

    });


    it("should be able to calculate the total cost for uppercase and mixed case text", function(){

        var bill= calculateBillFunction("SMS,SMS,CALL");
        
        assert.equal(4.25, bill.getTotalCost()) //  

    });

    it("should return zero when invalid or no text is entered", function(){

        var bill= calculateBillFunction("");
        
        assert.equal(0, bill.getTotalCost()) // 
      

    });


    it("should return warning level  amount", function(){
        
        var bill= calculateBillFunction("call,call,call,call,call,sms,sms,call,call,call,call,call,sms,sms");
        
        assert.equal(20, bill.getWarning()) // 
      

    });

    
    it("should return critical level  amount", function(){
        
        var bill= calculateBillFunction("call,call,call,call,call,sms,sms,call,call,call,call,call,sms,sms");
        
        assert.equal(30, bill.getCritical()) // 
      

    });


    it("should return return orange colour when total reaches 20+", function(){
        var bill= calculateBillFunction("SMS,SMS,CALL,call,call,call,call,call,call,call,call");
        
        assert.equal("orange colour", bill.getLevel()) //

    });


    it("should return return red colour when total reaches 30+", function(){

        var bill= calculateBillFunction("call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call");// 

        assert.equal("red colour",bill.getLevel());
    });
        

});