$(document).ready(function () {
  $("#drop_btn").click(function () {
    $(".dropdown").toggle();
  });
});
$(document).ready(function () {
  $("#drop_btn").click(function () {
    $("#drop_btn").toggleClass('open');
  });
});

$(document).ready(function(){

  if($("#slider-range-max").length > 0){

    $( "#slider-range-max" ).slider({
      range: "max",
      value : 1,
      min: 1,
      max: 100,
      create: function( event, ui ) {
       $(".ui-slider-handle").append('<span class="ui-slider-tip"></span>');
        
      },
      slide: function( event, ui ) {
          $(".ui-slider-tip").text(ui.value);
      }
    });

  }
});