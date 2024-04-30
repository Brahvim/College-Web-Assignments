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

    if (elementsToAddFadeIn.length > 0)
        elementsToAddFadeIn.forEach(e => {
            e.classList.add("fade-in");
            console.log(e);
        });

    // Get all elements that have our `.fade-in` class:
    const elements = document.querySelectorAll('.fade-in');

    // Function to check bounds:
    const isElementInViewport = (e) => {
        const rect = e.getBoundingClientRect();

        return rect.left < window.scrollX + window.innerWidth
            && rect.top < window.scrollY + window.innerHeight;
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
