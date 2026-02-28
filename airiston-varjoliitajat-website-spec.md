# Website Specification: Airiston Varjoliitäjät Ry

## Project Overview

Single-page promotional website for a paragliding club in the Turku region, Finland. The goal is to inform genuinely motivated prospective students about the PP2 training course — not to attract casual interest. Tone is neutral, informative, and matter-of-fact.

---

## Technical Requirements

### Stack
- Static single-page HTML/CSS/JS (no framework required)
- All styles in `globals.css` using CSS custom properties
- Email notification via form submission (e.g. Formspree, Netlify Forms, or similar)

### CSS Variables (globals.css)
```css
:root {
  --color-brand: #30B083;
  --color-bg: #ffffff;
  --color-card: #f5f5f5;
  --color-text: #1a1a1a;
  --color-text-muted: #666666;
  --color-subheading: #30B083;
  --font-primary: 'Satoshi', 'Red Hat Display', sans-serif;
}
```

> **Font note:** Satoshi is available via [Fontshare](https://www.fontshare.com/fonts/satoshi) (free, self-hostable). Add the `@font-face` declarations in `globals.css`. Red Hat Display is the fallback, available on Google Fonts.

### Design System
- **Buttons:** Square corners (`border-radius: 0`), brand color background, white text
- **Cards:** Light grey (`--color-card`), square corners, no border, subtle shadow optional
- **Subheadings / preheader labels:** Brand color (`--color-subheading`)
- **Body text:** Dark neutral
- **Animations:** Fade-up on scroll using `IntersectionObserver` (CSS class toggling, no library needed)

---

## Navigation

Fixed top navigation bar with anchor links.

**Nav items:**
- Kurssi
- Kouluttajat
- Ilmoittaudu *(as a square CTA button, brand color)*

> Pricing and FAQ are on-page sections but not in the nav.

---

## Page Sections

### 1. Hero

- Full-width, full-height background image (placeholder: aerial paragliding shot)
- Overlay for text legibility
- Club name as large heading
- Short tagline (see copy below)
- CTA button: "Ilmoittaudu kurssille" → scrolls to form

---

### 2. Kurssi *(Course)*

Anchor: `#kurssi`

Covers what the course is, where, how it works, and what's included. Split into readable subsections or cards:

**Koulutusohjelma**
- Harjoittelu noudattaa Suomen Para Pro -ohjelmaa tasoilla PP1 ja PP2
- Kurssi tähtää PP2-lisenssin suorittamiseen (itsenäinen lentäjä)
- Kaikki lentäminen tapahtuu hinaamalla Oripään lentokentällä

**Aikataulu ja kesto**
- Kursseja järjestetään keväisin (toukokuu →) ja syksyisin (syyskuu →)
- Kesto 4–8 viikkoa riippuen säästä ja opiskelijan saatavuudesta

**Mitä sisältyy**
- Hinta: **1 950 €**
- Sisältää Suomen Ilmailuliiton jäsenyyden
- Vähintään 40 korkeaa lentoa vähintään 7 päivän aikana (opetussuunnitelman vähimmäisvaatimukset)
- Kaikki varusteet koulun puolesta — ei piilokustannuksia

**Varusteet**

> *(FAQ-osiossa käsitellään tarkemmin)*: Älä hanki omia varusteitasi ennen kurssia. Kurssin jälkeen kouluttajat auttavat jokaista oppilasta löytämään omaan lentämiseen sopivat varusteet.

---

### 3. Kouluttajat *(Instructors)*

Anchor: `#kouluttajat`

Two instructor cards side by side (stack on mobile).

**Card layout:**
- Placeholder photo (square or portrait crop)
- Name (placeholder)
- Role label (brand color)
- 2–3 sentence bio

---

**Instructor 1 — Pääkouluttaja**

*[Nimi placeholder]*

Yli 20 vuoden kokemus riippuliidosta. Kuuluu Suomen kilpailulentämisen kärkeen ja on yksi maan menestyneimmistä kilpailulentäjistä. Toimii myös kaupallisena tandemlentäjänä — jos haluat kokea riippuliitoa ennen kurssia, [tandemlennot ovat mahdollisia erikseen].

---

**Instructor 2 — Tekninen kouluttaja**

*[Nimi placeholder]*

Yli 20 vuoden kokemus riippuliidosta. Aktiivinen kilpailulentäjä ja kokenut kouluttaja.

---

### 4. Hinta *(Pricing)*

Simple section, no nav link needed.

Single price callout card:

> **1 950 €**
> Sisältää kaiken — varusteet, Ilmailuliiton jäsenyyden ja vähintään 40 korkeaa lentoa. Ei piilokustannuksia.

---

### 5. UKK *(FAQ)*

No nav link. Accordion or plain Q&A layout.

**Q: Mitä kurssille valmistautuminen vaatii?**
A: Ei aiempaa kokemusta tarvita. Hyvä fyysinen peruskunto on hyödyksi. Tarkemmat valmistautumisohjeet käydään läpi vahvistuspuhelussa ennen kurssin alkua.

**Q: Kuinka kauan kurssi kestää?**
A: Kurssi kestää 4–8 viikkoa. Kesto riippuu säästä ja siitä, kuinka usein opiskelija pääsee paikalle. Lentopäivät sovitaan joustavasti.

**Q: Voinko ostaa omat varusteet etukäteen?**
A: Emme suosittele. Harjoittelussa käytetään koulun varusteita. Kurssin jälkeen kouluttajat auttavat sinua valitsemaan juuri sinulle sopivat varusteet — valinnat riippuvat paljon siitä, millaiseksi lentäjäksi kehityt kurssin aikana.

**Q: Voinko lentää Suomen ulkopuolella PP2-lisenssillä?**
A: Suomen Para Pro PP2 -lisenssi on kansallinen lisenssi. Kansainväliseen lentämiseen tarvitaan IPPI-kortti, jonka saa PP2-suorituksen perusteella. Käytännöt vaihtelevat maittain — tarkista kohdemaan vaatimukset etukäteen.

**Q: Voinko lentää moottorivaljain (paramotor) PP2-lisenssillä?**
A: Ei. Paramotorilentäminen on oma lajinsa, johon tarvitaan erillinen koulutus ja lupa. PP2-lisenssi kattaa ainoastaan vapaariippuliitämisen.

---

### 6. Ilmoittaudu *(Interest Form)*

Anchor: `#ilmoittaudu`

Light grey card container, square corners.

**Heading:** Ilmoittaudu kurssille

**Subheading / intro text:**
> Täytä alla oleva lomake ilmoittaaksesi kiinnostuksestasi. Otamme sinuun yhteyttä, kun kurssin ajankohta ja opiskelijapaikat on vahvistettu.

**Form fields:**
| Field | Type | Required |
|---|---|---|
| Nimi | Text | Yes |
| Sähköpostiosoite | Email | Yes |
| Puhelinnumero | Tel | Yes |
| Toivottu ajankohta | Select: Kevät / Syksy / Kumpi sopii | Yes |
| Motivaatiokirje | Textarea — "Kerro lyhyesti aiemmasta kokemuksestasi ja tavoitteistasi lajin suhteen" | Yes |

**Submit button:** "Lähetä ilmoittautuminen" (brand color, square)

**Confirmation message (shown after submit):**
> Kiitos kiinnostuksestasi! Otamme sinuun yhteyttä, kun kurssin tiedot ovat vahvistuneet ja opiskelijapaikkojen varaaminen avataan.

**Form submission target:** Placeholder email — `info@[domain]` *(domain TBD)*

---

## Content Copy

### Hero Tagline (Finnish)
> Suomen Para Pro PP2 -kurssi Turun seudulla.

Or slightly longer:
> Koulutus itsenäiseksi riippuliitolentäjäksi Turun seudulla — Para Pro PP2.

*(Keep it factual. No lifestyle language.)*

### About / intro blurb (can sit below hero or in its own short section)
> Airiston Varjoliitäjät Ry järjestää riippuliidon perusopetusta Turun seudulla. Koulutus noudattaa Suomen Para Pro -ohjelmaa ja tähtää PP2-tason itsenäisen lentäjän lisenssin suorittamiseen. Kaikki lentäminen tapahtuu hinaamalla Oripään lentokentällä.

---

## Process After Form Submission

After submitting the form, the applicant will be contacted for a confirmation call with the instructors before the course begins. No formal interview — it's a conversation to confirm mutual fit and answer any remaining questions. This should be described briefly near the form or in the FAQ.

**Suggested addition to form intro or FAQ:**
> Vahvistettuasi paikkasi sovimme lyhyen puhelun kouluttajien kanssa ennen kurssin alkua.

---

## Images

All images are placeholders — to be replaced before launch.

| Location | Placeholder suggestion |
|---|---|
| Hero background | Full-width aerial paragliding shot (Unsplash: "paragliding aerial") |
| Instructor 1 photo | Portrait placeholder |
| Instructor 2 photo | Portrait placeholder |
| Optional course section | Towing launch or landing field shot |

---

## Animations

Fade-up on scroll for: section headings, cards, form container, FAQ items.

Implementation: `IntersectionObserver` adds `.visible` class, CSS handles `opacity` + `translateY` transition. No external animation library needed.

---

## File Structure

```
/
├── index.html
├── globals.css
├── script.js          ← scroll animations + form handling
└── assets/
    └── images/
        ├── hero.jpg
        ├── instructor-1.jpg
        └── instructor-2.jpg
```

---

## Open Items

- [ ] Final instructor names
- [ ] Instructor photos
- [ ] Contact email domain confirmed
- [ ] Tandem flight booking link (if Pääkouluttaja wants to include it)
- [ ] Form backend service selected (Formspree / Netlify Forms / custom)
- [ ] Para Pro program — decide whether to link to Ilmailuliitto externally or just name it
