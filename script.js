function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var futureYear = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerText = "If you deposit " + principal
        + ", \nat an interest rate of " + rate + "%.\nYou will receive an amout of "
        + interest + ",\nin the year 2025."
}
        
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateValue;
}