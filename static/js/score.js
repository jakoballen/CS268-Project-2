function calculateScore() {
    var han = parseInt(document.getElementById("hancalc").value);
    var fu = parseInt(document.getElementById("fucalc").value);
    var win = document.getElementById("wintype").value;

    //validate input
    if (han === 0 || fu === 0) {
      alert("Please enter values");
      return;
    }

    han = han +2;

    //Calculate tip
    var total = Math.pow(2,han);

    total = total * fu;
    if (win === "Ron"){

        total = total * 4;
    }else{
        document.getElementById("per").style.display = "block";
    }


    //Display the tip
    document.getElementById("results").style.display = "block";
    document.getElementById("results").innerHTML = total;

  }
  //Hide the tip amount on load
document.getElementById("per").style.display = "none";
document.getElementById("results").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function() {
  calculateScore();

};