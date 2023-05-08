
describe("The settings-bill function", function() {

    it("should be able to return the  call total", function(){

        var bl= settingsBill();
        bl.setCritical(9);
        bl.setCallCost(3);
        bl.makeCall();
        assert.equal(3, bl.callBill3()); // 

        bl.makeCall();
        bl.makeCall(); 
        assert.equal(9, bl.callBill3()); //
        

    });


    
    it("should be able to return the sms total", function(){
       
        var bl= settingsBill();
        bl.setCritical(9);
        bl.setSmsCost(4);
        bl.sendSms();
        assert.equal(4, bl.smsBill3()); // 

        bl.sendSms();
        bl.sendSms(); 
        assert.equal(12, bl.smsBill3()); //
    });


       
    it("should be able to return the sms total", function(){
       
        var bl= settingsBill();
        bl.setCritical(9);
        bl.setSmsCost(4);
        bl.sendSms();
        assert.equal(4, bl.smsBill3()); // 

        bl.sendSms();
        bl.sendSms(); 
        assert.equal(12, bl.smsBill3()); //
    });

       
    it("should be able to return the sms total and the call total", function(){
       
        var bl= settingsBill();
        bl.setCritical(9);
        bl.setSmsCost(4);
        bl.sendSms();
        assert.equal(4, bl.smsBill3()); // 

        bl.setCallCost(6);
        bl.makeCall();
        bl.makeCall(); 
        assert.equal(12, bl.callBill3()); //
    });


    it("should be able to calculate the overall total cost for calls and smses", function(){
        
        var bl= settingsBill();
        bl.setCritical(24);
        bl.setSmsCost(2);
        bl.sendSms();
        bl.setCallCost(4);
        bl.makeCall();
        bl.setTotal();
        assert.equal(6, bl.totalBill3()); // 

        bl.sendSms();
        bl.sendSms(); 
        bl.makeCall();
        bl.makeCall();
        bl.setTotal();
        assert.equal(18, bl.totalBill3()); //

    });

    
    it("should return the orange colour if total cost is  the same as, or above warning level", function(){

        var bl= settingsBill();
        bl.setCritical(24);
        bl.setWarning(18);
        bl.setCallCost(4);
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.setTotal();

        assert.equal("orange colour", bl.getLevel()); //
        

    });


    
    it("should return the red colour if total cost is the same as,or above critical level", function(){

       
        var bl= settingsBill();
        bl.setCritical(24);
        bl.setWarning(18);
        bl.setCallCost(4);
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.makeCall();
        bl.setTotal();

        assert.equal("red colour", bl.getLevel()); //

    
    });

    
    
    it("should return normal colour if total cost is the below both warning and critical level", function(){

        var bl= settingsBill();
        bl.setCritical(24);
        bl.setWarning(18);
        bl.setCallCost(4);
        bl.makeCall();
        bl.makeCall();

        assert.equal("normal colour", bl.getLevel()); //


    });

});