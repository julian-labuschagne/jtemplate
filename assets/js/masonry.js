// init Masonry
var $grid = $('.grid').masonry({
  // options...
   itemSelector: '.grid-item',
   columnWidth: '.grid-sizer',
   percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
