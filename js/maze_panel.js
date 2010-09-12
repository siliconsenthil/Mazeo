var Panel = new function(){
  this.blockedCells = function(){return $('.blocked')}

  this.display = function(){
    blockedCellsText = this.blockedCells().map(function(i,bCell){return '('+$(bCell).attr('title')+')'}).get().join('|')
    $('#blocked_cells').html(blockedCellsText+' ')
  }

  this.drawRoute = function(){
    console.log("["+$('#route_cells').val()+"]")
    routeCellsText = $('#route_cells').val().split('|')
    $(routeCellsText).each(function(i,cT){
      cell = Cell.parse(cT)
      if(cell.hasClass('blocked'))
        cell.addClass('clash')
      else{
        cell.removeClass('clash')
        cell.addClass('route')
      }
    })
  }

  this.clearRoute = function(){
    $('.route').removeClass('route')
    $('.clash').removeClass('clash')
  }

}

var Cell = new function(){
  this.parse = function(cellText){
    cellId = '#cell_'+cellText.replace('(','').replace(')','').replace(',','_')
    return $(cellId)
  }
}
