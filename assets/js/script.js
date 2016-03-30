$(function(){
  
  var str = "National Great Blacks In Wax Museum";
  str = str.replace(" ", "+");
  
  wikiSearch(str);
  
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
        
      var title = entry.title.replace(" ", "");  
      console.log(entry.title);
      
      div.append('<div><a href="' + wiki + title + '" target="_blank">' + entry.title + '</a></div>');
      });
    });
  }
  // https://en.wikipedia.org/wiki/
 
});
