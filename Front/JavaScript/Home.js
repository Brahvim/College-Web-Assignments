// This's `1000 * 60 * 60 * 24 * 365.25`. Takes into account, leap years, too:
const MILLISECONDS_IN_YEAR = 31_557_600_000;

const MY_CURRENT_AGE = Math.floor(
    (Date.now() - new Date("2006-06-02")) / MILLISECONDS_IN_YEAR);

// Apparently you can pass `YYYY-MM-DD` dates to the constructor!
// And yes, JS's `Date` API is what Java deprecated decades ago...

// I insert scripts immediately into the page (in the `<head>`),
// so I best wait for the DOM tree to actually be built:

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("age-decl")
        .innerText = `I'm currently \`${MY_CURRENT_AGE}\` years old.`; // JS string-interp!
});

// Just *need* this callback.
// That element was always `null` otherwise!
