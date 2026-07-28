/*
  ============================================================
  SCRIPT.JS
  You shouldn't need to edit this file. It reads the data from
  artworks.js and builds the page automatically. All the day-to-day
  editing (adding pieces, changing status/price) happens in
  artworks.js instead.
  ============================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let currentFilter = 'all'; // 'all' or 'available'

  // ---------- Build jump links from categories, split into two rows ----------
  const jumpRow1 = document.getElementById('jump-row-1');
  const jumpRow2 = document.getElementById('jump-row-2');
  const splitPoint = Math.ceil(categories.length / 2);

  categories.forEach((cat, index) => {
    const a = document.createElement('a');
    a.href = `#cat-${slugify(cat)}`;
    a.textContent = cat;
    (index < splitPoint ? jumpRow1 : jumpRow2).appendChild(a);
  });

  // ---------- Build one section per category ----------
  categories.forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = `cat-${slugify(cat)}`;

    const heading = document.createElement('div');
    heading.className = 'category-heading';
    heading.innerHTML = `
      <h2>${cat}</h2>
      <div class="rule"></div>
      <span class="category-count"></span>
    `;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid';
    section.appendChild(grid);

    const emptyNote = document.createElement('p');
    emptyNote.className = 'empty-note';
    emptyNote.textContent = 'No pieces currently for sale in this category — check back soon.';
    emptyNote.style.display = 'none';
    section.appendChild(emptyNote);

    gallery.appendChild(section);
  });

  // ---------- Render cards ----------
  function render() {
    categories.forEach(cat => {
      const section = document.getElementById(`cat-${slugify(cat)}`);
      const grid = section.querySelector('.grid');
      const emptyNote = section.querySelector('.empty-note');
      const countLabel = section.querySelector('.category-count');
      grid.innerHTML = '';

      let items = artworks.filter(a => a.category === cat);
      if (currentFilter === 'available') {
        items = items.filter(a => a.status === 'available');
      }

      countLabel.textContent = items.length === 1 ? '1 piece' : `${items.length} pieces`;

      if (items.length === 0) {
        emptyNote.style.display = 'block';
      } else {
        emptyNote.style.display = 'none';
      }

      items.forEach(a => grid.appendChild(buildCard(a)));

      // Hide the whole section if nothing to show under "For Sale" and no items at all
      section.style.display = (currentFilter === 'available' && items.length === 0 &&
        artworks.filter(x => x.category === cat).length === artworks.filter(x => x.category === cat && x.status !== 'available').length)
        ? section.style.display // keep as-is; emptyNote already communicates this
        : '';
    });
  }

  function buildCard(a) {
    const card = document.createElement('div');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${a.title}`);

    // Only show price when viewing the "For Sale" filter — under "All Works"
    // nothing here is shown, and since "For Sale" only ever displays available
    // pieces anyway, the status tag becomes redundant and is skipped entirely.
    const labelRow = currentFilter === 'available'
      ? (a.price ? `<div class="label-row"><span class="price">${a.price}</span></div>` : '')
      : '';

    card.innerHTML = `
      <div class="card-frame">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
      </div>
      <div class="label">
        <p class="label-title">${a.title}</p>
        <p class="label-meta">${a.medium} &middot; ${a.size} &middot; ${a.year}</p>
        ${labelRow}
      </div>
    `;

    card.addEventListener('click', () => openLightbox(a));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(a);
      }
    });

    return card;
  }

  // ---------- Filter toggle ----------
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  // ---------- Lightbox ----------
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbTitle = document.getElementById('lb-title');
  const lbMeta = document.getElementById('lb-meta');
  const lbStatus = document.getElementById('lb-status');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');

  let currentIndex = -1;

  // Builds the full list of artworks in the exact order they appear on the
  // page (category by category, top to bottom), respecting whichever filter
  // is currently active. This is what "next/prev" steps through.
  function getVisibleArtworksInOrder() {
    let result = [];
    categories.forEach(cat => {
      let items = artworks.filter(a => a.category === cat);
      if (currentFilter === 'available') {
        items = items.filter(a => a.status === 'available');
      }
      result = result.concat(items);
    });
    return result;
  }

  function showAtIndex(index) {
    const list = getVisibleArtworksInOrder();
    if (list.length === 0) return;

    // wrap around at either end, so next/prev always has something to show
    currentIndex = (index + list.length) % list.length;
    const a = list[currentIndex];

    lbImg.src = a.image;
    lbImg.alt = a.title;
    lbTitle.textContent = a.title;
    lbMeta.textContent = `${a.medium} · ${a.size} · ${a.year}`;
    lbStatus.textContent = (currentFilter === 'available' && a.price) ? a.price : '';
  }

  function openLightbox(a) {
    const list = getVisibleArtworksInOrder();
    const index = list.findIndex(item => item.id === a.id);
    showAtIndex(index === -1 ? 0 : index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lbClose.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showAtIndex(currentIndex - 1); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); showAtIndex(currentIndex + 1); });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showAtIndex(currentIndex - 1);
    if (e.key === 'ArrowRight') showAtIndex(currentIndex + 1);
  });

  // ---------- Helper ----------
  function slugify(str) {
    return str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  }

  render();

  // ---------- Auto-fill current year in footer copyright ----------
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
