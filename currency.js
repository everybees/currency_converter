function convert() {

    var currency = document.getElementById("currency").value;
    var amount = document.getElementById("amount").value;

    switch (currency) {
        case "dollars":
            var output = amount * 360;
            document.getElementById("demo").innerHTML = output;
            break;
        case "euros":
            var output = amount * 395;
            document.getElementById("demo").innerHTML = output;
            break;
        case "pounds":
            var output = amount * 470;
            document.getElementById("demo").innerHTML = output;
            break;
        case "yen":
            var output = amount * 52;
            document.getElementById("demo").innerHTML = output;
            break;
        case "ruppees":
            var output = amount * 5;
            document.getElementById("demo").innerHTML = output;
            break;
        default:
            var output = amount * 3686700;
            document.getElementById("demo").innerHTML = output;
            break;


    }
    //     if (isNaN(amount)) {
    //         document.getElementById("demo").innerHTML = "Wrong input!";
    //     } else {
    //         if (currency == "dollar") {
    //             var output = amount * 360;
    //             document.getElementById("demo").innerHTML = output;
    //         } else if (currency == "euros") {
    //             var output = amount * 395;
    //             document.getElementById("demo").innerHTML = output;
    //         } else if (currency == "pounds") {
    //             var output = amount * 470;
    //             document.getElementById("demo").innerHTML = output;
    //         } else if (currency == "yen") {
    //             var output = amount * 52;
    //             document.getElementById("demo").innerHTML = output;
    //         } else if (currency == "ruppees") {
    //             var output = amount * 5;
    //             document.getElementById("demo").innerHTML = output;
    //         } else {
    //             var output = amount * 3686700;
    //             document.getElementById("demo").innerHTML = output;
    //         }

    //     }
}