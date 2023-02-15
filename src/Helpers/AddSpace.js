// Function to add space after every three charractes
function addSpace(input) {
    let numberWithComma = input
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/gi, " ");

    return numberWithComma;
}

function removeSpace(input) {
    let numberWithoutComma = input.toString().replace(/[\ \,]/gi, "");

    return numberWithoutComma;
}

export { addSpace, removeSpace };
