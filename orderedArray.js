// data structure ordered array
// adding item result looping through arr until finding index of item with higher value
// always removing last value (max value)
// algrorithm complexity - adding O(n), removing O(1)

const root = document.getElementById("app");

class orderedArrayAl {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }
  insert(item) {
    const pushIndex = this.data.findIndex(member => member > item);
    if (pushIndex === -1) {
      this.data.push(item);
    } else {
      this.data.splice(pushIndex, 0, item);
    }
  }
  removeMax() {
    this.data.pop();
  }
}
