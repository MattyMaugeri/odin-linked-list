import { LinkedList } from "./LinkedList.js";
import { Node } from "./Node.js";

let node1 = new Node(5);
let node2 = new Node(10);

let list = new LinkedList(node1);
node1.next = node2;


list.append(500);
list.prepend(1000);

console.log('Complete List: ');
list.print();

console.log('List size: ', list.size());

console.log('First node: ', list.first());

console.log('Last node: ', list.last());

let idx = 0;
console.log(`Node at index ${idx}: `, list.at(idx));

list.print();

console.log(list.contains(500));

console.log(list.findIndexOf(1000));

console.log(list.toString());
