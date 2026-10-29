import { Node } from "./node.js";

export class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  // METHODS

  //add new node to end of list
  append(value) {
    const newNode = new Node(value);

    if (this.#head === null) {
      //if the list is empty
      this.#head = newNode; //the head value is the new node
    } else {
      let current = this.#head;
      while (current.nextNode !== null) {
        //if the nextNode value is not null
        current = current.nextNode;
        //make current refer to the nextNode value
      }

      current.nextNode = newNode;
      //when the nextValue IS null, the current nextNode points to newNode
    }
  }

  //returns object if found, null if not
  lookUp(key) {
    let current = this.#head;

    while (current !== null) {
      let entry = current.value;
      if (entry.key === key) {
        return entry;
      }
      current = current.nextNode;
    }

    return null;
  }

  //removes entry by key returns boolean if key found
  remove(key) {
    // empty list
    if (this.#head === null) {
      return false;
    }

    // first key matches
    if (this.#head.value.key === key) {
      this.#head = this.#head.nextNode;
      return true;
    }

    let previous = this.#head;
    let current = previous.nextNode;
    while (current !== null) {
      if (current.value.key === key) {
        previous.nextNode = current.nextNode;
        return true;
      }
      previous = current;
      current = current.nextNode;
    }
    return false;
    //end of loop, no match
  }

  //returns list
  toArray() {
    let current = this.#head;

    let result = [];

    while (current !== null) {
      let entry = current.value;
      //push the value of each node to result until  current is null

      result.push(entry);
      current = current.nextNode;
    }

    return result;
  }

  //returns string of nodes
  toString() {
    let current = this.#head;

    let result = [];

    while (current !== null) {
      let entry = current.value;
      //push the value of each node to result until  current is null
      result.push(`( ${entry.key} : ${entry.value} )`);
      current = current.nextNode;
    }

    if (result.length === 0) {
      return "";
    }

    const string = result.join(" -> ") + " -> null";

    return string;
  }
}
