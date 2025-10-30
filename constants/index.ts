// API URLs and configuration
export const API_URLS = {
  PROPERTIES: '/api/properties',
  USERS: '/api/users',
} as const;

// UI text constants
export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LEARN_MORE: 'Learn More',
  LOADING: 'Loading...',
  ERROR: 'Something went wrong',
} as const;

// Configuration constants
export const CONFIG = {
  MAX_PROPERTIES_PER_PAGE: 12,
  DEFAULT_CURRENCY: 'USD',
  IMAGE_PLACEHOLDER: '/assets/placeholder.jpg',
} as const;