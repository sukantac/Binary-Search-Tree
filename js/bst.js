//
var nodeInfoArray = [];
function BinarySearchTree() {
  this.root = null;
}
BinarySearchTree.prototype.push = function(val) {
   nodeInfo = {
    val: "",
    xposition: "",
    yposition: ""
  };
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    var n1 = new Circle(this.root.x, this.root.y, 20, "red", "mySVG",1);
    var txt = new Text(this.root.x, this.root.y, inputval,"white");
    nodeInfo.val=this.root.value;
    nodeInfo.xposition=this.root.x;
    nodeInfo.yposition=this.root.y;
    nodeInfoArray.push(nodeInfo);
    console.log(nodeInfoArray);
  }

  var currentRootNode = root;
  var newNode = new Node(val);

  for (var k = 1; currentRootNode; k++) {

    if (val < currentRootNode.value) {
      if (!currentRootNode.left) {
        newNode.x = currentRootNode.x - (100 / k);
        newNode.y = currentRootNode.y + 70;
        currentRootNode.left = newNode;
        var l1 = new Line(currentRootNode.x, currentRootNode.y, newNode.x, newNode.y, "red", "mySVG",1);
        var n1 = new Circle(newNode.x, newNode.y, 20, "red", "mySVG");
        var txt = new Text(newNode.x, newNode.y, inputval,"white");
        nodeInfo.val=newNode.value;
        nodeInfo.xposition=newNode.x;
        nodeInfo.yposition=newNode.y;
        nodeInfoArray.push(nodeInfo);
        console.log(nodeInfoArray);
        break;
      } else {
        currentRootNode = currentRootNode.left;
      }
    }
    else {
      if (!currentRootNode.right) {
        newNode.x = currentRootNode.x + (100 / k);
        newNode.y = currentRootNode.y + 70;
        currentRootNode.right = newNode;
        var l1 = new Line(currentRootNode.x, currentRootNode.y, newNode.x, newNode.y, "red", "mySVG",1);
        var n1 = new Circle(newNode.x, newNode.y, 20, "red", "mySVG");
        var txt = new Text(newNode.x, newNode.y, inputval,"white");
        nodeInfo.val=newNode.value;
        nodeInfo.xposition=newNode.x;
        nodeInfo.yposition=newNode.y;
        nodeInfoArray.push(nodeInfo);
        console.log(nodeInfoArray);
        break;
      }
      else {
        currentRootNode = currentRootNode.right;
      }
    }

  }

}
var bst = new BinarySearchTree();
