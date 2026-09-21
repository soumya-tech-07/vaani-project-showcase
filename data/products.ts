export interface ProductFeature {
  title: string;
  description: string;
  image: string;
}

export interface ProductStep {
  step: string;
  description: string;
}

export interface ProductJourneyStep {
  label: string;
  description: string;
}

export interface ProductCTA {
  primaryText: string;
  primaryUrl: string;
  secondaryText: string;
  secondaryUrl: string;
}

export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  category: string;
  year: string;
  heroImage: string;
  logo: string;
  liveUrl: string;
  videoUrl: string;
  screenshots: string[];
  features: ProductFeature[];
  problem: string;
  solution: string;
  howItWorks: ProductStep[];
  technology: string[];
  userJourney: ProductJourneyStep[];
  CTA: ProductCTA;
  status: 'live' | 'beta' | 'development';
}

export const vaaniProduct: Product = {
  slug: 'vaani',
  title: 'Vaani',
  shortDescription: 'Voice-to-text for client-ready work. Speak in English, Hindi, or Hinglish and get polished English wherever your cursor is.',
  tagline: 'Just speak. Vaani writes.',
  category: 'Voice Productivity / AI',
  year: '2026',
  heroImage: '/vaaniHover.png',
  logo: '/vaaniHover.png',
  liveUrl: 'https://vaani.rianinfotech.com/',
  videoUrl: 'https://vaani.rianinfotech.com/',
  screenshots: ['/vaaniHover.png', '/vaaniHover.png', '/vaaniHover.png', '/vaaniHover.png'],
  features: [
    {
      title: 'Native Hindi & Hinglish',
      description: 'Speak in Roman Hinglish, Hindi, or English. Vaani translates while it cleans up and returns polished English without the mental translation step.',
      image: '/vaaniHover.png',
    },
    {
      title: 'Stay present, not buried in notes',
      description: 'Vaani listens in the background with speaker identification, so you can focus on the client and capture the important moments later.',
      image: '/vaaniHover.png',
    },
    {
      title: 'Fits the tools you already use',
      description: 'One hotkey works inside your CRM, email, documents, and client chats. Clean text lands right where your cursor was.',
      image: '/vaaniHover.png',
    },
    {
      title: 'The Fluency Engine',
      description: 'Filler words disappear, grammar is fixed, structure is added, and raw dictation becomes ready-to-send work in one pass.',
      image: '/vaaniHover.png',
    },
    {
      title: 'Private by design',
      description: 'Run fully offline with a local model whenever confidential conversations need complete privacy and control.',
      image: '/vaaniHover.png',
    },
    {
      title: 'Mac and Windows',
      description: 'One native app for both platforms with the same speed, accuracy, and familiar hotkey workflow.',
      image: '/vaaniHover.png',
    },
  ],
  problem: 'After every call, the notes, follow-up, and proposal still need to be written. Typing divides attention during the conversation, and Hindi or Hinglish thoughts often need a second translation pass before they are client-ready.',
  solution: 'Vaani turns speech into clean, structured English at the moment you stop talking. Press one hotkey anywhere, speak naturally, and send polished text without opening another app or losing the thread of the conversation.',
  howItWorks: [
    { step: 'Press your hotkey', description: 'Use one shortcut anywhere on your Mac or PC: your CRM, email, WhatsApp Web, or the document already in front of you.' },
    { step: 'Just talk', description: 'Speak in English, Hindi, or Hinglish. Ramble, restart, or trail off; Vaani figures out what you meant.' },
    { step: 'Clean text lands', description: 'Structured, professional English is pasted right where your cursor was. Send it and move on to the next client.' },
  ],
  technology: ['Mac', 'Windows', 'Speech recognition', 'Hindi and Hinglish', 'Offline local model', 'Fluency Engine'],
  userJourney: [
    { label: 'Start anywhere', description: 'Open your CRM, email, chat, notes, or proposal and place the cursor where the final text should land.' },
    { label: 'Speak naturally', description: 'Press the hotkey and say what you mean in the language and rhythm that feels natural to you.' },
    { label: 'Shape the output', description: 'Vaani removes filler, fixes grammar, translates Hindi or Hinglish, and adapts the tone to the work in front of you.' },
    { label: 'Send and continue', description: 'Review the clean text, correct a term when needed, and get back to the conversation or the next task.' },
  ],
  CTA: {
    primaryText: 'Try Vaani Free',
    primaryUrl: 'https://vaani.rianinfotech.com/',
    secondaryText: 'Explore Vaani',
    secondaryUrl: 'https://vaani.rianinfotech.com/#features',
  },
  status: 'live',
};

export const products: Product[] = [
  vaaniProduct,
  {
    slug: 'lumina',
    title: 'Lumina',
    shortDescription: 'AI-powered design system generator that creates consistent, scalable UI libraries in seconds.',
    tagline: 'Design Systems at the Speed of Thought',
    category: 'AI / Design Tool',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    logo: '/logos/lumina.svg',
    liveUrl: 'https://lumina.ai',
    videoUrl: 'https://youtube.com/watch?v=example1',
    screenshots: [
      'https://images.unsplash.com/photo-1586717791821-3f43268756a0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558655146-97B697B47076?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618005182384-a83a8f796a76?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38a70?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      {
        title: 'Intelligent Tokenization',
        description: 'Automatically extracts color and typography tokens from your brand guidelines.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f43268756a0?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Cross-Platform Export',
        description: 'Export your design system to Figma, React, Vue, and Tailwind CSS instantly.',
        image: 'https://images.unsplash.com/photo-1558655146-97B697B47076?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'AI Component Suggestion',
        description: 'Predicts the components you need based on your application layout.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8f796a76?auto=format&fit=crop&q=80&w=800',
      },
    ],
    problem: 'Creating a consistent design system manually takes weeks of effort and is prone to human error, leading to fragmented UI across large products.',
    solution: 'Lumina leverages generative AI to analyze brand assets and automatically produce a complete, documented design system with production-ready code.',
    howItWorks: [
      { step: 'Input', description: 'Upload your brand guidelines or a few screenshots of your current UI.' },
      { step: 'Analysis', description: 'Lumina AI identifies core patterns, color palettes, and typographic scales.' },
      { step: 'Generation', description: 'A complete set of themed components is generated and documented.' },
      { step: 'Export', description: 'Sync directly to your design tool or codebase.' },
    ],
    technology: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Figma API'],
    userJourney: [
      { label: 'Onboarding', description: 'Connect your brand assets and define your design goals.' },
      { label: 'Generation', description: 'Watch as the AI builds your components in real-time.' },
      { label: 'Refinement', description: 'Tweak tokens and styles using the intuitive visual editor.' },
      { label: 'Deployment', description: 'Push the system to your development team.' },
    ],
    CTA: {
      primaryText: 'Get Started for Free',
      primaryUrl: 'https://lumina.ai/signup',
      secondaryText: 'Watch Demo',
      secondaryUrl: 'https://youtube.com/watch?v=example1',
    },
    status: 'live',
  },
  {
    slug: 'flux',
    title: 'Flux',
    shortDescription: 'Real-time collaboration for creative teams to iterate faster on complex visual projects.',
    tagline: 'Creative Synergy, Redefined',
    category: 'Collaboration / Productivity',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    logo: '/logos/flux.svg',
    liveUrl: 'https://flux.design',
    videoUrl: 'https://youtube.com/watch?v=example2',
    screenshots: [
      'https://images.unsplash.com/photo-1531403009284-44090ca8ef4d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552664730-d307ca884673?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744094-28f61266d1b6?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      {
        title: 'Multi-User Cursor Sync',
        description: 'See exactly where your team is working with millisecond-latency cursor tracking.',
        image: 'https://images.unsplash.com/photo-1531403009284-44090ca8ef4d?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Versioned Iterations',
        description: 'Switch between project versions instantly with a visual timeline of changes.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884673?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Live Feedback Loops',
        description: 'Annotate any part of the canvas with real-time comments and task assignments.',
        image: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
      },
    ],
    problem: 'Creative teams often struggle with version control and communication gaps when collaborating on large-scale visual projects.',
    solution: 'Flux provides a unified, real-time canvas where designers, product managers, and clients can collaborate synchronously with full version history.',
    howItWorks: [
      { step: 'Canvas Setup', description: 'Create a shared project space and invite your collaborators.' },
      { step: 'Real-time Edit', description: 'Work together on the same canvas with live updates.' },
      { step: 'Feedback', description: 'Use spatial comments to provide precise feedback.' },
      { step: 'Approval', description: 'Mark iterations as approved and archive old versions.' },
    ],
    technology: ['Next.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    userJourney: [
      { label: 'Invitation', description: 'Join a project via a secure magic link.' },
      { label: 'Exploration', description: 'Navigate the spatial canvas to understand the project scope.' },
      { label: 'Collaboration', description: 'Iterate on designs with live teammates.' },
      { label: 'Finalization', description: 'Export the approved assets for production.' },
    ],
    CTA: {
      primaryText: 'Try Flux for Free',
      primaryUrl: 'https://flux.design/signup',
      secondaryText: 'Explore Features',
      secondaryUrl: 'https://flux.design/features',
    },
    status: 'live',
  },
  {
    slug: 'prism',
    title: 'Prism',
    shortDescription: 'Advanced color palette extraction and harmony analysis from any visual source.',
    tagline: 'The Science of Color, Simplified',
    category: 'Utility / Design',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1502691511068-569764c17b7a?auto=format&fit=crop&q=80&w=1200',
    logo: '/logos/prism.svg',
    liveUrl: 'https://prism.color',
    videoUrl: 'https://youtube.com/watch?v=example3',
    screenshots: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e295?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557683316-97B697B47076?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1508615039623-a2560340bafc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579546929518-a5 Duff-8c75e?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      {
        title: 'AI Color Extraction',
        description: 'Extract the most dominant and aesthetically pleasing colors from any image.',
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e295?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Harmony Analysis',
        description: 'Check your palette against color theory rules (complementary, triadic, etc.).',
        image: 'https://images.unsplash.com/photo-1557683316-97B697B47076?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Accessibility Auditor',
        description: 'Instant WCAG contrast checks for every color pairing in your palette.',
        image: 'https://images.unsplash.com/photo-1508615039623-a2560340bafc?auto=format&fit=crop&q=80&w=800',
      },
    ],
    problem: 'Designers often spend hours manually picking colors from inspiration images, only to find they lack accessibility or harmony.',
    solution: 'Prism automates color extraction and applies scientific color theory to ensure palettes are beautiful, accessible, and balanced.',
    howItWorks: [
      { step: 'Upload', description: 'Drop an image or provide a URL to analyze.' },
      { step: 'Extract', description: 'Prism identifies the key color clusters.' },
      { step: 'Analyze', description: 'The AI suggests harmonies and accessibility fixes.' },
      { step: 'Export', description: 'Save as CSS, JSON, or ASE files.' },
    ],
    technology: ['Next.js', 'Canvas API', 'TypeScript', 'Tailwind CSS'],
    userJourney: [
      { label: 'Inspiration', description: 'Upload a photo that captures the desired mood.' },
      { label: 'Extraction', description: 'Get a mathematically accurate color palette.' },
      { label: 'Validation', description: 'Ensure the colors meet accessibility standards.' },
      { label: 'Application', description: 'Apply the colors to your UI design.' },
    ],
    CTA: {
      primaryText: 'Start Extracting',
      primaryUrl: 'https://prism.color/app',
      secondaryText: 'View Gallery',
      secondaryUrl: 'https://prism.color/gallery',
    },
    status: 'live',
  },
  {
    slug: 'vertex',
    title: 'Vertex',
    shortDescription: 'Professional 3D modeling and rendering toolkit built entirely for the web browser.',
    tagline: '3D Creation, Unbound',
    category: 'Graphics / Tool',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=1200',
    logo: '/logos/vertex.svg',
    liveUrl: 'https://vertex.3d',
    videoUrl: 'https://youtube.com/watch?v=example4',
    screenshots: [
      'https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1614850523296-d8c1C7767ef5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1614850523296-d8c1C7767ef5?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      {
        title: 'GPU Accelerated Rendering',
        description: 'Real-time ray tracing and lighting directly in the browser via WebGPU.',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Procedural Geometry',
        description: 'Create complex shapes using node-based procedural generation.',
        image: 'https://images.unsplash.com/photo-1614850523296-d8c1C7767ef5?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Cloud Collaboration',
        description: 'Share 3D scenes and collaborate on models in real-time.',
        image: 'https://images.unsplash.com/photo-1633167606207-d840b5060332?auto=format&fit=crop&q=80&w=800',
      },
    ],
    problem: '3D modeling software is typically heavy, expensive, and requires high-end local hardware, creating a barrier to entry.',
    solution: 'Vertex moves the entire 3D pipeline to the cloud, allowing professional-grade modeling and rendering on any device with a browser.',
    howItWorks: [
      { step: 'Sketch', description: 'Start with basic primitives and shapes.' },
      { step: 'Model', description: 'Use advanced sculpting and procedural tools.' },
      { step: 'Texture', description: 'Apply PBR materials and high-res textures.' },
      { step: 'Render', description: 'Export as GLTF or render high-res images in the cloud.' },
    ],
    technology: ['Next.js', 'Three.js', 'WebGPU', 'WebAssembly', 'TypeScript'],
    userJourney: [
      { label: 'Creation', description: 'Start a new 3D scene in seconds.' },
      { label: 'Modeling', description: 'Build complex geometry using the node editor.' },
      { label: 'Lighting', description: 'Set up cinematic lighting and environments.' },
      { label: 'Export', description: 'Download assets for game engines or web apps.' },
    ],
    CTA: {
      primaryText: 'Launch Vertex',
      primaryUrl: 'https://vertex.3d/app',
      secondaryText: 'View Tutorials',
      secondaryUrl: 'https://vertex.3d/docs',
    },
    status: 'live',
  },
  ...Array.from({ length: 8 }).map((_, i) => ({
    slug: `product-${i + 1}`,
    title: `Product ${i + 1}`,
    shortDescription: 'A premium product description placeholder for future project details.',
    tagline: 'Pushing the boundaries of digital experiences',
    category: 'Software / SaaS',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=1200',
    logo: '/logos/placeholder.svg',
    liveUrl: 'https://example.com',
    videoUrl: 'https://youtube.com/watch?v=example',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744094-28f61266d1b6?auto=format&fit=crop&q=80&w=800',
    ],
    features: [
      {
        title: 'Feature One',
        description: 'Description of a high-impact feature that solves a key user pain point.',
        image: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
      },
      {
        title: 'Feature Two',
        description: 'Another powerful capability that differentiates the product from competitors.',
        image: 'https://images.unsplash.com/photo-1542744094-28f61266d1b6?auto=format&fit=crop&q=80&w=800',
      },
    ],
    problem: 'A common industry problem that the product aims to solve effectively.',
    solution: 'A sophisticated technical solution that delivers measurable results and value.',
    howItWorks: [
      { step: 'Step 1', description: 'Initial interaction and data input.' },
      { step: 'Step 2', description: 'Internal processing and logic application.' },
      { step: 'Step 3', description: 'Final output and result delivery.' },
    ],
    technology: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    userJourney: [
      { label: 'Discover', description: 'User finds the product.' },
      { label: 'Activate', description: 'User sets up their account.' },
      { label: 'Achieve', description: 'User solves their problem.' },
    ],
    CTA: {
      primaryText: 'Visit Product',
      primaryUrl: 'https://example.com',
      secondaryText: 'Request Demo',
      secondaryUrl: 'https://example.com/demo',
    },
    status: 'beta' as const,
  })),
];
