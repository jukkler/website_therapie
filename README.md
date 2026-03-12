# Website Therapiezentrum Ziesemer

Statische Website für das Therapiezentrum Ziesemer. Deployed auf **therapiezentrum-ziesemer.de**.

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 3
- **Fonts:** Inter + Lora (via @fontsource)
- **SEO:** Sitemap, Schema.org, Open Graph

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build
npm run build

# Build lokal testen
npm run preview
```

## Projektstruktur

```
src/
├── pages/              Seiten (index, kontakt, termin-anfragen, ...)
├── components/         Astro-Komponenten
│   ├── home/           Homepage-Sektionen
│   ├── layout/         Header, Footer, CookieConsent, MobileCTABar
│   └── ui/             Button, SectionHeading
├── layouts/            BaseLayout
├── content/            Markdown-Content (Leistungen)
├── data/               JSON-Konfiguration (siteConfig, team, openingHours)
├── assets/             Bilder (hero, praxis, team, logo, leistungen)
├── styles/             global.css
└── utils/              SEO-Utilities
```

## Kalender-Widget

Die Seite `/termin-anfragen/` bettet das PhysioBook-Widget per iFrame ein:

- **Widget-URL:** `https://kalender.therapiezentrum-ziesemer.de/widget` (konfiguriert in `src/data/siteConfig.json`)
- **Dynamische Höhe:** Das Widget sendet seine Höhe per `postMessage` — der iFrame passt sich automatisch an
- **Loading-Skeleton:** Pulsierender Platzhalter während der iFrame lädt
- **Fallback:** Nach 5 Sekunden ohne postMessage wird eine Standard-Höhe von 700px gesetzt

### Voraussetzung

PhysioBook muss deployed sein mit `WIDGET_ORIGIN=https://therapiezentrum-ziesemer.de` in der `.env`, damit die CORS-Headers für die API-Aufrufe aus dem iFrame funktionieren.

## Deployment auf Hetzner (therapiezentrum-ziesemer.de)

Die Website wird als statische HTML-Dateien ausgeliefert — kein Node.js-Server nötig. Nginx liefert den `dist/`-Ordner direkt aus.

### Voraussetzungen auf dem Server

- Nginx (bereits vorhanden für PhysioBook)
- Certbot (Let's Encrypt SSL)

### 1. Repository klonen und bauen

```bash
cd /opt
git clone https://github.com/jukkler/website_therapie.git website_therapie
cd website_therapie

npm ci
npm run build
```

Der Build erzeugt den `dist/`-Ordner mit allen statischen Dateien.

### 2. Nginx konfigurieren

```nginx
server {
    listen 80;
    server_name therapiezentrum-ziesemer.de www.therapiezentrum-ziesemer.de;
    return 301 https://therapiezentrum-ziesemer.de$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.therapiezentrum-ziesemer.de;

    ssl_certificate /etc/letsencrypt/live/therapiezentrum-ziesemer.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/therapiezentrum-ziesemer.de/privkey.pem;

    return 301 https://therapiezentrum-ziesemer.de$request_uri;
}

server {
    listen 443 ssl http2;
    server_name therapiezentrum-ziesemer.de;

    ssl_certificate /etc/letsencrypt/live/therapiezentrum-ziesemer.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/therapiezentrum-ziesemer.de/privkey.pem;

    root /opt/website_therapie/dist;
    index index.html;

    # Trailing slashes (Astro-Konfiguration)
    location / {
        try_files $uri $uri/ =404;
    }

    # Cache für statische Assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Custom 404
    error_page 404 /404/index.html;
}
```

```bash
sudo nginx -t
sudo systemctl reload nginx
```

**Wichtig:** Der `X-Frame-Options: SAMEORIGIN` Header erlaubt iFrames nur von der eigenen Domain. Da `kalender.therapiezentrum-ziesemer.de` eine Subdomain ist, wird das Widget nicht blockiert.

### 3. SSL-Zertifikat einrichten

```bash
sudo certbot --nginx -d therapiezentrum-ziesemer.de -d www.therapiezentrum-ziesemer.de
```

### 4. DNS konfigurieren

Beim Domain-Provider (oder Hetzner DNS) folgende Records setzen:

| Typ | Name | Wert |
|-----|------|------|
| A | `therapiezentrum-ziesemer.de` | `<Server-IP>` |
| A | `www.therapiezentrum-ziesemer.de` | `<Server-IP>` |
| A | `kalender.therapiezentrum-ziesemer.de` | `<Server-IP>` |

## Update-Deployment

```bash
cd /opt/website_therapie
git pull origin main
npm ci
npm run build
# Fertig — Nginx liefert automatisch die neuen Dateien aus dist/
```

Kein Neustart nötig, da Nginx statische Dateien direkt ausliefert.

## Deployment-Reihenfolge (beide Projekte)

Wenn Änderungen an der Widget-Integration gemacht werden:

1. **Zuerst PhysioBook deployen** (CORS-Headers und postMessage müssen aktiv sein)
2. **Dann Website deployen** (neue Widget-URL und postMessage-Listener)

```bash
# 1. PhysioBook
cd /opt/physiobook
git pull origin main
npm ci
npm run build
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
pm2 restart physiobook

# 2. Website
cd /opt/website_therapie
git pull origin main
npm ci
npm run build
```
# therapiezentrum
