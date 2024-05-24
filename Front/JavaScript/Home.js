const username = "Brahvim";
const password = "gpk@12345";


document.addEventListener("DOMContentLoaded", () => {

    // #region Current scope variables. C++-esque Hungarian-notation style!
    const s_kPromptText = document.querySelector(".prompt-text");
    const s_kUinText = document.getElementById("uin-text");
    const s_kUsernamePrompt = "Username, please!... ._.\n";
    const s_kPasswordPrompt = "Welcome Brahvim! ^-^\nPassword, pleeease... -_-\n";
    const s_kLoggedInPrompt = "Logged in! ^-^\n";
    const s_kEmptyString = "";

    let s_loggedIn = false;
    let s_uin = "";
    // #endregion

    // #region Functions...
    function updatePromptText(p_prompt) {
        s_kPromptText.innerText = s_kEmptyString;
        s_kPromptText.innerText = p_prompt;
        s_kPromptText.classList = "prompt-text all-text centered-element";
    }

    function keyDownListener(p_event) {
        if (s_loggedIn)
            document.removeEventListener(keyDownListener);

        switch (p_event.key) {
            case "Backspace": {
                if (p_event.ctrlKey)
                    s_uin = s_kEmptyString;
                else
                    s_uin = s_uin.substring(0, s_uin.length - 1);
            } break;

            case "Enter": {
                s_uin = s_kEmptyString;
                let currentPrompt = s_kPromptText.innerText;

                // This should be flattened of course! ...BUT IT'S `1:28` AM, BRAHVIM!
                if (s_kPromptText.innerText === s_kUsernamePrompt) {
                    if (s_kUinText.innerText === username)
                        currentPrompt = s_kPasswordPrompt;
                } else if (s_kPromptText.innerText === s_kPasswordPrompt) {
                    if (s_kUinText.innerText === password) {
                        currentPrompt = s_kLoggedInPrompt;
                        s_loggedIn = true;
                    }
                }

                updatePromptText(currentPrompt);
            } break;

            default: {
                s_uin += p_event.key;
            }
        }

        s_kUinText.innerText = s_uin;
    };
    // #endregion

    s_kPromptText.innerText = s_kUsernamePrompt;
    document.addEventListener('keydown', keyDownListener);

});
