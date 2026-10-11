/**
 * AlphaWoodworkingPlan - Main JavaScript Engine
 * Live Instant Search, Blueprint Modal Viewer, Pinterest Pin Sharing, and Category Navigation
 */

const ALPHA_PROJECTS_DATA = [
  // ==========================================
  // 1. BACKYARD PROJECTS
  // ==========================================
  {
    id: 'convertible-picnic-table',
    title: 'DIY Convertible Picnic Table (Dining & Game Table)',
    category: 'Backyard Projects',
    categorySlug: 'diy-convertible-picnic-table.html',
    difficulty: 'Intermediateâ€“Advanced',
    time: '8â€“10 Hours',
    budget: '$120 â€“ $190',
    dimensions: '72" L Ã— 30" H (60" Benches)',
    image: 'images/diy-convertible-picnic-table.jpg',
    pinImage: 'images/diy-convertible-picnic-table.jpg',
    excerpt: 'Multifunctional outdoor dining table that converts into a hidden game table with storage for board games, cards, and dice.',
    keywords: 'convertible picnic table, game table, outdoor dining, lift top table, hidden storage picnic table',
    materials: [
      'Outdoor-rated lumber (Cedar, Redwood, or Treated Hem-Fir)',
      'Exterior-rated structural screws and fasteners',
      'Heavy-duty hinges or engineered lift mechanism',
      'Corner brackets and structural connectors',
      'Exterior waterproof wood glue (Titebond III)',
      'Weather-resistant game surface (felt or composite insert)',
      'Storage compartment dividers & locking hardware'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or miter saw',
      'Drill and driver with countersink bits',
      'Clamps & random orbital sander',
      'Safety glasses and hearing protection'
    ],
    steps: [
      'Create Detailed Design: Sketch table in dining and game modes with 72" length, 30" height, and 60" bench clearance.',
      'Select Lumber: Pick straight, properly kiln-dried outdoor cedar or rot-resistant timber free of splits.',
      'Build Supporting Frame: Assemble base and angled legs using structural exterior fasteners, keeping it perfectly square.',
      'Assemble Benches: Build 60" bench frames and attach seating boards clear of the tabletop range of motion.',
      'Build Convertible Tabletop: Mount heavy-duty lift mechanism rated for lid weight with positive safety locks.',
      'Add Storage Compartment & Game Surface: Frame compartment beneath tabletop with divider bins and install weather-resistant felt game surface.',
      'Sand, Finish & Test: Sand to 180 grit, coat with exterior stain, and test both dining and game configurations thoroughly.'
    ]
  },
  {
    id: 'murphy-backyard-workbench',
    title: 'DIY Murphy-Style Backyard Workbench (Fold-Down Workshop)',
    category: 'Backyard Projects',
    categorySlug: 'diy-murphy-backyard-workbench.html',
    difficulty: 'Intermediate',
    time: '6–8 Hours',
    budget: '$95 – $160',
    dimensions: '72" W × 48" H × 24" D (10" Closed Depth)',
    image: 'images/diy-murphy-backyard-workbench.jpg',
    pinImage: 'images/diy-murphy-backyard-workbench.jpg',
    excerpt: 'Space-saving fold-down woodworking workshop featuring a wall-mounted wooden cabinet, organized tool storage panel, interior shelving, and a 72" folding work surface.',
    keywords: 'murphy workbench, fold down workbench, backyard workbench, small workshop, wall mounted workbench',
    materials: [
      'Lumber suitable for the cabinet frame (2x4, 1x6, or 1x4 select stock)',
      '3/4" Plywood for heavy-duty fold-down work surface and carcass',
      'Exterior-rated structural screws and corrosion-resistant fasteners',
      'Heavy-duty piano hinges or rated strap hinges',
      'Properly rated folding workbench triangle support brackets (300+ lb)',
      'Wall-mounting hardware suitable for wall studs or solid masonry',
      'Interior shelving material, pegboard or slotted tool panel',
      'Exterior protective spar urethane or penetrating wood oil finish'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or track saw',
      'Cordless drill and impact driver set',
      'Bar clamps & pocket hole jig',
      '4-foot level & stud finder',
      'Random orbital sander (80 to 220 grit)',
      'Safety glasses and hearing protection'
    ],
    steps: [
      'Choose Location & Measure: Select sturdy wall space allowing 72" width and 24" open projection with ample walking clearance.',
      'Design Cabinet Frame: Sketch front, side, and open profiles with internal shelf positions and tool panel layout.',
      'Cut & Assemble Box: Cut 1x10 or 2x8 perimeter boards and assemble rigid rectangular cabinet with square corners.',
      'Install Tool Panel & Shelves: Mount back panel with tool holders, pegboard hooks, and shelf dividers for jars and bins.',
      'Build Fold-Down Work Surface: Cut 3/4" plywood top with edge banding and mount heavy-duty continuous hinge along bottom rail.',
      'Secure Cabinet to Wall: Anchor cabinet directly into solid wall studs using heavy structural timber screws and check level.',
      'Install Folding Support Brackets: Mount rated folding triangular brackets beneath worktop and verify positive locking engagement.',
      'Sand & Apply Protective Finish: Sand smooth to 180 grit and apply weather-resistant spar urethane or protective finish.',
      'Organize & Safety Test: Mount tools, test folding clearance, and apply gradual test weights before routine woodworking use.'
    ]
  },
  {
    id: 'backyard-garden-bench',
    title: 'Rustic 2x4 & 2x6 Garden Bench',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Beginnerâ€“Int',
    time: '3â€“4 Hours',
    budget: '$40 â€“ $65',
    dimensions: '48" L Ã— 16" W Ã— 18" H',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'Rock-solid outdoor patio bench built from dimensional 2x4 and 2x6 lumber with angled stance legs to prevent lawn wobbling.',
    keywords: 'garden bench, rustic patio bench, 2x4 outdoor seating, backyard wood bench diy',
    materials: [
      '2 boards â€“ 2x6 Ã— 8 ft Ground-contact or Douglas Fir lumber',
      '3 boards â€“ 2x4 Ã— 8 ft Construction lumber',
      '1 box â€“ 2-1/2" Blue-Kote exterior pocket hole screws',
      'Waterproof wood glue (Titebond III Exterior)'
    ],
    tools: ['Circular saw or miter saw', 'Pocket hole jig', 'Orbital sander with 80/120/180 grit', 'Clamps'],
    steps: [
      'Cut seat planks: Cut two 2x6 boards to 48" length and edge-round the outer profiles.',
      'Cut A-frame leg assemblies: Cut four 2x4 legs at 10Â° complementary angles to 17" height.',
      'Build leg stretchers: Join the angled legs with horizontal 2x4 crossbars using pocket screws and waterproof glue.',
      'Mount longitudinal support: Install a central 42" long 2x4 stretcher connecting the two leg frames.',
      'Fasten top seat: Secure the 2x6 seat planks from underneath to hide screw heads.',
      'Apply exterior sealer: Sand thoroughly to 150 grit and brush on exterior penetrating oil stain.'
    ]
  },
  {
    id: 'backyard-patio-cooler',
    title: 'Slatted Patio Drink Cooler Stand',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Intermediate',
    time: '4â€“5 Hours',
    budget: '$50 â€“ $80',
    dimensions: '36" W Ã— 22" D Ã— 34" H',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'Entertain in style with this handsome timber cooler cabinet designed to house a standard 48-quart ice chest with brass drain spout and bottle opener.',
    keywords: 'patio cooler stand, wooden ice chest, backyard bbq cart, outdoor bar cart build',
    materials: [
      '4 boards â€“ 2x4 Ã— 8 ft Pressure-treated or Cedar lumber',
      '5 boards â€“ 1x4 Ã— 8 ft Cedar slats',
      '1 set â€“ Brass cooler drain tube and spigot kit',
      '1 pair â€“ Heavy outdoor chest hinges & magnetic catch'
    ],
    tools: ['Miter saw', 'Pocket hole jig', 'Drill & 1" spade bit', 'Clamps'],
    steps: [
      'Build structural leg frame: Assemble 2x4 legs and cross rails using pocket screws.',
      'Install slat cladding: Wrap exterior with 1x4 cedar slats spaced 1/8" apart with galvanized brads.',
      'Mount cooler chest: Insert 48-qt ice chest into upper bay and drill drain hole through base.',
      'Build hinged lid: Frame 1x4 cedar lid matching chest lid with heavy galvanized hinges.',
      'Install brass hardware: Attach drain valve, rustic iron handles, and vintage wall-mounted bottle opener.'
    ]
  },
  {
    id: 'backyard-firewood-shed',
    title: 'Covered Cedar Firewood Storage Rack',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Intermediate',
    time: '5â€“6 Hours',
    budget: '$75 â€“ $120',
    dimensions: '60" W Ã— 24" D Ã— 48" H',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'Keep split cordwood seasoned and bone-dry with this slatted ventilation rack featuring an angled corrugated or cedar roof shed.',
    keywords: 'firewood rack, outdoor wood storage, log holder diy, cedar firewood shed',
    materials: [
      '6 boards â€“ 2x4 Ã— 8 ft Pressure-treated frame lumber',
      '4 boards â€“ 1x4 Ã— 8 ft Cedar air slats',
      '1 sheet â€“ Corrugated polycarbonate or metal roof panel',
      '1 box â€“ 3" Exterior framing screws'
    ],
    tools: ['Circular saw', 'Speed square', 'Drill & driver', 'Level'],
    steps: [
      'Construct elevated floor base: Build a 2x4 rectangular frame with bottom slats to keep logs 6" above damp soil.',
      'Erect upright posts: Fasten front (48") and rear (42") 2x4 uprights to create a rain-shedding roof slope.',
      'Attach side ventilation slats: Screw horizontal 1x4 cedar slats spaced 2" apart for crosswind airflow.',
      'Install angled roof rafters: Fasten 2x4 roof purlins with a 15Â° slope.',
      'Secure corrugated roof: Screw weatherproof roofing panels with rubber-gasketed washer screws.'
    ]
  },
  {
    id: 'backyard-adirondack-chair',
    title: 'Classic Outdoor Adirondack Lawn Chair',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Intermediate',
    time: '6â€“8 Hours',
    budget: '$55 â€“ $85',
    dimensions: '32" W Ã— 36" D Ã— 38" H',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'The iconic American lawn chair with curved ergonomic seat slats, fan-back geometry, and wide arms for cold drink glasses.',
    keywords: 'adirondack chair plans, outdoor lounge chair, lawn seating diy, cedar adirondack build',
    materials: [
      '5 boards â€“ 1x6 Ã— 8 ft Cedar or Douglas fir',
      '2 boards â€“ 2x4 Ã— 8 ft Frame stock',
      '1 box â€“ 1-3/4" Stainless steel exterior screws',
      'Waterproof wood glue'
    ],
    tools: ['Jigsaw', 'Miter saw', 'Random orbital sander (80 to 220 grit)', 'Clamps'],
    steps: [
      'Trace and cut curved side stringers: Cut two curved seat side rails from 2x4 stock with a jigsaw.',
      'Cut fan-back slats: Taper five 1x6 back slats from 3.5" top width down to 2.25" base.',
      'Fasten seat slats: Screw seven 1x4 curved seat slats with 1/4" drainage spacing.',
      'Assemble rear backrest support: Fasten back slats to upper and lower curved cross rails.',
      'Fit wide armrests: Cut paddle-shaped 1x6 armrests and level them onto front 2x4 legs.',
      'Finish: Sand all curved edges with 180 grit and apply 3 coats of marine spar urethane.'
    ]
  },

  // ==========================================
  // 2. DIY FURNITURE
  // ==========================================
  {
    id: 'floating-staircase-shelf',
    title: 'DIY Floating Staircase Shelf (5-Step Wall Display)',
    category: 'DIY Furniture',
    categorySlug: 'diy-floating-staircase-shelf.html',
    difficulty: 'Beginner–Intermediate',
    time: '4–6 Hours',
    budget: '$45 – $80',
    dimensions: '48" W × 48" H × 8" D (12" Step Width)',
    image: 'images/diy-floating-staircase-shelf.jpg',
    pinImage: 'images/diy-floating-staircase-shelf.jpg',
    excerpt: 'Modern wall-mounted floating staircase display shelf with 5 ascending wooden steps, hidden mounting rail, and warm LED accent lighting.',
    keywords: 'floating staircase shelf, DIY staircase shelf, modern wall shelf, wooden display shelf, floating shelves',
    materials: [
      '10 pieces – 12" × 8" (1" thick) Solid Wood boards (Shelf Tops/Bottoms)',
      '10 pieces – 12" × 8" (1" thick) Solid Wood boards (Vertical Sides)',
      '1 piece – 48" × 3" Back Mounting Rail / Ledger',
      'Heavy-duty steel L-brackets or concealed floating brackets',
      'Structural wall mounting screws (into studs) & 1-1/4" wood screws',
      'Wood glue (Titebond II) & wood filler',
      'Sandpaper (120, 180, and 220 grit)',
      'Wood stain or clear satin polyurethane',
      'Optional warm white LED strip lighting kit'
    ],
    tools: [
      'Miter saw or circular saw',
      'Cordless drill & driver bits',
      'Combination square & tape measure',
      '2-foot level & stud finder',
      'Bar clamps or 90° corner clamps',
      'Random orbital sander',
      'Safety glasses and hearing protection'
    ],
    steps: [
      'Sketch Layout & Plan Wall: Measure wall area for 48" × 48" footprint and mark stud locations with a stud finder.',
      'Cut Components to Spec: Cut 10 shelf tops/bottoms (12" × 8"), 10 vertical sides (12" × 8"), and 1 back rail (48" × 3").',
      'Sand & Prep Boards: Sand all board faces and edges smooth to 220 grit, wiping away sawdust.',
      'Assemble Individual Step Boxes: Glue and screw shelf tops to vertical stiles using 90° clamps and square corners.',
      'Mount Back Ledger Rail: Anchor the 48" mounting rail level directly into wall studs with 3" structural screws.',
      'Attach First Base Shelf: Secure bottom-most step to mounting rail, checking level in both directions.',
      'Install Ascending Steps: Progressively interlock and screw each step onto the previous riser up to the 5th tier.',
      'Apply Protective Finish: Stain in desired tone (walnut, oak, or natural) and seal with 2 coats of satin clear finish.',
      'Install LED Lighting & Decorate: Adhere warm LED strip underneath shelf steps and curate plants, books, and decor.'
    ]
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLiveSearch();
  initMobileDrawer();
  initPinterestTriggers();
  initNewsletterForm();
  initBlueprintModal();
});

/**
 * 1. BLUEPRINT & SPECIFICATION MODAL
 */
function initBlueprintModal() {
  const modal = document.getElementById('blueprintModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.blueprint-close-btn');

  function openBlueprint(projectId) {
    const project = ALPHA_PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    modal.querySelector('#bpImage').src = project.image;
    modal.querySelector('#bpImage').alt = project.title;
    modal.querySelector('#bpTitle').textContent = project.title;
    modal.querySelector('#bpCategory').textContent = project.category;
    modal.querySelector('#bpDifficulty').textContent = project.difficulty;
    modal.querySelector('#bpTime').textContent = project.time;
    modal.querySelector('#bpBudget').textContent = project.budget;
    modal.querySelector('#bpDimensions').textContent = project.dimensions;

    // Materials list
    const matList = modal.querySelector('#bpMaterials');
    matList.innerHTML = project.materials.map(m => `<li>${escapeHtml(m)}</li>`).join('');

    // Tools list
    const toolList = modal.querySelector('#bpTools');
    toolList.innerHTML = project.tools.map(t => `<li>${escapeHtml(t)}</li>`).join('');

    // Steps list
    const stepList = modal.querySelector('#bpSteps');
    stepList.innerHTML = project.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('');

    // Pin share button setup
    const pinBtn = modal.querySelector('#bpPinBtn');
    if (pinBtn) {
      pinBtn.onclick = (e) => {
        e.preventDefault();
        const shareUrl = encodeURIComponent(window.location.origin + '/' + project.categorySlug);
        const shareImg = encodeURIComponent(project.pinImage || project.image);
        const shareDesc = encodeURIComponent(`${project.title} - Free Woodworking Blueprint & Cut List. Build time: ${project.time}. Budget: ${project.budget}. Save this pin for your next workshop build!`);
        window.open(`https://www.pinterest.com/pin/create/button/?url=${shareUrl}&media=${shareImg}&description=${shareDesc}`, '_blank', 'width=750,height=600');
      };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBlueprint() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach triggers
  document.querySelectorAll('[data-open-blueprint]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pid = btn.getAttribute('data-open-blueprint');
      openBlueprint(pid);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeBlueprint);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeBlueprint();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeBlueprint();
    }
  });

  // Export globally for search results click
  window.openBlueprintFromId = openBlueprint;
}

/**
 * 2. LIVE SEARCH SYSTEM & MODAL
 */
function initLiveSearch() {
  const triggerBtns = document.querySelectorAll('.btn-search-trigger, [data-trigger="search"]');
  const modal = document.getElementById('searchModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.search-close-btn');
  const input = modal.querySelector('.search-input-field');
  const resultsContainer = modal.querySelector('.search-results-list');

  function openSearch() {
    modal.classList.add('active');
    setTimeout(() => input && input.focus(), 50);
    renderSearchResults('');
  }

  function closeSearch() {
    modal.classList.remove('active');
    if (input) input.value = '';
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  if (input) {
    input.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    
    let filtered = ALPHA_PROJECTS_DATA;
    if (query) {
      filtered = ALPHA_PROJECTS_DATA.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.keywords.toLowerCase().includes(query)
      );
    }

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #78716c;">
          <p style="font-size: 1.1rem; margin-bottom: 0.25rem;">No woodworking projects found for "<strong>${escapeHtml(query)}</strong>"</p>
          <span style="font-size: 0.85rem;">Try searching for "planter", "bench", "table", "shoe rack", or "workbench".</span>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(post => `
      <div class="search-result-item" style="cursor: pointer;" onclick="document.getElementById('searchModal').classList.remove('active'); if (window.openBlueprintFromId) { window.openBlueprintFromId('${post.id}'); } else { window.location.href = '${post.categorySlug}'; }">
        <div class="search-result-info">
          <h4>${escapeHtml(post.title)}</h4>
          <p>${escapeHtml(post.time)} â€¢ Est. ${escapeHtml(post.budget)} â€¢ ${escapeHtml(post.difficulty)}</p>
        </div>
        <span class="search-result-tag">${escapeHtml(post.category)}</span>
      </div>
    `).join('');
  }
}

/**
 * 3. MOBILE NAVIGATION DRAWER
 */
function initMobileDrawer() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!menuBtn || !drawer || !overlay) return;

  function toggleMenu(open) {
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn.addEventListener('click', () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
  overlay.addEventListener('click', () => toggleMenu(false));
}

/**
 * 4. PINTEREST PIN INTEGRATION
 */
function initPinterestTriggers() {
  document.querySelectorAll('[data-pin-share]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = encodeURIComponent(btn.dataset.pinUrl || window.location.href);
      const media = encodeURIComponent(btn.dataset.pinMedia || '');
      const desc = encodeURIComponent(btn.dataset.pinDesc || document.title);
      
      const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${desc}`;
      window.open(pinUrl, 'pinterest_share', 'width=750,height=600,toolbar=0,menubar=0,location=0');
    });
  });
}

/**
 * 5. EMAIL NEWSLETTER FORM
 */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';

      if (!email || !email.includes('@')) {
        showToast('âš ï¸ Please enter a valid email address.');
        return;
      }

      form.innerHTML = `
        <div style="background: rgba(45, 90, 63, 0.1); border: 1px solid var(--accent-forest); padding: 1rem 1.5rem; border-radius: var(--radius-md); text-align: center; color: var(--accent-forest-dark);">
          <strong style="display: block; font-size: 1.1rem; margin-bottom: 0.25rem;">ðŸªµ Welcome to the Workshop!</strong>
          <p style="margin: 0; font-size: 0.9rem;">Check your inbox shortly for your first set of free cut lists and woodworking blueprints.</p>
        </div>
      `;
      showToast('ðŸŽ‰ Successfully subscribed! Welcome to AlphaWoodworkingPlan.');
    });
  });
}

/**
 * 6. UTILITY: TOAST NOTIFICATIONS
 */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
