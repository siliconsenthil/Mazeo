$(document).ready(function() {
  $('#maze td').click(function(event){
    $(event.target).toggleClass('blocked')
    Panel.display()
  }),

  $('#maze td').mousedown(function(){
    $('#maze td').mouseleave(function(event){
      $(event.target).toggleClass('blocked')
      Panel.display()
    })
  }),

  $('#maze td').mouseup(function(){
    $('#maze td').unbind('mouseleave')
  }),

  $('td').each(function(i,cell){
      $(cell).attr('title',$(cell).attr('id').substring(5).replace('_',','))
  })

})
