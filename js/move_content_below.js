jQuery( document ).ready(function() {
  var element = jQuery('.node__content').first().detach();
  jQuery('.region-content').first().append(element);
});
