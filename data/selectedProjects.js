import { portfolioPhotos } from "./portfolioPhotos.js";

export const workGroups = [
  { id: "development", label: "Development" },
  { id: "experience", label: "Experience" },
  { id: "growth", label: "Growth" },
  { id: "support", label: "Support" },
];

export const workCategories = [
  {
    id: "website",
    group: "development",
    label: "Website Development",
    summary:
      "Responsive websites with clear journeys and thoughtful details.",
    tags: ["Website", "Responsive design"],
    titles: [
      "Architecture Studio",
      "Wellness Clinic",
      "Legal Practice",
      "Hospitality Website",
      "Business Consultancy",
    ],
  },
  {
    id: "ecommerce",
    group: "development",
    label: "E-commerce",
    summary:
      "Product discovery and shopping experiences built around customers.",
    tags: ["Commerce", "Shopping experience"],
    titles: [
      "Skincare Storefront",
      "Homeware Collection",
      "Fashion Boutique",
      "Coffee Subscription",
      "Sports Equipment",
    ],
  },
  {
    id: "mobile",
    group: "development",
    label: "Mobile Apps",
    summary:
      "Mobile journeys that make everyday tasks easier to complete.",
    tags: ["Mobile", "Product design"],
    titles: [
      "Appointment Booking",
      "Fitness Companion",
      "Food Delivery",
      "Travel Planner",
      "Customer Self-Service",
    ],
  },
  {
    id: "software",
    group: "development",
    label: "Custom Software",
    summary:
      "Connected tools for everyday operations and clearer decisions.",
    tags: ["Software", "Business workflows"],
    titles: [
      "Operations Dashboard",
      "Inventory Workspace",
      "Client Portal",
      "Sales Workspace",
      "Team Scheduling",
    ],
  },
  {
    id: "uiux",
    group: "experience",
    label: "UI/UX Design",
    summary:
      "Interface studies exploring structure, usability, and visual clarity.",
    tags: ["UX research", "Interface design"],
    titles: [
      "Checkout Experience",
      "Banking Interface",
      "Learning Platform",
      "Booking Journey",
      "Dashboard Redesign",
    ],
  },
  {
    id: "graphic",
    group: "experience",
    label: "Graphic Design",
    summary:
      "Visual directions for brand communication across different formats.",
    tags: ["Visual identity", "Art direction"],
    titles: [
      "Brand Identity",
      "Editorial Layout",
      "Product Packaging",
      "Social Campaign",
      "Event Communication",
    ],
  },
  {
    id: "systems",
    group: "experience",
    label: "Design Systems",
    summary:
      "Consistent foundations and reusable patterns for growing products.",
    tags: ["Components", "Design tokens"],
    titles: [
      "Product UI Library",
      "Commerce Components",
      "Multi-brand Toolkit",
      "Accessible Patterns",
      "Mobile UI Foundation",
    ],
  },
  {
    id: "prototypes",
    group: "experience",
    label: "Interactive Prototypes",
    summary:
      "Early product journeys for testing ideas before development.",
    tags: ["Prototyping", "Interaction"],
    titles: [
      "Onboarding Flow",
      "Booking Prototype",
      "Product Configurator",
      "Checkout Prototype",
      "Member Dashboard",
    ],
  },
  {
    id: "marketing",
    group: "growth",
    label: "Digital Marketing",
    summary:
      "Campaign concepts connecting content, audiences, and channels.",
    tags: ["Campaign strategy", "Digital channels"],
    titles: [
      "Brand Launch",
      "Seasonal Campaign",
      "Customer Retention",
      "Social Content Plan",
      "Product Awareness",
    ],
  },
  {
    id: "seo",
    group: "growth",
    label: "SEO & GEO",
    summary:
      "Search studies covering content, discoverability, and technical health.",
    tags: ["Search strategy", "SEO / GEO"],
    titles: [
      "Local Search Study",
      "Technical SEO Audit",
      "E-commerce Search",
      "Content Topic Map",
      "GEO Visibility Study",
    ],
  },
  {
    id: "advertising",
    group: "growth",
    label: "Paid Advertising",
    summary:
      "Campaign structures and creative concepts for paid media.",
    tags: ["Paid media", "Campaign creative"],
    titles: [
      "Search Ads Concept",
      "Meta Campaign",
      "Retargeting Journey",
      "Lead Generation",
      "Product Launch Ads",
    ],
  },
  {
    id: "content",
    group: "growth",
    label: "Content Writing",
    summary:
      "Clear messages adapted to audience needs and the channel.",
    tags: ["Copywriting", "Content strategy"],
    titles: [
      "Website Messaging",
      "Editorial Series",
      "Product Storytelling",
      "Email Sequence",
      "Landing Page Copy",
    ],
  },
  {
    id: "maintenance",
    group: "support",
    label: "Website Maintenance",
    summary:
      "Care plans for content, updates, backups, and website health.",
    tags: ["Website care", "Maintenance"],
    titles: [
      "Website Health Plan",
      "Storefront Care",
      "Content Update Plan",
      "Backup Workflow",
      "Release Checklist",
    ],
  },
  {
    id: "technical",
    group: "support",
    label: "Technical Support",
    summary:
      "Support workflows that help teams resolve common product issues.",
    tags: ["Technical care", "Support workflows"],
    titles: [
      "Support Desk",
      "Integration Support",
      "Incident Workflow",
      "Platform Migration",
      "Customer Help Centre",
    ],
  },
  {
    id: "performance",
    group: "support",
    label: "Performance Monitoring",
    summary:
      "Monitoring concepts for performance, availability, and errors.",
    tags: ["Monitoring", "Website health"],
    titles: [
      "Web Performance Review",
      "Uptime Overview",
      "Error Monitoring",
      "Commerce Health",
      "Accessibility Review",
    ],
  },
  {
    id: "improvement",
    group: "support",
    label: "Continuous Improvement",
    summary:
      "Structured review cycles for learning and improving digital products.",
    tags: ["Product review", "Iteration"],
    titles: [
      "Conversion Review",
      "Usability Iteration",
      "Feature Roadmap",
      "Content Improvement",
      "Product Feedback Loop",
    ],
  },
];

export const projectsByService = Object.fromEntries(
  workCategories.map((category, categoryIndex) => [
    category.id,
    category.titles.map((title, index) => {
      const photo =
        portfolioPhotos[categoryIndex * 5 + index];

      return {
        id: `${category.id}-${index + 1}`,
        title,
        summary: category.summary,
        tags: category.tags,
        image: photo.image,
        imageAlt: photo.alt,
        credit: photo.credit,
        source: photo.source,

        // Real project ka link available hone par yahan add karein.
        href: null,
      };
    }),
  ]),
);