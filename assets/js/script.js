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
    var div = $("#results");
    
    searchArray.forEach(function(entry) {
    console.log(entry.title);
    div.append('<a href="#">' + entry.title + '</a>');
    });

  });
  
  // https://en.wikipedia.org/wiki/
 
});
