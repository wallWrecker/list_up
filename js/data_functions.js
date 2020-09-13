import { accounts } from "./data.js";

function displayAllActive() {
  let { employees } = accounts;
  employees.forEach((ele) => {
    let thead = document.getElementById("thead");
    let table_row = document.createElement("tr");
    if (ele.status == "In-active") {
      for (let item in ele) {
        let table_column = document.createElement("td");
        table_column.innerHTML = ele[item];
        table_row.ondblclick = function () {
          logitObj(this);
        };
        table_row.appendChild(table_column);
      }
    } else {
      return;
    }
    thead.after(table_row);
  });
}

function logitObj(element) {
  let id = element.firstChild.innerHTML;
}

export { displayAllActive as display_active };
