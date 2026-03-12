## Spec Sheet v2 – Relaunch Website **Therapiezentrum Ziesemer**

**Projektziel:** Neuentwicklung des Internetauftritts von *Therapiezentrum Ziesemer* mit moderner, hochwertiger Optik, starken Animationen, klarer Nutzerführung und zentral eingebundener **Terminanfrage via eigenem Widget**.  
**Hosting/Deployment:** Hetzner Server (Ubuntu)  
**Bestehende Website & Domain:** [therapiezentrum-ziesemer.de](https://therapiezentrum-ziesemer.de/) – Domain wird beibehalten.  
**Praxisform:** Einzelpraxis mit Mitarbeitern (Inhaber: Stefan Ziesemer)

---

## 1) Projektüberblick

### 1.1 Zielsetzung (Business + UX)
- Professioneller, vertrauenswürdiger und hochwertiger Markenauftritt für eine inhabergeführte Physiotherapie-Praxis
- Höhere Conversion auf:
  - **Terminanfrage (eigenes Kalender-Widget)**
  - Telefonanruf
  - Kontaktaufnahme
- Klare Darstellung der Leistungen, der Praxis und des Teams
- Mobile-first Optimierung (Großteil der Nutzer kommt mobil)
- Technisch saubere, schnelle und wartbare Website mit leichtgewichtigem Stack

### 1.2 Primäre Zielgruppen
- Patient:innen mit akuten Beschwerden (Rücken, Bewegung, Schmerzen)
- Patient:innen mit Verordnung / Krankengymnastikbedarf
- Wiederkehrende Patient:innen
- Angehörige (Terminorganisation)
- Lokale Suchende in Leichlingen / Witzhelden Umgebung

---

## 2) Ist-Analyse der aktuellen Website (Kurz)

### 2.1 Bestehende Inhalte/Struktur
Aktuell vorhanden:
- Startseite
- Kontakt
- Team → **bleibt als Team-Seite** (Inhaber + Mitarbeiter)
- Praxis
- Leistungen
- Impressum / Datenschutz / Cookie-Richtlinie

### 2.2 Erfasste Basisdaten (zur Übernahme/Prüfung)
- Adresse: **Am Krähwinkeler Bach 6, 42799 Leichlingen**
- E-Mail: **info@therapiezentrum-ziesemer.de**
- Telefon: **02174 / 89 24 26**
- Öffnungszeiten (Mo–Fr/Sa vorhanden, So geschlossen)

### 2.3 Auffälligkeiten / Optimierungspotenzial
- Inhaltlich solide Basis, aber visuell/UX modernisierbar
- Kontaktformular aktuell JavaScript-abhängig (Fehlermeldung sichtbar, falls JS fehlt)
- Cookie-/Datenschutztexte wirken teilweise inkonsistent (z. B. abweichende Telefonnummer/E-Mail in einzelnen Rechtstexten) → **Rechts-/Datenpflege prüfen**
- Mehr visuelle Führung, Emotionalität, Trust-Elemente und Conversion-Optimierung möglich

---

## 3) Scope (Leistungsumfang Relaunch)

### 3.1 In Scope (Must-have)
- Konzept / UX / UI Design (inkl. Animationskonzept)
- Entwicklung Frontend (Lightweight-Stack mit performanter Animation)
- **Eigenes Kalender-Widget** (iFrame-Einbindung des bestehenden Terminanfrage-Widgets)
- Technisches Setup für Hetzner (Ubuntu)
- SEO-Basics + Performance-Optimierung
- Datenschutz-/Cookie-Banner-Integration
- URL-Redirect-Mapping (alte → neue URLs)
- Go-Live + Monitoring

### 3.2 Should-have
- FAQ-Bereich
- „So läuft Ihr erster Termin ab"-Sektion
- Praxisphilosophie / Werte-Sektion
- Lokaler SEO-Content (Leichlingen / Witzhelden)

### 3.3 Could-have (Nice-to-have)
- Blog / Ratgeber
- Online-Rezeptupload
- Mehrsprachigkeit (DE/EN)
- Bewertungsintegration (Google Reviews API/Widgets – DSGVO-konform prüfen)

### 3.4 Won't-have (explizit ausgeschlossen)
- Umfangreiches CMS-Backend (statischer Content, selten geändert)

---

## 4) Informationsarchitektur (Soll-Struktur)

### 4.1 Hauptnavigation
1. **Start**
2. **Leistungen**
3. **Praxis**
4. **Team** (Inhaber + Mitarbeiter:innen)
5. **Termin anfragen** (prominent / CTA)
6. **Kontakt**

### 4.2 Footer
- Adresse / Kontakt
- Öffnungszeiten
- Termin-CTA
- Impressum
- Datenschutz
- Cookie-Einstellungen

### 4.3 Seitentypen
- **Startseite** (Hero, Leistungen-Teaser, Team-Teaser, Praxisbilder, Trust, Öffnungszeiten, CTA)
- **Leistungsübersicht**
- **Leistungsdetailseiten** (optional; SEO-stark)
- **Praxis** (Galerie, Einblicke, Atmosphäre)
- **Team** (Inhaber, Mitarbeiter:innen, Rollen, Qualifikationen, Spezialisierungen)
- **Termin anfragen** (eigenes Kalender-Widget zentral)
- **Kontakt** (Telefon, E-Mail, Karte/Anfahrt, Öffnungszeiten)

### 4.4 URL-Redirect-Mapping (SEO-kritisch)
Die bestehende Domain wird beibehalten. Bei geänderter URL-Struktur müssen 301-Redirects eingerichtet werden:

| Alte URL | Neue URL | Status |
|---|---|---|
| `/team/` | `/team/` | Bleibt |
| `/praxis/` | `/praxis/` | Bleibt |
| `/leistungen/` | `/leistungen/` | Bleibt |
| `/kontakt/` | `/kontakt/` | Bleibt |
| (neu) | `/termin-anfragen/` | Neue Seite |
| Weitere alte Pfade | Prüfen | 301 → nächstpassende Seite |

**Wichtig:** Vor Go-Live vollständiges Crawling der alten Seite, um alle indexierten URLs zu erfassen und korrekt weiterzuleiten.

---

## 5) UX-/UI-Konzept

### 5.1 Designrichtung
- Modern, freundlich, medizinisch-seriös, warm und vertrauensbildend
- Hochwertige Typografie, viel Weißraum, klare Hierarchie
- Große, authentische Praxisbilder + Teamfotos
- Deutliche CTAs: **„Termin anfragen"**, **„Jetzt anrufen"**

### 5.2 Farbsystem (Color Language)

#### Palette

| Token | Hex | Farbe | Rolle |
|---|---|---|---|
| `brand-primary` | `#5289AD` | Mittleres Blau | Primärfarbe – CTAs, Links, aktive Elemente, Buttons |
| `brand-dark` | `#243C4C` | Tiefes Petrol/Navy | Headlines, Navigation, Footer-Hintergrund, dunkle Sektionen |
| `brand-muted` | `#698696` | Gedämpftes Stahlblau | Sekundäre Texte, Rahmen, Icons, Kartenränder |
| `surface-light` | `#ACBCBF` | Helles Silbergrau | Hintergründe für Sektionswechsel, Card-Backgrounds, Divider |
| `surface-bg` | `#F4FCFB` | Fast-Weiß (Minttönung) | Seitenhintergrund, Content-Bereiche, helle Sektionen |
| `white` | `#FFFFFF` | Weiß | Cards, Modals, Eingabefelder |
| `text-primary` | `#243C4C` | = brand-dark | Fließtext, Headlines |
| `text-secondary` | `#698696` | = brand-muted | Subtexte, Labels, Meta-Info |

#### Anwendungsregeln

**Hintergrundschichtung (Sektionswechsel):**
- Primäre Sektionen: `surface-bg` (#F4FCFB)
- Alternierende Sektionen: `surface-light` (#ACBCBF) mit 10–15% Opacity oder `white`
- Dunkle Akzent-Sektionen (z. B. CTA-Banner, Footer): `brand-dark` (#243C4C) mit weißem Text

**Interaktive Elemente:**
- Primärer Button: `brand-primary` (#5289AD) Hintergrund, weiß Text
- Primärer Button Hover: `brand-dark` (#243C4C)
- Sekundärer Button: Transparent, `brand-primary` Border + Text
- Links: `brand-primary`, Hover: `brand-dark`
- Focus-Ring: `brand-primary` mit 50% Opacity

**Text auf Hintergründen (Kontrastprüfung WCAG AA):**

| Text | Hintergrund | Kontrast | Status |
|---|---|---|---|
| `brand-dark` auf `surface-bg` | #243C4C auf #F4FCFB | ~10.5:1 | ✅ AA |
| `brand-dark` auf `white` | #243C4C auf #FFFFFF | ~12.2:1 | ✅ AA |
| `white` auf `brand-dark` | #FFFFFF auf #243C4C | ~12.2:1 | ✅ AA |
| `white` auf `brand-primary` | #FFFFFF auf #5289AD | ~3.5:1 | ⚠️ AA Large only |
| `brand-dark` auf `surface-light` | #243C4C auf #ACBCBF | ~4.7:1 | ✅ AA |

> **Hinweis:** Weiß auf `brand-primary` (#5289AD) erfüllt nur AA für großen Text (≥18pt / ≥14pt bold). Für normalen Fließtext auf blauem Hintergrund stattdessen `brand-dark` als Hintergrund mit weißem Text verwenden, oder Button-Text auf mindestens 16px bold setzen.

**Tailwind-Konfiguration (Referenz):**
```js
// tailwind.config.js – colors
colors: {
  brand: {
    primary: '#5289AD',
    dark: '#243C4C',
    muted: '#698696',
  },
  surface: {
    light: '#ACBCBF',
    bg: '#F4FCFB',
  },
}
```

### 5.3 Mobile-first
- Sticky CTA-Bar auf Mobile:
  - „Anrufen"
  - „Termin anfragen"
- Tap-freundliche Buttons (min. 44px)
- Schnell ladende Bilder, responsive Komponenten

### 5.4 Teamdarstellung
- Team-Seite mit Inhaber + Mitarbeiter:innen: persönliche Vorstellung, Qualifikationen, Spezialisierungen
- Trust-Element auf Startseite: Team-Teaser mit Foto + kurzer Vorstellung
- Persönliche, nahbare Darstellung jeder Person (Porträtfoto, Rolle, ggf. Spezialisierung)

---

## 6) Animationskonzept (wundervoll animiert, aber performant)

### 6.1 Prinzipien
- Elegant statt verspielt
- Unterstützt Orientierung und Wertigkeit
- Nicht störend, nicht aufdringlich
- Reduzierte Bewegungen bei `prefers-reduced-motion`
- **Lightweight-First:** Animationen über CSS-native Lösungen (CSS Animations, Scroll-driven Animations) bevorzugen; JS-Bibliothek nur wo notwendig

### 6.2 Empfohlene Animationen
- **Hero Section**
  - sanfter Fade/Slide-In von Headline + CTA
  - leichte Parallax-Tiefe (sparsam, CSS-basiert)
- **Scroll-Reveal**
  - Sektionen/Teaser erscheinen weich (opacity + translateY)
  - Umsetzung über `IntersectionObserver` + CSS-Klassen oder CSS Scroll-driven Animations
- **Cards (Leistungen)**
  - Hover Lift / Soft Shadow / subtle scaling (reine CSS-Transitions)
- **Galerie**
  - smooth transitions / lightbox animation (optional)
- **Microinteractions**
  - Button Hover, Focus States, Form Feedback (CSS-only)
- **Page Transition**
  - kurze, weiche Übergänge (z. B. 150–300ms) via View Transitions API (falls Browser-Support ausreicht) oder CSS
- **Sticky Header**
  - kompakte Header-Transformation beim Scrollen

### 6.3 Animations-Stack-Empfehlung
| Priorität | Lösung | Einsatz |
|---|---|---|
| 1 (bevorzugt) | CSS Animations + Transitions | Hover, Microinteractions, einfache Reveals |
| 2 | IntersectionObserver + CSS-Klassen | Scroll-Reveal Sektionen |
| 3 | View Transitions API | Seitenübergänge (Progressive Enhancement) |
| 4 (nur bei Bedarf) | Motion One / GSAP Lite | Komplexe orchestrierte Sequenzen (Hero) |

### 6.4 Accessibility-Anforderungen bei Animation
- `prefers-reduced-motion` vollständig unterstützen
- Keine essential content nur durch Animation zugänglich
- Keine langen blockierenden Intro-Animationen

---

## 7) Terminanfrage-Widget (zentraler Bestandteil – eigene Lösung)

### 7.1 Widget-Beschreibung
Das Terminanfrage-Widget ist eine **eigenständige, bereits entwickelte Lösung** (`src/app/widget/page.tsx`), die unter `/widget` als eigenständige Seite verfügbar ist. Es handelt sich um ein 4-Schritt-Terminanfrage-Formular:

| Schritt | Funktion |
|---|---|
| 1 | Datumsauswahl (nächste 28 Tage) |
| 2 | Zeitslot-Auswahl (aus freien Terminen via `/api/slots`) |
| 3 | Formular: Name, E-Mail, Telefon, Dauer, Datenschutz-Einwilligung |
| 4 | Bestätigung |

**API-Endpunkte:**
- `/api/slots` – Abfrage freier Termine (Rate-Limit: 60 Anfragen/min pro IP)
- `/api/requests` – Terminanfrage absenden (Rate-Limit: 10 Anfragen/Stunde pro IP)

Das Widget ist bereits responsive und auf `max-w-lg` (512px) begrenzt.

### 7.2 Einbindungsvarianten (Empfehlung: iFrame)

#### Variante A: iFrame-Einbettung (empfohlen)
Einfachste und stabilste Lösung. Keine Änderungen am Widget nötig.

```html
<iframe
  src="https://[widget-domain]/widget"
  width="100%"
  height="700"
  frameborder="0"
  style="border: none; max-width: 512px;"
></iframe>
```

- Funktioniert sofort, keine Code-Anpassungen nötig
- Widget ist bereits responsive
- Klare Trennung zwischen Praxis-Website und Widget-App

#### Variante B: Direkter Link / Button
Öffnet das Widget in einem neuen Tab – einfachste Umsetzung.

```html
<a href="https://[widget-domain]/widget" target="_blank">
  Termin vereinbaren
</a>
```

- Geeignet als Fallback oder zusätzlicher CTA
- Kein iFrame, kein Laderisiko

#### Variante C: Modal/Popup
Widget öffnet sich als Overlay auf der aktuellen Seite.

```html
<button onclick="document.getElementById('booking-modal').style.display='flex'">
  Termin vereinbaren
</button>

<div id="booking-modal" style="display:none; position:fixed; inset:0;
     background:rgba(0,0,0,0.5); align-items:center; justify-content:center; z-index:9999;">
  <div style="background:white; border-radius:12px; width:90%; max-width:512px;
       height:80vh; position:relative;">
    <button onclick="this.parentElement.parentElement.style.display='none'"
            style="position:absolute; top:8px; right:12px; font-size:24px; cursor:pointer;">
      &times;
    </button>
    <iframe src="https://[widget-domain]/widget"
            width="100%" height="100%" frameborder="0"
            style="border:none; border-radius:12px;">
    </iframe>
  </div>
</div>
```

- Gute UX: Patient bleibt auf der Seite
- Höherer Implementierungsaufwand als Variante A

### 7.3 Empfohlene Integrationsstrategie

| Ort | Variante | Beschreibung |
|---|---|---|
| `/termin-anfragen` (eigene Seite) | **iFrame (A)** | Vollständige Einbettung mit Kontextinfos |
| Startseite (Teaser-Bereich) | **Button → Link (B) oder Modal (C)** | CTA „Termin anfragen" mit Link zur Terminseite oder Modal |
| Sticky Mobile CTA-Bar | **Link (B)** | Direktlink zur `/termin-anfragen`-Seite |
| Navbar CTA | **Link (B)** | Direktlink zur `/termin-anfragen`-Seite |

### 7.4 Technische Integrationspunkte

- **iFrame-Header prüfen:** `X-Frame-Options` / `Content-Security-Policy` (`frame-ancestors`) auf dem Widget-Server müssen Einbettung von der Praxis-Domain erlauben
- **Responsive Höhe:** `min-height: 700px` als Ausgangswert; idealerweise dynamische Anpassung via `postMessage` zwischen Widget und Eltern-Seite
- **Lazy Loading:** iFrame erst laden, wenn Seite/Modal geöffnet wird (Performance)
- **Fehlerfall:** Fallback-Button „Terminportal direkt öffnen" (Variante B) anzeigen, falls iFrame nicht lädt
- **Datenschutz:** Wenn Widget auf eigener Infrastruktur / gleicher Domain-Familie läuft → kein Drittanbieter-Consent nötig. Falls separate Domain: Datenschutzerklärung entsprechend ergänzen

### 7.5 UX-Empfehlung für Terminseite (`/termin-anfragen`)
- Oberhalb des Widgets:
  - Kurze Erklärung („Wählen Sie Ihren Wunschtermin – wir melden uns zur Bestätigung")
  - Telefonnummer für akute Anliegen
  - Hinweis zu Rezept / Unterlagen (falls relevant)
- Unterhalb:
  - FAQ (z. B. „Was muss ich mitbringen?", „Kann ich den Termin absagen?", „Wie lange dauert ein Termin?")

---

## 8) Content-Anforderungen

### 8.1 Zu übernehmende Inhalte (mit redaktioneller Überarbeitung)
- **Team** (aktuell u. a. Stefan, Stefanie, Angelika): Vorstellungen, Qualifikationen, Spezialisierungen
- Leistungen (aktuell u. a. Dorn-Therapie, Krankengymnastik, Kinesio Tape)
- Praxisbilder / Galerie
- Kontakt- und Öffnungszeiten (auf Konsistenz prüfen)

### 8.2 Content-Workflow

| Content | Quelle | Bearbeitung | Freigabe |
|---|---|---|---|
| Leistungstexte | Bestehende Website | Redaktionelle Überarbeitung | Inhaber |
| Team-Texte | Bestehende Website + ggf. Aktualisierung | Überarbeitung | Inhaber |
| Praxisphilosophie / Werte | Neuerstellung (Interview/Briefing) | Texterstellung | Inhaber |
| Praxis-/Behandlungsbilder | Vorhandene Assets + ggf. neue Fotos | Bildbearbeitung/Optimierung | Inhaber |
| Rechtstexte | Bestehend, überarbeitet | Anwaltliche Prüfung empfohlen | Inhaber |
| FAQ | Neuerstellung | Texterstellung | Inhaber |

### 8.3 Tonalität
- Persönlich, kompetent, nahbar
- Lokal verwurzelt (Leichlingen / Witzhelden)

### 8.4 Medien
- **Vorhandene Assets nutzen:** Bestehende Praxis- und Teamfotos prüfen und optimieren
- **Ergänzende Fotos empfohlen (falls Lücken):**
  - Praxisräume / Empfang / Behandlungsatmosphäre
  - Teamfotos (professionell, freundlich)
- **Fallback:** Sollten zum Go-Live einzelne Fotos fehlen, werden vorhandene Assets mit dezenten Platzhaltern ergänzt (kein Generic-Stockfoto)
- Bildformate: WebP/AVIF + responsive sizes

---

## 9) Technische Spezifikation

### 9.1 Stack (Empfehlung: Lightweight + Performant)

**Empfohlener Stack:**
- **Astro** (Static Site Generator mit Island Architecture)
  - Liefert standardmäßig 0 KB JavaScript an den Client
  - Interaktive Inseln (Kalender-Embed, Galerie) nur dort, wo nötig
  - Hervorragende Core Web Vitals out-of-the-box
  - SSG für alle statischen Seiten, SSR nur falls für Kalender-Integration nötig
- **TypeScript**
- **Tailwind CSS**
- **Animationen:** CSS-native + minimale JS-Bibliothek (Motion One ~3.5 KB oder vanilla IntersectionObserver)
- **Kalender-App:** Cal.com (Self-Hosted, Docker) oder Easy!Appointments

**Warum Astro statt Next.js:**
| Kriterium | Astro | Next.js |
|---|---|---|
| JS-Bundle (statische Seiten) | 0 KB (kein JS default) | React Runtime (~40 KB+) |
| Build-Komplexität | Gering | Mittel |
| Wartungsaufwand | Gering (wenige Dependencies) | Mittel (React-Ökosystem) |
| Performance (statischer Content) | Exzellent | Sehr gut |
| Animationen | CSS + kleine Libs | Framer Motion (~30 KB) |
| Interaktive Inseln | Opt-in (Islands) | Alles React |
| SSR für Kalender | Möglich (Astro SSR) | Nativ |

**Für eine ~6–8 Seiten umfassende Praxis-Website mit primär statischem Content ist Astro der passendere, leichtgewichtigere Stack.**

### 9.2 Architektur
- SSG für alle Content-Seiten (Start, Leistungen, Praxis, Team, Kontakt)
- Terminseite: iFrame-Einbettung des externen Widgets (keine lokale Logik nötig)
- Statische Assets via Nginx
- Keine Datenbank auf der Frontend-Seite nötig (Content in Markdown/MDX oder JSON)
- Kalender-Widget läuft als separater Service auf eigener Infrastruktur

### 9.3 Content-Management (ohne klassisches CMS)
Da die Website selten geändert wird:
- Content in **Markdown/MDX-Dateien** im Repository
- Änderungen über Git (direkt oder via einfaches UI wie Tina CMS / Decap CMS als optionale Schicht)
- Kein Strapi/Headless CMS nötig → weniger Infrastruktur, weniger Wartung
- **Alternative falls CMS gewünscht:** Decap CMS (ehemals Netlify CMS, Open Source, Git-basiert, kein eigener Server nötig)

### 9.4 Performance-Ziele
- Core Web Vitals optimiert
- LCP < 2.5s (Ziel auf Mobil)
- CLS minimal
- Lazy Loading für Bilder/Galerien/Kalender-Embed
- Font-Optimierung (lokales Hosting)
- **Ziel: Lighthouse Score ≥ 95 auf allen Seiten**

---

## 10) SEO-Spezifikation (lokale Sichtbarkeit)

### 10.1 Technisches SEO
- Saubere URL-Struktur
- **301-Redirects** für alle geänderten URLs (siehe 4.4)
- XML Sitemap
- robots.txt
- Canonicals
- Open Graph / Social Meta
- Schema.org Markup:
  - `Physiotherapy` / `MedicalBusiness` (passendes LocalBusiness-Schema)
  - Öffnungszeiten
  - Adresse / Telefon

### 10.2 Onpage SEO
- Titel/Meta je Seite
- H1/H2 Struktur sauber
- Lokale Keywords:
  - Physiotherapie Leichlingen
  - Krankengymnastik Witzhelden
  - Dorntherapie Leichlingen (falls relevant)
- Leistungsdetailseiten zur organischen Sichtbarkeit (empfohlen)

### 10.3 Redirect-Strategie
- Vollständiges Crawling der alten Website vor Go-Live (Screaming Frog o. Ä.)
- 301-Redirect-Map für alle indexierten URLs
- Monitoring der Search Console nach Go-Live auf 404-Fehler

---

## 11) Datenschutz / Recht / Compliance

### 11.1 Pflichtseiten
- Impressum
- Datenschutz
- Cookie-Richtlinie / Consent Management
- Barrierefreiheitserklärung (empfohlen; BFSG-Konformität prüfen)

### 11.2 Consent / Drittanbieter
- **Kalender-Widget:** Datenschutzrechtliche Einordnung hängt vom Hosting des Widgets ab:
  - Gleiche Domain / eigene Infrastruktur → kein Drittanbieter-Consent nötig
  - Separate Domain → in Datenschutzerklärung aufnehmen; ggf. Consent oder 2-Klick-Lösung vor iFrame-Laden
- Cookie-Banner sauber konfiguriert (Kategorien + Dienste)
- **Empfehlung Cookie-Consent:** Klaro (Open Source) oder cookieconsent (Open Source)

### 11.3 Datenkonsistenz-Prüfung (wichtig)
Aktuelle Rechtstexte zeigen potenziell inkonsistente Kontaktdaten (Telefon/E-Mail). Diese müssen vor Relaunch bereinigt und idealerweise anwaltlich geprüft werden.

---

## 12) Barrierefreiheit (WCAG 2.1 AA als Zielstandard)

- Semantisches HTML
- Tastaturbedienbarkeit
- Fokuszustände sichtbar
- Alt-Texte für relevante Bilder
- Kontraste ausreichend (Mindestkontrast 4.5:1 für Text, 3:1 für große Texte)
- Formulare mit Labels/Fehlermeldungen
- `prefers-reduced-motion` berücksichtigt
- Keine Textinfos ausschließlich in Bildern
- **Prüfung:** Axe/Lighthouse Accessibility Audit vor Go-Live, Score ≥ 90

---

## 13) Deployment-Spezifikation (Hetzner Server / Ubuntu)

### 13.1 Zielumgebung
- Hetzner Cloud / Dedicated Server
- Ubuntu LTS (z. B. 24.04 LTS)
- Domain + DNS vorhanden (Domain bleibt: therapiezentrum-ziesemer.de)
- SSL via Let's Encrypt

### 13.2 Empfohlene Setup-Architektur
- **Nginx** als Webserver für statische Astro-Site
- Astro-Build-Output: statische Dateien direkt via Nginx ausgeliefert
- Kein Node.js-Runtime auf dem Server nötig (nur Build-Step in CI/CD)
- Kalender-Widget läuft auf separater Infrastruktur (keine Abhängigkeit auf dem Praxis-Server)

### 13.3 Deployment-Pipeline
- Git Repository (GitHub/GitLab)
- Staging + Production
- CI/CD (GitHub Actions / GitLab CI):
  - Astro Build
  - Lint / Lighthouse CI
  - Deploy statische Files via rsync/SSH
- Rollback-Strategie (Git-basiert, vorheriges Build wiederherstellen)
- Backups (Konfiguration, ggf. Formular-Daten)

### 13.4 Sicherheit / Betrieb
- SSH Key only
- Firewall (UFW)
- Fail2ban
- Regelmäßige Security Updates (unattended-upgrades)
- Uptime Monitoring (z. B. Uptime Kuma – Open Source, Self-Hosted)
- Log Rotation

---

## 14) Erfolgsmessung / KPIs

### 14.1 Primäre KPIs (Conversion)
| KPI | Messmethode | Zielwert |
|---|---|---|
| Terminanfragen über Widget | Widget-API (`/api/requests`) / Analytics Events | Baseline nach 1 Monat, dann +20% in 3 Monaten |
| Klicks auf „Jetzt anrufen" (Mobile) | Event-Tracking (tel:-Links) | Messbar ab Go-Live |
| Conversion Rate Startseite → Terminseite | Analytics Funnel | > 15% |
| Absprungrate Terminseite | Analytics | < 40% |

### 14.2 Technische KPIs (Performance & SEO)
| KPI | Messmethode | Zielwert |
|---|---|---|
| Lighthouse Performance Score | Lighthouse CI | ≥ 95 |
| LCP (Largest Contentful Paint) | Core Web Vitals (CrUX / Analytics) | < 2.5s mobil |
| CLS (Cumulative Layout Shift) | Core Web Vitals | < 0.1 |
| Lighthouse Accessibility Score | Lighthouse CI | ≥ 90 |
| Lighthouse SEO Score | Lighthouse CI | 100 |

### 14.3 SEO-/Sichtbarkeits-KPIs
| KPI | Messmethode | Zielwert |
|---|---|---|
| Organische Impressionen (lokal) | Google Search Console | Baseline + 30% in 6 Monaten |
| Ranking „Physiotherapie Leichlingen" | Search Console / Rank Tracker | Top 5 |
| 404-Fehler nach Relaunch | Search Console | 0 nach 4 Wochen |
| Indexierte Seiten | Search Console | Alle relevanten Seiten indexiert |

### 14.4 Analytics-Empfehlung
- **Plausible Analytics** (Open Source, Self-Hosted oder Cloud) oder **Matomo** (Open Source, Self-Hosted)
- Beide DSGVO-konform einsetzbar (kein Consent nötig bei cookielosem Tracking)
- Event-Tracking für: Terminbuchungen, tel:-Klicks, CTA-Klicks, Scroll-Tiefe auf Startseite

---

## 15) Qualitätssicherung / Abnahmekriterien

### 15.1 Funktional
- Navigation funktioniert auf Desktop/Mobile
- Terminanfrage-Widget lädt zuverlässig im iFrame
- Fallback bei Widget-Fehler vorhanden (Direktlink)
- Kontaktinformationen korrekt und konsistent über alle Seiten
- Rechtstexte erreichbar
- Cookie-Banner funktioniert korrekt
- 301-Redirects greifen für alle alten URLs
- tel:-Links funktionieren auf Mobilgeräten

### 15.2 Nicht-funktional
- Lighthouse Performance ≥ 95
- Lighthouse Accessibility ≥ 90
- Keine Layout-Sprünge (CLS < 0.1)
- Animationen flüssig (60fps-Ziel)
- `prefers-reduced-motion` korrekt umgesetzt
- SEO-Metadaten + Schema.org vollständig
- Alle Bilder mit Alt-Text

### 15.3 Browser-Support
- Aktuelle Versionen von:
  - Chrome
  - Safari (iOS)
  - Firefox
  - Edge

---

## 16) Projektphasen (empfohlener Ablauf)

1. **Discovery / Kickoff**
   - Ziele, Inhalte, Widget-Domain klären, vorhandene Assets sichten
2. **UX / Wireframes**
   - Struktur & Conversion-Flows
3. **UI Design + Motion Konzept**
4. **Technische Umsetzung (Astro + Widget-Integration)**
5. **Content-Migration / Redaktion** (Team-Texte, Leistungen aktualisieren)
6. **QA + Datenschutzprüfung + Redirect-Test**
7. **Deployment auf Hetzner (Staging → Live)**
8. **Go-Live, Redirect-Monitoring, Search Console Prüfung**
9. **KPI-Review nach 4 Wochen / 3 Monaten**

---

## 17) Offene Punkte / Inputs vom Auftraggeber

- **Widget-Domain / URL** für iFrame-Einbettung (finale Produktions-URL des Widgets)
- **iFrame-Header-Konfiguration** auf Widget-Server (`X-Frame-Options` / `frame-ancestors` für Praxis-Domain freigeben)
- Zugangsdaten Domain/DNS/Hetzner
- Finales Branding (Farben/Logo/Schriften)
- **Sichtung vorhandener Assets** (Praxis-/Teamfotos) → Lücken identifizieren
- Finaler Leistungskatalog
- Aktualisierte Team-Informationen (Personen, Rollen, Qualifikationen)
- Final geprüfte Rechtstexte (Impressum/Datenschutz/Cookie)
- Tracking/Analytics: Plausible oder Matomo?
