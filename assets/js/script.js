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
    var wiki = 'https://en.wikipedia.org/wiki/';
    
    searchArray.forEach(function(entry) {
    console.log(entry.title);
    
    var title = entry.title.replace(" ", "");
    
    div.append('<div><a href="' + wiki + title + '">' + entry.title + '</a></div>');
    });

  });
  
  // https://en.wikipedia.org/wiki/
 
});
