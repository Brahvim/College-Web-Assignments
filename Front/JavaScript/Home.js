$(document).ready(() => { // Callback for when stuff is ready!

    let clickCount = 0;
    let firstClickTime = 0;

    $("p").click(() => { // Callback fired when ANY paragraph gets clicked.
        clickCount++;

        switch (clickCount) {

            case 1: {
                firstClickTime = new Date().getTime();
            } break;

            case 2: {
                clickCount = 0;
                const secondClickTime = new Date().getTime();
                const elapsedTime = secondClickTime - firstClickTime;
                $("#timer").text("Time between clicks was: `" + elapsedTime + "` ms.");
            } break;

        }

    });

});