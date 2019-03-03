var targetNumber, numberOptions, counter;
var wins = 0;
var losses = 0;

function createNumber() {
    targetNumber = Math.floor(Math.random() * (120 - 20)) + 19;
    $("#target-number").text(targetNumber);
}
function numberRange() {
    numberOptions = [];

    while (numberOptions.length < 4) {
        var x = Math.floor(Math.random() * 12 + 1);
        if (!numberOptions.includes(x)) {
            numberOptions.push(x);
        }
    }
}
function btnValue() {
    for (var i = 0; i < numberOptions.length; i++) {
        var img = $("<button>");
        img.addClass("block-img").attr("data-value", numberOptions[i]);
        $("#img-wrapper").append(img);
    }
}

function check() {
    $(".block-img").on("click", function () {
        var blockValue = ($(this).attr("data-value"));
        blockValue = parseInt(blockValue);
        counter += blockValue;
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
function update() {
    $("#stats").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
}
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






