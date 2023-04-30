// LinkedList practice
class ListNode<T> {
  data: T | null;
  next: ListNode<T> | null;

  constructor(val?: T, next?: ListNode<T>) {
    this.data = val ? val : null;
    this.next = next ? next : null;
  }
}

class LinkedList<ListNode> {
  head: ListNode | null;
  // tail: ListNode | null;
  currentSize: number = 0;

  constructor(head?: ListNode) {
    this.head = head ? head : null;
    // TODO: calc length on init
  }

  addFirst(newNode: ListNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.currentSize += 1;
  }
}

const myNode = new ListNode("a");
const myNewNode = new ListNode("b");

const myList = new LinkedList(myNode);

console.log({ myNode, myList }, myNode.next);

myList.addFirst(myNewNode);

console.log(myList);
