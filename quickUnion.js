// Data structure
// ・Integer array id[] of length N
// ・Interpretation: id[i] is parent of i
// ・Root of i is id[id[id[...id[i]...]]]

class QuickUnionAl {
  constructor(data) {
    this.ids = [];
    for (let i = 0; i < 10; i++) {
      this.ids.push(i);
    }
  }

  findUnionRoot(item) {
    let root = this.ids[item];
    let current = item;
    while (root !== current) {
      current = root;
      root = this.ids[current];
    }
    return root;
  }

  union(p, q) {
    const rootP = this.findUnionRoot(p);
    const rootQ = this.findUnionRoot(q);

    if (rootP === rootQ) {
      console.log('Items are connected!');
    } else {
      this.ids[rootP] = rootQ;
    }
  }

  connected(p, q) {
    return this.findUnionRoot(p) === this.findUnionRoot(q);
  }
}
