# TrustTjek 🔍🛑

**TrustTjek** er en Chrome-extension, der hjælper dig med at undgå usikre webshops. Den advarer dig automatisk, hvis en webshop har dårlige Trustpilot-anmeldelser eller mange klager.

## 🚀 Funktioner

- Tjekker Trustpilot-score for webshops
- Viser en advarsel, hvis webshoppen har en lav vurdering
- Brugervenligt popup-vindue med Trustpilot-link
- Automatisk aktivering ved besøg på en webshop
- Badge-ikon og farver, som signalerer risiko

## 🧪 Sådan tester du udvidelsen

1. Download eller klon projektet:
   - Klik på **Code** → **Download ZIP** eller brug Git
2. Pak mappen ud, hvis du har downloadet en ZIP
3. Åbn Chrome og gå til `chrome://extensions/`
4. Slå **Developer Mode** til i øverste højre hjørne
5. Klik på **"Indlæs udpakket"** og vælg mappen `trusttjek`
6. Besøg en webshop og se om TrustTjek reagerer

## 🛠️ Filoversigt

```bash
trusttjek/
├── manifest.json          # Konfiguration til Chrome
├── content.js             # Kan bruges til DOM-manipulation
├── popup.html             # HTML til popup-vinduet
├── popup.js               # Logik til popup-vinduet
├── popup.css              # Styling af popup
├── icons/                 # Ikoner til udvidelsen
├── README.md              # Denne fil :)
