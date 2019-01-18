
// data structure unordered array
// adding item result pushing to end of array
// always removing highest value member
// algrorithm complexity - adding O(1), removing O(n)

// to run this code you will need babel to transpile it

const root = document.getElementById("app");

class unorderedArrayAl {
  constructor(data) {
    this.data = data;
  }
  insert(item) {
    this.data.push(item)
  }
  removeMax(){
    this.data.sort((a, b) => a - b).pop();
  }
}
