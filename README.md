# TrustTjek 🔍🛑

**TrustTjek** er en Chrome-extension, der hjælper dig med at tjekke troværdigheden af webshops. Når du besøger en webshop, tilføjer udvidelsen automatisk et link til webshoppen på Trustpilot, så du hurtigt kan læse anmeldelser og vurdere, om du bør handle der.

## 🚀 Hovedfunktioner

- Finder automatisk Trustpilot-linket til den webshop, du besøger
- Viser et ikon og en popup med direkte adgang til anmeldelser
- Gør det nemt at tage informerede beslutninger før køb
- Enkel og diskret integration direkte i browseren

## 🧪 Sådan tester du udvidelsen

1. Download eller klon projektet:
   - Klik på **Code** → **Download ZIP** eller brug Git
2. Udpak mappen, hvis du har downloadet en ZIP
3. Åbn Chrome og gå til `chrome://extensions/`
4. Slå **Developer Mode** til (øverst til højre)
5. Klik **"Indlæs udpakket"** og vælg mappen `trusttjek`
6. Besøg en webshop og klik på TrustTjek-ikonet for at se Trustpilot-linket

## 🛠️ Projektstruktur

```bash
trusttjek/
├── manifest.json          # Chrome-konfiguration og permissions
├── content.js             # Script der tilføjer linket
├── popup.html             # HTML til popup-vinduet
├── popup.js               # Logik til popup
├── popup.css              # Styling af popup
├── icons/                 # Ikoner til udvidelsen (PNG)
├── README.md              # Projektbeskrivelse (denne fil)
