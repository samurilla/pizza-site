function getReceipt(){
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByName("size");

    for(var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if(selectedSize === "personal"){
        sizeTotal = 6;
    }
    else if(selectedSize === "medium"){
        sizeTotal = 10;
    }
    else if(selectedSize = "large"){
        sizeTotal = 14;
    }
    else if(selectedSize = "extra-large"){
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text1);
};


function getMeat(runngingTotal, text1){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByName("meat");

    for(var m = 0; m < meatArray.length; m++){
        if(meatArray[m].checked){
            selectedMeat.push(meatArray[m].value);  // .push adds the iterative value of meatArray to the end.
            console.log("selected meat item: (" + meatArray[m].value + ")");
            text1 = text1 + meatArray[m].value + "<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1){
        meatTotal = (meatCount - 1);
    }
    else {
        meatTotal = 0;
    }

    runningTotal = runngingTotal + meatTotal;
    console.log("rt = " + runngingTotal);
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total <strong>$" + runningTotal + ".00" + "</strong></h3>";
};



function test(){
    // document.getElementById("form1").reset();
    document.getElementsByClassName("first").classList += ('active');
};