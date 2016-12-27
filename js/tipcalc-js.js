function calculateTip() {
    var billAmt = document.getElementById("billAmt").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numppl = document.getElementById("totalPpl").value;
    //quickvalidation
    if (billAmt === "" || serviceQuality == 0) {
        return window.alert("Please enter correct value!!");
    } 
    //check if this input > 1
    if (numppl === "" || numppl <= 1) {
        numppl = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    var total = (billAmt * serviceQuality) / numppl;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
} 


//hide the total tip amt before calculating the tip
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() {calculateTip();};

