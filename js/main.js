function valueInsert() {
    inputval = parseInt(document.getElementById("inpval").value, 10);
    document.getElementById("inpval").value = "";
    bst.push(inputval);
}
