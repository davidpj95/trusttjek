chrome.storage.local.get(["trusttjekDisabled"], (result) => {
  if (result.trusttjekDisabled) return;

(function () {
  const url = new URL(window.location.href);
  const domain = url.hostname.replace("www.", "").toLowerCase();

  if (  domain.includes("trustpilot.com") ||
  domain.includes("trustpilot.dk") ||
  domain.includes("google.com") ||
  domain.includes("google.dk")) return;
  if (document.getElementById("trusttjek-banner")) return;

  const trustpilotUrl = `https://dk.trustpilot.com/review/${domain}`;
  const logoUrl = chrome.runtime.getURL("icons/trusttjek_logo.png");

  const banner = document.createElement("div");
  banner.id = "trusttjek-banner";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.backgroundColor = "#FFE082";
  banner.style.color = "#000000";
  banner.style.padding = "14px 10px";
  banner.style.zIndex = "9999";
  banner.style.fontFamily = "sans-serif";
  banner.style.fontSize = "15px";
  banner.style.lineHeight = "1.5";
  banner.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  banner.style.display = "flex";
  banner.style.alignItems = "center";
  banner.style.justifyContent = "space-between";

  banner.innerHTML = `
    <style>
      #trusttjek-link {
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s ease, text-decoration 0.2s ease;
      }

      #trusttjek-link:hover {
        text-decoration: underline;
        color: rgb(20, 20, 20);
      }

      #trusttjek-close:hover svg {
        stroke: red;
      }
    </style>

    <!-- VENSTRE: Logo -->
    <div style="flex: 0 0 auto;">
      <img src="${logoUrl}" alt="TrustTjek logo" style="width: 30px; height: 30px;">
    </div>

    <!-- MIDTEN: Tekst -->
    <div style="flex: 1; text-align: center;">
      🕵️ </strong> Tjek <strong style="font-weight: 700;">${domain}</strong> på Trustpilot før du handler<br>
      <a id="trusttjek-link" href="${trustpilotUrl}" target="_blank">⭐ Se anmeldelser på Trustpilot ⭐</a>
    </div>

    <!-- HØJRE: Luk-knap -->
    <div style="flex: 0 0 auto;">
      <button id="trusttjek-close" style="
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      " title="Luk">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `;

  document.body.prepend(banner);
  document.body.style.marginTop = "70px";

  // Luk-funktion
  document.getElementById("trusttjek-close").addEventListener("click", () => {
    banner.remove();
    document.body.style.marginTop = "0";
  });
  })(); 
});    