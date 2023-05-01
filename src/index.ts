// LinkedList practice
class ListNode<T> {
  data: T | null;
  next: ListNode<T> | null;

  constructor(val?: T, next?: ListNode<T>) {
    this.data = val ? val : null;
    this.next = next ? next : null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null
  // tail: ListNode<T> | null;
  currentSize: number

  constructor(head?: ListNode<T>) {
    this.head = head ? head : null
    // TODO: calc length on init
    this.currentSize = !!this.head ? 1 : 0
  }

  addFirst(newNode: ListNode<T>) {
    newNode.next = this.head
    this.head = newNode
    this.currentSize += 1
  }
}

const myNode = new ListNode('a')
const myNewNode = new ListNode('b')

const myList = new LinkedList(myNode)

myList.addFirst(myNewNode);

console.log(myList);
