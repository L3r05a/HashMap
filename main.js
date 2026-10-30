import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

const test = new HashMap();
const testSet = new HashSet();

//--- HashMap ---//

//prints total of map indexes with content and capacity
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
//13th entry triggers map growth

test.set("moon", "river");
//overwrites existing entry

console.log("Has apple:", test.has("apple"));
//has

console.log("get lion:", test.get("lion"));
//get

console.log(test.length());
console.log(test.capacity);
//lenght and capacity before remove

console.log(test.remove("moon"));
//remove

console.log(test.length());
console.log(test.capacity);
//lenght and capacity after remove

console.log(test.remove("albatros"));
//remove missing key

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();

printMap(test);

//--- HashSet --- //

testSet.add("egg");
testSet.add("spider");
testSet.add("atom");
testSet.add("nuts");
testSet.add("milk");
testSet.add("bones");
testSet.add("car");
testSet.add("leaf");
testSet.add("rain");
testSet.add("cloud");
testSet.add("sun");
testSet.add("moon");
testSet.add("tears");

testSet.add("nuts"); //add

console.log(testSet.has("spider")); //has

console.log(testSet.remove("egg")); // remove

console.log(testSet.keys()); //keys

console.log(testSet.length()); //length
