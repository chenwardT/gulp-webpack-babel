class Point {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  inspect() {
    console.log('Point: (' + this.a + ', ' + this.b + ')');
  }
}

export default Point;
