$(document).ready(function(){

//On load functions for Modals
$(".splash__reset").hide();
$(".splash__cancel").hide();
$(".splash__thanks").hide();
$(".splash__confirm").hide();

//On click functions for Modals
$("#confirmBtnContinue").on('click', function(){
  $(".splash__main").fadeOut('slow');
  $(".splash__confirm").delay('slow').fadeIn('slow');
});
$("#confirmBtnCancel").on('click', function(){
  $(".splash__main").fadeOut('slow');
  $(".splash__cancel").delay('slow').fadeIn('slow');
});
$("#completeBtnCancel").on('click', function(){
  $(".splash__confirm").fadeOut('slow');
  $(".splash__cancel").delay('slow').fadeIn('slow');
});
$("#completeBtnContinue").on('click', function(){
  $(".splash__confirm").fadeOut('slow');
  $(".splash__thanks").delay('slow').fadeIn('slow');
});
$("#cancelBtnContinue").on('click', function(){
  $(".splash__cancel").fadeOut('slow');
  $(".splash__reset").delay('slow').fadeIn('slow');
});
$("#thanksBtn").on('click', function(){
  $(".splash__thanks").fadeOut('slow');
  $(".splash__reset").delay('slow').fadeIn('slow');
});
$("#resetBtn").on('click', function(){
  $(".splash__reset").fadeOut('slow');
  $(".splash__main").delay('slow').fadeIn('slow');
});

});
