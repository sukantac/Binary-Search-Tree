function triggerInvert() {
    invertTree(bst.root);
}

function invertTree(root) {
    if (root !== null) {
        {
            temp = root.left;
            root.left = root.right;
            root.right = temp;
          

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

    console.log(bst);
}

function hasNode(root) {
    if (root.left !== null || root.right !== null) {
        return true;
    }
}
