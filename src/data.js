// ─────────────────────────────────────────────────────────────
// Edit everything about your portfolio from this one file.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shanmugam',
  role: 'Senior Software Engineer',
  tagline: 'Laravel & Full-Stack Developer',
  available: true, // shows the "Available for freelance" badge
  intro:
    'I build fast, reliable and user-friendly web applications for businesses and startups. With 5+ years of experience across frontend and backend, I turn ideas into production-ready products.',
  about:
    'I am a web developer and software engineer with over 5 years of experience and a strong background in both frontend and backend development. I specialise in Laravel, PHP and MySQL, paired with modern JavaScript on the frontend. I am passionate about creating responsive, user-friendly applications that solve real business problems and delight end-users.',
  location: 'Sholinghur, Ranipet, Tamil Nadu — 631102, India',
  email: 'chanshan250@gmail.com',
  // Add your real links here (leave as "#" to hide gracefully)
  socials: {
    github: '#',
    linkedin: '#',
    whatsapp: '#',
  },
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Focused' },
  ],
}

// What you offer freelance clients
export const services = [
  {
    icon: '⚙️',
    title: 'Web Application Development',
    desc: 'Custom Laravel & PHP applications built for scale — dashboards, portals, CRMs and SaaS products.',
  },
  {
    icon: '🔌',
    title: 'API Development & Integration',
    desc: 'Robust REST APIs and third-party integrations (payments, auth, SMS, email) to power your product.',
  },
  {
    icon: '🎨',
    title: 'Responsive Frontends',
    desc: 'Modern, mobile-first interfaces with React, Vue, Tailwind and clean, accessible HTML/CSS.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Bug Fixing',
    desc: 'Fixing, optimising and upgrading existing Laravel/PHP codebases for performance and security.',
  },
]

export const skills = [
  {
    group: 'Laravel / PHP Core',
    items: ['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'REST APIs', 'Livewire'],
  },
  {
    group: 'Frontend',
    items: ['JavaScript', 'React', 'Vue', 'Tailwind CSS', 'HTML / CSS', 'Alpine.js'],
  },
  {
    group: 'DevOps / Tools',
    items: ['Git', 'Docker', 'Linux', 'Nginx', 'CI/CD', 'AWS', 'Redis'],
  },
  {
    group: 'Other Backend',
    items: ['Node.js', 'Python', 'Queues', 'WebSockets', 'Microservices'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Stellar Innovation',
    place: 'Tamil Nadu, India',
    period: '2021 — Present',
    points: [
      'Design, develop and implement full-stack web applications end-to-end.',
      'Produce clean, efficient, well-documented code based on specifications.',
      'Integrate third-party APIs and services to enhance application functionality.',
      'Stay current with the latest Laravel releases and emerging web trends.',
      'Conduct thorough testing and debugging to ensure high-quality software.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Full-Stack Development',
    school: 'Edureka',
    period: '2022',
    desc: 'Professional certification in full-stack web development covering modern trending technologies.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'University',
    period: '2015 — 2017',
    desc: 'Foundation in computer science, programming and application development.',
  },
]

// Rotates once per day (deterministic by date — same for every visitor).
export const quotes = [
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House' },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
  { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
  { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { text: 'It’s not a bug — it’s an undocumented feature.', author: 'Anonymous' },
  { text: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson' },
  { text: 'Good code is its own best documentation.', author: 'Steve McConnell' },
  { text: 'Deleted code is debugged code.', author: 'Jeff Sickel' },
  { text: 'Experience is the name everyone gives to their mistakes.', author: 'Oscar Wilde' },
  { text: 'The most disastrous thing you can ever learn is your first programming language.', author: 'Alan Kay' },
]

export const testimonials = [
  {
    quote:
      'Shanmugam rebuilt our Laravel backend and cut page loads in half. Clear communication and clean code — exactly what a freelancer should be.',
    name: 'Arjun Mehta',
    role: 'Founder, RetailStack',
    initials: 'AM',
  },
  {
    quote:
      'Delivered our booking platform ahead of schedule. He understood the business need, not just the ticket. Would hire again in a heartbeat.',
    name: 'Priya Nair',
    role: 'Product Lead, SlotWise',
    initials: 'PN',
  },
  {
    quote:
      'Took over a messy PHP codebase and turned it into something maintainable. The API integrations just worked. Highly recommended.',
    name: 'David Chen',
    role: 'CTO, LedgerLoop',
    initials: 'DC',
  },
  {
    quote:
      'Responsive, reliable and genuinely skilled. Our React + Laravel dashboard looks and performs great. A true senior engineer.',
    name: 'Sara Ahmed',
    role: 'Ops Manager, FleetGrid',
    initials: 'SA',
  },
  {
    quote:
      'From API design to deployment, everything was handled professionally. He fixed bugs other developers gave up on.',
    name: 'Rahul Verma',
    role: 'Director, CloudKart',
    initials: 'RV',
  },
]

export const projects = [
  {
    title: 'Business CRM Platform',
    tag: 'Laravel · MySQL · Livewire',
    desc: 'A multi-tenant CRM with lead tracking, role-based access and automated email workflows.',
    link: '#',
  },
  {
    title: 'E-Commerce Storefront',
    tag: 'Laravel · React · Stripe',
    desc: 'Full e-commerce solution with cart, payment gateway integration and an admin dashboard.',
    link: '#',
  },
  {
    title: 'Booking & Scheduling System',
    tag: 'PHP · Vue · REST API',
    desc: 'Appointment booking app with calendar sync, SMS reminders and real-time availability.',
    link: '#',
  },
  {
    title: 'Inventory Management App',
    tag: 'Laravel · MySQL · Charts',
    desc: 'Stock control system with barcode support, low-stock alerts and analytics reporting.',
    link: '#',
  },
]
