
describe("The settings-bill function", function() {

    it("should be able to return the  call cost", function(){
        
        assert.equal(2.75, settingsBill('call')) // 
        assert.equal(2.75,settingsBill('CALL')) // 
        assert.equal(0,settingsBill('')) //

    });


    
    it("should be able to return the sms cost", function(){
        
        assert.equal(0.75, settingsBill('sms')) // 
        assert.equal(0.75,settingsBill('sMS')) // 
        assert.equal(0,settingsBill('')) //

    });


    
    it("should be able to calculate the overall total cost", function(){
        
        assert.equal(2.75, settingsBill('call')) // 
        assert.equal(2.75,settingsBill('CALL')) // 
        assert.equal(0,settingsBill('')) //

    });

});