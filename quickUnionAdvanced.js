// Weighted quick - union.
// ・Modify quick - union to avoid tall trees.
// ・Keep track of size of each tree(number of objects).
// ・Balance by linking root of smaller tree to root of larger tree.

// Quick union with path compression.Just after computing the root of p,
// set the id of each examined node to point to that root.

class QuickUnionAdvancedAl {
  constructor(data) {
    this.ids = [];
    this.size = [];
    for (let i = 0; i < 10; i++) {
      this.ids.push(i);
      this.size.push(1);
    }
  }

  findUnionRoot(item) {
    let root = this.ids[item];
    let current = item;
    while (root !== current) {
      // path compression
      this.ids[current] = this.ids[this.ids[current]]

      current = root;
      root = this.ids[current];
    }
    return root;
  }

  union(p, q) {
    const rootP = this.findUnionRoot(p);
    const rootQ = this.findUnionRoot(q);

    if (rootP === rootQ) {
      console.log("Items are connected!");
    } else {
      if (this.size[rootP] < this.size[rootQ]) {
        this.ids[rootP] = rootQ;
        this.size[rootQ] += this.size[rootP];
      } else {
        this.ids[rootQ] = rootP;
        this.size[rootP] += this.size[rootQ];
      }
    }
  }

  connected(p, q) {
    return this.findUnionRoot(p) === this.findUnionRoot(q);
  }
}
