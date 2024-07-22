"use strict";
let e = "world";
//add or concat
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
console.log(addOrConcat(1, 2, "add"));
const todayTransaction = {
    Pizza: -10,
    Book: -5,
    Job: 50,
    Passenger: 10,
};
//net plus transaction and global or total
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayTransaction);
console.log(todaysNet(todayTransaction));
