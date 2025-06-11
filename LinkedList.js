import { log } from "node:console";
import { Node } from "./Node.js";
import util from 'node:util';

export class LinkedList {

    constructor(head = null) {
        this.head = head;
    }

    print() {
        console.log(util.inspect(this.head, { depth: null, colors: true }));
    }

    append(value) {
        // Check if head is null first
        if (this.head === null) {
            this.head = new Node(value);
        }

        let node = this.head;

        // Traverse until last node in the list
        while (node.next !== null) {
            node = node.next;
        }

        node.next = new Node(value);

    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;

    }
}