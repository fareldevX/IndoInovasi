export const PROJECTS = [
  {
    id: "prj-1",
    type: "Concept Architecture",
    title: "Neural Ops: Workflow Routing Engine",
    stack: ["Python", "TensorFlow", "FastAPI", "React"],
    challenge:
      "Legacy systems required manual human intervention to sort and tag thousands of incoming support queries daily.",
    execution:
      "Engineered a lightweight NLP model to pre-sort queries, integrated via REST API into the existing dashboard interface.",
    outcome: "Query routing time reduced by 94% (< 200ms per query).",
  },
  {
    id: "prj-2",
    type: "Internal R&D",
    title: "Velocity: Headless Commerce Template",
    stack: ["Next.js", "Tailwind", "Stripe API"],
    challenge:
      "Standard monolithic e-commerce platforms suffered from rigid UIs and slow time-to-interactive metrics.",
    execution:
      "Built a headless storefront decoupling the UI from the database, utilizing edge-caching for product pages.",
    outcome: "Lighthouse Performance Score: 99/100.",
  },
];
