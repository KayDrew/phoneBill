
describe("The radio-bill function", function() {

    it("should be able to return the total sms cost", function(){
        
        var bill= calculateRadio();
        bill.setCost("sms");
        bill.setCost("sms");
        
        assert.equal(1.50, bill.smsBill2()) // 
       

    });


    
    it("should be able to return the call cost", function(){
    	
        var bill= calculateRadio();
        bill.setCost("call");
        bill.setCost("call");
        
        assert.equal(4.5, bill.callBill2()) // 
         
    });

    it("should be able to calculate the  total  for smses and calls", function(){
        
        var bill= calculateRadio();
        
       bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms")
        
        assert.equal(4.50, bill.callBill2()) ;
        assert.equal(1.50, bill.smsBill2()) ;
       

    });


    
    it("should be able to calculate the overall total cost", function(){
        
        var bill= calculateRadio();
        
       bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms")
      bill.setTotal ();
        
        assert.equal(6, bill.totalBill2()) ;
       

    });
    
        it("should return orange colour when total cost is equal to, or above 30", function(){
        
        var bill= calculateRadio();
        
       bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
      bill.setTotal ();
        
        assert.equal("orange colour",  bill.getLevel()) ;
       

    });
    
    
          it("should return red colour when total cost is above 50", function(){
        
        var bill= calculateRadio();
        
       bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
        bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
          bill.setCost("call");
        bill.setCost("call")
        bill.setCost("sms");
        bill.setCost("sms");
        
      bill.setTotal ();
        
        assert.equal("red colour",  bill.getLevel()) ;
       

    });

    
    it("should return normal colour if total cost is the below both warning and critical level", function(){
      var bill= calculateRadio();
        
      bill.setCost("call");
       bill.setCost("call");
       bill.setTotal ();


      assert.equal("normal colour", bill.getLevel()); //


    });


});