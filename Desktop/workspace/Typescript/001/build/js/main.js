"use strict";
let e = "world";
const addOrConcat = (a, b, c) => {
  if (c === "add") return a + b;
  return "" + a + b;
};
console.log(addOrConcat(1, 2, "add"));
//variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
