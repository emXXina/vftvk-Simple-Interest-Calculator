function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var futureYear = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML =
        "If you deposit <mark>" + principal + "</mark>,\n"
        + "at an interest rate of <mark>" + rate + "%</mark>.\n"
        + "You will receive an amout of <mark>" + interest + "</mark>,\n"
        + "in the year <mark>" + futureYear + "</mark>.";
}
        
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateValue;
}