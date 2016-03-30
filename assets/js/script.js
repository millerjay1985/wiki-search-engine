$(function(){
  
  $.ajax({
    url: '//www.wikidata.org/w/api.php',
    data: { action: 'wbgetentities', ids: mw.config.get('wgWikibaseItemId'), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      console.log('wb label', x.entities.Q39246.labels.en.value);
      console.log('wb description', x.entities.Q39246.descriptions.en.value);
    }
  });  
  
});
