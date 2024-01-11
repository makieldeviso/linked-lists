
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
            this['head'] = new Node(value);

        } else if (this.size() > 0) {
            // Create new Node;
            const newNode = new Node(value);

            if (this.size() === 1) {
                this['head'].nextNode = newNode;
                this['tail'] = newNode;

            } else {
                // Reassign values for current tail
                const currentTail = this['tail'];
                currentTail.nextNode = newNode;

                // Add previous tail to the linked list
                this[currentTail.value] = currentTail;

                // Reassign tail of linked list to new Node
                this['tail'] = newNode;
            }
        } 

    }   

    prepend(value) {
        const currentHead = this['head'];
        this[currentHead.value] = currentHead;
        
        this['head'] = new Node(value);
        this['head'].nextNode = currentHead;
    }

    size() {
        const countSize = function (head) {
            let count = 0;
            let current = head;
        
            if (!head) return 0

            while (current !== null) {
                count ++;
                current = current.nextNode;
            }

            return count;
        }
        return countSize(this.head);
    }
}

const newList = new LinkedList();
newList.append('A');
newList.append('B');
newList.append('C');
newList.prepend('S');

console.log(newList.size())




