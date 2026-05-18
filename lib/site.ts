// Single source of truth for all business content.
// Swap real values here when handed off — every page reads from this file.

export const site = {
  name: "MAComfortSolutions",
  shortName: "613 HVAC",
  domain: "613hvac.com",
  tagline: "Ottawa's Trusted HVAC Crew",
  description:
    "Ottawa heating, cooling and hot water specialists. Same-day service, 24/7 emergency response, honest pricing.",

  phone: {
    display: "(613) 555-0100",
    tel: "+16135550100",
  },
  sms: {
    display: "(613) 555-0100",
    tel: "+16135550100",
  },
  email: "info@613hvac.com",
  address: {
    locality: "Ottawa",
    region: "ON",
    country: "CA",
    display: "Ottawa, ON",
  },
  hours: {
    summary: "24/7 Emergency • Mon–Sat 7am–8pm",
    weekly: [
      { day: "Mon–Sat", hours: "7:00 AM – 8:00 PM" },
      { day: "Sunday", hours: "Emergency only" },
      { day: "Holidays", hours: "Emergency only" },
    ],
  },

  social: {
    google: "#",
    facebook: "#",
    instagram: "#",
  },

  licenses: [
    "TSSA Licensed Gas Technician (G2)",
    "ESA Refrigeration Mechanic",
    "HRAI Member",
    "WSIB Cleared",
    "Fully Insured",
  ],
} as const;

export type ServiceSlug =
  | "furnace"
  | "air-conditioning"
  | "hot-water-tank"
  | "emergency";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  blurb: string;
  intro: string;
  bullets: string[];
  signs: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  accent: "brand" | "emergency";
  icon: "flame" | "snowflake" | "droplet" | "alert";
};

export const services: Service[] = [
  {
    slug: "furnace",
    title: "Furnace Installation, Repair & Diagnostics",
    shortTitle: "Furnace Services",
    blurb:
      "New installs, no-heat repairs, tune-ups and full diagnostics for every major brand.",
    intro:
      "Ottawa winters don't forgive a bad furnace. Our certified gas techs install, service and diagnose every major high-efficiency furnace — and we'll get yours running fast, with no surprise charges.",
    bullets: [
      "High-efficiency furnace installation",
      "No-heat emergency repairs",
      "Annual maintenance and tune-ups",
      "Full system diagnostics",
      "Thermostat and zoning upgrades",
      "Gas line work (TSSA G2)",
    ],
    signs: [
      "House isn't reaching the set temperature",
      "Loud bangs, rattles or short cycling",
      "Furnace is 15+ years old or out of warranty",
      "Yellow burner flame instead of blue",
      "Climbing gas bills with no change in usage",
    ],
    process: [
      {
        title: "Honest assessment",
        body: "We diagnose the actual problem before quoting — no upsells, no scare tactics.",
      },
      {
        title: "Upfront quote",
        body: "Flat-rate pricing in writing before any work starts. You approve, we begin.",
      },
      {
        title: "Done right the first time",
        body: "Clean install, full system test, and a workmanship warranty in your hands.",
      },
    ],
    faqs: [
      {
        q: "How long does a furnace install take?",
        a: "Most residential replacements are done in a single day. We'll confirm timing during your free in-home quote.",
      },
      {
        q: "Do you service my brand?",
        a: "Yes — we work on Lennox, Carrier, Trane, Goodman, Rheem, Napoleon, Keeprite and every other major brand sold in Ottawa.",
      },
      {
        q: "Is financing available?",
        a: "Yes. We offer 0% financing options on most new furnace installs. Ask us during your quote.",
      },
    ],
    accent: "brand",
    icon: "flame",
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning Installation & Service",
    shortTitle: "AC Services",
    blurb:
      "Central AC installs, repairs and tune-ups so your home stays cool through every Ottawa heatwave.",
    intro:
      "When the humidity climbs and the AC won't come on, you need a tech who can show up the same day. We install, repair and maintain central air conditioning systems for homes across Ottawa.",
    bullets: [
      "New central AC installation",
      "AC repair and refrigerant service",
      "Coil cleaning and tune-ups",
      "Heat pump installation",
      "Smart thermostat setup",
      "Whole-home indoor air quality",
    ],
    signs: [
      "AC runs but isn't cooling the house",
      "Warm air coming from vents",
      "Unit is icing up or leaking water",
      "Loud humming, clicking or buzzing",
      "Big jump in your hydro bill in summer",
    ],
    process: [
      {
        title: "Same-day diagnostic",
        body: "We'll get a tech to your door fast — often the same day you call.",
      },
      {
        title: "Clear repair or replace call",
        body: "If it's worth fixing, we fix it. If it's not, we'll tell you straight.",
      },
      {
        title: "Cool home, guaranteed",
        body: "Every job is backed by a workmanship warranty in writing.",
      },
    ],
    faqs: [
      {
        q: "Can I get a new AC installed quickly?",
        a: "Yes — most central AC installs are completed in a single day once the equipment is on site.",
      },
      {
        q: "Do you do heat pumps?",
        a: "Absolutely. Heat pumps are a great fit for Ottawa homes — ask us about cold-climate models and Greener Homes rebates.",
      },
      {
        q: "What if my AC is low on refrigerant?",
        a: "Low refrigerant usually means a leak. We'll find it, fix it, and recharge the system to spec — not just top it up.",
      },
    ],
    accent: "brand",
    icon: "snowflake",
  },
  {
    slug: "hot-water-tank",
    title: "Hot Water Tank Installation & Service",
    shortTitle: "Hot Water Tanks",
    blurb:
      "Same-day hot water tank replacements and repairs — gas, electric and power-vent.",
    intro:
      "No hot water is not a tomorrow problem. We replace and service residential hot water tanks across Ottawa, usually same-day, with proper venting and code-compliant gas work.",
    bullets: [
      "Gas, electric and power-vent installs",
      "Same-day tank replacements",
      "Leaky tank diagnosis and repair",
      "Tankless / on-demand options",
      "Anode rod and element replacement",
      "Code-compliant venting and gas work",
    ],
    signs: [
      "Water around the base of the tank",
      "Rusty, cloudy or smelly hot water",
      "Hot water runs out faster than it used to",
      "Tank is 10+ years old",
      "Loud popping or rumbling from the tank",
    ],
    process: [
      {
        title: "Get hot water back today",
        body: "We carry common tank sizes on the truck so we can usually swap same-day.",
      },
      {
        title: "Code-correct install",
        body: "Proper venting, gas connections and TSSA-compliant work, every time.",
      },
      {
        title: "Clean and gone",
        body: "We haul the old tank away and leave the space cleaner than we found it.",
      },
    ],
    faqs: [
      {
        q: "How long does a tank swap take?",
        a: "Most straightforward tank replacements take 2–3 hours start to finish.",
      },
      {
        q: "Tank or tankless?",
        a: "Both have their place. Tankless is great for endless hot water and space savings — we'll walk you through the trade-offs honestly.",
      },
      {
        q: "Do you handle rental tank takeovers?",
        a: "Yes, we can help you exit a rental contract and own your equipment outright.",
      },
    ],
    accent: "brand",
    icon: "droplet",
  },
  {
    slug: "emergency",
    title: "24/7 Emergency HVAC Service",
    shortTitle: "Emergency Service",
    blurb:
      "No heat. No AC. Water on the floor. Call us anytime — we'll be on the way.",
    intro:
      "When your furnace dies in a January cold snap or your AC quits during a July heatwave, you can't wait days for an appointment. Our emergency line is staffed 24/7 — call and a tech will be on the way.",
    bullets: [
      "24/7 furnace no-heat response",
      "Emergency AC and refrigerant calls",
      "Hot water tank leaks and bursts",
      "Carbon monoxide alarm response",
      "Gas leak shut-off and repair",
      "After-hours and holiday service",
    ],
    signs: [
      "Furnace won't fire and the house is dropping below 15°C",
      "Carbon monoxide alarm sounding",
      "Smell of natural gas in the home",
      "Water actively leaking from a tank or unit",
      "AC out during extreme heat with vulnerable household members",
    ],
    process: [
      {
        title: "Call any time",
        body: "Our emergency line is staffed around the clock. You'll talk to a real person.",
      },
      {
        title: "Tech dispatched fast",
        body: "We'll give you an honest ETA and a tech will be on the way with a stocked truck.",
      },
      {
        title: "Heat or cool back on",
        body: "We stabilize the situation, fix what we can on the spot, and quote any larger work upfront.",
      },
    ],
    faqs: [
      {
        q: "Is there an after-hours fee?",
        a: "There's a small dispatch premium after hours. We'll quote it before we roll — no surprises.",
      },
      {
        q: "What's a true HVAC emergency?",
        a: "No heat in winter, no AC during extreme heat, any gas smell, any CO alarm, or any active water leak from a tank or unit.",
      },
      {
        q: "Should I shut anything off before you arrive?",
        a: "For a gas smell — leave the house and call us from outside. For a tank leak — shut the water and power to the tank if it's safe to do so.",
      },
    ],
    accent: "emergency",
    icon: "alert",
  },
];

export const serviceBySlug = (slug: ServiceSlug): Service =>
  services.find((s) => s.slug === slug)!;

export const offers = [
  {
    title: "$50 off your first repair",
    body: "New customers save $50 on any furnace, AC or hot water repair over $300.",
  },
  {
    title: "Free in-home quotes",
    body: "No pressure, no obligation. We'll give you straight numbers in writing.",
  },
  {
    title: "0% financing on installs",
    body: "Approved financing options on qualifying new furnace, AC and heat pump installs.",
  },
];

export const areasServed = [
  "Ottawa (Centretown, Glebe, Westboro, Hintonburg)",
  "Kanata",
  "Stittsville",
  "Orleans",
  "Nepean",
  "Barrhaven",
  "Gloucester",
  "Manotick",
  "Riverside South",
  "Greely",
  "Carp",
  "Dunrobin",
  "Rockcliffe",
  "Vanier",
  "Gatineau",
  "Aylmer",
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Westboro",
    rating: 5,
    body: "Furnace quit on the coldest night of the year. They had a tech here in under two hours and we had heat back before midnight. Honest, friendly, and the price was exactly what they quoted.",
  },
  {
    name: "Dave P.",
    location: "Kanata",
    rating: 5,
    body: "Got three quotes for a new AC. These guys were the most straightforward — no scare tactics, no upsells. Clean install, took one day, works perfectly.",
  },
  {
    name: "Priya R.",
    location: "Barrhaven",
    rating: 5,
    body: "Hot water tank started leaking on a Saturday. They had a new one in by the afternoon and hauled the old one away. Will definitely call them again.",
  },
];

export const whyChooseUs = [
  {
    title: "Local Ottawa techs",
    body: "Born and raised in the 613. We know what Ottawa winters do to a furnace.",
    icon: "map",
  },
  {
    title: "Fast response",
    body: "Same-day service on most calls. Real 24/7 emergency line.",
    icon: "bolt",
  },
  {
    title: "Honest, upfront pricing",
    body: "Flat-rate quotes in writing before we touch your equipment. No surprises.",
    icon: "tag",
  },
  {
    title: "Workmanship warranty",
    body: "Every install and repair backed in writing. We stand behind our work.",
    icon: "shield",
  },
];

export const trustBadges = [
  "Licensed & Insured",
  "TSSA Gas G2",
  "24/7 Emergency",
  "Financing Available",
  "5★ Local Reviews",
];

export const generalFaqs = [
  {
    q: "What areas do you serve?",
    a: "Ottawa and the surrounding communities — Kanata, Orleans, Nepean, Barrhaven, Stittsville, Manotick, Gloucester and across the river into Gatineau and Aylmer.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We're TSSA-licensed gas technicians (G2), ESA refrigeration certified, HRAI members, WSIB cleared and fully insured.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes — in-home quotes on installs and replacements are always free, with no pressure to book.",
  },
  {
    q: "How fast can you come out?",
    a: "Most calls are handled same-day. For true emergencies (no heat, gas smell, CO alarm, active leak), we dispatch 24/7.",
  },
];
