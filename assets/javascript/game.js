var targetNumber, numberOptions, counter;
var wins = 0;
var losses = 0;

// Create and print target number 
function createNumber() {
    targetNumber = Math.floor(Math.random() * (120 - 20)) + 19;
    $("#target-number").text(targetNumber);
}

// Create an array of four random numbers
function numberRange() {
    numberOptions = [];

    while (numberOptions.length < 4) {
        var x = Math.floor(Math.random() * 12 + 1);
        if (!numberOptions.includes(x)) {
            numberOptions.push(x);
        }
    }
}

// Apply random values to buttons data attribute
function btnValue() {
    for (var i = 0; i < numberOptions.length; i++) {
        var img = $("<button>");
        img.addClass("block-img").attr("data-value", numberOptions[i]);
        $("#img-wrapper").append(img);
    }
}

// Add guesses and determine if user won or lost 
function check() {
    $(".block-img").on("click", function () {
        var blockValue = ($(this).attr("data-value"));
        blockValue = parseInt(blockValue);
        counter += blockValue;
        console.log('clicked')
        if (counter === targetNumber) {
            wins++;
            gameInit();
        }
        else if (counter >= targetNumber) {
            losses++;
            gameInit();
        }
        update();
    });
}

// Update DOM
function update() {
    $("#stats").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
}

// Clear values for previous round and start new game 
function gameInit() {
    $("#img-wrapper").empty();
    counter = 0;
    update();
    createNumber();
    numberRange();
    btnValue();
    check();
}
gameInit();






