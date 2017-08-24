// for the searching part
function search() {
  var searchval = parseInt(document.getElementById("searchbox").value, 10);
  var arrayLength = nodeValue.length;
  for (var k = 0; k < arrayLength; k++) {
    if (searchval === nodeValue[k]) {
      alert("found");
      break;
    }
  }
  if (searchval !== nodeValue[k]) {
    alert("not found");
  }
  document.getElementById("searchbox").value = "";

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
