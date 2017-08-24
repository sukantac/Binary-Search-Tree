//Tree Creation main part

function valueInsert() {
  inputval = parseInt(document.getElementById("inpval").value, 10);
  if (document.getElementById("inpval").value.length > 0) {
    bst.push(inputval);
    $(".btn-success").removeAttr('disabled');

  }
  if (document.getElementById("inpval").value.length == 0) {
    swal({
       title: 'oops',
       text: 'please enter a value',
       type: 'warning'
    });
  }
  document.getElementById("inpval").value = "";

}

$("#inpval").keyup(function() {
  if ($("#inpval").val().length > 0) {
    $("#createtree").removeAttr('disabled');
  }
  if ($("#inpval").val().length === 0) {
    $("#createtree").attr('disabled', 'true');

  }
});
$("#inpval").keyup(function(event) {
  if (event.keyCode === 13) {
    if ($("#inpval").val().length > 0) {
      $("#createtree").click();
    } else {
      $("#inpval").blur();
      swal({
         title: 'oops',
         text: 'please enter a value',
         type: 'warning'
      });
    }
  }
});
