/**
 * AlphaWoodworkingPlan - Main JavaScript Engine
 * Live Instant Search, Blueprint Modal Viewer, Pinterest Pin Sharing, and Category Navigation
 */

const ALPHA_PROJECTS_DATA = [
  // ==========================================
  // 1. BACKYARD PROJECTS
  // ==========================================
  {
    id: '16000-woodworking-plans',
    title: '16,000+ Woodworking Plans (Master DIY Collection)',
    category: 'Backyard Projects',
    categorySlug: '16000-woodworking-plans.html',
    difficulty: 'All Skill Levels (Beginner to Advanced)',
    time: 'Flexible Weekend Projects',
    budget: 'Plans & Blueprints Collection',
    dimensions: '16,000+ Dimensioned Plans Library',
    image: 'images/16000-woodworking-plans.jpg',
    pinImage: 'images/16000-woodworking-plans.jpg',
    excerpt: 'Stop searching for woodworking ideas. Explore an extensive collection advertised as 16,000+ woodworking plans with ideas for furniture, backyard builds, and workshop projects.',
    keywords: '16000 woodworking plans, woodworking plans collection, DIY furniture plans, backyard woodworking projects, workshop plans',
    materials: [
      'Dimensional lumber (2x4, 2x6, 1x4, 1x6) and sheet goods',
      'Solid hardwoods (Oak, Maple, Walnut, Cherry) for furniture',
      'Exterior weather-resistant cedar, redwood, and cypress',
      'Comprehensive cut lists and hardware schedules included per plan'
    ],
    tools: [
      'Basic hand tools: tape measure, speed square, level',
      'Essential cutting tools: circular saw, miter saw, or table saw',
      'Joinery: cordless drill/driver, pocket hole jig, clamps',
      'Finishing: random orbital sander and finishing supplies'
    ],
    steps: [
      'Explore Collection: Browse 16,000+ categorized plans across furniture, outdoor, and shop categories.',
      'Select Your Project: Choose a build tailored precisely to your skill level, available tools, and budget.',
      'Review Cut List: Follow the dimensioned schematics and lumber shopping checklist before purchasing materials.',
      'Cut & Join: Follow step-by-step 3D exploded diagrams and joinery instructions.',
      'Sand & Finish: Apply your choice of natural oil, protective spar urethane, or custom stain.'
    ]
  },
  {
    id: 'convertible-porch-swing-daybed',
    title: 'DIY Convertible Porch Swing Daybed (2-in-1 Outdoor Swing)',
    category: 'Backyard Projects',
    categorySlug: 'diy-convertible-porch-swing-daybed.html',
    difficulty: 'Intermediate–Advanced',
    time: '10–12 Hours',
    budget: '$140 – $220',
    dimensions: '78" W × 48" D × 80" H (198 cm × 122 cm × 203 cm)',
    image: 'images/diy-convertible-porch-swing-daybed.jpg',
    pinImage: 'images/diy-convertible-porch-swing-daybed.jpg',
    excerpt: 'Transform your backyard with a wooden porch swing that converts into a relaxing daybed. Features slatted wooden backrest, adjustable side arms, and outdoor cushions.',
    keywords: 'porch swing daybed, convertible swing bed, backyard daybed, outdoor swing, 2-in-1 swing daybed, wooden porch swing',
    materials: [
      'Outdoor-suitable lumber for the main frame (Cedar, Cypress, or Treated Timber)',
      'Lumber for the seat, backrest, and adjustable side arms',
      'Structural fasteners and lag screws suitable for exterior use',
      'Appropriate hinges or conversion hardware rated for loads',
      'Properly engineered suspension system (heavy-duty welded chains & eye bolts)',
      'Suitable connection hardware for the overhead beam',
      'Exterior-rated protective wood finish or stain',
      'Outdoor cushions and removable weather-resistant covers',
      'Anchoring hardware for installation surface'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or miter saw',
      'Cordless drill and driver set',
      'Wood clamps (assorted sizes)',
      'Random orbital sander (80 to 220 grit)',
      'Spirit level (4-foot and torpedo)',
      'Safety glasses and hearing protection',
      'Socket set or wrenches for suspension bolts'
    ],
    steps: [
      'Choose Location: Select porch, patio, or freestanding A-frame arbor with ample clearance.',
      'Draw Main Frame: Draft vertical posts, overhead beam, seat frame, and conversion arm geometry.',
      'Cut & Assemble Frame: Measure, cut, and join main structural members with square corners and exterior fasteners.',
      'Build Seat & Backrest: Assemble rigid slatted seat and ergonomic backrest designed for load-bearing strength.',
      'Create Convertible Side Arms: Mount pivot hinges, movement tracks, and secure locking pins for daybed mode.',
      'Install Suspension System: Install rated eye bolts, heavy-duty chains, and overhead beam mounting hardware.',
      'Finish the Wood: Sand smooth to 180 grit and apply multiple coats of exterior UV-resistant finish.',
      'Add Outdoor Cushions: Install weather-resistant cushions sized to fit without obstructing conversion latches.',
      'Inspect & Safety Test: Inspect all connections and test conversion mechanism thoroughly before regular use.'
    ]
  },
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
    id: 'adirondack-chair-with-side-table',
    title: 'DIY Adirondack Chair with Built-In Side Table',
    category: 'Backyard Projects',
    categorySlug: 'diy-adirondack-chair-with-built-in-side-table.html',
    difficulty: 'Intermediate',
    time: '6–8 Hours',
    budget: '$65 – $110',
    dimensions: '30" W × 36" D × 40" H (Table: 12" × 10")',
    image: 'images/diy-adirondack-chair-with-built-in-side-table.jpg',
    pinImage: 'images/diy-adirondack-chair-with-built-in-side-table.jpg',
    excerpt: 'Comfortable wooden outdoor lounge chair with an integrated 12" × 10" drink table, wide armrests, ergonomic slatted backrest, and optional cup holder.',
    keywords: 'adirondack chair with side table, outdoor lounge chair, diy patio chair, lawn chair with cup holder, wooden adirondack plans',
    materials: [
      'Outdoor-suitable lumber for the frame and legs (1" × 6" / 1" × 4" boards)',
      'Boards for the seat and backrest slats',
      'Lumber for the armrests and side table (12" × 10" surface)',
      'Exterior-rated screws and bolts (outdoor grade)',
      'Suitable waterproof wood glue for compatible joints',
      'Optional structural brackets for extra rigidity',
      'Sandpaper (80, 120, and 180–220 grit)',
      'Exterior-rated stain, paint, or weather-resistant finish',
      'Optional cup holder designed for outdoor use'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or miter saw',
      'Drill and driver with countersink bits',
      'Clamps & random orbital sander',
      'Torpedo level & safety glasses',
      'Jigsaw for curved backrest slats and armrests'
    ],
    steps: [
      'Create Detailed Design: Draw chair front, side, and back profiles with seat angle, armrest height, and 12" × 10" side table dimensions.',
      'Prepare the Lumber: Measure, mark, and cut frame pieces, seat slats, fan-back slats, armrests, and side table components.',
      'Build the Base Frame: Assemble legs and lower support runners with outdoor joinery and check that base sits square and level.',
      'Install the Seat Slats: Fasten curved seat slats with consistent drainage spacing and soften edges to eliminate splinters.',
      'Assemble the Backrest: Fit backrest supports and mount tapered fan-back slats at comfortable ergonomic angle.',
      'Attach the Armrests: Install broad armrests at uniform height on both sides using structural screws.',
      'Build Integrated Side Table: Construct 12" × 10" tabletop and securely mount to side frame with rigid under-cleat support.',
      'Add Optional Cup Holder: Cut recessed opening or mount outdoor drink holder preserving tabletop integrity.',
      'Sand & Apply Finish: Sand all surfaces smooth to 180 grit and apply 3 coats of exterior-rated weather-resistant finish.',
      'Final Safety Inspection: Verify structural connections, test stability on flat surface, and confirm weight capacity up to 300+ lbs.'
    ]
  },
  {
    id: 'wooden-treasure-chest',
    title: 'DIY Wooden Treasure Chest',
    category: 'Backyard Projects',
    categorySlug: 'diy-wooden-treasure-chest.html',
    difficulty: 'Intermediate',
    time: '6–10 Hours',
    budget: '$50 – $120',
    dimensions: '32" L × 18" W × 18" H (Open: 28" H)',
    image: 'images/diy-wooden-treasure-chest.jpg',
    pinImage: 'images/diy-wooden-treasure-chest.jpg',
    excerpt: 'Rustic wooden storage chest with curved lid, decorative metal straps, side ring handles, antique latch, and spacious interior for blankets or keepsakes.',
    keywords: 'treasure chest plans, diy wooden trunk, pirate chest woodworking, rustic storage box, blanket chest, curved lid box',
    materials: [
      '1x6 Lumber for panels (Cedar, Pine, or Redwood)',
      '1x4 Lumber for lid slats and rails',
      '1x2 Lumber for trims, cleats, and supports',
      'Heavy-duty hinges (2 pcs)',
      'Wood screws 3" & 2" (outdoor rated)',
      'Decorative latch with lock option',
      'Metal ring handles (2 pcs)',
      'Decorative metal straps (5–6 pcs)',
      'Decorative bolts or wood screws',
      'Exterior wood glue',
      'Wood stain or paint & clear sealer',
      'Sandpaper (120, 180, and 220 grit)'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or miter saw',
      'Jigsaw or bandsaw for curved R6" lid profile',
      'Drill and driver with countersink bits',
      'Bar clamps & strap clamps',
      'Random orbital sander',
      'Compass or string trammel for arch layout',
      'Safety glasses and hearing protection'
    ],
    steps: [
      'Plan Chest Dimensions: Sketch 32" L × 18" W × 18" H box with 6" arched lid and verify interior clearances.',
      'Cut Bottom and Side Panels: Accurately cut 1x6 panels for front, back, bottom, and side walls.',
      'Assemble Main Box: Join front, back, and side panels to bottom with glue and countersunk screws, checking diagonal squareness.',
      'Add Corner Supports: Install interior 1x2 corner cleats and exterior decorative vertical corner trim.',
      'Design Curved Lid: Draft R6" (150 mm) arch template on 1x6 stock and test profile with scrap wood before cutting ribs.',
      'Assemble the Lid: Secure 1x4 slats across curved end ribs, ensuring uniform arch without twisting.',
      'Install Hinges: Mount heavy-duty hinges and internal safety lid support mechanism to prevent accidental slamming.',
      'Add Decorative Metal Straps: Mount antique metal straps, corner accents, and through-bolted metal ring side handles.',
      'Install Front Latch: Center and screw vintage latch and optional padlock hasp.',
      'Sand and Finish: Sand all surfaces to 220 grit, apply rich rustic stain, and protect with 2–3 coats of clear finish.',
      'Final Inspection: Cycle lid, inspect safety supports, verify load rating on handles, and allow full 72-hour cure.'
    ]
  },
  {
    id: 'space-saving-tailgate-workbench',
    title: 'DIY Foldable Tailgate Workbench',
    category: 'Space-Saving Projects',
    categorySlug: 'diy-foldable-tailgate-workbench.html',
    difficulty: 'Intermediate',
    time: '6–8 Hours',
    budget: '$85 – $140',
    dimensions: '48" W × 24" D (Surface) | 24" H Legs',
    image: 'images/diy-foldable-tailgate-workbench.jpg',
    pinImage: 'images/diy-foldable-tailgate-workbench.jpg',
    excerpt: 'Portable truck bed woodworking station with 48" × 24" fold-down work surface, folding support legs, and tool storage panel.',
    keywords: 'tailgate workbench, portable truck workshop, folding workbench diy, space saving workbench, truck bed table',
    materials: [
      '1 sheet – 3/4" Exterior ACX Plywood (cut to 48" × 24" tabletop)',
      '3 boards – 2x4 × 8 ft Kiln-Dried Lumber or Hardwood (frame)',
      '1 panel – 1/2" Plywood or Pegboard (tool storage backboard)',
      '1 pair – Heavy-duty locking folding leg brackets (rated 300+ lbs)',
      '1 pair – Stainless steel piano hinges or heavy tailgate pivots',
      'Box of 2-1/2" exterior wood screws and locking mounting bolts',
      'Exterior marine spar varnish or durable urethane finish'
    ],
    tools: ['Circular saw or track saw', 'Drill and driver set', 'Combination square & level', 'Orbital sander with 120/180 grit', 'Safety glasses'],
    steps: [
      'Inspect Truck & Tailgate: Check tailgate construction, attachment points, and clearance.',
      'Cut Tabletop & Frame: Cut 3/4" plywood top to 48" × 24" and assemble rigid perimeter frame.',
      'Mount Hinges & Folding Mechanism: Install heavy-duty pivots allowing tabletop to drop down flush.',
      'Install Folding Support Legs: Mount dual 24" support legs with positive locking brace pins.',
      'Build Tool Storage Panel: Fasten upright rear backboard with custom tool slots and parts containers.',
      'Apply Weather-Resistant Finish: Sand smooth and seal with 3 coats of exterior spar varnish.',
      'Safety Inspection & Test: Verify latch engagement and test under gradual load.'
    ]
  },

  // ==========================================
  // 2. DIY FURNITURE
  // ==========================================
  {
    id: 'giant-connect-4-game',
    title: 'DIY Giant Connect 4 Game (Oversized Backyard Game)',
    category: 'DIY Furniture',
    categorySlug: 'diy-giant-connect-4-game.html',
    difficulty: 'Intermediate',
    time: '6–8 Hours',
    budget: '$75 – $130',
    dimensions: '56" W × 48" H × 24" D (6.5" Holes | 6" Discs)',
    image: 'images/diy-giant-connect-4-game.jpg',
    pinImage: 'images/diy-giant-connect-4-game.jpg',
    excerpt: 'Oversized wooden Connect Four game for backyard parties, family game nights, and outdoor fun featuring 42 circular openings and playing discs.',
    keywords: 'giant connect 4, connect four game, backyard game, yard game woodworking, oversized connect 4, outdoor wooden games',
    materials: [
      'Suitable plywood or solid wood panels for the game grid (7 cols × 6 rows)',
      'Lumber for side frames and wide stability base (2x4 / 2x6 framing)',
      'Appropriate screws, carriage bolts, and structural fasteners',
      'Wooden or composite playing discs in 2 contrasting colors (42 discs total)',
      'Exterior or interior protective finish (spar urethane, paint, or wood stain)',
      'Sandpaper (80, 120, and 220 grits)',
      'Optional hardware for removable release bar or collection tray'
    ],
    tools: [
      'Tape measure, pencil & combination square',
      'Circular saw or table saw',
      'Cordless drill and driver set',
      'Hole saw (6.5" diameter) or jigsaw for circular openings',
      'Bar clamps & quick-grip clamps',
      'Random orbital sander',
      'Spirit level',
      'Safety glasses and hearing protection'
    ],
    steps: [
      'Design the Grid: Layout 7 columns and 6 rows with consistent spacing and structural margins.',
      'Cut the Game Panel: Cut panels to 56" × 48" and drill 42 smooth 6.5" circular openings.',
      'Make Playing Discs: Fabricate 42 contrasting 6" discs (21 red, 21 yellow) with chamfered edges.',
      'Build Side Frames: Assemble vertical upright timber posts with internal guide channels.',
      'Build Wide Base: Construct 24" wide angled support feet for maximum tipping resistance.',
      'Assemble the Board: Secure game panels into side uprights and mount firmly to base.',
      'Sand & Apply Finish: Sand all holes and surfaces smooth, sealing with outdoor UV protective finish.',
      'Test Disc Movement: Drop test sample discs through every column to verify unobstructed drop.',
      'Play & Enjoy: Set up on level ground, invite friends, and enjoy classic 4-in-a-row outdoor fun!'
    ]
  },
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
