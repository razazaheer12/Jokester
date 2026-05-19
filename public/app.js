// ── Punchline reveal ─────────────────────────────────────────────
// Hides the punchline until the user taps the reveal button
function revealPunchline(btn) {
  const punchline = btn.nextElementSibling;
  punchline.classList.remove("hidden");
  btn.style.display = "none"; // hide the button after reveal
}

// ── Keep radio pills visually in sync ────────────────────────────
document.querySelectorAll(".radio-group .radio-pill input").forEach((radio) => {
  radio.addEventListener("change", () => {
    // Remove .checked from all siblings, add to active
    radio.closest(".radio-group").querySelectorAll(".radio-pill").forEach((p) => p.classList.remove("checked"));
    radio.closest(".radio-pill").classList.add("checked");
  });
});

// ── Keep checkbox pills visually in sync ─────────────────────────
document.querySelectorAll(".check-pill input").forEach((cb) => {
  cb.addEventListener("change", () => {
    cb.closest(".check-pill").classList.toggle("checked", cb.checked);
  });
});