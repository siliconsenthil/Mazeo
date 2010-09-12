var Panel = new function(){
  this.blockedCells = function(){return $('.blocked')}

  this.display = function(){
    blockedCellsText = this.blockedCells().map(function(i,bCell){return '('+$(bCell).attr('title')+')'}).get().join(',')
    $('#blocked_cells').html(blockedCellsText+' ')
  }

}
