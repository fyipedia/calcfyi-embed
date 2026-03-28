# calcfyi-embed

[![npm](https://img.shields.io/npm/v/calcfyi-embed)](https://www.npmjs.com/package/calcfyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/calcfyi-embed)

Embed **CalcFYI** widgets on any website. **8 widget types**, zero dependencies, Shadow DOM isolation, 4 themes, 2 styles. Live data from [CalcFYI](https://calcfyi.com).

Every widget includes a "Powered by CalcFYI" backlink.

> **Try the interactive widget builder at [widget.calcfyi.com](https://widget.calcfyi.com)**

## Quick Start

```html
<div data-calcfyi="entity" data-slug="compound-interest" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/calcfyi-embed@1/dist/embed.min.js"></script>
```

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-calcfyi="entity" data-slug="..."></div>` | Entity detail card — calculator, country, role, or game |
| `glossary` | `<div data-calcfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-calcfyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `search` | `<div data-calcfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-calcfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `faq` | `<div data-calcfyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `formula-card` | `<div data-calcfyi="formula-card" data-slug="..."></div>` | Formula display with variables list and explanation |
| `formula-badge` | `<div data-calcfyi="formula-badge" data-slug="..."></div>` | Inline formula text pill |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-calcfyi` | entity, glossary, guide, search, compare, faq, formula-card, formula-badge | required | Widget type |
| `data-slug` | e.g. "compound-interest" | — | Entity slug |
| `data-theme` | light, dark, sepia, auto | light | Visual theme |
| `data-style-variant` | modern, clean | modern | Widget style |
| `data-size` | default, compact, large | default | Size |

## Themes & Styles

4 themes (light, dark, sepia, auto) × 2 styles (modern, clean) = 8 visual combinations.

## CDN

```html
<script src="https://cdn.jsdelivr.net/npm/calcfyi-embed@1/dist/embed.min.js"></script>
```

## Guide FYI Family

Part of [FYIPedia](https://fyipedia.com). Guide FYI covers calculators, salary, education, and board games. Hub: [reffyi.com](https://reffyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| **CalcFYI** | [calcfyi.com](https://calcfyi.com) | 200+ calculators, 50 formula cards, financial/health/math | **[npm](https://www.npmjs.com/package/calcfyi-embed)** |
| SalaryFYI | [salaryfyi.com](https://salaryfyi.com) | 36 countries, salary data, tax calculators, 26 rate configs | [npm](https://www.npmjs.com/package/salaryfyi-embed) |
| BoardGameFYI | [boardgamefyi.com](https://boardgamefyi.com) | 10,552 board games, 8-axis DNA profiles, BGG integration | [npm](https://www.npmjs.com/package/boardgamefyi-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
