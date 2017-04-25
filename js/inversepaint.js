function triggerInvert() {
    invertTree(bst.root);
}

function invertTree(root) {
    if (root !== null) {
        {
            temp = root.left;
            root.left = root.right;
            root.right = temp;

            if (root === bst.root) {
                var nod = new Circle(root.x, root.y, 20, "magenta", "mySecondSVG");
                var txt = new invText(root.x, root.y, root.value);
            }
            if (root.left) {

                if (root.right === null) {
                    var l1 = new Line(root.x, root.y, root.left.x - 100, root.left.y, "magenta", "mySecondSVG");
                    var nod = new Circle(root.left.x - 100, root.left.y, 20, "magenta", "mySecondSVG");
                    var txt = new invText(root.left.x - 100, root.left.y, root.left.value);
                } else {
                    var l1 = new Line(root.x, root.y, root.right.x, root.right.y, "magenta", "mySecondSVG")
                    var nod = new Circle(root.left.x, root.left.y, 20, "magenta", "mySecondSVG");
                    var txt = new invText(root.left.x, root.left.y, root.right.value);
                }
            }
            if (root.right) {

                if (root.left === null) {
                    var l1 = new Line(root.x, root.y, root.right.x + 100, root.right.y, "magenta", "mySecondSVG");
                    var nod = new Circle(root.right.x + 100, root.right.y, 20, "magenta", "mySecondSVG");
                    var txt = new invText(root.right.x + 100, root.right.y, root.right.value);
                } else {
                    var l1 = new Line(root.x, root.y, root.left.x, root.left.y, "magenta", "mySecondSVG");
                    var nod = new Circle(root.right.x, root.right.y, 20, "magenta", "mySecondSVG");
                    var txt = new invText(root.right.x, root.right.y, root.left.value);
                }
            }
        }
        if (root.left !== null) {
            if (hasNode(root.left)) {
                invertTree(root.left);
            }
        }
        if (root.right !== null) {
            if (hasNode(root.right)) {
                invertTree(root.right);
            }
        }

    }

    console.log(bst);
}

function hasNode(root) {
    if (root.left !== null || root.right !== null) {
        return true;
    }
}
