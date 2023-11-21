var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(_balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = _balanceInit;
    }
    BankAccount.prototype.deposit = function (amount) {
        var amountDeposited = (this.balanceInit += amount);
        return amountDeposited;
    };
    BankAccount.prototype.withDraw = function (amount) {
        console.log("# Prelevo: " + amount + "€");
        return (this.balanceInit -= amount);
    };
    return BankAccount;
}());
var InterestAccount = /** @class */ (function (_super) {
    __extends(InterestAccount, _super);
    function InterestAccount(_balanceInit) {
        return _super.call(this, _balanceInit) || this;
    }
    InterestAccount.prototype.withDraw = function (amount) {
        console.log("# Prelevo: " + amount + "€");
        this.balanceInit -= amount;
        var interest = this.balanceInit * 0.1; // 10%
        console.log("# Interessi: " + interest + "€");
        this.balanceInit -= interest;
        return this.balanceInit;
    };
    return InterestAccount;
}(BankAccount));
var sonAccount = new BankAccount(0);
console.log("Son Account Banking");
console.log("# Depositati: " + sonAccount.deposit(1000) + "€");
sonAccount.withDraw(100);
console.log("# Saldo attuale: " + sonAccount.balanceInit + "€");
console.log("");
var motherAccount = new InterestAccount(0);
console.log("Mom Account Banking");
console.log("# Depositati: " + motherAccount.deposit(1000) + "€");
motherAccount.withDraw(100);
console.log("# Saldo attuale: " + motherAccount.balanceInit + "€");
