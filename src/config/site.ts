// ============================================================================
// SITE CONFIGURATION
// Central configuration for the Mombasa County Government Digital
// Transformation portfolio. Update these values to change official
// contact details, URLs, branding and QR code destinations.
// ============================================================================

export const siteConfig = {
  county: 'Mombasa County Government',
  department: 'Digital Transformation Sub-Department',
  primaryHeadline: 'Digital Transformation for a Smarter Mombasa',
  supportingMessage:
    'Harnessing technology, data and innovation to transform government processes, strengthen accountability and improve service delivery.',
  alternativeMessage:
    'Transforming Government. Empowering People. Building a Smarter Mombasa.',
  slogan: 'Transforming Government. Empowering People. Building a Smarter Mombasa.',

  // Contact — placeholders to be replaced with official details
  contact: {
    email: '[OFFICIAL COUNTY EMAIL]',
    phone: '[OFFICIAL PHONE]',
    website: '[OFFICIAL WEBSITE]',
    address: '[OFFICE LOCATION]',
  },

  // Branding placeholders — replace with official assets when supplied
  branding: {
    countyLogoPlaceholder: true,
    departmentLogoPlaceholder: true,
    countySlogan: 'Transforming Government. Empowering People. Building a Smarter Mombasa.',
  },

  // QR code destinations — configure with real URLs when available
  qrCodes: {
    mainSite: '[CONFIGURE: Main portfolio website URL]',
    dials: '[CONFIGURE: DIALS URL]',
    pmfs: '[CONFIGURE: PMFS URL]',
    esms: '[CONFIGURE: ESMS URL]',
    mcrf: '[CONFIGURE: MCRF URL]',
    brochure: '[CONFIGURE: Digital brochure URL]',
  },

  // Brochure download — configure with actual PDF path when available
  brochure: {
    downloadUrl: '[CONFIGURE: Brochure PDF download URL]',
    viewOnlineUrl: '[CONFIGURE: Brochure online viewer URL]',
  },

  // Hero image
  heroImage:
    'https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
  heroImageAlt: 'Aerial view of Mombasa waterfront with buildings and lush greenery along the coastline',
};

export type SiteConfig = typeof siteConfig;
