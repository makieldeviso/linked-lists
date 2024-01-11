
class Node {
    constructor (value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor () {}

    append (value) {

        if (this.size() === 0)  {
            this['HEAD'] = new Node(value);

        } else if (this.size() > 0) {
            // Create new Node;
            const newNode = new Node(value);

            if (this.size() === 1) {
                this['HEAD'].nextNode = newNode;
                this['TAIL'] = newNode;

            } else {
                // Reassign values for current tail
                const currentTail = this['TAIL'];
                currentTail.nextNode = newNode;

                // Add previous tail to the linked list
                this[currentTail.value] = currentTail;

                // Reassign tail of linked list to new Node
                this['TAIL'] = newNode;
            }
        } 

    }   

    prepend(value) {
        const currentHead = this['HEAD'];
        this[currentHead.value] = currentHead;
        
        this['HEAD'] = new Node(value);
        this['HEAD'].nextNode = currentHead;
    }

    size() {
        // const countSize = function (head) {
        //     let count = 0;
        //     let current = head;
        
        //     if (!head) return 0

        //     while (current !== null) {
        //         count ++;
        //         current = current.nextNode;
        //     }

        //     return count;
        // }

        const countSize = function (head, count ) {
            if (head === undefined) return 0

            if (head === null) return count
            
            return countSize(head.nextNode, count + 1);
        }

        return countSize(this['HEAD'], 0);
    }

    head () {
        return this['HEAD'];
    }

    tail () {
        return this['TAIL'];
    }

    at (index) {

        // const getNodeAt = function (head, reqIndex) {
        //     let count = 0
        //     let current = head;
            
        //     if (!head) return null

        //     while (current !== null) {
        //         console.log(count)
        //         if (count === reqIndex) return current
        //         count ++
        //         current = current.nextNode;
        //     }

        //     return null
        // }

        const getNodeAt = function (head, reqIndex) {
            if (!head) return null

            if (reqIndex === 0) return head

            return getNodeAt(head.nextNode, reqIndex - 1);
        }

        return getNodeAt(this['HEAD'], index);
    }

    pop () {
        const secondLast = this.at(this.size() - 2);
        secondLast.nextNode = null;
        delete this[secondLast.value];

        this['TAIL'] = secondLast;
    }

    contains (value) {

        const checkValue = function (head, reqValue) {
            if (!head) return false;

            if (head.value === reqValue) return true;

            return checkValue(head.nextNode, reqValue);
        }

        return checkValue(this['HEAD'], value);
    }

    find (value) {

        const getIndex = function (head, reqValue, index) {
            if (!head) return null;

            if (head.value === reqValue) return index;

            return getIndex(head.nextNode, reqValue, index + 1);
        }

        return getIndex(this['HEAD'], value, 0);
    }
}

const newList = new LinkedList();
newList.append('A');
newList.append('B');
newList.append('C');
newList.prepend('S');

console.log(newList);
console.log(newList.contains('F'));
console.log(newList.find('F'));





