import data from "./rawBooks.json" assert { type: "json" };

fetch("./rawBooks.json")
  .then((response) => response.json())
  .then((json) => console.log(json));

let bookCounter = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i]["read?"] == "Yes") {
    bookCounter++;
  }
}

let audioCounter = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i]["audio?"] == "Yes") {
    audioCounter++;
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i]["read?"] == "Yes") {
    data[i]["Date Read"].split();
  }
  if (data[i]["Date Read"].includes("November")) {
    if (data[i]["Date Read"].includes("2022")) {
      console.log(data[i]["Date Read"]);
    }
  }
}

function mostFrequentAuthor(arr, n) {
  arr.sort();
  let max_count = 1,
    res = arr[0];
  let curr_count = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[i - 1]) curr_count++;
    else curr_count = 1;

    if (curr_count > max_count) {
      max_count = curr_count;
      res = arr[i - 1];
    }
  }

  return res;
}

function dayMax(arr) {
  return arr.reduce(function (p, v) {
    return p > v ? p : v;
  });
}



console.log(mostFrequentAuthor(data, data.length));

console.log(dayMax(data));

console.log(bookCounter);

console.log(audioCounter);

