let selectedProduct = "";
let selectedPrice = 0;

function order(product, price) {
  const uid = document.getElementById("uid").value.trim();
  if (!uid) {
    alert("Please enter your Free Fire UID");
    return;
  }

  selectedProduct = product;
  selectedPrice = price;

  document.getElementById("pUid").innerText = uid;
  document.getElementById("pProduct").innerText = product;
  document.getElementById("pPrice").innerText = price;

  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("orderPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("orderPopup").classList.add("hidden");
}

function confirmOrder() {
  const uid = document.getElementById("uid").value.trim();
  const phone = "9707394367"; // your WhatsApp number

  const msg =
    `Free Fire Top-Up Order\n` +
    `UID: ${uid}\n` +
    `Package: ${selectedProduct}\n` +
    `Amount: Rs ${selectedPrice}\n` +
    `Payment: eSewa / Khalti\n\n` +
    `I have paid. Screenshot attached.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

  closePopup();
}