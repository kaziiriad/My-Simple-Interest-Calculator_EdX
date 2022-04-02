function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    if (principal == "")
    {
        alert("Amount cannot be empty!")
        document.getElementById("principal").focus();
        return false;
    }
    else
    {
        if (principal <= 0)
        {
            alert("Amount cannot be less that zero. Please enter a positive number");
            document.getElementById("principal").focus();
            return false;
        }
    }

    document.getElementById("intst").innerText = interest
    var year = new Date().getFullYear+parseInt(years);

    var result = "If you deposit <mark>"+principal+"</mark>, <br> at an interest rate of <mark>"+rate+"</mark> % <br> You will receive an amount of <mark>"+interest+", </mark><br> in the year <mark> "+year+"</mark>";
    
    document.getElementById("res").innerHTML = result;
}
        

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

