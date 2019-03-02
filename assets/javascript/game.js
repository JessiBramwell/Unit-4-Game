var targetNumber, numberOptions, counter;

function targetNumber() {
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
    console.log(numberOptions);
}
function addBtn() {
    for (var i = 0; i < 4; i++) {
        var img = $("<button>");
        img.addClass("crystal-img");
        img.attr("data-value", numberOptions[i]);
        $("#img-wrapper").append(img);
    }
}
function check() {
    $(".crystal-img").on("click", function () {
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        update();
        if (counter === targetNumber) {
            won();
        }
        else if (counter >= targetNumber) {
            lost();
        }

    });
}
function update() {
    $("#stats").text(counter);
}
function won() {
    alert("you win")
}
function lost() {
    alert("you lost")
}

targetNumber();
numberRange();
addBtn();
check();
counter = 0;





