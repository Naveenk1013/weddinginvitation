export const ease = {
  gentle: [0.22, 1, 0.36, 1],
  soft: [0.4, 0, 0.2, 1],
} as const;

export const dur = {
  fast: 0.18,
  base: 0.45,
  slow: 0.9,
  epic: 1.4,
} as const;

export const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: dur.base, ease: ease.gentle } },
};

export const sacredReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: dur.epic, ease: ease.gentle } },
};
