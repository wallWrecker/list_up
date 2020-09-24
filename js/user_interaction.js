import { find_id } from "./data_functions.js";

// Declaring Form inputs in ID..
let transaction_text_box = document.getElementById("transaction-id");
let name_text_box = document.getElementById("name");
let promo_text_box = document.getElementById("promo");
let amount_text_box = document.getElementById("amount");
let date_text_box = document.getElementById("date");
let status_text_box = document.getElementById("status");

let action_button = document.getElementById("button");

// Filter Buttons
const mini_button_filters = document.getElementsByClassName("button-filter");

let inputs_container = [
  transaction_text_box,
  name_text_box,
  promo_text_box,
  amount_text_box,
  date_text_box,
  status_text_box,
];

// Let's make input element values goes empty by deafault.
function clear_up_inputs(inputs) {
  inputs.forEach((ele) => (ele.value = ""));
}

// lets have filter buttons onclick event..
for (let ele of mini_button_filters) {
  ele.onclick = function () {
    activate_button_filter(this);
  };
}

function display_all(data) {
  // activate_button_filter();

  // I could display the all records
  data.forEach((ele) => {
    let thead = document.getElementById("thead");
    let table_row = document.createElement("tr");

    for (let item in ele) {
      let table_column = document.createElement("td");

      table_column.innerHTML = ele[item];
      table_row.ondblclick = function () {
        edit_transaction(this);
      };
      table_row.appendChild(table_column);
    }
    thead.after(table_row);
  });
}

function edit_transaction(element) {
  let id = element.firstChild.innerHTML;
  let result = find_id(id);
  bind_to_input(result, inputs_container);
}

/*ALL USER INTERACTIONS FUNCTIONS ARE GONNA LIVE IN THIS FILE*/
function display_unpaid(data) {
  data = data.reverse();
}

function bind_to_input(obj, inputs) {
  let counter = 0;
  action_button.innerHTML = "Update Transaction";
  for (let prop in obj) {
    if (prop == "status") {
      inputs[counter].value = obj[prop];
    } /**Add else if here to, 
        update the date input
        the latest **/ else {
      inputs[counter].setAttribute("readonly", "");
      inputs[counter].value = obj[prop];
    }
    counter++;
  }
}

// record argument valid values = all, paid, unpaid.
function activate_button_filter(element) {
  const type_of_record = element.innerText.toLowerCase();
  switch (type_of_record) {
    case "all unpaid":
      console.log("i got, " + type_of_record);
      break;

    case "all paid":
      console.log("i got, " + type_of_record);
      break;

    default:
      console.log("i got, " + type_of_record);
      break;
  }
}

export {
  inputs_container,
  display_unpaid,
  display_all,
  clear_up_inputs,
  activate_button_filter,
  mini_button_filters,
  clear_up_inputs,
};
