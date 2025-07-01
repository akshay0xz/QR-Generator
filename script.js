function generate() {
  const input = document.getElementById("url-input").value.trim();
  const linkOutput = document.getElementById("link-output");
  const canvas = document.getElementById("qr-canvas");
  const downloadBtn = document.getElementById("download-btn");

  if (input === "") {
    alert("Please enter a URL");
    return;
  }

  // Show clickable link
  linkOutput.innerHTML = `🔗 <a href="${input}" target="_blank">${input}</a>`;

  // Generate QR on canvas
  QRCode.toCanvas(canvas, input, function (error) {
    if (error) console.error(error);
    else downloadBtn.style.display = "inline-block";
  });
}

function downloadQR() {
  const canvas = document.getElementById("qr-canvas");
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
