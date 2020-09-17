/*ALL DATA FUNCTIONS, like: finding certain records. ARE GONNA LIVE IN THIS FILE*/
import { transactions } from "./data.js";

// Displays all data.

// Funcition that displays 'active only' transaction.
let data = transactions;

console.log(data);

function find_unpaid() {
  let result = data.filter((ele) => ele.status == "paid");
  return result;
}
function find_id(id) {
  let data = transactions.reverse();
  return data.find((ele) => ele.id == id);
}

function update_transaction(id, status) {
  data.forEach((ele) => {
    if( ele['id'] == 1) {
      console.log("Got it! " + ele['id'] +
        " " + ele['name']);
    } else {
      return
    }

  });
}

// Export
export {find_unpaid, find_id, update_transaction };
