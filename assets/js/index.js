console.log("Thank you for visiting. I look forward to joining your company!");


// Visitor counter logic
async function updateCounter() {
  try {
    const res = await fetch("https://foywu6wvypemtwxj473rwme6zy0vbidu.lambda-url.us-east-2.on.aws/", { method: "GET" });
    const data = await res.json();
    const el = document.getElementById("visitor-count");
    el.textContent = Number(data.count).toLocaleString();

    // Animation flash
    el.parentElement.classList.add("updated");
    setTimeout(() => el.parentElement.classList.remove("updated"), 400);
  } catch (e) {
    console.error("Visitor counter error:", e);
  }
}

// Run when page loads
updateCounter();