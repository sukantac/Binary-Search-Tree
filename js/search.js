// for the searching part
function search() {
  var searchval = parseInt(document.getElementById("searchbox").value, 10);
  var arrayLength = nodeInfoArray.length;
  for (var k = 0; k < arrayLength; k++) {
    if (searchval === nodeInfoArray[k].val) {
      var n1 = new Circle(nodeInfoArray[k].xposition, nodeInfoArray[k].yposition, 25, "yellow", "mySVG", 0.6);
      break;
    }


  }
   if(k==arrayLength){
     k=k-1;
  if (searchval !== nodeInfoArray[k].val) {
       $("#searchbox").blur();
    swal({
       title: 'sorry',
       text: 'Your search did not find any match',
       type: 'error'
    });  }
}
  document.getElementById("searchbox").value = "";

  //console.log(nodeValue)
}

$("#searchbox").keyup(function() {
  if ($("#searchbox").val().length > 0) {
    $(".btn-info").removeAttr('disabled');
  }
  if ($("#searchbox").val().length === 0) {
    $(".btn-info").attr('disabled', 'true');

  }

});
$("#searchbox").keyup(function(event) {
  if (event.keyCode === 13) {
    if ($("#searchbox").val().length > 0) {
      $(".btn-info").click();
    } else {
        $("#searchbox").blur();
      swal({
         title: 'oops',
         text: 'please enter a value',
         type: 'warning'
      });
    }
  }
});
