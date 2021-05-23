export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Queue {
  constructor() {
    this.collection = []
  }
  enqueue(item) {
    this.collection.push(item)
  }
  dequeue() {
    this.collection.shift()
  }
  front() {
    return this.collection[0]
  }
  isEmpty() {
    return (this.collection.length === 0)
  }
  print() {
    console.log(this.collection)
  }
  size() {
    return this.collection.length
  }
}