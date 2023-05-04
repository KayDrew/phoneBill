
describe("The text-bill function", function() {


    it("should be able to calculate the total cost for calls regardless of casing", function(){
    
    var bill=calculateTextBill();
    bill.callOrSms("call");
    bill.callOrSms("cALL");
  
     assert.equal(4.50, bill.callBill()) // 
             
          
    });


    it("should be able to calculate the total cost for smses", function(){
    	
            var bill=calculateTextBill();
    bill.callOrSms("sms");
        bill.callOrSms("sms");
bill.callOrSms("sms");
    bill.callOrSms("sms");
            
    
     assert.equal(3, bill.smsBill()) //  
        
  
    });
    
    
    it("should be able to calculate the overal total cost ", function(){
          
        var bill=calculateTextBill();
        
           bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
        
        bill.setTotal();
        
        assert.equal(6,  bill.totalBill()) ;// 
        
    });


    it("should be able to  calculate  the total for calls and smses. ", function(){


        var bill=calculateTextBill();
       
          bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
        
        assert.equal(4.50,  bill.callBill()) ;// 
        assert.equal (1.50, bill.smsBill());        
         
  
});
    
    
        it("should return orange colour when total cost exceeds 20. ", function(){


        var bill=calculateTextBill();
       
          bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
         bill.setTotal ();
        assert.equal("orange colour",  bill.level()) ;// 
             
         
  
});
    
    
          it("should return red colour when total cost exceeds 30. ", function(){


        var bill=calculateTextBill();
       
           bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
            bill.setTotal ();            
   
  assert.equal("red colour",  bill.level()) ;// 
  
});
         it("should return   appropriate colour  based on total cost. ", function(){


      var bill=calculateTextBill();
       
          bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
        bill.setTotal();
        
          assert.equal("normal colour",  bill.level()) ;// 
          
        bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
        
        bill.setTotal();     
          assert.equal ("orange colour",  bill.level()) ;// 
          
        bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
              bill.callOrSms("sms");
           bill.callOrSms("call");
            bill.callOrSms("sms");
            bill.callOrSms("call");
        
        
        bill.setTotal();     
   
  assert.equal("red colour",  bill.level()) ;// 
  
});




    
       

});