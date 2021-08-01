export class Heap {
  #arr;
  constructor() {
    this.#arr = [];
  }

  PARENT(index) {
    return Math.floor((index - 1) / 2);
  }

  LEFT(index) {
    return (2 * index + 1);
  }

  RIGHT(index) {
    return (2 * index + 2);
  }

  swap(index1, index2) {
    let temp = this.#arr[index1];
    this.#arr[index1] = this.#arr[index2];
    this.#arr[index2] = temp;
  }

  heapify_down(index) {
    let left  = this.LEFT(index);
    let right = this.RIGHT(index);

    let smallest = index;

    if (left < this.size() && this.#arr[left].dist < this.#arr[index].dist)
      smallest = left;

    if (right < this.size() && this.#arr[right].dist < this.#arr[smallest].dist)
      smallest = right;

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapify_down(smallest);
    }
  }

  heapify_up(index) {
    if (index && this.#arr[this.PARENT(index)].dist > this.#arr[index].dist) {
      this.swap(index, this.PARENT(index));
      this.heapify_up(this.PARENT(index));
    }
  }

  // public
  size() {
    return this.#arr.length;
  }

  empty() {
    return this.size() === 0;
  }

  insert(key) {
    this.#arr.push(key);
    this.heapify_up(this.size() - 1);
  }

  remove() {
    if (this.empty()) return;

    this.#arr[0] = this.#arr[this.size() - 1];
    this.#arr.pop();
    this.heapify_down(0);
  }

  top() {
    if (this.empty())
      throw new Error('Heap is empty');

    return this.#arr[0];
  }

  print() {
    console.log(this.#arr);
  }
}