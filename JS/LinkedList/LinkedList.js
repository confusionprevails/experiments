var Node = require('../Node/Node.js');

function LinkedList(){
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious=findPrevious;
}

module.exports = LinkedList;

function find(item){
    var currNode = this.head;
    while(currNode && currNode.element !=item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newItem, item){
    var newNode = new Node(newItem);
    var current = this.find(item);
    if(current){
        newNode.next = current.next;
        current.next=newNode;
        return true
    }
    else{
        return false;
    }
}

function display(){
    var currNode = this.head;
    while(currNode){
        console.log(currNode.element);
        currNode = currNode.next;
    }

}

function findPrevious(item){
    var currNode = this.head;
    while(currNode && currNode.next && currNode.next.element !=item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    var nodeToRemove = prevNode.next;
    if(nodeToRemove){
        prevNode.next = nodeToRemove.next;
        return true;
    }
    else
        return false;

}
