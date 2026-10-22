import { HashMap } from "./hashMap.js";

const test = new HashMap();

// prints indexes with contents, total of indexes with content and capacity
function printMap(map) {
  map.buckets.forEach((bucket, index) => {
    const contents = bucket.toString();
    if (contents !== "") {
      console.log(`[${index}] ${contents}`);
    }
  });

  console.log(`length: ${map.length()}, capacity: ${map.capacity}`);
}

test.set("entry3", "red");

test.set("entry10", "blue");

test.set("apple", "red");

test.set("banana", "yellow");

test.set("entry3", "magenta");

printMap(test);

// console.log(test.buckets[test.hash("apple")].toString());
// console.log(test.buckets[test.hash("banana")].toString());
// console.log(test.length());

// console.log(test.hash("entry3"));
// console.log(test.hash("entry10"));

// console.log(test.buckets);

// const list = new LinkedList();

// list.append({ key: "apple", value: "red" });
// list.append({ key: "banana", value: "yellow" });

// console.log(test.toString());
