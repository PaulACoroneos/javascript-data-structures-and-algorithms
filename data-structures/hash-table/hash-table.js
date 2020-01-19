class HashTable {
  constructor(size = 32) {
    this.keys = {};
  }

  get(key) {

  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}

const hashTable = new HashTable();