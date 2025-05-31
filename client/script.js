document.getElementById("idForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const company = document.getElementById("company").value;

  // Show ID card
  document.getElementById("cardName").textContent = name;
  document.getElementById("cardEmail").textContent = email;
  document.getElementById("cardCompany").textContent = company;
  document.getElementById("idCard").style.display = "block";

  // Send data to backend
  const response = await fetch("http://localhost:3000/api/idcard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, company }),
  });

  const result = await response.json();
  alert(result.message);
});
