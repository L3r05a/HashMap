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

test.set("entry21", "purple");

test.set("apple", "red");

test.set("banana", "yellow");

test.set("entry3", "magenta");

// console.log(test.get("apple"));
// console.log(test.get("entry3"));
// console.log(test.get("nope"));
// console.log(test.has("nope"));
// console.log(test.remove("banana"));
// console.log(test.remove("apple"));
// console.log(test.remove("entry3"));
// console.log(test.remove("bong"));

printMap(test);

// console.log(test.buckets[test.hash("apple")].toString());
// console.log(test.buckets[test.hash("banana")].toString());
// console.log(test.length());

// console.log(test.hash("entry3"));
// console.log(test.hash("entry10"));
// console.log(test.hash("entry21"));
// console.log(test.buckets);

// const list = new LinkedList();

// list.append({ key: "apple", value: "red" });
// list.append({ key: "banana", value: "yellow" });

// console.log(test.toString());
