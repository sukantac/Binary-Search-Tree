function triggerInvert() {
    invertTree(bst.root);
}
function invertTree(root) {
    if (root !== null) {
      {
            temp = root.left;
            root.left = root.right;
            root.right = temp;
              //  var n2 = new Circle(root.x, root.y, 20,"green");
        }
        if (root.left !== null) {
            if (hasNode(root.left)) {
                invertTree(root.left);
            }
        }
        if (root.right !== null) {
            if (hasNode(root.right))

            {
                invertTree(root.right);
            }
        }
    }
}

function hasNode(root) {
    if (root.left !== null || root.right !== null) {
        return true;
    }


}
console.log(bst);
