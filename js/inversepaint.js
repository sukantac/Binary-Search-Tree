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
           currentRootNode=root;
            if (root===bst.root) {
                this.root = bst.root;
                var n1 = new Circle(this.root.x, this.root.y, 20, "magenta","mySecondSVG");
                var txt = new invText(this.root.x, this.root.y, bst.root.value);
            }

            if(root.left){
              root.left.x = currentRootNode.x -100 ;
              root.left.y = currentRootNode.y +70;
                var l1 = new Line(currentRootNode.x, currentRootNode.y, root.left.x, root.left.y,"red","mySecondSVG");
                var n1 = new Circle(  root.left.x , root.left.y , 20, "magenta","mySecondSVG");
                var txt = new invText(root.left.x, root.left.y, root.left.value);
            }

            if(root.right){
              root.right.x = currentRootNode.x +100 ;
              root.right.y = currentRootNode.y +70;
              var l1 = new Line(currentRootNode.x, currentRootNode.y, root.right.x, root.right.y,"red","mySecondSVG");
                var n1 = new Circle(  root.right.x , root.right.y , 20, "magenta","mySecondSVG");
                var txt = new invText(root.right.x, root.right.y, root.right.value);
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





  console.log(bst);
}
}

function hasNode(root) {
    if (root.left !== null || root.right !== null) {
        return true;
    }
}
