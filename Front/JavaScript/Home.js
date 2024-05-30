
document.addEventListener("DOMContentLoaded", () => {

    const promptText = document.getElementById("prompt-text");
    const originalText = promptText.innerText;
    let uin = ""; // "**U**ser **IN**put" :>

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "Backspace": {
                uin = "";
                e.preventDefault();
                promptText.innerText = originalText;
            } break;

            case " ": {
                uin += e.key;
                e.preventDefault();

                // ...because `promptText.innerText += ' '` doesn't work...?
                promptText.innerText = originalText + uin;
            } break;

            default: {
                if (e.key.length === 1) {
                    uin += e.key.toUpperCase();
                    promptText.innerText = originalText + uin;
                }
            }
        }
    });

});
