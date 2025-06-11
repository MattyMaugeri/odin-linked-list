import { Node } from "./Node.js";

export class LinkedList {

    constructor(head = null) {
        this.head = head;
    }

    append(value) {
        // Check if head is null first
        if (this.head === null) {
            this.head = new Node(value);
            return;
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

        return this.head.data;
    }

    last() {
        if (this.head === null) return null;

        let current = this.head;
        while (current.next !== null) {
            current = current.next
        }

        return current.data;
    }

    at(index) {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            if (count === index) return current.data;
            current = current.next;
            count++;
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
            if (curr.data === value) return true;
            curr = curr.next;
        }
        return false;
    }

    findIndexOf(value) {
        let curr = this.head;
        let idx = 0;

        while (curr !== null) {
            if (curr.data === value) return idx;
            curr = curr.next;
            idx++;
        }
        return null;
    }

    toString() {
        let string = '';
        let curr = this.head;

        while (curr) {
            if (curr.next === null) {
                string += `( ${curr.data} ) -> null`;
                return string;
            }
            string += `( ${curr.data} ) -> `;
            curr = curr.next;
        }
    }

    insertAt(value, index) {
        let node = new Node(value);

        if (index <= 0 || this.head === null) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let curr = this.head;
        let prev = null;
        let count = 0;

        while (curr !== null) {
            if (count === index) {
                node.next = curr;
                prev.next = node;
                return;
            }
            prev = curr;
            curr = curr.next;
            count++;
        }


    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = null;
        let count = 0;

        while (curr !== null) {
            if (count === index) {
                prev.next = curr.next;
                return;
            }
            prev = curr;
            curr = curr.next;
            count++;
        }
    }
}