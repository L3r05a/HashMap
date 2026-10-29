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

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

test.set("moon", "river");

// test.set("entry10", "blue");

// test.set("entry21", "purple");

// test.set("apple", "red");

// test.set("banana", "yellow");

// console.log(test.get("entry3"));
// console.log(test.get("nope"));
// console.log(test.get("apple"));
console.log(test.remove("moon"));
// console.log(test.remove("entry3"));
// console.log(test.remove("apple"));
// console.log(test.remove("entry10"));
// console.log(test.remove("entry21"));
// test.clear();

console.log(test.get("moon"));

// test.set("apple", "red");
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());

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
