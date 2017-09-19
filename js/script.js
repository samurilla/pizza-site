function getReceipt(){
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByName("size");

    for(var i = 0; i < sizeArray.length; i++){
        if (sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
        }
    }

    if(selectedSize === "personal"){
        sizeTotal = 6;
    }
    else if(selectedSize === "medium"){
        sizeTotal = 10;
    }
    else if(selectedSize === "large"){
        sizeTotal = 14;
    }
    else if(selectedSize === "extra-large"){
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " pizza selected");
    console.log("Basic total: $" + runningTotal + ".00");

    getStuffedCrust(runningTotal);
};



function getStuffedCrust(runningTotal){
    var crustTotal;

    if(document.getElementById("stuffed-crust").checked){
        crustTotal = 3;
    }
    else {
        crustTotal = 0;
    }

    runningTotal = runningTotal + crustTotal;
    console.log("Total with stuffed crust: $" + runningTotal + ".00");

    getCheese(runningTotal);
};



function getCheese(runningTotal){
    var cheeseTotal;

    if(document.getElementById("extra-cheese").checked){
        cheeseTotal = 3;
    }
    else {
        cheeseTotal = 0;
    }

    runningTotal = runningTotal + cheeseTotal;
    console.log("Total with stuffed crust: $" + runningTotal + ".00");

    getMeat(runningTotal);
};



function getMeat(runningTotal){
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByName("meat");

    for(var m = 0; m < meatArray.length; m++){
        if(meatArray[m].checked){
            selectedMeat.push(meatArray[m].value);  // .push adds the iterative value of meatArray to the end.
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1){
        meatTotal = (meatCount - 1);
    }
    else {
        meatTotal = 0;
    }

    runningTotal = runningTotal + meatTotal;
    console.log("Total with meat: $" + runningTotal + ".00");

    getNonMeat(runningTotal);
};



function getNonMeat(runningTotal){
    var nonMeatTotal = 0;
    var selectedNonMeat = [];
    var nonMeatArray = document.getElementsByName("non-meat");

    for(var n = 0; n < nonMeatArray.length; n++){
        if(nonMeatArray[n].checked){
            selectedNonMeat.push(nonMeatArray[n].value);  // .push adds the iterative value of nonMeatArray to the end.
        }
    }

    var nonMeatCount = selectedNonMeat.length;
    if (nonMeatCount > 1){
        nonMeatTotal = (nonMeatCount - 1);
    }
    else {
        nonMeatTotal = 0;
    }

    runningTotal = runningTotal + nonMeatTotal;
    console.log("Total with non-meat: $" + runningTotal + ".00");

    //get (runningTotal);

    document.getElementById("totalPrice").innerHTML = "</h3>Total <strong>$" + runningTotal + ".00" + "</strong></h3>";
    console.log("------------------------------------");
};