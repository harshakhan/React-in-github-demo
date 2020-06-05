
    // Create an expense manager using objects and the below-mentioned functionalities
    // It should have the following key
    //     Name (String)
    //     Age (Int)
    //     Gender (String)
    //     Records (Int Array) (Credit/Debit) (+ for credit, - for debit)
    //     addCredit (Function) (Adds a credit entry to the records)
    //     addDebit (Function) (Adds a debit entry to the records)
    //     printBalance (Function) (Prints the balance amount based on the records)
var expense_manager={
    name : "Harsha",
    age:21,
    records:[],

    addCredit:function(value){

        this.records.push(Number("+"+value))
    },
    addDebit:function(value){
        this.records.push(Number("-"+value))
    },
    printBalance:function(){
        var balance =0
        for(var i=0;i<this.records.length;i++){
            balance=balance+this.records[i]
        }
        return("your current balance is:" +balance)
    }

};
expense_manager.gender="male"
expense_manager.addCredit(200000)
expense_manager.addDebit(1000)
expense_manager.addCredit(5000)
expense_manager.addDebit(7899)
expense_manager.addCredit(500000)
expense_manager.addDebit(25000)
expense_manager.addCredit(900000)
expense_manager.addDebit(700000)



console.log(expense_manager.printBalance())
console.log(expense_manager)