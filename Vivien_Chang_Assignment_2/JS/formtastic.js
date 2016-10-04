$("form[name=formtastic]").submit(function() {
  var age = $("input[name=age]").val();
  var namelength = $("input[name=name]").val().length;
  if (namelength > 0 && $.isNumeric(age)) {
    $("form[name=formtastic]").hide();
    $("#success").show();
  }
  if(!($.isNumeric(age))){
    $("#nameerror").hide();
    $("#ageerror").css("display", "inline-block");
  }
  if(!(namelength > 0)){
    $("#nameerror").css("display", "inline-block");
    $("#ageerror").hide();
  }
  if(!($.isNumeric(age)) && !(namelength > 0)) {
    $("#ageerror").css("display", "inline-block");
    $("#nameerror").css("display", "inline-block");
  }
});

$("select[name=pizza]").change(function() {
  var piz = $("select[name=pizza]").val();
  if (piz == "other") {
    $("label[for=pother]").show();
    $("#pother").show();
  } else {
    $("label[for=pother]").hide();
    $("#pother").hide();
  }
});
