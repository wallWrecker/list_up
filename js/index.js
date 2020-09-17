// Always at the top for bugs to prevent...
import { transactions } from "./data.js";
// imported Functionalities
import {
  find_unpaid,
  find_id,
  update_transaction,
} from "./data_functions.js";

import {display_all} from './user_interaction.js';

display_all(transactions.reverse());

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let data = find_unpaid().reverse();
  data.forEach((element) => {
    for (let prop in element) {
      console.log(`property: ${prop} , value: ${element[prop]}`);
    }
  });
});
