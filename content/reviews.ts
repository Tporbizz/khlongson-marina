/* ============================================================
 * ⭐ REVIEWS — รีวิวจากลูกค้า
 * ------------------------------------------------------------
 * แก้/เพิ่ม/ลบ ได้อิสระ. โชว์ในหน้า Home (Reviews section).
 *  • flag    — emoji ธงประเทศ
 *  • source  — "Navily" | "Google" | "Noonsite"
 *  • rating  — 4 หรือ 5
 *  • date    — เป็นข้อความอิสระ เช่น "Jan 2026"
 * ============================================================ */

export type Review = {
  name: string;
  yacht: string;
  flag: string;
  source: "Navily" | "Google" | "Noonsite";
  rating: 5 | 4;
  text: string;
  date: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Captain James Whitfield",
    yacht: "S/V Andaman Spirit",
    flag: "🇬🇧",
    source: "Navily",
    rating: 5,
    text: "A truly protected hurricane-hole. The river entrance is straightforward at half-tide and the holding inside the marina basin is excellent. The mangrove setting is unlike anywhere else we've berthed in Southeast Asia.",
    date: "Jan 2026",
  },
  {
    name: "Mathilde & Olivier",
    yacht: "Cat. Mistral IV",
    flag: "🇫🇷",
    source: "Navily",
    rating: 5,
    text: "Notre catamaran de 14 m a trouvé une place parfaite. Le cadre naturel est magnifique, l'eau et l'électricité sans problème. Le tour des dugongs est une expérience unique — Patrick le naturaliste est extraordinaire.",
    date: "Dec 2025",
  },
  {
    name: "Sven Lindqvist",
    yacht: "S/V Northern Light",
    flag: "🇸🇪",
    source: "Noonsite",
    rating: 5,
    text: "Best stop in the Andaman for a long stay. We left the boat for six weeks during monsoon and security was visible day and night. The mangrove basin keeps the water glass-flat — zero chop on the lines.",
    date: "Nov 2025",
  },
  {
    name: "Captain Lukas Bauer",
    yacht: "M/Y Königin",
    flag: "🇩🇪",
    source: "Navily",
    rating: 5,
    text: "Tidal range is significant but the alongside pier and mud bottom hold us perfectly. Very calm even when blowing 25 kts outside. Provisioning was tip-top — fresh seafood arrived on the dock the morning we asked for it.",
    date: "Nov 2025",
  },
  {
    name: "Sarah & Tom Hopkins",
    yacht: "S/V Whisper",
    flag: "🇦🇺",
    source: "Google",
    rating: 5,
    text: "We've been all over Southeast Asia and this is now our favourite Thai marina. Genuinely warm staff, no pressure, fair pricing, and the access to the 4 islands is unmatched. Don't miss the sunset cruise.",
    date: "Oct 2025",
  },
  {
    name: "Capitano Marco Rossi",
    yacht: "S/V Vento del Sud",
    flag: "🇮🇹",
    source: "Navily",
    rating: 5,
    text: "Ottima accoglienza. Il fiume offre una protezione totale, il personale parla inglese e l'organizzazione del transfer per Krabi è impeccabile. Tornerò sicuramente la prossima stagione.",
    date: "Oct 2025",
  },
  {
    name: "Anna Petersen",
    yacht: "S/V Skerry",
    flag: "🇩🇰",
    source: "Navily",
    rating: 4,
    text: "Lovely natural setting and very reasonable rates. Mangrove river approach is magical. Only suggestion: a small chandlery onsite would be a perfect addition. Otherwise faultless service.",
    date: "Sep 2025",
  },
  {
    name: "Captain Hiroshi Tanaka",
    yacht: "M/Y Sakura",
    flag: "🇯🇵",
    source: "Google",
    rating: 5,
    text: "Quiet, professional, and beautifully maintained. We did rolling maintenance here over a long stay and the local subcontractors arranged through the marina were skilled and honest.",
    date: "Sep 2025",
  },
  {
    name: "Pieter van der Berg",
    yacht: "Cat. Zeewind",
    flag: "🇳🇱",
    source: "Noonsite",
    rating: 5,
    text: "Approach is well-marked on Navionics. Staff sent us tide tables and a leading-line photo before arrival. Real attention to detail. The dugong tour is the highlight of our 18-month Asia cruise.",
    date: "Aug 2025",
  },
  {
    name: "Élise Dubois",
    yacht: "S/V Mer & Vent",
    flag: "🇨🇦",
    source: "Navily",
    rating: 5,
    text: "Authentic Thailand without the crowds. The marina has retained its small, family feel even as facilities have grown. We extended our stay twice. Highly recommended for slow cruisers.",
    date: "Jul 2025",
  },
];
