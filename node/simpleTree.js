function Node(value){
    this.value=value;
    this.leftChild=null;
    this.rightChild=null;
}

Node.prototype.addLeftChild = function( val){
    var newNode = new Node(val);
    this.leftChild = newNode;
    return newNode;

}

Node.prototype.addRightChild = function( val){
    var newNode = new Node(val);
    this.rightChild = newNode;
    return newNode;

}

function main(){
    var Tree = new Node(20);
    var l1 = Tree.addLeftChild(8);
    var r1 = Tree.addRightChild(22);
    l1.addLeftChild(4);
    var l1r2=l1.addRightChild(12);
    l1r2.addLeftChild(10);
    l1r2.addRightChild(14);

    console.log(Tree);

    console.log(findHeight(Tree));

    console.log("Preorder");

    preOrderTraversal(Tree);

    console.log("Inorder");
    inOrderTraversal(Tree);

    console.log("LCA");
    var lca=findLCA(Tree,4,14);
    console.log(lca.value);

}

main();

function findHeight(Tree){
    if(Tree!=null){
        return 1 + Math.max(findHeight(Tree.leftChild), findHeight(Tree.rightChild))
    }
    else{
        return 0;
    }
}

function preOrderTraversal(root){
    if(root==null)
        return;

    console.log(root.value);
    preOrderTraversal(root.leftChild);
    preOrderTraversal(root.rightChild);
}

function inOrderTraversal(root){
    if(root==null)
        return;

    inOrderTraversal(root.leftChild);
    console.log(root.value);
    inOrderTraversal(root.rightChild);
}

function findLCA(root, lval, rval){
    while(root!=null){
        var val = root.value;
        if(val> lval && val >rval){
            root = root.leftChild;
        }
        else if(val<lval && val<rval){
            root = root.rightChild;
        }
        else{
            return root;
        }
    }
}