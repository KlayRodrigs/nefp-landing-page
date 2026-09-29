export const CARD_PALETTE = [
  { border: 'hover:border-nefp-400/80', iconBg: 'bg-nefp-100 text-nefp-700', badgeVar: 'emerald' },
  { border: 'hover:border-amber-400/80', iconBg: 'bg-amber-100 text-amber-700', badgeVar: 'amber' },
  { border: 'hover:border-sky-400/80', iconBg: 'bg-sky-100 text-sky-700', badgeVar: 'sky' },
  { border: 'hover:border-orange-400/80', iconBg: 'bg-orange-100 text-orange-700', badgeVar: 'solar' },
  { border: 'hover:border-rose-400/80', iconBg: 'bg-rose-100 text-rose-700', badgeVar: 'rose' },
  { border: 'hover:border-indigo-400/80', iconBg: 'bg-indigo-100 text-indigo-700', badgeVar: 'indigo' },
];

export const getCardStyles = (index = 0) =>
  CARD_PALETTE[index % CARD_PALETTE.length];