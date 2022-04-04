import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list  template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

let values: [string, string, number];
values = [tofrom.value, details.value, amount.valueAsNumber];

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  } 

  list.render(doc, type.value, "end");

  console.log(doc);
});

const addUID = <T extends object>(obj: T) => {
  let uuid = Math.floor(Math.random() * 100);
  return { ...obj, uuid };
};
let docOne = addUID({ name: "shanks", school: "St. Benedict", houseNo: 34 });
console.log(docOne);
