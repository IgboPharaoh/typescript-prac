import { Invoice } from "./classes/Invoice.js";

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b: number): number;
}
const me: IsPerson = {
  name:  "shaun",
  age: 34,
  speak(a: string) {
    console.log(a);
  },
  spend(b: number) {
    return b;
  },
};

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// this only works with when access modifiers are used
class InvoiceMaker {
  constructor(
    public client: string,
    public buyer: string,
    private price: number
  ) {}

  result() {
    return this.price < 34
      ? `${this.client} is still in the beginner level with ${this.buyer}`
      : `${this.client} has only ${this.price} `;
  }
}

const invoiceThree = new InvoiceMaker("Dax", "fela", 4014);
const invoiceFour = new InvoiceMaker("Pax", "Chidi", 32);
let invoicesW: InvoiceMaker[] = [];
invoicesW.push(invoiceThree);
invoicesW.push(invoiceFour);

invoicesW.forEach((inv) => {
  console.log(inv.result());
});
console.log(invoicesW);

const invoiceOne = new Invoice("Dax", "plumbing", 259);
const invoiceTwo = new Invoice("Pax", "climbing", 540);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
// console.log(invoices);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
