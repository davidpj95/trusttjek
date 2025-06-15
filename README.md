 ![trusttjek_logo](https://github.com/user-attachments/assets/cc106954-70d0-4fea-99b5-5f3c58482c6a)

# TrustTjek 🔒🛍️

**TrustTjek** er en gratis Chrome-extension, der hjælper dig med at handle sikkert online.

Når du besøger en webshop, viser TrustTjek automatisk en advarselsbjælke med et link til virksomhedens Trustpilot-anmeldelser.  
På den måde undgår du at købe fra sider med mange dårlige erfaringer.

## 🔧 Funktioner

✅ Automatisk detektion af webshops  
✅ Advarselsbanner i toppen af siden  
✅ Hurtig adgang til Trustpilot-anmeldelser  

Fungerer med alle webshops og understøtter både danske og internationale domæner.

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
