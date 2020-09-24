// Always at the top for bugs to prevent...
import { transactions } from "./data.js";
// imported Functionalities
import {
  return_unpaid,
  find_id,
  update_transaction,
} from "./data_functions.js";

import {
  inputs_container,
  display_all,
  activate_button_filter,
  mini_button_filters,
  clear_up_inputs,
} from "./user_interaction.js";

localStorage.setItem("transaction", JSON.stringify(transactions));
let x = JSON.parse(localStorage.getItem("transaction"));
clear_up_inputs(inputs_container);
// Initially assign all records filter buttons by default.
mini_button_filters[0].classList.add("is-link");
display_all(transactions);

console.table(x);
