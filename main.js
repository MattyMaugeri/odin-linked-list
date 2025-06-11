import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("turtle");

console.log('Original List: ', list.toString());

list.prepend('bird');

console.log('Prepend (bird): ', list.toString());

console.log('List size: ', list.size());

console.log('First Node: ', list.first());

console.log('Last Node: ', list.last());

let idx = 1;
console.log(`Node at index ${idx}: ${list.at(idx)}`);

list.pop();
console.log('List after pop(): ', list.toString());

let val = 'turtle';
console.log(`List contains (${val}): ${list.contains(val)}`);

let indexOfValue = 'cat';
console.log(`Find index of ${indexOfValue} ${list.findIndexOf(indexOfValue)}`);

list.insertAt('shark', 1);
console.log(`List after inserting shark at index 1: `, list.toString());

list.removeAt(2);
console.log('List after removing node at index 2: ', list.toString());
