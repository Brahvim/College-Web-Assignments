
document.addEventListener('DOMContentLoaded', () => {

    const timeTable = document.getElementById('time-table');
    const tableName = document.getElementById('table-name');
    const rows = document.querySelectorAll('tr');
    const delay = 100;

    const tableNameStr = "-lunch Time-table:";
    const tableNameStrLenMinusOne = tableNameStr.length - 1;

    let lastCharId = 0;
    timeTable.style.opacity = 0;

    const textAddInterval = setInterval(() => {
        if (lastCharId >= tableNameStrLenMinusOne)
            clearInterval(textAddInterval);

        const char = tableNameStr[lastCharId++];
        tableName.innerHTML += char;
        document.title += char;
    }, 90);

    rows.forEach((row, id) =>
        setTimeout(
            () => row.classList.add('fade-in'),
            id * delay
        )
    );

    setTimeout(
        () => timeTable.style.opacity = 1,
        rows.length * delay * 4
    );

});
