/* ============================================================
   AURELIA — script.js
   Vanilla JS only. No backend, no build step, no dependencies.
   Everything a real client would want to edit lives in the
   PRODUCTS / LOOKBOOK / REVIEWS / ARTICLES data blocks below.
   ============================================================ */

/* ============================================================
   1. INLINE ICON MARKUP
   Stand-ins for photography. Replace a product's visual by
   swapping its `duo` (colour tone) and, if you like, the icon
   key — or drop in a real <img> once photography is ready (see
   README "Swapping in real photography").
   ============================================================ */
const ICONS = {
  ring: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2"><circle cx="60" cy="72" r="30"/><path d="M60 42 L47 22 L60 12 L73 22 Z" stroke-linejoin="round"/><path d="M47 22 L60 30 L73 22" stroke-width="1.4"/></svg>`,
  necklace: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 20 C22 62 44 78 60 78 C76 78 98 62 98 20"/><path d="M50 68 L60 92 L70 68" stroke-linejoin="round"/><circle cx="60" cy="70" r="4" fill="currentColor" stroke="none"/></svg>`,
  earrings: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2"><circle cx="38" cy="24" r="5"/><path d="M38 29 L38 46 C38 60 26 62 26 76 C26 88 48 88 48 76 C48 66 38 62 38 46"/><circle cx="82" cy="24" r="5"/><path d="M82 29 L82 46 C82 60 70 62 70 76 C70 88 92 88 92 76 C92 66 82 62 82 46"/></svg>`,
  bracelet: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="60" cy="60" rx="46" ry="26"/><path d="M50 34 L60 24 L70 34 L60 42 Z" stroke-linejoin="round"/></svg>`
};

/* ============================================================
   2. PRODUCT DATA — edit freely, the whole site renders from this
   ============================================================ */
const PRODUCTS = [
  { id:"p1", name:"Aurelia Solara Necklace", category:"necklaces", categoryLabel:"Necklaces", price:68000,
    short:"A sunburst pendant in brushed gold, hung from a fine link chain.",
    long:"The Solara pendant is cut with radiating facets that catch light from every direction, finished with a soft brushed texture so it never looks harsh. Hung on a fine 18-inch link chain with a two-inch extender.",
    material:"18K gold vermeil", care:"Store flat, away from direct light. Avoid contact with perfume.",
    duo:"duo-necklaces", icon:"necklace", tag:"New" },

  { id:"p2", name:"Celeste Pearl Earrings", category:"earrings", categoryLabel:"Earrings", price:24500,
    short:"Freshwater pearls set in a delicate gold hook.",
    long:"A single freshwater pearl, hand-matched for lustre, set on a fine gold hook that curves naturally with the ear. Light enough for all-day wear.",
    material:"18K gold, freshwater pearl", care:"Wipe clean with a soft cloth after wear.",
    duo:"duo-earrings", icon:"earrings", tag:"New" },

  { id:"p3", name:"Élan Gold Ring", category:"rings", categoryLabel:"Rings", price:42000,
    short:"A sculpted band with a gentle wave, cast in solid gold.",
    long:"Cast as a single sculpted wave, the Élan band catches light along its curve without a single stone set into it. Designed to be worn alone or stacked with the Celestia Halo Ring.",
    material:"18K solid gold", care:"Remove before swimming or heavy manual work.",
    duo:"duo-rings", icon:"ring", tag:"" },

  { id:"p4", name:"Lumière Bracelet", category:"bracelets", categoryLabel:"Bracelets", price:51000,
    short:"A fine line bracelet with a single articulated stone.",
    long:"A delicate chain bracelet finished with one articulated bezel-set stone that moves gently at the wrist. Adjustable clasp for a precise fit.",
    material:"18K white gold", care:"Store separately from other pieces to avoid scratching.",
    duo:"duo-bracelets", icon:"bracelet", tag:"" },

  { id:"p5", name:"Verona Pendant", category:"necklaces", categoryLabel:"Necklaces", price:36500,
    short:"A minimal bar pendant with a hidden hand-set stone.",
    long:"A slim gold bar pendant set with a single hand-selected stone, placed along its length so it catches the eye only on close look. Understated by design.",
    material:"18K gold", care:"Avoid harsh chemicals and chlorinated water.",
    duo:"duo-necklaces", icon:"necklace", tag:"" },

  { id:"p6", name:"Amara Studs", category:"earrings", categoryLabel:"Earrings", price:19800,
    short:"Rounded gold studs with a soft matte finish.",
    long:"A simple rounded stud finished in soft matte gold, designed as an everyday staple that pairs easily with anything else in the edit.",
    material:"18K gold", care:"Wipe clean after wear and store in a soft pouch.",
    duo:"duo-earrings", icon:"earrings", tag:"" },

  { id:"p7", name:"Celestia Halo Ring", category:"rings", categoryLabel:"Rings", price:89000,
    short:"Centre stone framed by a halo — the signature piece of the Celestia edit.",
    long:"The centrepiece of the Celestia collection: a hand-selected centre stone framed by a fine halo, set into a comfort-fit band and finished individually by hand. No two are entirely alike.",
    material:"18K white gold, halo setting", care:"Have prongs checked annually — complimentary for the life of the piece.",
    duo:"duo-celestia", icon:"ring", tag:"Signature" },

  { id:"p8", name:"Meridian Cuff", category:"bracelets", categoryLabel:"Bracelets", price:58000,
    short:"An open cuff with a sculpted, architectural line.",
    long:"An open cuff cast as one continuous architectural line, designed to sit slightly open at the wrist. No clasp — it flexes gently to fit.",
    material:"18K gold", care:"Adjust gently, and only with clean, dry hands.",
    duo:"duo-celestia", icon:"bracelet", tag:"" },

  { id:"p9", name:"Solène Drop Earrings", category:"earrings", categoryLabel:"Earrings", price:33000,
    short:"Long-line drop earrings that catch movement and light.",
    long:"A slim vertical drop finished with a single stone at its base, designed to catch light with the smallest movement. Secure friction backs for confident wear.",
    material:"18K gold, hand-set stone", care:"Store flat so the drop keeps its shape.",
    duo:"duo-celestia", icon:"earrings", tag:"" }
];

const NEW_ARRIVAL_IDS = ["p1","p2","p3","p4","p5","p6"];
const CELESTIA_IDS = ["p7","p9","p8"];

/* ============================================================
   3. LOOKBOOK, REVIEWS, JOURNAL DATA
   ============================================================ */
const LOOKBOOK = [
  { tag:"Evening",   title:"After Dark",    duo:"duo-lookbook-1", icon:"necklace" },
  { tag:"Bridal",    title:"The Aisle Edit",duo:"duo-lookbook-3", icon:"ring" },
  { tag:"Statement", title:"Full Light",    duo:"duo-lookbook-2", icon:"bracelet" },
  { tag:"Everyday",  title:"Quiet Hours",   duo:"duo-lookbook-4", icon:"earrings" },
  { tag:"Evening",   title:"Low Light",     duo:"duo-lookbook-2", icon:"earrings" },
  { tag:"Statement", title:"Held Gaze",     duo:"duo-lookbook-1", icon:"ring" }
];

const REVIEWS = [
  { quote:"The piece felt even more beautiful in person. Elegant, understated and beautifully finished.", author:"Ananya R." },
  { quote:"I wear the Élan ring almost every day now — it hasn't lost its shine and it still feels special every time.", author:"Priya M." },
  { quote:"The consultation made all the difference. They understood exactly what I wanted before I could fully explain it.", author:"Kavita S." },
  { quote:"Ordered the Celeste earrings as a gift — the packaging alone made it feel like an occasion.", author:"Rohan T." }
];

const ARTICLES = [
  { id:"a1", cat:"Guide", title:"The Art of Choosing Timeless Jewellery", duo:"duo-lookbook-1", icon:"ring",
    desc:"A short guide to pieces that outlast trends — what to look for beyond the stone.",
    body:["Timeless jewellery rarely announces itself. It tends to sit quietly in a design that doesn't chase a particular season — a clean line, a balanced setting, a metal chosen for how it wears rather than how it photographs.",
          "When you're choosing a piece meant to last, look at the setting before the stone. A well-made setting protects what's inside it for decades; a fashionable one often dates the whole piece within a year or two.",
          "The simplest test: would you still reach for it in ten years? If the answer isn't an easy yes, it's probably a piece for a moment, not a lifetime — and that's alright too, as long as you know which one you're buying."] },

  { id:"a2", cat:"Styling", title:"How to Style Your Everyday Pieces", duo:"duo-lookbook-4", icon:"bracelet",
    desc:"Layering, stacking and the small rules that keep an everyday edit looking considered.",
    body:["The easiest way to make fine jewellery look intentional rather than accidental is restraint — one focal piece, and everything else quieter around it.",
          "Mixed metals work better than most people expect, as long as one metal clearly leads. Let gold or white gold dominate, and use the second only as an accent — a single ring, a single clasp.",
          "For layering necklaces, vary the length before anything else. Two chains at the same length will tangle and compete; three at different lengths will sit like they were never adjusted at all."] },

  { id:"a3", cat:"Craft", title:"Behind the Craft", duo:"duo-lookbook-2", icon:"necklace",
    desc:"What actually happens between a sketch and a finished piece on the bench.",
    body:["Every piece begins as a flat sketch, but almost nothing about the final object is flat — the real design work happens in wax, where a piece is carved and adjusted by hand until it catches light the way it was imagined to.",
          "Setting is the slowest part of the process by far. A stone is rarely set on the first attempt at the exact angle intended; the setter checks it under light, adjusts the seat, and checks it again.",
          "The last step is the one most people never think about — polishing. It's easy to over-polish a piece into looking generic. The difference between a good piece and a forgettable one is often just knowing when to stop."] },

  { id:"a4", cat:"Meaning", title:"Jewellery for Meaningful Moments", duo:"duo-lookbook-3", icon:"earrings",
    desc:"On choosing a piece to mark something, rather than simply to wear.",
    body:["A piece bought to mark a moment carries a different weight than one bought on impulse — it gets worn on the anniversaries of the thing it was chosen for, whether or not anyone else in the room knows that.",
          "There's no formula for choosing well here. The pieces people keep for decades are rarely the most elaborate ones; they're the ones that quietly matched how they felt on a particular day.",
          "If you're choosing for someone else, the best guide isn't their style board — it's the last thing they wore that they couldn't stop touching all evening."] }
];

/* ============================================================
   4. HELPERS
   ============================================================ */
const inr = (n) => "₹" + n.toLocaleString("en-IN");
const findProduct = (id) => PRODUCTS.find(p => p.id === id);
const iconMarkup = (key) => ICONS[key] || "";

/* ============================================================
   5. STATE (in-memory + localStorage, no backend)
   ============================================================ */
let cart = loadState("aurelia_cart", []);      // [{id, qty}]
let wishlist = loadState("aurelia_wishlist", []); // [id, id...]

function loadState(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){ return fallback; }
}
function saveState(key, value){
  try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){ /* ignore */ }
}

/* ============================================================
   6. PRODUCT CARD RENDERING
   ============================================================ */
function cardTemplate(p){
  const tag = p.tag ? `<span class="pcard-tag">${p.tag}</span>` : "";
  const wished = wishlist.includes(p.id) ? "active" : "";
  return `
  <article class="pcard reveal" data-id="${p.id}" data-category="${p.category}">
    <div class="pcard-media duo ${p.duo}" data-id="${p.id}" data-action="qv" role="button" tabindex="0" aria-label="Quick view ${p.name}">
      ${tag}
      <button class="pcard-wish ${wished}" data-id="${p.id}" data-action="wish" aria-label="Add ${p.name} to wishlist">
        <svg viewBox="0 0 24 24" fill="${wished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.6"><path d="M12 20.5s-7.5-4.6-9.8-9A5.3 5.3 0 0 1 12 6.2 5.3 5.3 0 0 1 21.8 11.5c-2.3 4.4-9.8 9-9.8 9z"/></svg>
      </button>
      <img class="duo-icon" src="${iconDataUri(p.icon)}" alt="${p.name} placeholder visual">
      <button class="btn btn-cream btn-sm pcard-qv" data-id="${p.id}" data-action="qv">Quick View</button>
    </div>
    <div class="pcard-info">
      <span class="pcard-cat">${p.categoryLabel}</span>
      <h3 class="pcard-name">${p.name}</h3>
      <p class="pcard-desc">${p.short}</p>
      <p class="pcard-price">${inr(p.price)}</p>
      <div class="pcard-actions">
        <button class="btn btn-line btn-sm" data-id="${p.id}" data-action="bag">Add to Bag</button>
      </div>
    </div>
  </article>`;
}

/* Icons are used both as inline SVG (fast, no file) and, where an
   <img> tag is more convenient (drawer thumbnails), as a data-URI
   built from the same markup — still zero extra files. */
function iconDataUri(key){
  const svg = ICONS[key].replace(/currentColor/g, "%23C9A876");
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

function renderGrid(containerId, ids){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = ids ? ids.map(findProduct) : PRODUCTS;
  el.innerHTML = list.map(cardTemplate).join("");
}

renderGrid("newArrivalsGrid", NEW_ARRIVAL_IDS);
renderGrid("shopGrid", null);
renderGrid("celestiaGrid", CELESTIA_IDS);

/* Fill static category-tile icons (Shop by Category section) */
document.querySelectorAll("img[data-icon]").forEach(img=>{
  img.src = iconDataUri(img.dataset.icon);
});

/* ============================================================
   7. PRODUCT EXPERIENCE (single featured piece)
   ============================================================ */
function renderProductExperience(id){
  const p = findProduct(id);
  if(!p) return;
  document.getElementById("peMedia").className = "pe-media duo reveal " + p.duo;
  document.getElementById("peMedia").innerHTML = `<img class="duo-icon" src="${iconDataUri(p.icon)}" alt="${p.name} placeholder visual">`;
  document.getElementById("peCat").textContent = p.categoryLabel;
  document.getElementById("peName").textContent = p.name;
  document.getElementById("peDesc").textContent = p.long;
  document.getElementById("peSpecs").innerHTML = `
    <div><span>Material</span><span>${p.material}</span></div>
    <div><span>Care</span><span>${p.care}</span></div>`;
  document.getElementById("pePrice").textContent = inr(p.price);
  document.getElementById("peAddBtn").dataset.id = p.id;
  document.getElementById("peWishBtn").dataset.id = p.id;
  updateWishButton(document.getElementById("peWishBtn"), p.id);
}
renderProductExperience("p7");

/* ============================================================
   8. FILTERS (Jewellery / #shop section)
   ============================================================ */
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    applyFilter(btn.dataset.filter);
  });
});
function applyFilter(cat){
  document.querySelectorAll("#shopGrid .pcard").forEach(card=>{
    card.classList.toggle("hide", !(cat === "all" || card.dataset.category === cat));
  });
}
function jumpToShop(cat){
  const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
  if(btn) btn.click();
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}
document.querySelectorAll("[data-jump]").forEach(el=>{
  el.addEventListener("click", ()=> jumpToShop(el.dataset.jump));
});

/* ============================================================
   9. CART, WISHLIST — shared logic + drawers
   ============================================================ */
function cartQty(id){
  const line = cart.find(l=>l.id===id);
  return line ? line.qty : 0;
}
function addToBag(id, qty=1){
  const line = cart.find(l=>l.id===id);
  if(line) line.qty += qty; else cart.push({id, qty});
  saveState("aurelia_cart", cart);
  renderCart();
  pulseIcon("cartToggle");
}
function setQty(id, qty){
  const line = cart.find(l=>l.id===id);
  if(!line) return;
  line.qty = qty;
  if(line.qty <= 0) cart = cart.filter(l=>l.id!==id);
  saveState("aurelia_cart", cart);
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(l=>l.id!==id);
  saveState("aurelia_cart", cart);
  renderCart();
}
function toggleWishlist(id){
  if(wishlist.includes(id)) wishlist = wishlist.filter(w=>w!==id);
  else wishlist.push(id);
  saveState("aurelia_wishlist", wishlist);
  document.querySelectorAll(`.pcard-wish[data-id="${id}"]`).forEach(btn=>updateWishButton(btn, id));
  updateWishButton(document.getElementById("peWishBtn"), id);
  renderWishlist();
  pulseIcon("wishlistToggle");
}
function updateWishButton(btn, id){
  if(!btn) return;
  const active = wishlist.includes(id);
  btn.classList.toggle("active", active);
  const svg = btn.querySelector("svg");
  if(svg) svg.setAttribute("fill", active ? "currentColor" : "none");
}
function pulseIcon(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.transform = "scale(1.15)";
  setTimeout(()=>{ el.style.transform = ""; }, 200);
}

function renderCart(){
  const body = document.getElementById("cartItems");
  const count = cart.reduce((s,l)=>s+l.qty,0);
  updateBadge("cartCount", count);
  if(cart.length === 0){
    body.innerHTML = `<div class="drawer-empty">Your bag is empty.</div>`;
  }else{
    body.innerHTML = cart.map(line=>{
      const p = findProduct(line.id);
      if(!p) return "";
      return `
      <div class="drawer-item">
        <div class="drawer-thumb duo ${p.duo}"><img src="${iconDataUri(p.icon)}" alt="${p.name}"></div>
        <div>
          <div class="drawer-item-name">${p.name}</div>
          <div class="drawer-item-price">${inr(p.price)}</div>
          <div class="qty-stepper">
            <button data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span>${line.qty}</span>
            <button data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="drawer-item-remove" data-action="remove" data-id="${p.id}">Remove</button>
      </div>`;
    }).join("");
  }
  const subtotal = cart.reduce((s,l)=>{ const p = findProduct(l.id); return s + (p ? p.price*l.qty : 0); },0);
  document.getElementById("cartSubtotalValue").textContent = inr(subtotal);
  document.getElementById("cartCheckoutBtn").disabled = cart.length === 0;
}

function renderWishlist(){
  const body = document.getElementById("wishlistItems");
  updateBadge("wishlistCount", wishlist.length);
  if(wishlist.length === 0){
    body.innerHTML = `<div class="drawer-empty">Nothing saved yet.</div>`;
    return;
  }
  body.innerHTML = wishlist.map(id=>{
    const p = findProduct(id);
    if(!p) return "";
    return `
    <div class="drawer-item">
      <div class="drawer-thumb duo ${p.duo}"><img src="${iconDataUri(p.icon)}" alt="${p.name}"></div>
      <div>
        <div class="drawer-item-name">${p.name}</div>
        <div class="drawer-item-price">${inr(p.price)}</div>
      </div>
      <button class="drawer-item-remove wish-remove" data-action="unwish" data-id="${p.id}">Remove</button>
    </div>`;
  }).join("");
}

function updateBadge(id, n){
  const el = document.getElementById(id);
  if(!el) return;
  el.textContent = n;
  el.classList.toggle("show", n > 0);
}

/* Delegated clicks for product cards (grids + featured sections) */
document.addEventListener("click", (e)=>{
  const bagBtn = e.target.closest("[data-action='bag']");
  const wishBtn = e.target.closest("[data-action='wish']");
  const qvTrigger = e.target.closest("[data-action='qv']");
  if(bagBtn){ addToBag(bagBtn.dataset.id, 1); }
  if(wishBtn){ toggleWishlist(wishBtn.dataset.id); }
  if(qvTrigger){ openQuickView(qvTrigger.dataset.id); }
});

/* Cart drawer item controls (event delegation) */
document.getElementById("cartItems").addEventListener("click", (e)=>{
  const btn = e.target.closest("button");
  if(!btn) return;
  const id = btn.dataset.id;
  if(btn.dataset.action === "inc") setQty(id, cartQty(id)+1);
  if(btn.dataset.action === "dec") setQty(id, cartQty(id)-1);
  if(btn.dataset.action === "remove") removeFromCart(id);
});
document.getElementById("wishlistItems").addEventListener("click", (e)=>{
  const btn = e.target.closest("button");
  if(!btn) return;
  if(btn.dataset.action === "unwish") toggleWishlist(btn.dataset.id);
});

/* ============================================================
   10. DRAWERS (cart / wishlist) OPEN-CLOSE
   ============================================================ */
function openDrawer(overlayId, drawerId){
  document.getElementById(overlayId).classList.add("open");
  document.getElementById(drawerId).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawers(){
  document.querySelectorAll(".drawer-overlay").forEach(o=>o.classList.remove("open"));
  document.querySelectorAll(".drawer").forEach(d=>d.classList.remove("open"));
  document.body.style.overflow = "";
}
document.getElementById("cartToggle").addEventListener("click", ()=> openDrawer("cartOverlay","cartDrawer"));
document.getElementById("wishlistToggle").addEventListener("click", ()=> openDrawer("wishlistOverlay","wishlistDrawer"));
document.querySelectorAll(".drawer-close, .drawer-overlay").forEach(el=>{
  el.addEventListener("click", (e)=>{ if(e.target === el || e.target.closest(".drawer-close")) closeDrawers(); });
});
document.getElementById("cartCheckoutBtn").addEventListener("click", ()=>{
  const note = document.getElementById("cartNote");
  note.textContent = "Thank you — we've noted your selection. Our styling team will follow up to confirm sizing and delivery.";
  note.classList.add("show");
});

/* ============================================================
   11. QUICK VIEW MODAL
   ============================================================ */
const qvOverlay = document.getElementById("qvOverlay");
function openQuickView(id){
  const p = findProduct(id);
  if(!p) return;
  document.getElementById("qvMedia").className = "modal-media duo " + p.duo;
  document.getElementById("qvMedia").innerHTML = `<img class="duo-icon" src="${iconDataUri(p.icon)}" alt="${p.name} placeholder visual">`;
  document.getElementById("qvCat").textContent = p.categoryLabel;
  document.getElementById("qvName").textContent = p.name;
  document.getElementById("qvDesc").textContent = p.long;
  document.getElementById("qvSpecs").innerHTML = `
    <div><span>Material</span><span>${p.material}</span></div>
    <div><span>Care</span><span>${p.care}</span></div>`;
  document.getElementById("qvPrice").textContent = inr(p.price);
  document.getElementById("qvQtyValue").textContent = "1";
  document.getElementById("qvAddBtn").dataset.id = p.id;
  updateWishButton(document.getElementById("qvWishBtn"), p.id);
  document.getElementById("qvWishBtn").dataset.id = p.id;
  qvOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeQuickView(){
  qvOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("qvClose").addEventListener("click", closeQuickView);
qvOverlay.addEventListener("click", (e)=>{ if(e.target === qvOverlay) closeQuickView(); });

let qvQty = 1;
document.getElementById("qvQtyMinus").addEventListener("click", ()=>{
  qvQty = Math.max(1, qvQty-1);
  document.getElementById("qvQtyValue").textContent = qvQty;
});
document.getElementById("qvQtyPlus").addEventListener("click", ()=>{
  qvQty += 1;
  document.getElementById("qvQtyValue").textContent = qvQty;
});
document.getElementById("qvAddBtn").addEventListener("click", (e)=>{
  addToBag(e.currentTarget.dataset.id, qvQty);
  qvQty = 1;
  document.getElementById("qvQtyValue").textContent = "1";
  closeQuickView();
});
document.getElementById("qvWishBtn").addEventListener("click", (e)=> toggleWishlist(e.currentTarget.dataset.id));

/* Product Experience add/wish buttons */
document.getElementById("peAddBtn").addEventListener("click", (e)=> addToBag(e.currentTarget.dataset.id, 1));
document.getElementById("peWishBtn").addEventListener("click", (e)=> toggleWishlist(e.currentTarget.dataset.id));

/* ============================================================
   12. SEARCH OVERLAY
   ============================================================ */
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

document.getElementById("searchToggle").addEventListener("click", ()=>{
  searchOverlay.classList.add("open");
  setTimeout(()=> searchInput.focus(), 200);
  renderSearch("");
});
document.getElementById("searchClose").addEventListener("click", closeSearch);
searchOverlay.addEventListener("click", (e)=>{ if(e.target === searchOverlay) closeSearch(); });
function closeSearch(){ searchOverlay.classList.remove("open"); searchInput.value = ""; }

searchInput.addEventListener("input", ()=> renderSearch(searchInput.value));

function renderSearch(query){
  const q = query.trim().toLowerCase();
  const matches = q === "" ? PRODUCTS : PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q));
  if(matches.length === 0){
    searchResults.innerHTML = `<div class="search-empty">No pieces match “${query}”.</div>`;
    return;
  }
  searchResults.innerHTML = matches.map(p=>`
    <div class="search-row-item" data-id="${p.id}">
      <span>${p.name}</span>
      <span>${inr(p.price)}</span>
    </div>`).join("");
}
searchResults.addEventListener("click", (e)=>{
  const row = e.target.closest(".search-row-item");
  if(!row) return;
  const p = findProduct(row.dataset.id);
  closeSearch();
  jumpToShop(p.category);
});

/* ============================================================
   13. LOOKBOOK + LIGHTBOX
   ============================================================ */
const lookGrid = document.getElementById("lookGrid");
lookGrid.innerHTML = LOOKBOOK.map((l,i)=>`
  <div class="look-tile duo ${l.duo} reveal" data-index="${i}">
    <img src="${iconDataUri(l.icon)}" alt="">
    <div>
      <span class="look-tag">${l.tag}</span>
      <div class="look-title display">${l.title}</div>
    </div>
  </div>`).join("");

const lightbox = document.getElementById("lightbox");
const lightboxPanel = document.getElementById("lightboxPanel");
let lbIndex = 0;
function openLightbox(i){
  lbIndex = i;
  renderLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
function renderLightbox(){
  const l = LOOKBOOK[lbIndex];
  lightboxPanel.className = "lightbox-panel duo " + l.duo;
  lightboxPanel.innerHTML = `<div><span class="look-tag">${l.tag}</span><div class="look-title display" style="font-size:1.8rem;">${l.title}</div></div>`;
}
function closeLightbox(){ lightbox.classList.remove("open"); document.body.style.overflow = ""; }
lookGrid.addEventListener("click", (e)=>{
  const tile = e.target.closest(".look-tile");
  if(tile) openLightbox(Number(tile.dataset.index));
});
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", ()=>{ lbIndex = (lbIndex-1+LOOKBOOK.length)%LOOKBOOK.length; renderLightbox(); });
document.getElementById("lightboxNext").addEventListener("click", ()=>{ lbIndex = (lbIndex+1)%LOOKBOOK.length; renderLightbox(); });
lightbox.addEventListener("click", (e)=>{ if(e.target === lightbox) closeLightbox(); });

/* ============================================================
   14. REVIEW CAROUSEL
   ============================================================ */
const reviewTrack = document.getElementById("reviewTrack");
const reviewDots = document.getElementById("reviewDots");
reviewTrack.innerHTML = REVIEWS.map(r=>`
  <div class="review-slide">
    <p class="review-quote display">“${r.quote}”</p>
    <p class="review-author">— ${r.author}</p>
  </div>`).join("");
reviewDots.innerHTML = REVIEWS.map((_,i)=>`<button class="review-dot ${i===0?'active':''}" data-i="${i}" aria-label="Show review ${i+1}"></button>`).join("");

let reviewIndex = 0;
let reviewTimer;
function goToReview(i){
  reviewIndex = (i + REVIEWS.length) % REVIEWS.length;
  reviewTrack.style.transform = `translateX(-${reviewIndex*100}%)`;
  document.querySelectorAll(".review-dot").forEach((d,idx)=> d.classList.toggle("active", idx===reviewIndex));
}
function startReviewAutoplay(){
  clearInterval(reviewTimer);
  reviewTimer = setInterval(()=> goToReview(reviewIndex+1), 6000);
}
reviewDots.addEventListener("click", (e)=>{
  const dot = e.target.closest(".review-dot");
  if(!dot) return;
  goToReview(Number(dot.dataset.i));
  startReviewAutoplay();
});
document.querySelector(".review-track-wrap").addEventListener("mouseenter", ()=> clearInterval(reviewTimer));
document.querySelector(".review-track-wrap").addEventListener("mouseleave", startReviewAutoplay);
startReviewAutoplay();

/* ============================================================
   15. JOURNAL
   ============================================================ */
const journalGrid = document.getElementById("journalGrid");
journalGrid.innerHTML = ARTICLES.map(a=>`
  <article class="journal-card reveal" data-id="${a.id}">
    <div class="journal-media duo ${a.duo}"><img class="duo-icon" src="${iconDataUri(a.icon)}" alt="${a.title}"></div>
    <div class="journal-info">
      <span class="journal-cat">${a.cat}</span>
      <h3 class="journal-title">${a.title}</h3>
      <p class="journal-desc">${a.desc}</p>
      <span class="text-link journal-read">Read Article</span>
    </div>
  </article>`).join("");

const jmodalOverlay = document.getElementById("jmodalOverlay");
journalGrid.addEventListener("click", (e)=>{
  const card = e.target.closest(".journal-card");
  if(!card) return;
  const a = ARTICLES.find(x=>x.id===card.dataset.id);
  document.getElementById("jmodalCat").textContent = a.cat;
  document.getElementById("jmodalTitle").textContent = a.title;
  document.getElementById("jmodalBody").innerHTML = a.body.map(p=>`<p>${p}</p>`).join("");
  jmodalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
});
document.getElementById("jmodalClose").addEventListener("click", closeJournal);
jmodalOverlay.addEventListener("click", (e)=>{ if(e.target === jmodalOverlay) closeJournal(); });
function closeJournal(){ jmodalOverlay.classList.remove("open"); document.body.style.overflow = ""; }

/* ============================================================
   16. GLOBAL ESCAPE KEY
   ============================================================ */
document.addEventListener("keydown", (e)=>{
  if(e.key !== "Escape") return;
  closeQuickView(); closeDrawers(); closeSearch(); closeLightbox(); closeJournal(); closeMobileNav();
});

/* ============================================================
   17. HEADER / STICKY / MOBILE NAV
   ============================================================ */
const header = document.getElementById("siteHeader");
function onScroll(){ header.classList.toggle("solid", window.scrollY > 40); }
document.addEventListener("scroll", onScroll, {passive:true});
onScroll();

const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
burger.addEventListener("click", ()=>{ mobileNav.classList.add("open"); document.body.style.overflow = "hidden"; });
document.getElementById("mobileNavClose").addEventListener("click", closeMobileNav);
mobileNav.querySelectorAll("a").forEach(a=> a.addEventListener("click", closeMobileNav));
function closeMobileNav(){ mobileNav.classList.remove("open"); document.body.style.overflow = ""; }

/* ============================================================
   18. SCROLL REVEAL
   ============================================================ */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add("in"); io.unobserve(entry.target); }
  });
}, {threshold:0.15});
function observeReveals(){
  document.querySelectorAll(".reveal:not(.in)").forEach((el,i)=>{
    el.style.setProperty("--i", i % 8);
    io.observe(el);
  });
}
observeReveals();

/* ============================================================
   19. NEWSLETTER (static demo — no backend)
   ============================================================ */
document.getElementById("newsletterForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  const note = document.getElementById("newsletterNote");
  note.textContent = "You're on the list — thank you for joining.";
  note.classList.add("show");
  e.target.reset();
});

/* ============================================================
   20. FOOTER YEAR + INITIAL BADGE STATE
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
renderCart();
renderWishlist();
