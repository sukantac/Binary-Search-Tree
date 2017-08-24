// for the searching part
function search() {
  var searchval = parseInt(document.getElementById("searchbox").value, 10);
  var arrayLength = nodeInfoArray.length;
  for (var k = 0; k < arrayLength; k++) {
    if (searchval === nodeInfoArray[k].val) {
      // alert("found");
      var n1 = new Circle(nodeInfoArray[k].xposition, nodeInfoArray[k].yposition, 25, "yellow", "mySVG", 0.6);
      break;
    }


  }
   if(k==arrayLength){
     k=k-1;
  if (searchval !== nodeInfoArray[k].val) {
    alert("not found");
  }
}
  document.getElementById("searchbox").value = "";

  //console.log(nodeValue)
}

$("#searchbox").keyup(function() {
  if ($("#searchbox").val().length > 0) {
    $(".btn-info").removeAttr('disabled');
  }

});
$("#searchbox").keyup(function(event) {
  if (event.keyCode === 13) {
    if ($("#searchbox").val().length > 0) {
      $(".btn-info").click();
    } else {
      alert("please enter value");
    }
  }
});
