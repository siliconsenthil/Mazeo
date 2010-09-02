$(document).ready(function() {
  $('#maze td').click(function(event){
    $(event.target).toggleClass('blocked cell_hover')
  }),
  $('#maze td').mouseover(function(event){
    $(event.target).addClass('cell_hover')
  }),
  $('#maze td').mouseout(function(event){
    $(event.target).removeClass('cell_hover')
  }),
  $('#maze td').mousedown(function(){
    $('#maze td').hover(function(event){
      $(event.target).addClass('blocked')
    })
  }),
  $('#maze td').mouseup(function(){
    $('#maze td').unbind('mouseenter mouseleave')
  })
})
