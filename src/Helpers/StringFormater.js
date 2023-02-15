// Function to add comma to number
function addComma(input) {
    let numberWithComma = input
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/gi, ",");

    return numberWithComma;
}

// Function to remove comma from a number
function removeComma(input) {
    let numberWithoutComma = input.toString().replace(/[\-\,]/gi, "");

    return numberWithoutComma;
}

// function to remove non number
function removeNonNumber(input) {
    return input.toString().replace(/[^\d]/g, "");
}

// a function to add space on every four numbers
function addSpace(input) {
    return input
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
}

// spaces after every three digits on phone number inputs
function formatPhoneNumber(input) {
    return input
        .replace(/\W/gi, "")
        .replace(/(.{3})/g, "$1 ")
        .trim();
}

// add slash when person input two numbers
function addSlash(input) {
    if (input.length === 2) return input + "/";
    else if (input.length === 3 && input.charAt(2) === "/")
        return input.toString().replace(/[^\d]/g, "");
    else return input;
}

export {
    addComma,
    removeComma,
    removeNonNumber,
    addSpace,
    formatPhoneNumber,
    addSlash,
};
