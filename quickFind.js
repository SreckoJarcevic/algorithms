// Data structure.
//・Integer array id[] of length N.
//・Interpretation: p and q are connected iff they have the same id.

class QuickFindAl {
  constructor(data) {
    this.ids = [];
    // set id of each object to itself
    for (let i = 0; i < 10; i++) {
      this.ids.push(i);
    }
  }

  union(p, q) {
    const indexForChange = this.ids[q];
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === indexForChange) {
        this.ids[i] = this.ids[p]
      }
    }
  }

  connected(p, q) {
    return this.ids[p] === this.ids[q];
  }
}
