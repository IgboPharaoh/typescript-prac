export class Invoice {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return ` ${this.client} owes ${this.amount} for ${this.details}`;
    }
}
