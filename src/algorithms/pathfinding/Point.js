import { COLUMNS } from './Fields';

export class Point {
  constructor(node, dist = Infinity) {
    this.x = this.getRow(node.index);
    this.y = this.getColumn(node.index);
    this.node = node;
    this.dist = dist;
  }

  getRow(index) {
    return Math.floor(index / COLUMNS);
  }

  getColumn(index) {
      return Math.floor(index % COLUMNS);
  }

}
