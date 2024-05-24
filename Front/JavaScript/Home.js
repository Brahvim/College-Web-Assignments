document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    // Data-oriented design #FTW!:
    console.log("Adding these elements to the `fade-in` class!");

    let elementsToAddFadeIn = Array.from(document.querySelectorAll("*"));

    // elementsToAddFadeIn = elementsToAddFadeIn
    //     .filter(e => ![
    //         // // "body-text",
    //         // "welcome-text",
    //         // "college-name-text",
    //     ].includes(e.id));

    elementsToAddFadeIn = elementsToAddFadeIn
        .filter(e => e.nodeName === "DIV");

    elementsToAddFadeIn.forEach(e => {
        e.classList.add("fade-in");
        console.log(e);
    });

    // Function to check bounds:
    const isElementInViewport = (e) => {
        const rect = e.getBoundingClientRect();

        // return (
        //     rect.left < window.scrollX + window.innerWidth
        //     && rect.top < window.scrollY + window.innerHeight
        // );

        return (
            rect.left < window.innerWidth
            && rect.top < window.innerHeight
            && rect.right > 0
            && rect.bottom > 0
        );

        // return !(
        //     // rect.top >= 0 &&
        //     rect.left >= window.scrollX
        //     && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        //     // && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        //     && rect.top > window.scrollY
        //     && rect.bottom > window.scrollY
        // );
    };

    // const elements = document.querySelectorAll('.fade-in');

    // Function to add elements to the `visible` class when needed:
    const addToVisibleClass = () => {
        // Get all elements that have our `.fade-in` class:
        const makeVisible = (e) => e.classList.add('visible');
        const makeInvisible = (e) => e.classList.remove('visible');
        const makeVisibleDelayed = (e) => setTimeout(makeVisible, 50, e);
        const randomRgb = () => `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`;

        const allElements
            = document.querySelectorAll('.fade-in');
        let insideElements = [];
        let outsideElements = [];

        for (let e of allElements) {
            if (isElementInViewport(e))
                insideElements.push(e);
            else
                outsideElements.push(e);
        }

        for (let e of insideElements) {
            if (!e.classList.contains("visible")) {
                makeVisibleDelayed(e);
                e.style.cssText =
                    e.style.cssText + (`color: ${randomRgb()}`);
            }
        }

        for (let e of outsideElements)
            makeInvisible(e);

        // Don't use this! I've made the entire thing above be more vectorizable!...
        // ...or that it's better at using cache.
        // This *is* slower, but it works!:

        // for (let e of document.querySelectorAll('.fade-in')) {
        //     if (isElementInViewport(e)) {
        //         if (e.classList.contains("visible"))
        //             return;
        //
        //      makeVisible(e);
        //
        //         // Thank GOD I don't have to parse this instead of setting and forgetting!:
        //         let css = e.style.cssText;
        //         css = css + (`color: ${randomRgb()}`);
        //         e.style.cssText = css;
        //     }
        //     else
        //         makeInvisible(e);
        // }
    };

    // These listeners do it, too...:
    window.addEventListener('scroll', addToVisibleClass);
    window.addEventListener('resize', addToVisibleClass);

    // Calling it once for the elements that *have* already loaded:
    addToVisibleClass();
});
