import { HashMap } from "./hashMap.js";

export class HashSet {
  #map;

  constructor() {
    this.#map = new HashMap();
  }

  //methods

  add(key) {
    this.#map.set(key, null);
  }

  has(key) {
    return this.#map.has(key);
  }

  remove(key) {
    return this.#map.remove(key);
  }

  length() {
    return this.#map.length();
  }

  clear() {
    this.#map.clear();
  }

  keys() {
    return this.#map.keys();
  }
}
