var LinkedList = require('./LinkedList.js');

var ll = new LinkedList();

ll.insert('Rajat','head');
ll.insert('Kumar','Rajat');
ll.insert('Don','Rajat');

ll.display();

ll.remove('Don');
ll.display();