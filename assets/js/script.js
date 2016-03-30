$(function(){
  
  $.ajax({
    // request type ( GET or POST )
	  type: "GET",
        
    // the URL to which the request is sent
	  url: mw.util.wikiScript('api'),
	  
	  // data to be sent to the server
	  data: { action:'query', format:'json', lgname:'foo', lgpassword:'foobar' },
        
    // The type of data that you're expecting back from the server
	  dataType: 'json',
        
    // Function to be called if the request succeeds
	  success: function( jsondata ){
		  alert( jsondata.result );
	  }
  });
  
});
