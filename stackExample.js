class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  list() {
    console.log(this.items);
  }
}

const bookStack = new Stack();
bookStack.push('1984');
bookStack.push('Sapiens');
bookStack.list();

bookStack.pop();
bookStack.list();
