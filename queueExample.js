class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  list() {
    console.log(this.items);
  }
}

const bookQueue = new Queue();
bookQueue.enqueue('1984');
bookQueue.enqueue('Sapiens');
bookQueue.list();

bookQueue.dequeue();
bookQueue.list();
