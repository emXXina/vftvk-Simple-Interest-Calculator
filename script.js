function compute() {
    var principalField = document.getElementById("principal");
    var principal = principalField.value;
    
    if (principal <= 0) {
        alert("Enter a positive number.");
        principalField.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var futureYear = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML =
        "<br>If you deposit <mark>" + principal + "</mark>,<br/>"
        + "at an interest rate of <mark>" + rate + "%</mark>.<br/>"
        + "You will receive an amout of <mark>" + interest + "</mark>,<br/>"
        + "in the year <mark>" + futureYear + "</mark>.<br>";
}
        
function updateRate() {
    var rateValue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateValue;
}
