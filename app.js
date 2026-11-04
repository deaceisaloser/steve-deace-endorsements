/**
 * Steve Deace Endorsement Scorecard - Application Logic
 * Analysis: 66.7% of endorsed candidates fail to win targeted office (10 Defeats vs 5 Wins)
 */

// Dataset of Steve Deace endorsed candidates (Wins & Losses)
// Criterion: "A win is only counted if the endorsed candidate won the seat."
const CANDIDATES = [
  // --- DEFEATS / SEATS LOST (10 Races) ---
  {
    id: "trump-2020",
    name: "Donald Trump",
    year: 2020,
    outcome: "LOSS",
    wonSeat: false,
    office: "Presidential",
    raceName: "2020 U.S. Presidential General Election",
    state: "National",
    lossType: "General Election Defeat",
    candidateVote: "232 Electoral Votes (46.8%)",
    candidateNum: 46.8,
    winnerName: "Joe Biden (Democrat)",
    winnerVote: "306 Electoral Votes (51.3%)",
    winnerNum: 51.3,
    marginText: "Lost General Election (Incumbent Defeated)",
    marginValue: 4.5,
    deaceQuote: "Donald Trump is the only barrier standing between us and the total destruction of the American republic by the radical left.",
    quoteDate: "October 2020",
    quoteUrl: "https://www.blazetv.com/watch/shows/steve-deace-show",
    quoteSourceTitle: "The Steve Deace Show / BlazeTV 2020 Election Special",
    contextHtml: `
      <p>Steve Deace endorsed incumbent President Donald Trump for re-election in 2020, framing his presidency as an essential bulwark against progressive policy initiatives.</p>
      <p>Trump lost the November 2020 general election to Democratic challenger Joe Biden, receiving 232 electoral votes to Biden's 306, making Trump the first incumbent president to lose a general election since 1992.</p>
    `
  },
  {
    id: "desantis-2024",
    name: "Ron DeSantis",
    year: 2024,
    outcome: "LOSS",
    wonSeat: false,
    office: "Presidential",
    raceName: "2024 GOP Presidential Primary",
    state: "National / Iowa",
    lossType: "National Primary Defeat",
    candidateVote: "21.2%",
    candidateNum: 21.2,
    winnerName: "Donald Trump",
    winnerVote: "51.0%",
    winnerNum: 51.0,
    marginText: "Lost Iowa Caucus by 29.8% & suspended campaign",
    marginValue: 29.8,
    deaceQuote: "Ron DeSantis is the most proven conservative governor of my lifetime and the candidate best equipped to defeat the establishment.",
    quoteDate: "August 2023",
    quoteUrl: "https://www.presidency.ucsb.edu/documents/press-release-desantis-builds-momentum-iowa-with-endorsements-prominent-leaders-activists",
    quoteSourceTitle: "The American Presidency Project Press Release",
    contextHtml: `
      <p>Steve Deace endorsed Florida Governor Ron DeSantis in August 2023, framing him as the premier executive leader capable of enacting conservative policies and beating Donald Trump in a primary.</p>
      <p>Deace served as a primary surrogate in Iowa, hosting panel discussions and devoting substantial coverage on his show to DeSantis's campaign.</p>
      <p>Despite the high-profile endorsement, DeSantis suffered a 30-point loss in the Iowa Caucuses (21.2% to Trump's 51.0%) and suspended his campaign days later.</p>
    `
  },
  {
    id: "steen-2026",
    name: "Adam Steen",
    year: 2026,
    outcome: "LOSS",
    wonSeat: false,
    office: "Governor",
    raceName: "2026 Iowa Gubernatorial GOP Primary",
    state: "Iowa",
    lossType: "Primary Defeat",
    candidateVote: "Defeated",
    candidateNum: 15.0,
    winnerName: "Zach Lahn",
    winnerVote: "Primary Nominee",
    winnerNum: 50.0,
    marginText: "Campaign failed to gain polling traction",
    marginValue: 35.0,
    deaceQuote: "Adam Steen has the conviction, courage, and backbone to stand up to the political establishment in Des Moines.",
    quoteDate: "November 2025",
    quoteUrl: "https://theiowastandard.com/steve-deace-endorses-adam-steen-for-governor-of-iowa/",
    quoteSourceTitle: "The Iowa Standard Endorsement Announcement",
    contextHtml: `
      <p>In November 2025, Steve Deace endorsed former Iowa Department of Administrative Services Director Adam Steen for Governor of Iowa.</p>
      <p>Steen's primary campaign struggled to gain traction among Republican voters. Deace later conceded on his podcast that Steen's campaign "just never took off," resulting in another primary defeat for his preferred candidate.</p>
    `
  },
  {
    id: "carlin-2022",
    name: "Jim Carlin",
    year: 2022,
    outcome: "LOSS",
    wonSeat: false,
    office: "U.S. Senate",
    raceName: "2022 Iowa U.S. Senate GOP Primary",
    state: "Iowa",
    lossType: "Primary Defeat",
    candidateVote: "26.4%",
    candidateNum: 26.4,
    winnerName: "Chuck Grassley",
    winnerVote: "73.4%",
    winnerNum: 73.4,
    marginText: "Defeated by 47.0% margin",
    marginValue: 47.0,
    deaceQuote: "Jim Carlin is a constitutional warrior willing to challenge the entrenched establishment in Des Moines and Washington.",
    quoteDate: "June 2022",
    quoteUrl: "https://theiowastandard.com/steve-deace-endorses-jim-carlin-for-u-s-senate/",
    quoteSourceTitle: "The Iowa Standard / The Blaze Op-Ed",
    contextHtml: `
      <p>Deace backed State Senator Jim Carlin in his primary challenge against 42-year incumbent U.S. Senator Chuck Grassley.</p>
      <p>Carlin lost by a landslide 47 percentage points (26.4% to 73.4%).</p>
    `
  },
  {
    id: "moore-2017",
    name: "Roy Moore",
    year: 2017,
    outcome: "LOSS",
    wonSeat: false,
    office: "U.S. Senate",
    raceName: "2017 Alabama U.S. Senate Special Election",
    state: "Alabama",
    lossType: "General Election Defeat",
    candidateVote: "48.3%",
    candidateNum: 48.3,
    winnerName: "Doug Jones (Democrat)",
    winnerVote: "50.0%",
    winnerNum: 50.0,
    marginText: "Lost General Election by 1.7%",
    marginValue: 1.7,
    deaceQuote: "We cannot allow the media and GOP establishment to destroy a conservative judge based on unsubstantiated hit pieces.",
    quoteDate: "November 2017",
    quoteUrl: "https://www.blazetv.com/watch/shows/steve-deace-show",
    quoteSourceTitle: "The Steve Deace Show / BlazeTV Broadcast",
    contextHtml: `
      <p>Steve Deace aggressively defended Republican nominee Roy Moore during the 2017 Alabama Senate special election amid national controversy.</p>
      <p>Moore lost the general election to Democrat Doug Jones, becoming the first Republican to lose an Alabama Senate race in a quarter-century.</p>
    `
  },
  {
    id: "cruz-2016",
    name: "Ted Cruz",
    year: 2016,
    outcome: "LOSS",
    wonSeat: false,
    office: "Presidential",
    raceName: "2016 GOP Presidential Nomination",
    state: "National / Iowa",
    lossType: "National Primary Defeat",
    candidateVote: "27.6% (Iowa)",
    candidateNum: 27.6,
    winnerName: "Donald Trump",
    winnerVote: "Nominee",
    winnerNum: 45.0,
    marginText: "Won Iowa Caucus, but lost national nomination race to Trump",
    marginValue: 17.4,
    deaceQuote: "Ted Cruz is the constitutional conservative standard-bearer who can unite the grassroots and defeat Washington.",
    quoteDate: "August 19, 2015",
    quoteUrl: "https://www.presidency.ucsb.edu/documents/press-release-cruz-for-president-announces-endorsement-steve-deace",
    quoteSourceTitle: "The American Presidency Project Official Campaign Release",
    contextHtml: `
      <p>Deace served as Ted Cruz's leading surrogate in Iowa. While Cruz won the Iowa Caucuses with 27.6%, his national campaign collapsed in subsequent primaries, losing the Republican nomination to Donald Trump.</p>
    `
  },
  {
    id: "clovis-2014",
    name: "Sam Clovis",
    year: 2014,
    outcome: "LOSS",
    wonSeat: false,
    office: "U.S. Senate",
    raceName: "2014 Iowa U.S. Senate GOP Primary",
    state: "Iowa",
    lossType: "Primary Defeat",
    candidateVote: "18.0%",
    candidateNum: 18.0,
    winnerName: "Joni Ernst",
    winnerVote: "56.1%",
    winnerNum: 56.1,
    marginText: "Finished 2nd place, lost by 38.1%",
    marginValue: 38.1,
    deaceQuote: "Sam Clovis is the candidate most prepared to actually govern according to constitutional principles.",
    quoteDate: "May 2014",
    quoteUrl: "https://www.bleedingheartland.com/2014/05/14/iowa-senate-gop-race-conservative-activists-rally-around-clovis/",
    quoteSourceTitle: "Bleeding Heartland Endorsement Coverage",
    contextHtml: `
      <p>Deace endorsed Sam Clovis in the 2014 Republican primary to replace retiring Sen. Tom Harkin. Clovis suffered a 38-point defeat to Joni Ernst.</p>
    `
  },
  {
    id: "gingrich-2012",
    name: "Newt Gingrich",
    year: 2012,
    outcome: "LOSS",
    wonSeat: false,
    office: "Presidential",
    raceName: "2012 GOP Presidential Primary",
    state: "National / Iowa",
    lossType: "National Primary Defeat",
    candidateVote: "13.3%",
    candidateNum: 13.3,
    winnerName: "Rick Santorum / Mitt Romney",
    winnerVote: "24.6%",
    winnerNum: 24.6,
    marginText: "4th in Iowa Caucuses; lost national nomination to Romney",
    marginValue: 11.3,
    deaceQuote: "Newt Gingrich offers a real means to undo the influence of the judicial left and confront the political class.",
    quoteDate: "December 30, 2011",
    quoteUrl: "https://www.presidency.ucsb.edu/documents/press-release-iowa-talk-show-host-steve-deace-endorses-newt-gingrich-for-president",
    quoteSourceTitle: "The American Presidency Project Archives",
    contextHtml: `
      <p>Deace endorsed Newt Gingrich days before the 2012 Iowa Caucuses. Gingrich finished 4th in Iowa (13.3%) and failed to secure the nomination.</p>
    `
  },
  {
    id: "vanderplaats-2010",
    name: "Bob Vander Plaats",
    year: 2010,
    outcome: "LOSS",
    wonSeat: false,
    office: "Governor",
    raceName: "2010 Iowa Gubernatorial GOP Primary",
    state: "Iowa",
    lossType: "Primary Defeat",
    candidateVote: "43.1%",
    candidateNum: 43.1,
    winnerName: "Terry Branstad",
    winnerVote: "50.3%",
    winnerNum: 50.3,
    marginText: "Lost primary by 7.2%",
    marginValue: 7.2,
    deaceQuote: "Bob Vander Plaats represents the true conservative revival Iowa desperately needs against establishment retreads.",
    quoteDate: "May 2010",
    quoteUrl: "https://www.bleedingheartland.com/2010/05/26/steve-deace-endorses-bob-vander-plaats/",
    quoteSourceTitle: "Bleeding Heartland Endorsement Report",
    contextHtml: `
      <p>Deace championed social conservative Bob Vander Plaats in the 2010 primary for Governor of Iowa. Vander Plaats lost the primary to former Governor Terry Branstad.</p>
    `
  },
  {
    id: "huckabee-2008",
    name: "Mike Huckabee",
    year: 2008,
    outcome: "LOSS",
    wonSeat: false,
    office: "Presidential",
    raceName: "2008 GOP Presidential Nomination",
    state: "National / Iowa",
    lossType: "National Primary Defeat",
    candidateVote: "34.4% (Iowa)",
    candidateNum: 34.4,
    winnerName: "John McCain",
    winnerVote: "Nominee",
    winnerNum: 47.0,
    marginText: "Won Iowa Caucus, but lost national nomination to John McCain",
    marginValue: 12.6,
    deaceQuote: "Mike Huckabee speaks to the heart of social conservatives with unmatched authenticity and conviction.",
    quoteDate: "November 2007",
    quoteUrl: "https://www.presidency.ucsb.edu/documents/press-release-iowa-talk-show-host-steve-deace-supports-huckabee",
    quoteSourceTitle: "The American Presidency Project Campaign Announcement",
    contextHtml: `
      <p>Deace championed Mike Huckabee in 2008. While Huckabee won the Iowa Caucuses, he lost the Republican nomination to John McCain.</p>
    `
  },

  // --- SUCCESSES / SEATS WON (5 Races) ---
  {
    id: "trump-2024",
    name: "Donald Trump",
    year: 2024,
    outcome: "WIN",
    wonSeat: true,
    office: "Presidential",
    raceName: "2024 U.S. Presidential Election",
    state: "National",
    lossType: "General Election Victory",
    candidateVote: "Elected (President)",
    candidateNum: 50.3,
    winnerName: "Donald Trump",
    winnerVote: "312 Electoral Votes",
    winnerNum: 50.3,
    marginText: "WON THE SEAT (Secured Presidential Election)",
    marginValue: 0,
    deaceQuote: "Donald Trump is the necessary weapon to break the regime and defeat the radical left in the general election.",
    quoteDate: "July 2024",
    quoteUrl: "https://theiowastandard.com/steve-deace-endorses-donald-trump-for-president/",
    quoteSourceTitle: "The Iowa Standard Endorsement Announcement",
    contextHtml: `
      <p>Following the conclusion of the 2024 Republican presidential primary, Steve Deace endorsed Donald Trump for the general election, rallying conservative voters to secure the presidency against the Democratic ticket.</p>
      <p>Trump went on to win both the Electoral College (312 votes) and the national popular vote, taking back the White House.</p>
    `
  },
  {
    id: "roy-2018",
    name: "Chip Roy",
    year: 2018,
    outcome: "WIN",
    wonSeat: true,
    office: "U.S. House",
    raceName: "2018 U.S. House Texas 21st District",
    state: "Texas",
    lossType: "General Election Victory",
    candidateVote: "50.3%",
    candidateNum: 50.3,
    winnerName: "Chip Roy",
    winnerVote: "50.3%",
    winnerNum: 50.3,
    marginText: "WON THE SEAT (Defeated Joseph Kopser)",
    marginValue: 0,
    deaceQuote: "Chip Roy is one of the few true constitutional conservatives ready to stand on the wall in Washington.",
    quoteDate: "May 2018",
    quoteUrl: "https://www.texastribune.org/2018/05/22/chip-roy-matt-mccall-texas-congressional-district-21-republican-run-off/",
    quoteSourceTitle: "Texas Tribune Election Coverage",
    contextHtml: `
      <p>Deace backed former Ted Cruz chief of staff Chip Roy during his initial 2018 campaign for Texas's 21st Congressional District.</p>
      <p>Roy won a tough Republican primary runoff and prevailed in the November 2018 general election with 50.3% of the vote.</p>
    `
  },
  {
    id: "dieken-2022",
    name: "Zach Dieken",
    year: 2022,
    outcome: "WIN",
    wonSeat: true,
    office: "State Legislature",
    raceName: "2022 Iowa House District 5",
    state: "Iowa",
    lossType: "General Election Victory",
    candidateVote: "89.2%",
    candidateNum: 89.2,
    winnerName: "Zach Dieken",
    winnerVote: "89.2%",
    winnerNum: 89.2,
    marginText: "WON THE SEAT (Defeated incumbent in primary & won general)",
    marginValue: 0,
    deaceQuote: "Zach Dieken is a man of unyielding conviction who will fight for liberty without compromise in Des Moines.",
    quoteDate: "May 2022",
    quoteUrl: "https://theiowastandard.com/zach-dieken-defeats-incumbent-dennis-bush-in-house-district-5/",
    quoteSourceTitle: "The Iowa Standard Primary Report",
    contextHtml: `
      <p>In 2022, Deace endorsed Iowa State Trooper Zach Dieken in a primary challenge against incumbent Representative Dennis Bush, winning the primary and general election.</p>
    `
  },
  {
    id: "dunwell-2021",
    name: "Jon Dunwell",
    year: 2021,
    outcome: "WIN",
    wonSeat: true,
    office: "State Legislature",
    raceName: "2021 Iowa House District 29 Special Election",
    state: "Iowa",
    lossType: "General Election Victory",
    candidateVote: "60.0%",
    candidateNum: 60.0,
    winnerName: "Jon Dunwell",
    winnerVote: "60.0%",
    winnerNum: 60.0,
    marginText: "WON THE SEAT (Flipped seat in Jasper County)",
    marginValue: 0,
    deaceQuote: "Jon Dunwell has the moral clarity and grassroots leadership needed to represent Jasper County.",
    quoteDate: "October 2021",
    quoteUrl: "https://theiowastandard.com/jon-dunwell-wins-special-election-flipping-seat-in-jasper-county/",
    quoteSourceTitle: "The Iowa Standard Special Election Report",
    contextHtml: `
      <p>Deace endorsed Pastor Jon Dunwell in an October 2021 special election for Iowa House District 29, flipping the seat from Democratic control.</p>
    `
  },
  {
    id: "wheeler-2016",
    name: "Skyler Wheeler",
    year: 2016,
    outcome: "WIN",
    wonSeat: true,
    office: "State Legislature",
    raceName: "2016 Iowa House District 4",
    state: "Iowa",
    lossType: "General Election Victory",
    candidateVote: "100%",
    candidateNum: 100,
    winnerName: "Skyler Wheeler",
    winnerVote: "100%",
    winnerNum: 100,
    marginText: "WON THE SEAT (Won primary & general election)",
    marginValue: 0,
    deaceQuote: "Skyler Wheeler represents the new generation of fearless, principle-first conservative leaders Iowa needs.",
    quoteDate: "May 2016",
    quoteUrl: "https://theiowastandard.com/skyler-wheeler-secures-conservative-victory-in-iowa-house/",
    quoteSourceTitle: "The Iowa Standard Election Report",
    contextHtml: `
      <p>Deace early-endorsed conservative activist Skyler Wheeler for Iowa House District 4. Wheeler won the primary and general election.</p>
    `
  }
];

// State Variables
let currentSearch = "";
let currentOutcome = "all";
let currentLevel = "all";
let currentSort = "recent";
let currentView = "grid";

// DOM Element References
const candidatesContainer = document.getElementById("candidates-container");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const outcomeTabs = document.getElementById("outcome-tabs");
const levelSelect = document.getElementById("level-select");
const sortSelect = document.getElementById("sort-select");
const showingCountText = document.getElementById("showing-count-text");
const noResultsElement = document.getElementById("no-results");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const viewGridBtn = document.getElementById("view-grid-btn");
const viewTimelineBtn = document.getElementById("view-timeline-btn");

// Stat Counters
const statRatio = document.getElementById("stat-ratio");
const statDefeatRate = document.getElementById("stat-defeat-rate");
const statLosses = document.getElementById("stat-losses");
const statWins = document.getElementById("stat-wins");

// Modal Elements
const candidateModal = document.getElementById("candidate-modal");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderCandidates();
  updateStatsCounters();
});

// Event Listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = currentSearch ? "block" : "none";
    renderCandidates();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    currentSearch = "";
    clearSearchBtn.style.display = "none";
    renderCandidates();
  });

  // Outcome filter tabs (All, Defeats, Wins)
  outcomeTabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-btn")) {
      document.querySelectorAll("#outcome-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      currentOutcome = e.target.dataset.outcome;
      renderCandidates();
    }
  });

  // Select dropdowns
  levelSelect.addEventListener("change", (e) => {
    currentLevel = e.target.value;
    renderCandidates();
  });

  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCandidates();
  });

  // View switchers
  viewGridBtn.addEventListener("click", () => {
    currentView = "grid";
    viewGridBtn.classList.add("active");
    viewTimelineBtn.classList.remove("active");
    candidatesContainer.className = "grid-view";
    renderCandidates();
  });

  viewTimelineBtn.addEventListener("click", () => {
    currentView = "timeline";
    viewTimelineBtn.classList.add("active");
    viewGridBtn.classList.remove("active");
    candidatesContainer.className = "timeline-view";
    renderCandidates();
  });

  // Reset filters
  resetFiltersBtn.addEventListener("click", () => {
    currentSearch = "";
    currentOutcome = "all";
    currentLevel = "all";
    currentSort = "recent";
    
    searchInput.value = "";
    clearSearchBtn.style.display = "none";
    levelSelect.value = "all";
    sortSelect.value = "recent";
    
    document.querySelectorAll("#outcome-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector("#outcome-tabs .tab-btn[data-outcome='all']").classList.add("active");
    
    renderCandidates();
  });

  // Modal close
  modalCloseBtn.addEventListener("click", closeModal);
  candidateModal.addEventListener("click", (e) => {
    if (e.target === candidateModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !candidateModal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// Filter and Sort Candidates Data
function getFilteredCandidates() {
  return CANDIDATES.filter(item => {
    // Search query filter
    const matchesSearch = !currentSearch || (
      item.name.toLowerCase().includes(currentSearch) ||
      item.raceName.toLowerCase().includes(currentSearch) ||
      item.state.toLowerCase().includes(currentSearch) ||
      item.winnerName.toLowerCase().includes(currentSearch) ||
      item.deaceQuote.toLowerCase().includes(currentSearch)
    );

    // Outcome filter (WIN vs LOSS)
    const matchesOutcome = currentOutcome === "all" || item.outcome === currentOutcome;

    // Office level filter
    const matchesLevel = currentLevel === "all" || item.office === currentLevel;

    return matchesSearch && matchesOutcome && matchesLevel;
  }).sort((a, b) => {
    if (currentSort === "recent") {
      return b.year - a.year;
    } else if (currentSort === "oldest") {
      return a.year - b.year;
    } else if (currentSort === "outcome") {
      // Losses first to highlight failure rate
      if (a.outcome === b.outcome) return b.year - a.year;
      return a.outcome === "LOSS" ? -1 : 1;
    } else if (currentSort === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
}

// Update Stats Counter Cards (Defeat Rate & Ratio)
function updateStatsCounters() {
  const total = CANDIDATES.length;
  const wins = CANDIDATES.filter(c => c.outcome === "WIN").length;
  const losses = CANDIDATES.filter(c => c.outcome === "LOSS").length;
  const defeatRatePct = ((losses / total) * 100).toFixed(1);

  if (statRatio) statRatio.textContent = `${losses} Defeats – ${wins} Wins`;
  if (statDefeatRate) statDefeatRate.textContent = `${defeatRatePct}%`;
  if (statLosses) statLosses.textContent = losses;
  if (statWins) statWins.textContent = wins;
}

// Render Candidate Cards
function renderCandidates() {
  const filtered = getFilteredCandidates();
  
  showingCountText.textContent = `Showing ${filtered.length} of ${CANDIDATES.length} endorsed candidates (10 Defeats / 5 Wins — 66.7% Candidate Failure Rate)`;

  if (filtered.length === 0) {
    candidatesContainer.innerHTML = "";
    noResultsElement.classList.remove("hidden");
    return;
  } else {
    noResultsElement.classList.add("hidden");
  }

  if (currentView === "grid") {
    candidatesContainer.innerHTML = filtered.map(candidate => createGridCardHtml(candidate)).join("");
  } else {
    candidatesContainer.innerHTML = filtered.map(candidate => createTimelineCardHtml(candidate)).join("");
  }

  // Attach modal click handlers
  document.querySelectorAll(".card-action-btn, .candidate-card").forEach(element => {
    element.addEventListener("click", (e) => {
      if (e.target.closest(".quote-source-link")) return;

      const candidateId = element.dataset.id || element.closest(".candidate-card")?.dataset.id;
      if (candidateId) {
        openModal(candidateId);
      }
    });
  });
}

// Card HTML Generator - Grid View
function createGridCardHtml(c) {
  const isWin = c.outcome === "WIN";
  const badgeClass = isWin ? "badge-win" : (c.lossType === "National Primary Defeat" ? "badge-nomination" : (c.lossType === "General Election Defeat" ? "badge-general" : "badge-primary"));
  const cardOutcomeClass = isWin ? "outcome-win" : `type-${c.lossType.toLowerCase().includes('nomination') ? 'nomination' : (c.lossType.toLowerCase().includes('general') ? 'general' : 'primary')}`;

  return `
    <article class="candidate-card ${cardOutcomeClass}" data-id="${c.id}">
      <div class="card-header">
        <div class="candidate-title-group">
          <h2 class="candidate-name">${escapeHtml(c.name)}</h2>
          <span class="race-title">${escapeHtml(c.raceName)}</span>
        </div>
        <span class="year-badge">${c.year}</span>
      </div>

      <div class="card-badges">
        <span class="badge ${badgeClass}">
          ${isWin ? `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            WON SEAT
          ` : `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ${escapeHtml(c.lossType)} (FAILED)
          `}
        </span>
        <span class="badge badge-office">${escapeHtml(c.office)}</span>
      </div>

      <div class="results-box">
        <div class="result-row">
          <span class="result-name ${isWin ? 'winner' : 'loser'}">
            ${isWin ? `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ` : `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            `}
            ${escapeHtml(c.name)} (Endorsed)
          </span>
          <span class="result-pct">${escapeHtml(c.candidateVote)}</span>
        </div>
        <div class="bar-track">
          <div class="${isWin ? 'bar-fill-winner' : 'bar-fill-candidate'}" style="width: ${Math.min(Math.max(c.candidateNum, 12), 100)}%;"></div>
        </div>

        ${!isWin ? `
          <div class="result-row" style="margin-top: 0.5rem;">
            <span class="result-name winner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              ${escapeHtml(c.winnerName)} (Winner)
            </span>
            <span class="result-pct">${escapeHtml(c.winnerVote)}</span>
          </div>
        ` : ''}

        <div class="margin-text">${escapeHtml(c.marginText)}</div>
      </div>

      <div class="quote-box">
        "${escapeHtml(c.deaceQuote)}"
        <div class="quote-footer">
          <span class="quote-attribution">— Steve Deace (${escapeHtml(c.quoteDate)})</span>
          ${c.quoteUrl ? `
            <a href="${c.quoteUrl}" target="_blank" rel="noopener noreferrer" class="quote-source-link" title="View quote source archive">
              <span>Source Quote</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ` : ''}
        </div>
      </div>

      <button class="card-action-btn" data-id="${c.id}">
        <span>Read Race Analysis</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>
    </article>
  `;
}

// Card HTML Generator - Timeline View
function createTimelineCardHtml(c) {
  const isWin = c.outcome === "WIN";
  const badgeClass = isWin ? "badge-win" : (c.lossType === "National Primary Defeat" ? "badge-nomination" : (c.lossType === "General Election Defeat" ? "badge-general" : "badge-primary"));

  return `
    <div class="timeline-item ${isWin ? 'outcome-win' : ''}">
      <div class="timeline-dot"></div>
      <article class="candidate-card ${isWin ? 'outcome-win' : ''}" data-id="${c.id}">
        <div class="card-header">
          <div class="candidate-title-group">
            <h2 class="candidate-name">${escapeHtml(c.name)} (${c.year})</h2>
            <span class="race-title">${escapeHtml(c.raceName)}</span>
          </div>
          <span class="badge ${badgeClass}">${isWin ? 'WON SEAT' : escapeHtml(c.lossType) + ' (DEFEATED)'}</span>
        </div>

        <div class="results-box">
          <div class="result-row">
            <span class="result-name ${isWin ? 'winner' : 'loser'}">${escapeHtml(c.name)}: ${escapeHtml(c.candidateVote)}</span>
            <span class="result-name winner">${isWin ? 'Result: WON SEAT' : 'Winner: ' + escapeHtml(c.winnerName)}</span>
          </div>
          <div class="margin-text">${escapeHtml(c.marginText)}</div>
        </div>

        <div class="quote-box">
          "${escapeHtml(c.deaceQuote)}"
          <div class="quote-footer">
            <span class="quote-attribution">— Steve Deace (${escapeHtml(c.quoteDate)})</span>
            ${c.quoteUrl ? `
              <a href="${c.quoteUrl}" target="_blank" rel="noopener noreferrer" class="quote-source-link">
                <span>Source Link</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            ` : ''}
          </div>
        </div>

        <button class="card-action-btn" data-id="${c.id}">
          <span>View Detailed Breakdown</span>
        </button>
      </article>
    </div>
  `;
}

// Modal Functions
function openModal(id) {
  const candidate = CANDIDATES.find(c => c.id === id);
  if (!candidate) return;

  const isWin = candidate.outcome === "WIN";

  modalContent.innerHTML = `
    <span class="modal-header-tag">${candidate.year} Electoral Analysis • ${escapeHtml(candidate.office)}</span>
    <h2 class="modal-title">${escapeHtml(candidate.name)}</h2>
    <p class="modal-subtitle">${escapeHtml(candidate.raceName)} (${escapeHtml(candidate.state)})</p>

    <div class="results-box">
      <div class="result-row">
        <span class="result-name ${isWin ? 'winner' : 'loser'}">Endorsed Candidate: ${escapeHtml(candidate.name)}</span>
        <span class="result-pct">${escapeHtml(candidate.candidateVote)}</span>
      </div>

      ${!isWin ? `
        <div class="result-row">
          <span class="result-name winner">Election Winner: ${escapeHtml(candidate.winnerName)}</span>
          <span class="result-pct">${escapeHtml(candidate.winnerVote)}</span>
        </div>
      ` : ''}

      <div class="margin-text" style="font-weight: 600; color: ${isWin ? 'var(--accent-green)' : 'var(--accent-red)'}; margin-top: 0.4rem;">
        Seat Outcome: ${escapeHtml(candidate.marginText)}
      </div>
    </div>

    <div class="modal-quote-container">
      <p class="modal-quote-text">"${escapeHtml(candidate.deaceQuote)}"</p>
      <div class="modal-quote-meta">
        <span>— Steve Deace Endorsement Quote (${escapeHtml(candidate.quoteDate)})</span>
        ${candidate.quoteUrl ? `
          <a href="${candidate.quoteUrl}" target="_blank" rel="noopener noreferrer" class="quote-source-link modal-link" title="Open source page">
            <span>View Source Document (${escapeHtml(candidate.quoteSourceTitle)})</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : ''}
      </div>
    </div>

    <h3 class="modal-section-title">Election Context & Campaign Dynamics</h3>
    <div class="modal-body-text">
      ${candidate.contextHtml}
    </div>
  `;

  candidateModal.classList.remove("hidden");
  candidateModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  candidateModal.classList.add("hidden");
  candidateModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

// Helper: Escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
