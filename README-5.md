# AURELIA — Fine Jewellery Website

A static, single-page luxury jewellery brand site. No backend, no build step,
no dependencies beyond Google Fonts — just `index.html`, `style.css` and
`script.js`, ready to deploy on GitHub Pages as-is.

## Files

```
index.html   All markup and page structure
style.css    Full design system and every component style
script.js    Product data + all interactivity (cart, wishlist, search, etc.)
README.md    This file
```

That's it — no `images/` folder. Every visual (product panels, category
tiles, the lookbook, the hero motif) is built with CSS gradients, a subtle
grain texture and small inline SVG line-icons, so the site has zero external
image dependencies and loads fast on any connection.

## Running it locally

Easiest option — just open `index.html` directly in a browser by
double-clicking it. Every feature (cart, wishlist, search, filters, modals)
works straight from the file system.

If you'd rather serve it properly (recommended for testing, closer to how
GitHub Pages will serve it):

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css` and `script.js` to the repo root.
3. Go to **Settings → Pages**, set the source to your default branch, root
   folder.
4. GitHub will publish a live URL within a minute or two.

No build step, no `npm install`, nothing else to configure.

## Editing product data

Everything a client will actually want to change lives in **one place**:
the `PRODUCTS` array near the top of `script.js`. Each entry looks like:

```js
{ id:"p3", name:"Élan Gold Ring", category:"rings", categoryLabel:"Rings", price:42000,
  short:"A sculpted band with a gentle wave, cast in solid gold.",
  long:"Cast as a single sculpted wave, the Élan band catches light along its curve...",
  material:"18K solid gold", care:"Remove before swimming or heavy manual work.",
  duo:"duo-rings", icon:"ring", tag:"" }
```

- `price` is a plain number (in ₹) — formatting is handled automatically.
- `category` must be one of `rings`, `necklaces`, `earrings`, `bracelets` —
  this drives the filter tabs on the Jewellery section.
- `tag` is optional — e.g. `"New"` or `"Signature"` shows a small badge on
  the product panel. Leave it as `""` for no badge.
- The whole site (New Arrivals, the full Jewellery grid, the Celestia
  Collection feature, the Product Experience showcase, the cart and
  wishlist drawers) renders from this single array — add, remove or edit a
  product here and it updates everywhere automatically.

To change **which** products appear in New Arrivals or the Celestia
Collection feature, edit the `NEW_ARRIVAL_IDS` and `CELESTIA_IDS` arrays
just below `PRODUCTS`.

Lookbook captions live in `LOOKBOOK`, reviews in `REVIEWS`, and Journal
articles (including the full text shown in the read-article modal) in
`ARTICLES` — same pattern, same file.

## Swapping in real photography

This build ships with no photography — visuals are intentionally built from
colour, grain texture and line-art instead, so there's nothing to license
and nothing that can break on GitHub Pages. When you're ready to use real
product photography, there are two ways to bring it in:

**Per product (recommended):** in `script.js`, each product has a `duo`
field (a colour-tone class) and an `icon` field (an inline SVG key). Replace
the panel markup instead: in `cardTemplate()` (and the matching modal /
product-experience renderers), swap the `<img class="duo-icon" ...>` line
for a normal `<img src="images/products/p3.jpg" alt="...">`. Add an
`images/` folder alongside the three files and reference your photos there
— the layout, aspect ratios and hover effects are already built to hold a
real photo at any of those sizes.

**Site-wide:** if you want every panel to use photography, do the same
swap once inside the shared `.duo` rendering points (product cards, quick
view, product experience, category tiles, lookbook, journal) rather than
per product.

## Other things worth knowing

- **WhatsApp link:** the "Message Us" link in the Client Experience section
  points to a placeholder number (`https://wa.me/911234567890`). Replace the
  digits with the real business number (country code + number, no spaces,
  no `+`) before publishing.
- **Footer / social links:** Instagram and Pinterest links are placeholders
  (`href="#"`) — point them at real profiles when the brand has them.
- **Cart & wishlist:** both work fully client-side using `localStorage`, so
  a visitor's bag and wishlist persist across a page reload. There's no
  payment flow — "Request This Selection" in the cart drawer shows a static
  confirmation message, which is the intended behaviour for a catalogue-only
  site. Wire it to a real enquiry form, email service, or checkout provider
  when the client is ready for one.
- **Newsletter form:** also static — it shows an inline confirmation and
  doesn't send anywhere yet. Connect it to a real provider (Mailchimp,
  Klaviyo form action, etc.) when needed.
- **Fonts:** Cormorant Garamond (display) and Jost (UI) are loaded from
  Google Fonts via a `<link>` in `index.html`. If you need a fully
  offline-capable build, self-host the font files and update that link.

## Feature checklist

- Sticky header with scroll-aware background
- Full mobile navigation drawer
- Search overlay with live product filtering
- Product filter tabs (Jewellery section)
- Quick View modal with quantity selector
- Cart drawer with quantity controls, line removal and subtotal
- Wishlist drawer with persistent heart-toggle state
- Lookbook with asymmetric grid and a prev/next lightbox
- Auto-advancing review carousel with manual dot navigation
- Journal articles with a full-text read modal
- Newsletter sign-up with inline confirmation
- Scroll-reveal animations throughout (respects reduced-motion preference)
- Fully responsive from 375px up through desktop, no horizontal scroll
