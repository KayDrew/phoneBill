
describe("The settings-bill function", function() {

    it("should be able to return the  call cost", function(){

        var bl= settingsBill('call',2,1,8,9);
        assert.equal(2, bl.callBill3); // 

        var bl= settingsBill('call',8,6,24,60); 
        assert.equal(8, bl.callBill3); //
        

    });


    
    it("should be able to return the sms cost", function(){
        
        var bl= settingsBill('sms',2,1,8,9);
        assert.equal(1, bl.smsBill3); //

        var bl= settingsBill('sms',8,6,24,60); 
        assert.equal(6, bl.smsBill3); // 
    });



    it("should be able to calculate the overall total cost", function(){
        
        var bl= settingsBill('call',2,1,8,9);
        assert.equal(2, bl.totalBill3); // 

        var bl= settingsBill('sms',8,6,24,60);
        assert.equal(6, bl.totalBill3); // 
       

    });

    
    it("should be able to return the warning level", function(){

        var bl= settingsBill('call',8,6,24,60); 
        assert.equal(24, bl.warning); //
  
        var bl= settingsBill('sms',2,1,8,9);
        assert.equal(8, bl.warning); //

    });


    it("should be able to return the critical level", function(){

        var bl= settingsBill('call',8,6,24,60); 
        assert.equal(60, bl.critical); //
  
        var bl= settingsBill('sms',2,1,8,9);
        assert.equal(9, bl.critical); //

    });

    });

