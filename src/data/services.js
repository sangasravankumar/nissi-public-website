// Service catalogue. workPhotos renders the Our Services section (9 photo
// cards, each with content) and the estimator dropdown reads `services`.
// Add/edit here and both update automatically.
//
// rateKey: key into serviceRates (src/data/rates.js)
//
// Photo cards: replace the files in public/images/ with the business's
// own photographs when available (see PHOTO_CREDITS.md). serviceId links
// a card to the estimator preselect.

export const services = [
  {
    id: 'aluminium-window',
    name: 'Aluminium Windows',
    estimatorName: 'Aluminium Window',
    rateKey: 'aluminiumWindow',
    icon: 'window',
    description: 'Durable, weather-sealed aluminium windows made to your exact sizes.',
  },
  {
    id: 'aluminium-door',
    name: 'Aluminium Doors',
    estimatorName: 'Aluminium Door',
    rateKey: 'aluminiumDoor',
    icon: 'doorOpen',
    description: 'Strong, smooth-operating aluminium doors for homes and shops.',
  },
  {
    id: 'sliding-window',
    name: 'Sliding Windows',
    estimatorName: 'Sliding Window',
    rateKey: 'slidingWindow',
    icon: 'panelTop',
    description: 'Space-saving sliders that glide effortlessly and seal out dust.',
  },
  {
    id: 'sliding-door',
    name: 'Sliding Doors',
    estimatorName: 'Sliding Door',
    rateKey: 'slidingDoor',
    icon: 'doorClosed',
    description: 'Wide-opening sliders for balconies, terraces and shopfronts.',
  },
  {
    id: '2-track-window',
    name: '2 Track Windows',
    estimatorName: '2 Track Window',
    rateKey: 'twoTrackWindow',
    icon: 'columns2',
    description: 'Classic two-track sliding windows — simple, sturdy and reliable.',
  },
  {
    id: '3-track-window',
    name: '3 Track Windows',
    estimatorName: '3 Track Window',
    rateKey: 'threeTrackWindow',
    icon: 'columns3',
    description: 'Three-track systems with mesh options for insect-free airflow.',
  },
  {
    id: 'partition',
    name: 'Aluminium Partitions',
    estimatorName: 'Aluminium Partition',
    rateKey: 'partition',
    icon: 'layoutPanelLeft',
    description: 'Glass-and-aluminium partitions that divide spaces without darkening them.',
  },
  {
    id: 'office-partition',
    name: 'Office Partitions',
    estimatorName: 'Office Partition',
    rateKey: 'officePartition',
    icon: 'building2',
    description: 'Modular office cabin partitions built for a clean, professional look.',
  },
  {
    id: 'mosquito-mesh',
    name: 'Mosquito Mesh',
    estimatorName: 'Mosquito Mesh',
    rateKey: 'mesh',
    icon: 'grid3x3',
    description: 'Fine-gauge mosquito mesh that keeps insects out and lets air flow.',
  },
  {
    id: 'fabrication',
    name: 'Aluminium Fabrication',
    estimatorName: 'Custom Aluminium Work',
    rateKey: 'fabrication',
    icon: 'hammer',
    description: 'Made-to-measure frames, railings and structural aluminium work.',
  },
  {
    id: 'glass-aluminium',
    name: 'Glass & Aluminium Works',
    estimatorName: 'Custom Aluminium Work',
    rateKey: 'glassAluminium',
    icon: 'glassWater',
    description: 'Glazing, canopies and glass-plus-aluminium installations.',
  },
  {
    id: 'custom',
    name: 'Custom Aluminium Works',
    estimatorName: 'Custom Aluminium Work',
    rateKey: 'custom',
    icon: 'wrench',
    description: 'Anything aluminium — tell us the size and we will build it.',
  },
]

// The 9 photo cards that make up the Our Services section.
// serviceId maps each card to its estimator option (see services above).
export const workPhotos = [
  {
    id: 'windows',
    src: '/images/work-windows.jpg',
    alt: 'Aluminium window with glass panels',
    tag: 'Windows',
    title: 'Aluminium Windows',
    description: 'Weather-sealed frames built to your exact measurements.',
    serviceId: 'aluminium-window',
  },
  {
    id: 'sliding-window',
    src: '/images/work-sliding-window.jpg',
    alt: 'Living room with large sliding window',
    tag: 'Sliding Series',
    title: 'Sliding Windows',
    description: 'Smooth-gliding, space-saving windows for every room.',
    serviceId: 'sliding-window',
  },
  {
    id: 'sliding-door',
    src: '/images/work-sliding-door.jpg',
    alt: 'Sliding glass door opening onto a deck',
    tag: 'Doors',
    title: 'Sliding Glass Doors',
    description: 'Wide-opening doors for balconies, terraces and shopfronts.',
    serviceId: 'sliding-door',
  },
  {
    id: 'mesh',
    src: '/images/work-mesh.jpg',
    alt: 'Window fitted with a fine mesh screen',
    tag: 'Protection',
    title: 'Mosquito Mesh',
    description: 'Fine mesh shutters that keep insects out and airflow in.',
    serviceId: 'mosquito-mesh',
  },
  {
    id: 'partition',
    src: '/images/work-partition.jpg',
    alt: 'Glass partition inside a modern office',
    tag: 'Interiors',
    title: 'Office Partitions',
    description: 'Modular glass cabins for a clean, professional workspace.',
    serviceId: 'office-partition',
  },
  {
    id: 'door',
    src: '/images/work-door.jpg',
    alt: 'Glass and aluminium entrance doors',
    tag: 'Entrances',
    title: 'Aluminium Doors',
    description: 'Strong, low-maintenance entrances for homes and shops.',
    serviceId: 'aluminium-door',
  },
  {
    id: 'railing',
    src: '/images/work-railing.jpg',
    alt: 'Balcony with glass and aluminium railing',
    tag: 'Fabrication',
    title: 'Railings & Grilles',
    description: 'Made-to-measure railings, grilles and structural work.',
    serviceId: 'fabrication',
  },
  {
    id: 'fabrication',
    src: '/images/work-fabrication.jpg',
    alt: 'Metal fabrication work in progress',
    tag: 'Workshop',
    title: 'Custom Fabrication',
    description: 'Tell us the size — we design, cut and install it for you.',
    serviceId: 'custom',
  },
  {
    id: 'facade',
    src: '/images/work-facade.jpg',
    alt: 'Glass and aluminium building facade',
    tag: 'Glazing',
    title: 'Glass & Aluminium Works',
    description: 'Glazing, facades and shopfronts finished to perfection.',
    serviceId: 'glass-aluminium',
  },
]
