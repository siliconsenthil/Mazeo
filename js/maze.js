$(document).ready(function() {
  $('#maze td').click(function(event){
    $(event.target).toggleClass('blocked')
  }),

  $('#maze td').mousedown(function(){
    $('#maze td').mouseleave(function(event){
      $(event.target).toggleClass('blocked')
    })
  }),

  $('#maze td').mouseup(function(){
    $('#maze td').unbind('mouseleave')
  })
})
