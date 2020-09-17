import { find_id } from "./data_functions.js";

function display_all(data) {
  data.forEach((ele) => {
    let thead = document.getElementById("thead");
    let table_row = document.createElement("tr");

    for (let item in ele) {
      let table_column = document.createElement("td");
      table_column.innerHTML = ele[item];
      table_row.ondblclick = function () {
        dbl_click_to_update(this)
      };
      table_row.appendChild(table_column);
    }
    thead.after(table_row);
  });
}

function dbl_click_to_update(element) {
  let id = element.firstChild.innerHTML;
  let findResult = find_id(id);
  console.log(findResult)
}

/*ALL USER INTERACTIONS FUNCTIONS ARE GONNA LIVE IN THIS FILE*/
function display_unpaid(data) {
  data = data.reverse();
  display(data); 
}

export {display_unpaid,display_all };
