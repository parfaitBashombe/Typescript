let e = <string | number>"world";

//add or concat
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

console.log(addOrConcat(1, 2, "add"));

//transaction
interface TransactionObj {
  [index: string]: number;
}

const todayTransaction: TransactionObj = {
  Pizza: -10,
  Book: -5,
  Job: 50,
  Passenger: 10,
};

//net plus transaction and global or total
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayTransaction);
console.log(todaysNet(todayTransaction));
