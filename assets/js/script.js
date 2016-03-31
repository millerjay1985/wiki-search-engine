$(function(){
  
  var div = $("#results");

  $("#searchclear").click(function(){
    $("#searchinput").val('');
    div.empty();
  });
  
  $('.form-control').keydown(function(e) {
    if (e.keyCode == 13) {
      var value = $(this).val();
      value = value.replace(" ", "+");
      console.log(value)
      $('#form').submit();
      wikiSearch(value);
    }
   });
  
  // this funnction returns an array using the wiki API
  function wikiSearch(input){
    $.ajax({
      url:'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + input + '&callback=?',
      data: {format: 'json'},
      dataType: 'jsonp'
    }).done( function ( data ) {
      
      var searchArray = data.query.search;
      var wiki = 'https://en.wikipedia.org/wiki/';
      
      searchArray.forEach(function(entry) {
        
      var title = entry.title.replace(" ", "");  
      console.log(entry.title);
      
      div.empty();
      
      div.append('<div><a href="' + wiki + title + '" target="_blank">' + entry.title + '</a></div>');
      });
    });
  }
  // https://en.wikipedia.org/wiki/
 
});
