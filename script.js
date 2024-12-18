const validCodes = ["SWJR4S", "OFDDYE", "EUKJ27", "EFNYBK", "C2MTUF", "9N9VD0", "QL4DZJ", "EME8FT", "VFLSFO", "DUZ97U"];
const redeemedCodesKey = "redeemedCodes"; // Key to store redeemed codes in localStorage

document.getElementById('redeemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const codeInput = document.getElementById('codeInput').value.trim();
    const messageDiv = document.getElementById('message');
    const downloadSection = document.getElementById('downloadSection');

    // Retrieve redeemed codes from localStorage
    const redeemedCodes = JSON.parse(localStorage.getItem(redeemedCodesKey)) || [];

    if (redeemedCodes.includes(codeInput)) {
        // If the code is already redeemed
        messageDiv.innerHTML = '<p class="error">This code has already been used. Please try a different code.</p>';
        downloadSection.style.display = 'none';
    } else if (validCodes.includes(codeInput)) {
        // If the code is valid and not redeemed yet
        redeemedCodes.push(codeInput);
        localStorage.setItem(redeemedCodesKey, JSON.stringify(redeemedCodes));
        messageDiv.innerHTML = '<p class="success">Code redeemed successfully!</p>';
        downloadSection.style.display = 'block';
    } else {
        // If the code is invalid
        messageDiv.innerHTML = '<p class="error">Invalid code. Please try again.</p>';
        downloadSection.style.display = 'none';
    }
});

