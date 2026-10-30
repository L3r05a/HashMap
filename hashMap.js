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
    this.buckets = this.#initBuckets();
  }

  // methods
  // creates hash for key (index of bucket)
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  //creates or updates entry
  set(key, value) {
    const targetBucket = this.#getBucket(key);

    const lookUpResult = targetBucket.lookUp(key);

    if (lookUpResult === null) {
      targetBucket.append({ key, value });
      this.#length++;
      this.#growthCheck();
    } else {
      lookUpResult.value = value;
    }
  }

  // returns values associated to key
  get(key) {
    const targetBucket = this.#getBucket(key);

    const lookUpResult = targetBucket.lookUp(key);

    if (lookUpResult === null) {
      return undefined;
    }
    return lookUpResult.value;
  }

  // boolean if key is in the hashmap
  has(key) {
    const targetBucket = this.#getBucket(key);

    const lookUpResult = targetBucket.lookUp(key);

    // boolean, compares variable to strict inequality
    return lookUpResult !== null;
  }

  //removes entry by key, returns boolean if key found
  remove(key) {
    const targetBucket = this.#getBucket(key);
    const result = targetBucket.remove(key);
    if (result) {
      this.#length--;
    }
    return result;
  }

  // number of stored keys in the hashmap
  length() {
    return this.#length;
  }

  //removes all entries from hashmap
  clear() {
    this.#length = 0; //resets length
    this.buckets = this.#initBuckets(); //recreates buckets
  }

  //returns an array with all the keys
  keys() {
    const entries = this.#flatArray();
    return entries.map((entry) => entry.key);
  }

  //returns an array of values
  values() {
    const entries = this.#flatArray();
    return entries.map((entry) => entry.value);
  }

  //returns an array of [key,value] arrays
  entries() {
    const array = this.#flatArray();
    return array.map((entry) => [entry.key, entry.value]);
  }

  // helpers

  //growth check
  #growthCheck() {
    if (this.#length > this.loadFactor * this.capacity) {
      let backup = this.entries();
      //backup all entries

      this.capacity = this.capacity * 2;
      //double capacity

      this.buckets = this.#initBuckets();
      this.#length = 0;
      //recreate buckets

      backup.forEach(([a, b]) => this.set(a, b));
      //re-set all backup entries
    }
  }

  //flat array
  #flatArray() {
    return this.buckets.flatMap((bucket) => bucket.toArray());
  }

  //reset bucket
  #initBuckets() {
    return Array.from({ length: this.capacity }, () => new LinkedList());
  }

  //bucket finder
  #getBucket(key) {
    const index = this.hash(key);

    //boundary check
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    return this.buckets[index];
  }
}
