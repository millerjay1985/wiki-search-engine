$(function(){
  
  $.ajax({
    //url: '//www.mediawiki.org/w/api.php?format=jsonty&action=query&meta=siteinfo&siprop=general&callback=?',
    url:'//www.mediawiki.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein&callback=?',
    data: {format: 'json'},
    dataType: 'jsonp'
  }).done( function ( data ) {console.log(data)});
  
  // https://en.wikipedia.org/wiki/
 
});
