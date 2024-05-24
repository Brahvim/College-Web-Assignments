
document.on('DOMContentLoaded', () => {

    document.querySelector('#fade-in table tr') // Hmmm...! So the multi-token parsing isn't just a jQuery feature!...
        .rows.forEach((row, id) => {
            setTimeout(() => row.classList.add('fade-in'), id * 30);
        });

});
