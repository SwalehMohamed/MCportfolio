// ============================================================================
// CONTENT DATA
// Centralised content for pages that are not solution-specific:
// Digital Transformation pillars, Impact framework, About, Gallery, etc.
// ============================================================================

export interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Digital Services',
    description:
      'Making government services more accessible through digital platforms that reduce the need for physical visits and paper-based processes.',
    icon: 'Monitor',
  },
  {
    number: '02',
    title: 'Process Automation',
    description:
      'Reducing manual processes and improving workflow efficiency through structured digital workflows that guide tasks from initiation to completion.',
    icon: 'Workflow',
  },
  {
    number: '03',
    title: 'Data & Analytics',
    description:
      'Turning operational data into useful management information through dashboards, reports and analytics that support better decision-making.',
    icon: 'BarChart3',
  },
  {
    number: '04',
    title: 'Transparency & Accountability',
    description:
      'Strengthening traceability, governance and oversight through audit trails, compliance monitoring and transparent decision-making processes.',
    icon: 'ShieldCheck',
  },
  {
    number: '05',
    title: 'Citizen Engagement',
    description:
      'Creating better channels for citizens to provide feedback, raise issues and interact with government through structured digital platforms.',
    icon: 'MessageSquare',
  },
  {
    number: '06',
    title: 'Innovation',
    description:
      'Identifying new ways technology can improve public service delivery, exploring emerging tools and approaches that meet the needs of Mombasa\u2019s citizens.',
    icon: 'Lightbulb',
  },
];

export interface ImpactDimension {
  title: string;
  description: string;
  icon: string;
}

export const impactDimensions: ImpactDimension[] = [
  {
    title: 'Efficiency',
    description: 'How quickly and effectively processes are completed.',
    icon: 'Gauge',
  },
  {
    title: 'Access',
    description: 'How easily users can access government programmes and services.',
    icon: 'DoorOpen',
  },
  {
    title: 'Transparency',
    description: 'How clearly processes and decisions can be tracked.',
    icon: 'Eye',
  },
  {
    title: 'Accountability',
    description: 'How effectively actions and transactions can be monitored.',
    icon: 'Scale',
  },
  {
    title: 'Data',
    description: 'How effectively information supports management decisions.',
    icon: 'Database',
  },
  {
    title: 'Engagement',
    description: 'How effectively citizens and stakeholders can provide feedback.',
    icon: 'Users',
  },
];

export interface ImpactPlaceholder {
  label: string;
  icon: string;
}

export const impactPlaceholders: ImpactPlaceholder[] = [
  { label: 'Number of users', icon: 'Users' },
  { label: 'Applications processed', icon: 'FileText' },
  { label: 'Projects monitored', icon: 'ClipboardList' },
  { label: 'Beneficiaries managed', icon: 'GraduationCap' },
  { label: 'Declarations submitted', icon: 'ShieldCheck' },
  { label: 'Feedback cases handled', icon: 'MessageSquare' },
  { label: 'Institutions registered', icon: 'Building2' },
  { label: 'Funds managed', icon: 'Landmark' },
];

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const approachStages: ApproachStage[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We begin by understanding the current process, the challenges it creates, and the needs of the people who rely on it — employees, citizens and decision-makers.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We design digital solutions that address identified challenges, structuring workflows, data and interfaces around the real needs of users.',
    icon: 'PenTool',
  },
  {
    number: '03',
    title: 'Develop',
    description:
      'We develop the digital platform, building structured workflows, dashboards and reporting tools that replace manual processes.',
    icon: 'Code2',
  },
  {
    number: '04',
    title: 'Implement',
    description:
      'We work with County departments to implement the solution, supporting adoption and ensuring the platform is used effectively.',
    icon: 'Rocket',
  },
  {
    number: '05',
    title: 'Improve',
    description:
      'We continuously improve the platform based on user feedback, operational data and evolving needs — digital transformation is an ongoing process.',
    icon: 'TrendingUp',
  },
];

export interface GalleryImage {
  label: string;
  category: 'DIALS' | 'PMFS' | 'ESMS' | 'MCRF' | 'EXHIBITION' | 'DIGITAL TRANSFORMATION';
  url: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    label: 'Digital transformation showcase',
    category: 'EXHIBITION',
    url: 'https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'A bustling trade show exhibition hall with people networking and exploring booths',
  },
  {
    label: 'Analytics dashboard interface',
    category: 'DIGITAL TRANSFORMATION',
    url: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'Abstract visualization of data analytics with graphs and charts showing dynamic growth',
  },
  {
    label: 'Modern government workspace',
    category: 'DIGITAL TRANSFORMATION',
    url: 'https://images.pexels.com/photos/5483188/pexels-photo-5483188.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'Laptop on office desk with a city skyline through a large window',
  },
  {
    label: 'Exhibition technology display',
    category: 'EXHIBITION',
    url: 'https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'Vibrant indoor scene at a tech week event with attendees and colorful displays',
  },
  {
    label: 'Analytics on laptop',
    category: 'DIGITAL TRANSFORMATION',
    url: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'Sleek laptop showcasing data analytics and graphs on the screen',
  },
  {
    label: 'Expo networking',
    category: 'EXHIBITION',
    url: 'https://images.pexels.com/photos/860227/pexels-photo-860227.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'A bustling indoor business expo with professionals networking at various booths',
  },
  {
    label: 'Digital tablet dashboard',
    category: 'DIGITAL TRANSFORMATION',
    url: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'A digital tablet showing a web analytics dashboard with graphs and charts',
  },
  {
    label: 'Tech workspace',
    category: 'DIGITAL TRANSFORMATION',
    url: 'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?auto=compress&cs=tinysrgb&w=940&h=600&fit=crop',
    alt: 'Contemporary workspace featuring computers and coding screens in a tech environment',
  },
];

// Brochure pages structure
export interface BrochurePage {
  pageNumber: number;
  title: string;
  subtitle?: string;
  content: string;
  type: 'cover' | 'narrative' | 'solutions' | 'solution-spread' | 'pillars' | 'future' | 'vision' | 'contact';
}

export const brochurePages: BrochurePage[] = [
  {
    pageNumber: 1,
    title: 'Digital Transformation for a Smarter Mombasa',
    subtitle: 'Transforming Government. Empowering People. Building a Smarter Mombasa.',
    content: '',
    type: 'cover',
  },
  {
    pageNumber: 2,
    title: 'The Digital Transformation Journey',
    content:
      'Digital transformation is about more than moving from paper to screens. It is about redesigning how government works — making processes more efficient, information more accessible, decisions more informed and services more responsive to the people of Mombasa.\n\nFor county government, digital transformation means rethinking how services are delivered, how programmes are managed, how data is used, and how citizens interact with the institutions that serve them. It is an ongoing process of improvement, guided by the needs of citizens, employees and decision-makers.',
    type: 'narrative',
  },
  {
    pageNumber: 3,
    title: 'Our Approach',
    subtitle: 'Understand \u2192 Design \u2192 Develop \u2192 Implement \u2192 Improve',
    content:
      'Our approach to digital transformation is structured and iterative. We begin by understanding the current process and the challenges it creates. We then design digital solutions that address those challenges, develop the platform, implement it with County departments, and continuously improve it based on feedback and data.',
    type: 'narrative',
  },
  {
    pageNumber: 4,
    title: 'Our Digital Solutions',
    subtitle: 'Four platforms. One transformation journey.',
    content:
      'The Digital Transformation Sub-Department has developed and implemented four digital platforms that demonstrate how technology can support different areas of county government — from accountability and project management to education support and financial inclusion.',
    type: 'solutions',
  },
  {
    pageNumber: 5,
    title: 'DIALS',
    subtitle: 'Declaration of Income, Assets & Liabilities System',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 6,
    title: 'DIALS \u2014 Workflow & Governance',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 7,
    title: 'PMFS',
    subtitle: 'Project Management & Feedback System',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 8,
    title: 'PMFS \u2014 Monitoring & Citizen Engagement',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 9,
    title: 'ESMS',
    subtitle: 'Elimu Scheme Management System',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 10,
    title: 'ESMS \u2014 Programme & Beneficiary Management',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 11,
    title: 'MCRF',
    subtitle: 'Mombasa County Revolving Fund Management System',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 12,
    title: 'MCRF \u2014 Fund Administration & Repayment Monitoring',
    content: '',
    type: 'solution-spread',
  },
  {
    pageNumber: 13,
    title: 'Digital Transformation Pillars',
    subtitle: 'Six pillars guiding our work',
    content: '',
    type: 'pillars',
  },
  {
    pageNumber: 14,
    title: 'The Future is Digital',
    content:
      'The County\u2019s digital transformation journey is ongoing. Future opportunities include greater interoperability between systems, expanded digital services, improved data integration, mobile-first access, advanced analytics, enhanced digital citizen engagement, further automation, and the exploration of emerging technologies.',
    type: 'future',
  },
  {
    pageNumber: 15,
    title: 'Our Vision',
    content:
      'A digitally enabled Mombasa County where technology, data and innovation support efficient, transparent and people-centred government.',
    type: 'vision',
  },
  {
    pageNumber: 16,
    title: 'Contact',
    content: '',
    type: 'contact',
  },
];

// Navigation items
export interface NavItem {
  label: string;
  route: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Digital Solutions', route: '/solutions' },
  { label: 'Digital Transformation', route: '/transformation' },
  { label: 'Impact', route: '/impact' },
  { label: 'Gallery', route: '/gallery' },
  { label: 'Brochure', route: '/brochure' },
  { label: 'Contact', route: '/contact' },
];
