class BankAccount {
  balanceInit: number = 0;

  constructor(_balanceInit: number) {
    this.balanceInit = _balanceInit;
  }

  deposit(amount: number): number {
    const amountDeposited = (this.balanceInit += amount);
    return amountDeposited;
  }

  withDraw(amount: number): any {
    console.log("Richiesta di prelievo...");
    if (this.balanceInit > amount) {
      console.log("# Prelevo: " + amount + "€");
      return (this.balanceInit -= amount);
    } else {
      return "Non ci sono abbastanza fondi";
    }
  }
}

class InterestAccount extends BankAccount {
  constructor(_balanceInit: number) {
    super(_balanceInit);
  }

  withDraw(amount: number): any {
    console.log("Richiesta di prelievo...");
    if (this.balanceInit > amount) {
      console.log("# Prelevo: " + amount + "€");
      this.balanceInit -= amount;
      const interest = this.balanceInit * 0.1; // 10%
      console.log("# Interessi: " + interest + "€");
      this.balanceInit -= interest;
      return this.balanceInit;
    } else {
      console.log("Non ci sono abbastanza fondi");
    }
  }
}

const sonAccount = new BankAccount(0);
console.log("Son Account Banking");
console.log("# Depositati: " + sonAccount.deposit(1000) + "€");
sonAccount.withDraw(100);
console.log("# Saldo attuale: " + sonAccount.balanceInit + "€");

console.log("");

const motherAccount = new InterestAccount(0);
console.log("Mom Account Banking");
console.log("# Depositati: " + motherAccount.deposit(1000) + "€");
motherAccount.withDraw(100);
console.log("# Saldo attuale: " + motherAccount.balanceInit + "€");
