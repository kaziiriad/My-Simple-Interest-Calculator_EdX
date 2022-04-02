//Computes interst
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var year = new Date().getFullYear()+parseInt(years);

    //validates if amount field is empty 
    if (principal == "") {
        alert("Amount cannot be empty!");
        document.getElementById("principal").focus();
        return false;
    } 
    else {
        // validates if amount is less than or equal zero
        if (principal <= 0) {
            alert("Amount cannot be less that zero. Please enter a positive number!");
            document.getElementById("principal").focus();
            return false;
        } else {

            var interest = (principal * years * rate) / 100;
            var result =
                "If you deposit <mark>" +
                principal +
                "</mark>, <br> at an interest rate of <mark>" +
                rate +
                "</mark> % <br> You will receive an amount of <mark>" +
                interest +
                ", </mark><br> in the year <mark> " +
                year +
                "</mark>";

            document.getElementById("res").innerHTML = result;
        }
    }

}
// updates rate slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
