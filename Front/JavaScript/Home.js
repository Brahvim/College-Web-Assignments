
$(document).ready(() => {

    const blinkDelay = 250;
    const submitButton = $("#submit");
    const blinkDelayHalf = blinkDelay / 2;
    const blinkElement = $("#blink-element");

    let nameFilled = false;
    let emailFilled = false;
    let passwordFilled = false;

    submitButton.hide();
    $(".centered-element").hide().fadeIn('slow');

    setInterval(() => {
        if (!(nameFilled && emailFilled && passwordFilled))
            return;
        submitButton.show();
    }, 10);

    submitButton.click(function (p_event) {
        console.log(nameFilled, emailFilled, passwordFilled);

        if (!(nameFilled && emailFilled && passwordFilled)) {
            // console.log("Submit event!");
            return;
        }

        // console.log("Ready to go!");

        setInterval(() => {
            blinkElement.show();
            setTimeout(() => blinkElement.hide(), blinkDelayHalf);
        }, blinkDelay);
    });

    $('#name').on('input', function () { nameFilled = $(this).val().length > 1; });
    $('#email').on('input', function () { emailFilled = $(this).val().length > 1; });
    $('#password').on('input', function () { passwordFilled = $(this).val().length > 1; });

});
