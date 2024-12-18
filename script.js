const validCodes = ["SWJR4S", "OFDDYE", "EUKJ27", "C2MTUF", "VFLSFO", "KUD8HQ"];

document.getElementById('redeemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const codeInput = document.getElementById('codeInput').value.trim();
    const messageDiv = document.getElementById('message');
    const downloadSection = document.getElementById('downloadSection');

    if (validCodes.includes(codeInput)) {
        messageDiv.innerHTML = '<p class="success">Code redeemed successfully!</p>';
        downloadSection.style.display = 'block';
    } else {
        messageDiv.innerHTML = '<p class="error">Invalid code. Please try again.</p>';
        downloadSection.style.display = 'none';
    }
});
