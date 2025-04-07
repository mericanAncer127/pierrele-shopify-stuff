export type WorkTile = {
  title: string;
  description: string;
  video: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    title: `Bremont`,
    description: `Product use Case & Seamless Article Navigation`,
    video: {
      src: 'bremont/bremont2.webm',
      width: 600,
      height: 770,
    },
  },
  {
    title: 'Burga',
    description: 'Collection Navigation & Instant Checkout',
    video: {
      src: 'burga/burga2.webm',
      width: 600,
      height: 554,
    },
  },
  {
    title: 'Daniel Wellington',
    description: `Perfect Match Suggestion`,
    video: {
      src: 'danielwellington/danielwellington2.webm',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Toysrus',
    description: `User-Friendly Brand Navigation`,
    video: {
      src: 'toysrus/toysrus2.webm',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Happy Earth Tea',
    description: `Simple UI for Product Browsing`,
    video: {
      src: 'happyearthtea/happyearthtea2.webm',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'Savotta',
    description: `Store Locator & Map Integration`,
    video: {
      src: 'savotta/savotta2.webm',
      width: 600,
      height: 717,
    },
  },
  {
    title: 'WP Standard',
    description: `Instant Variant Swatch in Collection Page`,
    video: {
      src: 'wpstandard/wpstandard2.webm',
      width: 600,
      height: 717,
    },
  },
];
