import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list  template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
let values;
values = [tofrom.value, details.value, amount.valueAsNumber];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
const addUID = (obj) => {
    let uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uuid });
};
let docOne = addUID({ name: "shanks", school: "St. Benedict", houseNo: 34 });
console.log(docOne);
