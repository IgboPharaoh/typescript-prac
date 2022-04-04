import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "shaun",
    age: 34,
    speak(a) {
        console.log(a);
    },
    spend(b) {
        return b;
    },
};
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// this only works with when access modifiers are used
class InvoiceMaker {
    constructor(client, buyer, price) {
        this.client = client;
        this.buyer = buyer;
        this.price = price;
    }
    result() {
        return this.price < 34
            ? `${this.client} is still in the beginner level with ${this.buyer}`
            : `${this.client} has only ${this.price} `;
    }
}
const invoiceThree = new InvoiceMaker("Dax", "fela", 4014);
const invoiceFour = new InvoiceMaker("Pax", "Chidi", 32);
let invoicesW = [];
invoicesW.push(invoiceThree);
invoicesW.push(invoiceFour);
invoicesW.forEach((inv) => {
    console.log(inv.result());
});
console.log(invoicesW);
const invoiceOne = new Invoice("Dax", "plumbing", 259);
const invoiceTwo = new Invoice("Pax", "climbing", 540);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// console.log(invoices);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
