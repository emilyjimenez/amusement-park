$(document).ready(function(){
  $("#height-form").submit(function(event) {
    event.preventDefault();
    var height = parseFloat($("#height-form input").val());
    if (height <= 1) {
      $(".for-adults").hide();
      $(".for-kids").show();
    } else {
      $(".for-kids").hide();
      $(".for-adults").show();
    }

    $("#ride-list").removeClass("hide");
  });
});
