# Legal Compliance Fixes Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all identified legal compliance issues in Datenschutzerklärung and Impressum for a German Physiotherapiepraxis (Freiberuf).

**Architecture:** Pure content edits to two existing Astro pages. No new files, no logic changes, no component modifications. All changes are static HTML/text within existing `<div class="prose">` blocks.

**Tech Stack:** Astro 5 (.astro pages with inline HTML)

**Important:** Execute all tasks in numerical order. Multiple tasks modify `datenschutz.astro` — line numbers reference the original file state. When editing, use `old_string` content matching (not line numbers) to locate insertion/replacement points, since earlier edits shift line numbers.

---

## Context

The site belongs to a Physiotherapiepraxis (Freiberuf, umsatzsteuerbefreit nach § 4 Nr. 14 UStG). Key facts for the implementer:

- **Hosting:** Hetzner Cloud Server in Germany, AVV with Hetzner exists
- **Appointment widget:** Self-hosted on same Hetzner server at `kalender.therapiezentrum-ziesemer.de` (first-party, no third-party provider)
- **Contact form data retention:** 6 months after handling
- **Widget data retention:** Does not feed into patient management (NOVENTI Ora). Same 6-month retention as contact form.
- **Server logs:** Deleted after 7 days (already correctly stated)
- **Cookie consent:** localStorage only, no tracking cookies (already correctly stated)

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/pages/datenschutz.astro` | Modify | Remove DRAFT disclaimer, add retention periods, add Hetzner AVV mention, refine widget section |
| `src/pages/impressum.astro` | Modify | Add § 18 MStV responsible person, add USt-Befreiung notice |

---

## Chunk 1: All Legal Fixes

### Task 1: Remove DRAFT disclaimer from Datenschutzerklärung

**Files:**
- Modify: `src/pages/datenschutz.astro` (end of file, lines 126-130 in original)

- [ ] **Step 1: Remove the DRAFT disclaimer block**

Remove this exact block (use as `old_string`, replace with empty string):
```html
        <hr />
        <p class="text-sm">
          <em>Hinweis: Diese Datenschutzerklärung ist ein Entwurf und sollte vor Veröffentlichung
          anwaltlich geprüft werden.</em>
        </p>
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds, no errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/datenschutz.astro
git commit -m "fix(legal): remove DRAFT disclaimer from Datenschutzerklärung"
```

---

### Task 2: Add data retention periods to Datenschutzerklärung

**Files:**
- Modify: `src/pages/datenschutz.astro` — Section 4 (Kontaktformular) and Section 5 (Terminanfrage-Widget)

**Important:** Edit Section 5 first (bottom-up), then Section 4, so that line shifts from the first edit don't affect the second.

- [ ] **Step 1: Add retention period to Terminanfrage-Widget section (Section 5)**

Find this `old_string` (the Rechtsgrundlage paragraph in Section 5):
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
        </p>

        <h2>6. Google Maps</h2>
```

Replace with:
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
        </p>
        <p>
          Ihre Terminanfrage-Daten werden spätestens 6 Monate nach Abschluss der Terminierung
          gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          Die Daten werden nicht in unser Patientenverwaltungssystem übernommen.
        </p>

        <h2>6. Google Maps</h2>
```

- [ ] **Step 2: Add retention period to Kontaktformular section (Section 4)**

Find this `old_string` (the Rechtsgrundlage paragraph in Section 4):
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1
          lit. a DSGVO (Einwilligung).
        </p>

        <h2>5. Terminanfrage-Widget</h2>
```

Replace with:
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1
          lit. a DSGVO (Einwilligung).
        </p>
        <p>
          Ihre Daten aus dem Kontaktformular werden spätestens 6 Monate nach abschließender
          Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>

        <h2>5. Terminanfrage-Widget</h2>
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/pages/datenschutz.astro
git commit -m "fix(legal): add data retention periods to Datenschutzerklärung"
```

---

### Task 3: Add Hetzner AVV mention to Datenschutzerklärung

**Files:**
- Modify: `src/pages/datenschutz.astro` — Section 2 (Hosting)

- [ ] **Step 1: Add AVV disclosure after the existing hosting paragraphs**

Find this `old_string`:
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren
          Bereitstellung der Website).
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
```

Replace with:
```html
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren
          Bereitstellung der Website).
        </p>
        <p>
          Mit dem Hosting-Anbieter haben wir einen Auftragsverarbeitungsvertrag (AVV) gemäß
          Art. 28 DSGVO abgeschlossen, der den datenschutzkonformen Umgang mit Ihren Daten
          sicherstellt.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/datenschutz.astro
git commit -m "fix(legal): add Hetzner AVV disclosure to hosting section"
```

---

### Task 4: Clarify widget hosting in Datenschutzerklärung

**Files:**
- Modify: `src/pages/datenschutz.astro` — Section 5 (Terminanfrage-Widget)

- [ ] **Step 1: Replace the existing widget description paragraph**

Find this `old_string`:
```html
        <p>
          Für die Online-Terminanfrage nutzen wir ein eigenes Widget, das auf unserer eigenen
          Infrastruktur betrieben wird. Bei der Terminanfrage werden Ihre eingegebenen Daten
          (Name, E-Mail, Telefonnummer, gewünschter Termin) zur Bearbeitung Ihrer Anfrage
          gespeichert.
        </p>
```

Replace with:
```html
        <p>
          Für die Online-Terminanfrage nutzen wir ein eigenes Widget, das auf unserem eigenen
          Server in Deutschland (Hetzner Online GmbH) betrieben wird. Es werden keine Daten
          an Drittanbieter übermittelt. Bei der Terminanfrage werden Ihre eingegebenen Daten
          (Name, E-Mail, Telefonnummer, gewünschter Termin) zur Bearbeitung Ihrer Anfrage
          gespeichert.
        </p>
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/pages/datenschutz.astro
git commit -m "fix(legal): clarify widget hosting location in Datenschutzerklärung"
```

---

### Task 5: Add § 18 MStV and USt-Befreiung to Impressum

**Files:**
- Modify: `src/pages/impressum.astro` — insert before EU-Streitschlichtung section

- [ ] **Step 1: Add § 18 MStV section and USt-Befreiung notice**

Find this `old_string`:
```html
        <h2>EU-Streitschlichtung</h2>
```

Replace with:
```html
        <h2>Umsatzsteuer</h2>
        <p>
          Umsatzsteuerbefreit gemäß § 4 Nr. 14 UStG (Heilbehandlungen im Bereich der Humanmedizin).
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          Stefan Ziesemer<br />
          {siteConfig.address.street}<br />
          {siteConfig.address.zip} {siteConfig.address.city}
        </p>

        <h2>EU-Streitschlichtung</h2>
```

Note: Use the `{siteConfig.address.*}` template expressions — this is an Astro file, not plain HTML.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: Build succeeds, 18 pages generated.

- [ ] **Step 3: Commit**

```bash
git add src/pages/impressum.astro
git commit -m "fix(legal): add § 18 MStV and USt-Befreiung to Impressum"
```

---

### Task 6: Final verification

- [ ] **Step 1: Full build check**

Run: `npm run build`
Expected: Build succeeds with 18 pages, zero errors.

- [ ] **Step 2: Visual spot-check**

Run: `npm run preview`
Manually verify:
- `/datenschutz` — no DRAFT notice, retention periods visible in sections 4 and 5, AVV mentioned in hosting section, widget section updated with Germany/Hetzner details
- `/impressum` — Umsatzsteuer section visible, § 18 MStV section visible, both between Berufsbezeichnung and EU-Streitschlichtung
