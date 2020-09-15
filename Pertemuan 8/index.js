let jumlah = 0;
const account = {
    
    name : "Valentino",
    expenses : []
     
};
function addExpenses(description, amount)
{
  account.expenses.push({description : description, amount: amount})
}
function getAccountSummary()
{
    account.expenses.forEach(function(x)
    {
        jumlah = jumlah + x.amount
    })
    console.log("Total Harga Pembelian dari "+ account.name +" = Rp. "+jumlah);
}

addExpenses("Skin Epic", 250000);
addExpenses("Skin Elite", 75000);
getAccountSummary();