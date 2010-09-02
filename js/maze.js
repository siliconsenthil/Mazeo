$(document).ready(function() {
  $('#maze td').click(function(event){
    $(event.target).toggleClass('blocked cell_hover')
  })
})
