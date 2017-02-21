$(document).ready(function(){
  $('#form-1').on('submit', function(event){
    $('.circle').css('background-color', $('#form-1 > input').val());
    event.preventDefault();
  });
});
