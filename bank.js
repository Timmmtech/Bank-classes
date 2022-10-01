// const deposit = document.getElementById('deposit')
// const withdrawDiv = document.getElementById('withdraw')

// class bank {
//   constructor(deposit, withdraw) {
//     this.deposit = 0
//     this.withdraw = 0
//   }
//   depoSit() {
//     this.deposit += 10
//     console.log(`Current balance is $${this.deposit}`)
//   }
//   withDraw() {
//     this.deposit -= 5
//     console.log(`Current balance is $${this.deposit}`)
//   }


// }
// const fcmb = new bank ('depo', 'with')
// fcmb.depoSit()
// fcmb.depoSit()
// deposit.onclick = () => fcmb.depoSit()

class Bank {
  constructor(balance) {
    this.balance = balance
  }
  withdraw(amount) {
    // gaurd clause
  if (this.balance - amount <= 0) {
    console.log('insufficient fund Timi')
    return
  }
  

    this.balance -= amount
    console.log('You just withdrew', `$${amount}`)
    console.log({balance: this.balance})
  }
  deposit(amount) {
    this.balance += amount
    console.log('You just deposited', `$${amount}`)
    console.log({balance: this.balance})
  }
}

const timcheque = new Bank (100)
console.log(timcheque.balance)

timcheque.deposit(100)
timcheque.withdraw(100)
timcheque.deposit(10000)
timcheque.withdraw(1460)
timcheque.withdraw(1426)
timcheque.deposit(100560)

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balanceDiv = document.getElementById('balance')


depositButton.onclick = () => {
  const amount = (Number(amountInput.value))
  timcheque.deposit(amount)
  balanceDiv.innerText = `Balance: ${timcheque.balance}`
}

withdrawButton.onclick = () => {
  const amount = (Number(amountInput.value))
  timcheque.withdraw(amount)
  balanceDiv.innerText = `Balance: ${timcheque.balance}`
}

 