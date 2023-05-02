import _ from 'lodash'

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

    if (!this.tail) return
    // init tail pointer
    while (this.tail.next !== null) {
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

  removeFirst() {
    if (!this.head) return

    this.currentSize -= 1

    if (this.head === this.tail) {
      this.head = this.tail = null
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return

    this.currentSize -= 1

    if (this.head === this.tail) {
      this.removeFirst()
      return
    }

    let curr = this.head
    let prev = null
    while (curr.next !== null) {
      prev = curr
      curr = curr.next
    }
    this.tail = prev
    this.tail!.next = null
  }

  findAndRemove(node: ListNode<T>) {
    if (!this.head) return

    if (this.head === this.tail || _.isEqual(this.head, node)) {
      this.removeFirst()
      return
    }

    if (_.isEqual(this.tail, node)) {
      this.removeLast()
      return
    }

    let prev = null
    let curr = this.head
    while (curr.next !== null) {
      if (_.isEqual(curr, node)) {
        prev!.next = curr.next
        break
      }

      prev = curr
      curr = curr.next
    }

    this.currentSize -= 1
  }

  contains(node: ListNode<T>): boolean {
    if (this.head === null) return false

    let prev = null
    let curr = this.head
    while (curr.next !== null) {
      if (_.isEqual(curr, node)) {
        return true
      }

      prev = curr
      curr = curr.next
    }

    return false
  }
}

const myNode = new ListNode('a')
const myNewNode = new ListNode('b')
const anotherNode = new ListNode('c')
const kNode = new ListNode('k')

const myList = new LinkedList(myNode)

myList.addFirst(myNewNode)
myList.addFirst(kNode)
myList.addLast(anotherNode)
// myList.removeFirst()
// myList.removeLast()
myList.findAndRemove(anotherNode)

console.log(myList)
console.log(myList.contains(kNode))
