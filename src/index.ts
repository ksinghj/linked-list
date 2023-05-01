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
  tail: ListNode<T> | null
  currentSize: number

  constructor(head?: ListNode<T>) {
    this.head = head ? head : null
    this.tail = head ? head : null
    // TODO: calc length on init
    this.currentSize = !!this.head ? 1 : 0

    // 🤔
    while (this.tail?.next !== null) {
      this.tail = this.tail?.next
    }
  }

  addFirst(node: ListNode<T>) {
    node.next = this.head
    this.head = node
    this.currentSize += 1
  }

  // O(n)
  addLastTemp(node: ListNode<T>) {
    if (this.head === null) {
      this.addFirst(node)
      return
    }

    let tmp = this.head
    while (tmp.next !== null) {
      tmp = tmp.next
    }
    tmp.next = node

    this.currentSize += 1
  }

  // O(1)
  addLast(node: ListNode<T>) {
    if (this.head === null) {
      this.addFirst(node)
      this.tail = node
      return
    }

    this.tail!.next = node
    this.tail = node
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
