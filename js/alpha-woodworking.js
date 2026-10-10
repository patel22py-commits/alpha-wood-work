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
    id: 'backyard-planter-box',
    title: 'Cedar Outdoor Planter Box',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Beginner',
    time: '2â€“3 Hours',
    budget: '$30 â€“ $45',
    dimensions: '18" W Ã— 18" L Ã— 16" H',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'Durable rot-resistant Western Red Cedar planter box with interior drainage slats, landscape fabric liner, and clean top cap trim.',
    keywords: 'backyard planter, outdoor cedar planter box, diy flower box, patio gardening build',
    materials: [
      '3 boards â€“ 1x6 Ã— 8 ft Western Red Cedar (or Redwood)',
      '1 board â€“ 2x2 Ã— 8 ft Cedar (internal corner cleats)',
      '1 box â€“ 1-5/8" Exterior coated deck screws (Tan or Stainless)',
      'Landscape fabric mesh roll & 1/2" exterior staples'
    ],
    tools: ['Miter saw or hand saw', 'Cordless drill & driver bits', 'Countersink bit', 'Speed square & tape measure'],
    steps: [
      'Cut side slats: Cut twelve pieces of 1x6 cedar to 16.5" lengths.',
      'Cut corner cleats: Cut four pieces of 2x2 cedar to 14.5" length.',
      'Assemble side panels: Fasten 3 slats per side to the corner cleats using exterior deck screws and countersunk pilot holes.',
      'Install slatted base: Add 2x2 bottom runners and fit 3 spaced slats with 1/4" drainage gaps.',
      'Attach top mitered frame: Cut 1x6 top cap pieces with 45Â° miters for a clean finished reveal.',
      'Line with landscape fabric: Staple breathable landscape fabric inside to retain soil while allowing free drainage.'
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
    id: 'backyard-raised-garden-bed',
    title: '4x8 ft Ergonomic Raised Garden Bed',
    category: 'Backyard Projects',
    categorySlug: 'backyard-projects.html',
    difficulty: 'Beginner',
    time: '2â€“3 Hours',
    budget: '$60 â€“ $95',
    dimensions: '4\' W Ã— 8\' L Ã— 12" H',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&q=80',
    pinImage: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&h=1500&q=80',
    excerpt: 'Deep vegetable raised bed featuring thick 2x6 untreated cedar walls, reinforced 4x4 internal corner posts, and rodent-proof hardware cloth.',
    keywords: 'raised garden bed, 4x8 garden bed, cedar vegetable planter, backyard gardening diy',
    materials: [
      '6 boards â€“ 2x6 Ã— 8 ft Untreated Cedar, Hem-Fir, or Cypress',
      '1 post â€“ 4x4 Ã— 6 ft Untreated Cedar (cut into 4 corner posts)',
      '1 roll â€“ 1/2" Galvanized hardware wire cloth (4x8 ft)',
      '1 box â€“ 3" Heavy-duty exterior construction screws'
    ],
    tools: ['Circular saw or hand saw', 'Impact driver', 'Heavy-duty staple gun & tin snips', 'Level'],
    steps: [
      'Cut end boards: Cut three 8 ft boards exactly in half to create six 4 ft end planks.',
      'Cut corner posts: Cut the 4x4 post into four 12" corner stanchions.',
      'Assemble side walls: Screw two 2x6 Ã— 8 ft planks into corner posts using two 3" screws per joint.',
      'Attach end walls: Fasten the 4 ft end planks to complete the rectangular perimeter.',
      'Square the frame: Measure diagonals to confirm equal lengths and verify corners at 90Â°.',
      'Attach hardware cloth: Turn bed over and staple galvanized hardware cloth to the bottom edges to prevent burrowing pests.'
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
