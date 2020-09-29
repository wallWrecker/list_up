// Always at the top for bugs to prevent...
import { transactions } from "./data.js";
// import data_functions.js
import {
  return_all_unpaid,
  find_id,
  update_transaction,
  return_all_paid,
} from "./data_functions.js";

// import user_interactions
import {
  inputs_container,
  display_all,
  activate_button_filter,
  mini_button_filters,
  clear_up_inputs,
} from "./user_interaction.js";

localStorage.setItem("transaction", JSON.stringify(transactions));
let parsed_json_transaction = JSON.parse(localStorage.getItem("transaction"));

clear_up_inputs(inputs_container);
// Initially assign all records filter buttons by default.
mini_button_filters[0].classList.add("is-link");
display_all(parsed_json_transaction);

console.log(parsed_json_transaction);
