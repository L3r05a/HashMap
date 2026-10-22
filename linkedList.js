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

  lookUp(key) {
    //returns object if found, null if not

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
