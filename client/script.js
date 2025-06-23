document.getElementById("idForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = document.getElementById("idForm");
  const formData = new FormData(form); // includes file too

  try {
    const response = await fetch("http://localhost:3000/api/idcard", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    alert(result.message);

    // Fill preview card with form values
    document.getElementById("cardName").textContent = formData.get("name");
    document.getElementById("cardUSN").textContent = "USN: " + formData.get("usn");
    document.getElementById("cardBranch").textContent = "Branch: " + formData.get("branch");
    document.getElementById("cardBlood").textContent = "Blood Group: " + formData.get("bloodGroup");
    document.getElementById("cardDOB").textContent = "DOB: " + formData.get("dob");
    document.getElementById("cardEmail").textContent = "Email: " + formData.get("email");
    document.getElementById("cardCompany").textContent = "Institute: " + formData.get("company");

    // Set image from backend path
    document.getElementById("previewPhoto").src = `http://localhost:3000/uploads/${result.filename}`;
    document.getElementById("idCardPreview").style.display = "block";

  } catch (error) {
    alert("❌ Failed to save data");
    console.error(error);
  }
});
