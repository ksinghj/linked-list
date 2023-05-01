// LinkedList practice
class ListNode<T> {
  data: T | null
  next: ListNode<T> | null

  constructor(val?: T, next?: ListNode<T>) {
    this.data = val ? val : null
    this.next = next ? next : null
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

  addLast(newNode: ListNode<T>) {
    if (this.head === null) {
      this.addFirst(newNode)
      return
    }

    let tmp = this.head
    while (tmp.next !== null) {
      tmp = tmp.next
    }
    tmp.next = newNode
    this.currentSize += 1
  }
}

const myNode = new ListNode('a')
const myNewNode = new ListNode('b')
const anotherNode = new ListNode('c')

const myList = new LinkedList(myNode)

myList.addFirst(myNewNode)
myList.addLast(anotherNode)

console.log(myList)
