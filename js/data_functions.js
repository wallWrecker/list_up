/*ALL DATA FUNCTIONS, like: finding certain records. ARE GONNA LIVE IN THIS FILE*/
import { transactions } from "./data.js";
import { inputs_container } from "./user_interaction.js";

// Funcition that displays 'active only' transaction.
let data = transactions;

function return_all_unpaid() {
  let result = data.filter((ele) => ele.status == "unpaid");
  return result;
}

function return_all_paid() {
  let result = data.filter((ele) => ele.status == "paid");
  return result;
}

function find_id(id) {
  let data = transactions.reverse();
  return data.find((ele) => ele.id == id);
}

function update_transaction(id, status) {
  data.forEach((ele) => {
    if (ele["id"] == 1) {
      console.log("Got it! " + ele["id"] + " " + ele["name"]);
    } else {
      return;
    }
  });
}
function add_transaction(data, yourObject) {}

// Export functionalities
export { return_all_unpaid, return_all_paid, find_id, update_transaction };
