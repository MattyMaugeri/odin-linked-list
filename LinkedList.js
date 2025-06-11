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

    size() {
        let count = 0;
        if (this.head === null) return 0;

        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    first() {
        if (this.head === null) return null;

        return this.head;
    }

    last() {
        if (this.head === null) return null;

        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }

        return current;
    }

    at(index) {
        if (this.head === null) return null;

        let current = this.head;

        let count = 0;
        while (current !== null && count !== index) {
            current = current.next;
            count++;
        }

        if (current !== null) {
            return current;
        }

        return null;
    }

    pop() {
        if (this.head === null) return null;

        let current = this.head;
        let prev = null;

        while (current.next !== null) {
            prev = current;
            current = current.next;
        }

        prev.next = null;

    }

    contains(value) {
        if (this.head === null) return false;

        let curr = this.head;
        while (curr) {
            if (curr.data === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    findIndexOf(value) {
        if (this.head === null) return null;

        let curr = this.head;
        let idx = 0;

        while (curr) {
            if (curr.data === value) {
                return idx;
            }
            curr = curr.next;
            idx++;
        }
        return null;
    }

    toString() {
        if (this.head === null) return '';

        let string = '';
        let curr = this.head;

        while (curr) {
            if (curr.next === null) {
                string += `( ${curr.data} ) -> null`;
                break;
            }
            string += `( ${curr.data} ) -> `;
            curr = curr.next;
        }
        return string;
    }
}