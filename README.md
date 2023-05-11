# linked-list

This repo was created as practice from Rob Edward's video lectures [Data Structures](https://www.youtube.com/watch?v=zgCnMvvw6Oo&list=PLpPXw4zFa0uKKhaSz87IowJnOTzh9tiBk&ab_channel=RobEdwards). 

I made it available as an npm module to be used in further practice repos for the other data structures. 

https://www.npmjs.com/package/linked-list-ksinghj

## Installation 

### Yarn

`yarn add linked-list-ksinghj`

### npm

`npm i linked-list-ksinghj`


## Usage 

```ts
import { LinkedList, ListNode } from 'linked-list-ksinghj'
```

```ts
const myNode = new ListNode('some value')
const anotherNode = new ListNode('another value')

const myList = new LinkedList()

myList.addFirst(myNode)
myList.addLast(anotherNode)
myList.contains(myNode) // true

// all the other linked list methods available on the `LinkedList` class
// the `LinkedList` class is of course extendable so yyou can customise for your needs.
```
