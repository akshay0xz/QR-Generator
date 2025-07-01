function generate() {
  const input = document.getElementById("url-input").value.trim();
  const linkOutput = document.getElementById("link-output");
  const qrContainer = document.getElementById("qr-code");

  if (input === "") {
    alert("Please enter a URL");
    return;
  }

  // Show clickable link
  linkOutput.innerHTML = `🔗 <a href="${input}" target="_blank">${input}</a>`;

  // Generate QR code
  qrContainer.innerHTML = "";
  QRCode.toCanvas(document.createElement('canvas'), input, function (error, canvas) {
    if (error) console.error(error);
    else qrContainer.appendChild(canvas);
  });
}
