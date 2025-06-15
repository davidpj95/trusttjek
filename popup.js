document.addEventListener("DOMContentLoaded", () => {
  const statusText = document.getElementById("statusText");
  const toggleButton = document.getElementById("toggleButton");

  // Hent status
  chrome.storage.local.get(["trusttjekDisabled"], (result) => {
    const isDisabled = result.trusttjekDisabled === true;
    updateUI(isDisabled);
  });

  // Skift status når brugeren klikker
  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get(["trusttjekDisabled"], (result) => {
      const isDisabled = result.trusttjekDisabled === true;
      chrome.storage.local.set({ trusttjekDisabled: !isDisabled }, () => {
        updateUI(!isDisabled);
      });
    });
  });

  function updateUI(disabled) {
    if (disabled) {
      statusText.textContent = "🔕 TrustTjek er slået FRA";
      toggleButton.textContent = "Slå TIL";
      toggleButton.style.backgroundColor = "#4CAF50"; // grøn
    } else {
      statusText.textContent = "✅ TrustTjek er slået TIL";
      toggleButton.textContent = "Slå FRA";
      toggleButton.style.backgroundColor = "#d32f2f"; // rød
    }
  }
});
