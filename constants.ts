
export const API_BASE_URL = 'https://estate-server-rv7f.onrender.com/api';

export const PROPERTY_TYPES = [
  { label: 'All Types', value: '' },
  { label: 'Flats', value: 'flat' },
  { label: 'Plots', value: 'plot' },
  { label: 'Rooms', value: 'room' }
];

export const PRICE_RANGES = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under $100k', min: 0, max: 100000 },
  { label: '$100k - $500k', min: 100000, max: 500000 },
  { label: '$500k - $1M', min: 500000, max: 1000000 },
  { label: 'Above $1M', min: 1000000, max: Infinity }
];
