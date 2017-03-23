$(document).ready(function(){
  var nameRegex = /^[a-zA-Z-]{3,16}$/;
  $("#inputName").on('keyup', function() {
    if (nameRegex.test($(this).val())) {
      $(this).removeClass("warning")
    } else {
      $(this).addClass("warning");
    }
  });

  var mobileRegex = /^[0-9-()+]{3,20}/;
  $("#inputMobile").on('keyup', function() {
    if (mobileRegex.test($(this).val())) {
      $(this).removeClass("warning")
    } else {
      $(this).addClass("warning");
    }
  });

  var dayRegex = /^[1-9]$|^[1-2][0-9]$|^3[0-1]$/;
  $("#inputBirthDay").on('keyup', function() {
    if (dayRegex.test($(this).val()))  {
      $(this).removeClass("warning")
    } else {
      $(this).addClass("warning");
    }
  });

  var monthRegex = /^(January|February|March|April|May|June|July|August|September|October|November|December)/;
  $("#inputBirthMonth").on('keyup', function() {
    if (monthRegex.test($(this).val())) {
      $(this).removeClass("warning")
    } else {
      $(this).addClass("warning");
    }
  });

  var yearRegex = /^19[0-9]{2}$|^20[0-9]{2}$/;
  $("#inputBirthYear").on('keyup', function() {
    if (yearRegex.test($(this).val())) {
      $(this).removeClass("warning")
    } else {
      $(this).addClass("warning");
    }
  })
});
