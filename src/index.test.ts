import { LinkedList, ListNode } from '.'

describe('LinkedList class', () => {
  let list: LinkedList<string>, node: ListNode<string>, anotherNode: ListNode<string>

  beforeEach(() => {
    list = new LinkedList()
    node = new ListNode('test node data')
    anotherNode = new ListNode('another node')
  })

  afterEach(() => (list.head = null))

  describe('addFirst()', () => {
    it('adds node to empty list', () => {
      list.addFirst(node)

      expect(list.currentSize).toBe(1)
      expect(list.head).toBe(node)
      expect(list.head?.data).toBe('test node data')
      expect(list.head?.next).toBe(null)
    })

    it('adds node to the front of a list with 1 node', () => {
      const newNode = new ListNode('new node')

      list.addFirst(node)
      list.addFirst(newNode)

      expect(list.currentSize).toBe(2)
      expect(list.head).toBe(newNode)
      expect(list.head?.data).toBe('new node')
      expect(list.head?.next?.next).toBe(null)
    })
  })

  describe('addLast()', () => {
    it('adds node to the end of an empty list', () => {
      list.addLast(node)

      expect(list.currentSize).toBe(1)
      expect(list.head).toBe(node)
      expect(list.tail).toBe(node)
      expect(list.head?.data).toBe('test node data')
    })

    it('adds node to the end of a non empty list', () => {
      list.addFirst(node)

      const newNode = new ListNode('new node')

      list.addLast(newNode)

      expect(list.currentSize).toBe(2)
      expect(list.head).toBe(node)
      expect(list.tail).toBe(newNode)
      expect(list.head?.next?.data).toBe('new node')
    })
  })

  describe('removeFirst()', () => {
    it('remove first from empty list', () => {
      list.removeFirst()

      expect(list.head).toBe(null)
    })

    it('removes first node of list with 1 node', () => {
      list.addFirst(node)

      expect(list.head).toBe(node)

      list.removeFirst()

      expect(list.head).toBe(null)
    })

    it('removes first node of list with many nodes', () => {
      list.addFirst(node)
      list.addLast(anotherNode)

      list.removeFirst()

      expect(list.head).toBe(anotherNode)
    })
  })

  describe('removeLast()', () => {
    it('remove last called on empty list', () => {
      list.removeLast()

      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })

    it('removes last node from list with 1 node', () => {
      list.addFirst(node)

      list.removeLast()

      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })

    it('removes last node from list with many nodes', () => {
      list.addFirst(node)
      list.addLast(anotherNode)

      list.removeLast()

      expect(list.head).toBe(node)
      expect(list.tail).toBe(node)
    })
  })

  describe('findAndRemove', () => {
    it('method called on empty list', () => {
      list.findAndRemove(node)

      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })

    it('finds and removes node from list with one node', () => {
      list.addFirst(node)

      expect(list.head).toBe(node)

      list.findAndRemove(node)

      expect(list.head).toBe(null)
      expect(list.tail).toBe(null)
    })

    it('finds and removes node from list with many nodes', () => {
      list.addFirst(node)
      list.addLast(anotherNode)

      expect(list.head).toBe(node)
      expect(list.tail).toBe(anotherNode)

      list.findAndRemove(node)

      expect(list.head).toBe(anotherNode)
      expect(list.tail).toBe(anotherNode)
    })
  })

  describe('contains()', () => {
    it('method called on empty list, returns false', () => {
      const result = list.contains(node)

      expect(result).toBe(false)
    })

    it('returns true as node specified is in list', () => {
      list.addFirst(node)

      const result = list.contains(node)

      expect(list.head).toBe(node)
      expect(result).toBe(true)
    })

    it('returns false as node specified is not in list', () => {
      list.addFirst(node)

      const result = list.contains(anotherNode)

      expect(result).toBe(false)
    })
  })
})
