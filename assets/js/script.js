$(function(){
  
  var string = "National Great Blacks In Wax Museum";
  string = input.replace(" ", "+");
  
  wikiSearch(string);
  
  // this funnction returns an array using the wiki API
  function wikiSearch(input){
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
      
      div.append('<div><a href="' + wiki + title + '" target="_blank">' + entry.title + '</a></div>');
      });
  
    });
  }
  // https://en.wikipedia.org/wiki/
 
});
