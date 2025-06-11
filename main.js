import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let node1 = new Node(5);
let node2 = new Node(10);

let list = new LinkedList(node1);
node1.next = node2;


list.append(500);

list.print();

list.prepend(1000);

list.print();