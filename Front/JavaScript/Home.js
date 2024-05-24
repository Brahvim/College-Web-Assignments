const username = "Brahvim";
const password = "pass@12345#";

document.addEventListener("DOMContentLoaded", () => {

    // #region Current scope variables. C++-esque Hungarian-notation style!
    const s_kPasswordPromptText = "Welcome Brahvim! ^-^\nPassword, pleeease... -_-\n";
    const s_kUsernamePromptText = "Username, please!... ._.\n";
    const s_kLoggedInPromptText = "Logged in! ^-^\n";
    const s_kFailureAlertText = "Failure 😅👍️!...";
    const s_kEmptyStr = "";

    const s_kPromptElement = document.getElementById("prompt-text");
    const s_kUinElement = document.getElementById("uin-text");

    let s_loggedIn = false;
    let s_uin = "";
    // #endregion

    // #region Functions...
    function updatePromptText(p_prompt) {
        void s_kPromptElement.offsetWidth;
        s_kPromptElement.innerText = p_prompt;
        // s_kPromptElement.innerText = s_kEmptyStr;
        s_kPromptElement.classList = "prompt-text all-text centered-element";
    }

    function showFail() {
        s_uin = s_kFailureAlertText;
        s_kUinElement.innerText = s_uin;
        setTimeout(() => {
            s_uin = s_kEmptyStr;
            s_kUinElement.innerText = s_uin;
        }, 800);
    }

    function substringSinceLastSpace(p_string) {
        let id = p_string.lastIndexOf(" ");

        // if (id == -1) {
        //     for (let i = 0; i < p_string.length; i++)
        //         if (p_string.charCodeAt(i) >= 97 && p_string.charCodeAt(i) <= 122)
        //             id = i;
        //
        if (id == -1)
            return "";
        // }

        return p_string.substring(0, id);
    }

    // ...Welcome `1:52` AM bad code:
    function keyDownListener(p_event) {
        if (s_loggedIn)
            document.removeEventListener(keyDownListener);

        switch (p_event.key) {
            case "Backspace": {
                if (p_event.ctrlKey)
                    s_uin = substringSinceLastSpace(s_uin);
                else
                    s_uin = s_uin.substring(0, s_uin.length - 1);
            } break;

            case "Enter": {
                s_uin = s_kEmptyStr;
                let currentPrompt = s_kPromptElement.innerText;

                // This should be flattened of course! ...BUT IT'S `1:28` AM, BRAHVIM!
                if (s_kPromptElement.innerText === s_kUsernamePromptText) {
                    if (s_kUinElement.innerText === username)
                        currentPrompt = s_kPasswordPromptText;
                    else
                        showFail();
                } else if (s_kPromptElement.innerText === s_kPasswordPromptText) {
                    if (s_kUinElement.innerText === password) {
                        s_kPromptElement.classList.add("inflating-text");
                        currentPrompt = s_kLoggedInPromptText;
                        s_loggedIn = true;
                    } else
                        showFail();
                }

                updatePromptText(currentPrompt);
            } break;

            default: {
                if (p_event.key.length !== 1)
                    return;

                s_uin += p_event.key;
            }
        }

        s_kUinElement.innerText = s_uin;
    };
    // #endregion

    s_kUinElement.style.top = "60%";
    s_kPromptElement.innerText = s_kUsernamePromptText;
    document.addEventListener('keydown', keyDownListener);

});
