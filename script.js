let selectedProduct = "";
let selectedPrice = 0;

function openPopup(product, price) {
  const uid = document.getElementById("uid").value.trim();
  if (!uid) return alert("Please enter UID first");

  selectedProduct = product;
  selectedPrice = price;

  document.getElementById("pUid").innerText = uid;
  document.getElementById("pProduct").innerText = product;
  document.getElementById("pPrice").innerText = price;

  document.getElementById("overlay").style.display = "block";
  document.getElementById("orderPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("orderPopup").style.display = "none";
}

async function confirmOrder() {
  const uid = document.getElementById("uid").value.trim();

  await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, product: selectedProduct, price: selectedPrice })
  });

  const msg = `Free Fire Order%0AUID: ${uid}%0APackage: ${selectedProduct}%0AAmount: Rs ${selectedPrice}`;
  window.open(`https://wa.me/9707394367?text=${msg}`, "_blank");

  closePopup();
}
