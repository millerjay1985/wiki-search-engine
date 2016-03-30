$(function(){
  
  var input = "National Great Blacks In Wax Museum";
  input = input.replace(" ", "+");
  
  // this funnction returns an array using the wiki API
  $.ajax({
    url:'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + input + '&callback=?',
    data: {format: 'json'},
    dataType: 'jsonp'
  }).done( function ( data ) {
    var searchArray = data.query.search;
    
    searchArray.forEach(function(entry) {
    console.log(entry.title);
    });

  });
  
  // https://en.wikipedia.org/wiki/
 
});
