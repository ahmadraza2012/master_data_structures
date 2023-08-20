class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    // already give us +1 as index start from 0. we will be considering last element was stored on this.length -1
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const itemToBeDelete = this.data[index];
    this.shiftItems(index);
    // Deleting the last element which is extra for us now.
    this.pop();
    return itemToBeDelete;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[i + 1];
    }
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);
