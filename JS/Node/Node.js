/**
 * Node Object Constructor
 * @param element, the data to be stores
 * @constructor
 */
function Node(element){
    this.element = element;
    this.next=null;
}

module.exports = Node;