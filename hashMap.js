import { LinkedList } from "./linkedList.js";

export class HashMap {
  loadFactor;
  capacity;
  buckets;
  #length;

  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.#length = 0;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList(),
    );
  }

  // methods
  // creates hash for key (aka index of bucket)
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    //creates or updates entry

    let index = this.hash(key);

    //boundary check
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let targetBucket = this.buckets[index];

    let lookUpResult = targetBucket.lookUp(key);

    if (lookUpResult === null) {
      targetBucket.append({ key, value });
      this.#length++;
    } else {
      lookUpResult.value = value;
    }

    //Growth check (later)
  }

  length() {
    // number of stored keys in the hashmap
    return this.#length;
  }
}
