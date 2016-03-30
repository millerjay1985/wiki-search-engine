$(function(){
  
  $.ajax({
    url: '//www.mediawiki.org/w/api.php?format=jsonty&action=query&meta=siteinfo&siprop=general&callback=?',
    data: {format: 'json'},
    dataType: 'jsonp'
  }).done( function ( data ) {console.log(data)});
 
});
