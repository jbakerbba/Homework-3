function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var years = parseInt(document.getElementById("years").value);

    var interest = (principal * interestRate * years) / 100;

    var totalAmount = principal + interest;

    document.getElementById("result").innerHTML = "After " + years + " years, you will have $" + totalAmount.toFixed(2);
}