console.log("Hi!");

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

    if (elementsToAddFadeIn.length > 0) {
        elementsToAddFadeIn.forEach(e => {
            e.classList.add("fade-in");
            console.log(e);
        });
    }

    console.log("Done!")

    // document.getElementById("body-text").classList.add("visible");
    // document.getElementById("welcome-text").classList.add("visible");
    // document.getElementById("college-name-text").classList.add("visible");

    // Get all elements that have our `.fade-in` class:
    const elements = document.querySelectorAll('.fade-in');

    // Function to check bounds:
    const isElementInViewport = (e) => {
        const rect = e.getBoundingClientRect();

        // TODO!:
        return (
            // rect.top >= 0 && 
            rect.left >= window.scrollX
            && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            // && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            && rect.top > window.scrollY
            && rect.bottom > window.scrollY
        );
    };

    // Function to add elements to the `visible` class when needed:
    const addToVisibleClass = () => {
        for (let e of elements)
            if (isElementInViewport(e))
                e.classList.add('visible');
    };

    // These listeners do it, too...:
    window.addEventListener('scroll', addToVisibleClass);
    window.addEventListener('resize', addToVisibleClass);

    // Calling it once for the elements that *have* already loaded:
    addToVisibleClass();
});
