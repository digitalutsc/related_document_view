jQuery( document ).ready(function() {
  var element = jQuery('.node__content').first().detach();
  jQuery('.region-content').first().append(element);

  var related_doc_nid = jQuery(".field--name-field-related-document").first().children("div").eq(1).find("a").attr('href');
  var related_doc_manifest = window.location.origin + related_doc_nid.trim() + "/" + "book-manifest";
  jQuery("#iiif-manifest").attr("href", related_doc_manifest);
  
});
