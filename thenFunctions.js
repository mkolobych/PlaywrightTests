// The first function with .then blocks
async function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

generateRandomString().then((result1) => {
    console.log(`first .then block string ${result1}`);
    return result1
}).then((result2) => {
    console.log(`second .then block string ${result2}`);
    return result2
}).then((result3) => {
    console.log(`third .then block string ${result3}`);
});

// The second function with .then blocks
async function generateRandomTwoDigitNumber() {
    return Math.floor(Math.random() * 90 + 10);
}

generateRandomTwoDigitNumber().then((result1) => {
    console.log(`first .then block number ${result1}`);
    return result1
}).then((result2) => {
    console.log(`second .then block number ${result2}`);
    return result2
}).then((result3) => {
    console.log(`third .then block number ${result3}`);
});

// The third function with .then blocks
async function generateRandomID() {
    const idNumber = Math.floor(Math.random() * 1000000000);
    const idString = `ID:${idNumber.toString().padStart(9, '0')}`;
    return idString;
}

generateRandomID().then((result1) => {
    console.log(`first .then block with ID ${result1}`);
    return result1
}).then((result2) => {
    console.log(`second .then block with ID ${result2}`);
    return result2
}).then((result3) => {
    console.log(`third .then block with ID ${result3}`);
});