export type Asset = {
  type: "image" | "video";
  src: string | string[];
  info?: boolean;
  /** Keep UI mockups sharp — skip heavy Next.js compression */
  crisp?: boolean;
  /** Optional art-directed crops for the project hero */
  srcResponsive?: {
    phone: string;
    tablet: string;
    desktop: string;
  };
  description?: {
    title: string;
    paragraph: string;
  };
  /** Render image arrays stacked instead of as a carousel */
  stack?: boolean;
  /** 2 full-width rows, then 3 square tiles */
  mosaic?: boolean;
  /** Full-width, 2-col, full-width, 3-col photo spread */
  spread?: boolean;
  /** Equal-column grid for image arrays */
  grid?: 2 | 3 | 4;
  /** Image indexes that span the full grid width */
  wide?: number[];
  /** Indexes to display-crop (overflow hidden + object-cover), e.g. a too-tall wide tile */
  crop?: number[];
  /** CSS aspect-ratio for cropped tiles, e.g. "4696 / 2638" */
  cropAspect?: string;
  /** Hairline gaps, for a packed texture board */
  tight?: boolean;
  /** Course / instructors / skills row under the visual */
  meta?: Record<string, string>;
  /** Keep this asset grouped with the next (no illustration-gallery divider) */
  hideDivider?: boolean;
  /** Clip black bars on the left and right of a video */
  clipSides?: boolean;
  /** Uniform zoom to crop edge artifacts (1 = none) */
  zoom?: number;
  /** Extra vertical shift after zoom, in % (negative crops more from the bottom) */
  zoomY?: number;
  /** Shift the crop window up, in px */
  zoomTop?: number;
  /** Reveal this many extra pixels on every edge */
  zoomOutPx?: number;
  /** Still(s) shown above a video, same section */
  above?: string | string[];
  /** Show a mute/unmute control for this video */
  sound?: boolean;
  /** Optional soundtrack played in sync with a muted video */
  audioSrc?: string;
  /** Loop the video. Defaults to true */
  loop?: boolean;
  /** CSS object-position for the shared hero crop, e.g. "center 30%" */
  heroPosition?: string;
  /** Scale the hero inside its frame. 1 = cover, <1 zooms out */
  heroZoom?: number;
  /** Frame fill behind a zoomed-out hero, e.g. "#8ab6c8" */
  heroFill?: string;
  /** How the hero sits in the shared frame. Defaults to cover */
  heroFit?: "cover" | "contain";
  /** Carousel swap interval in ms (default 3000) */
  interval?: number;
  /** Keep the first image visible and fade the second as an overlay */
  overlay?: boolean;
};

export type Info = {
  course?: string;
  instructor?: string;
  instructors?: string;
  partner?: string;
  skills?: string;
  role?: string;
};

export type Project = {
  name: string;
  info?: Info;
  assets: Asset[];
  title: string;
  /** Homepage gallery tile */
  menu?: {
    thumb: string;
    caption: string;
  };
};

const projectsData: Project[] = [
  {
    name: "Cactus UX",
    title: "01 / Cactus UX  / Startup Course  / 2024-2025",
    menu: {
      thumb: "/menu/cactus.webp",
      caption: "Cactus | UX/UI",
    },
    info: {
      course: "Startup, UX/UI",
      instructor: "Nomi Gelbach",
      partner: "Elya Asulin",
      skills: "Design System, Prototype",
    },
    assets: [
      {
        type: "image",
        src: "/1-cactus ux/1.webp",
        srcResponsive: {
          phone: "/1-cactus%20ux/1-phone.webp",
          tablet: "/1-cactus%20ux/1-tablet.webp",
          desktop: "/1-cactus%20ux/1-desktop.webp",
        },
        info: true,
        description: {
          title: "Cactus UX UI",
          paragraph:
            "Cactus is a UX/UI project focused on planning road trips around educational experiences. It combines route planning with curated learning stops, making it simple for families to build journeys that are both practical and meaningful.",
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/inspiration.webp",
        description: {
          title: "The Inspiration",
          paragraph: `
The inspiration behind Cactus comes from the spirit of the American road, wide skies, winding highways, and the promise of discovery around every turn. It draws from the nostalgia of Route 66 signs, vintage motels, and desert landscapes that evoke both adventure and comfort. Just like these timeless journeys, Cactus encourages families to slow down, explore, and learn together along the way, turning travel into a shared experience of curiosity and growth.
          `,
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/logo.webp",
        description: {
          title: "Our Logo",
          paragraph: `
The Cactus logo is based on the iconic Route 66 shield, a symbol of freedom and the open road. The unique silhouette of the sign is combined with a cactus to reflect curiosity, exploration, and learning on the move. It captures what our app is all about: helping families turn every journey into an educational adventure.
`,
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/2.webp",
        description: {
          title: "Home Page",
          paragraph: `
The Home Page provides a clear overview of the app’s main features. Users can explore featured adventures and suggested routes, view top educational destinations, and access personalized itineraries and upcoming trips for continued planning. The navigation bar offers direct access to key sections, ensuring smooth transitions between discovery, saved routes, and profile settings.
`,
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/search-filters-v2.webp",
        crisp: true,
        description: {
          title: "Search & Filters",
          paragraph: `

The filter section lets users tailor their journey by selecting destinations, timeframes, and learning goals like navigation or ecology, with a distance slider to keep trips within reach. The location search then displays the results, each with an image, short description, and tags highlighting key learning themes such as history or science.
          `,
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/4.webp",
        description: {
          title: "Itineraries",
          paragraph: `
The itineraries section organizes trips into active, upcoming, and past journeys. Active trips show routes and highlights, upcoming ones preview destinations with photos and short descriptions, and past trips stay saved for future inspiration.

`,
        },
      },
      {
        type: "image",
        src: "/1-cactus ux/7.webp",
        crisp: true,
      },
    ],
  },
  {
    title: "02 / Open House Festival  / Branding Course  / 2024-2025",
    name: "Open House Festival",
    menu: {
      thumb: "/menu/open-house.webp",
      caption: "Open House Festival | Branding",
    },
    info: {
      course: "Brand Design",
      instructor: "Rotem Bix",
      partner: "Leah Litov",
      skills: "Branding, Layout, Typography, Photography",
    },
    assets: [
      {
        type: "image",
        src: "/3-open house/1.webp",
        info: true,
        description: {
          title: "Open House Festival Jerusalem",
          paragraph: `
The Open House Festival Jerusalem reintroduces the city to its residents, revealing hidden buildings and showing familiar sites in a new light. The branding reflects this through photography of light entering interior spaces.

          `,
        },
      },
      {
        type: "image",
        src: "/3-open house/2.webp",
        description: {
          title: "Logo, Colors, & Textures",
          paragraph: `
The logo is typographic, designed to capture the atmosphere of Jerusalem’s alleys and intimate corners. Its structure reflects the city’s layered character, while textures drawn from photography emphasize the way light and shadow shape these spaces. The black and white palette reinforces this focus, giving familiar places a new perspective.

          `,
        },
      },
      {
        type: "image",
        src: "/3-open house/3.webp",
        description: {
          title: "Typography",
          paragraph: `
The typography style combines Cooperative and Masada to create contrast and rhythm. Cooperative is used for bold titles, giving a strong graphic presence, while Masada carries the running text in a range of weights, balancing readability with character. Together, they reflect the city’s mix of modern and historic voices.
          `,
        },
      },
      {
        type: "image",
        src: "/3-open house/4.webp",
        description: {
          title: "Posters",
          paragraph: `
The first poster presents the Open House Festival as a whole, using bigger and bolder typography, a clear grid structure, and the festival branding. The second focuses on specific events, using a more dynamic layout with more details. Both share a unified visual language with strong typography and high contrast, creating a cohesive identity that connects the main event with its individual experiences.
          `,
        },
      },
      {
        type: "video",
        src: "/3-open house/5.mp4",
        description: {
          title: "Social Media",
          paragraph: `
The social media design carries the structured and architectural themes of the posters into a digital format. The feed uses clean compositions and strong contrast, while each story shows quiet spaces where only one element moves, like light shifting or a shadow moving. The subtle motion highlights the atmosphere of each place and invites viewers to slow down and observe.
          `,
        },
      },
      {
        type: "image",
        grid: 2,
        wide: [0, 3],
        hideDivider: true,
        src: [
          "/3-open house/6a.webp",
          "/3-open house/6c.webp",
          "/3-open house/6d.webp",
          "/3-open house/6b.webp",
        ],
      },
      {
        type: "image",
        src: [
          "/3-open house/7a.webp",
          "/3-open house/7b.webp",
          "/3-open house/7c.webp",
          "/3-open house/7d.webp",
          "/3-open house/7e.webp",
        ],
      },
    ],
  },
  {
    title: "03 / Wanderlust / Branding Course  / 2024",
    name: "Wanderlust",
    menu: {
      thumb: "/menu/wanderlust.webp",
      caption: "Wanderlust | Branding",
    },
    info: {
      course: "Branding Introduction",
      instructor: "Adlai Stock",
      skills:
        "Product & Package Design, Typography, Branding, Copywriting",
    },
    assets: [
      {
        type: "image",
        src: "/4-wanderlust/1-hero-4.webp",
        info: true,
        description: {
          title: "Wanderlust",
          paragraph: `
      Wanderlust creates glowing 3D light boxes, each inspired by a specific tourist attraction. They capture the atmosphere of each destination through layers of light and depth, turning moments of travel into lasting keepsakes.
    `,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/2.webp",
        description: {
          title: "Inspiration",
          paragraph: `
          Wanderlust is inspired by the hazy romance and quiet mystery of golden light over rooftops, mist-covered mountains, and landmarks emerging from the fog. Golden dawns and blue-tinted dusks cast over iconic landmarks evoke a deep sense of nostalgia.
          `,
        },
      },
      {
        type: "image",
        src: ["/4-wanderlust/3.webp", "/4-wanderlust/3-grid.webp"],
        overlay: true,
        interval: 1500,
        crisp: true,
        description: {
          title: "Logo",
          paragraph: `
The Wanderlust logo is typographic, inspired by the layered, paper-cut look of the light boxes. The overlapping letters create a sense of depth and form a window-like composition, echoing the way light passes through the product itself.           `,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/4-colors.webp",
        crisp: true,
        description: {
          title: "Design System",
          paragraph: `
The design system combines color and typography into a calm, cohesive language inspired by light and atmosphere. Soft blues, warm golden tones, and gentle neutrals are paired with Cormorant Garamond to create a refined, timeless feel that supports storytelling across titles and body text.          `,
        },
      },
      {
        type: "image",
        stack: true,
        crisp: true,
        src: [
          "/4-wanderlust/package-illustrator.webp",
          "/4-wanderlust/5.webp",
        ],
        description: {
          title: "Package Design",
          paragraph: `
The packaging frames the Lightbox through two perspectives. The front presents a branded visual inspired by the scene, while the back shows a photograph of the Lightbox itself, grounding the design in the physical object. The shape of the package resembles a suitcase, adding to the travel and souvenir concept.          `,
        },
      },

      {
        type: "image",
        src: [
          "/4-wanderlust/6a.webp",
          "/4-wanderlust/6c.webp",
          "/4-wanderlust/6-golden-gate.webp",
          "/4-wanderlust/6-charles-bridge.webp",
        ],

        description: {
          title: "Light Boxes",
          paragraph: `
Each lightbox uses layered cutouts and soft light to create depth within a small frame. Familiar landmarks are shown through clear silhouettes, allowing light and shadow to shape the scene. The result is a calm object that focuses on place, scale, and atmosphere without unnecessary detail.
`,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/7.webp",
        description: {
          title: "Social Media",
          paragraph: `
          The social media page shares sneak peeks of new locations, product images, and updates on where to find them in different tourist spots around the world. The posts maintain a calm, cohesive look in keeping with the brand’s style.
          `,
        },
      },

      {
        type: "video",
        src: "/4-wanderlust/cut-landing-page.mp4",
        loop: true,
      },
    ],
  },
  {
    name: "Pini The Penguin",
    title: "04 / Pini The Penguin  / Illustration  / 2025",
    menu: {
      thumb: "/menu/pini-character.webp",
      caption: "Pini The Penguin | Illustration",
    },
    info: {
      course: "Children’s Book Illustration & Design",
      instructor: "Limor Snorchemer, Ada Vardi",
      skills: "Illustration, Typography, Layout, Storytelling, Character Design",
    },
    assets: [
      {
        type: "image",
        src: "/7-illustration gallery/pini-hero.webp",
        info: true,
        description: {
          title: "Pini The Penguin",
          paragraph: `This children’s book follows Pini, a sweet little penguin who loves to fish, play with snowballs, and most of all, hop around! But there's one thing all the other penguins in the neighborhood do every single day that Pini just doesn't like to do at all.`,
        },
      },
      {
        type: "image",
        src: "/7-illustration gallery/pini-storyboard.webp",
        description: {
          title: "Sketches",
          paragraph: `The process began by dividing the text into pages and placing them using a structured grid. I then added initial sketches to test the composition of time, ensuring the illustrations worked seamlessly one after another. After refining the storyboard over a few rounds, I moved on to character development and f\u200Cinal illustrations.`,
        },
      },
      {
        type: "image",
        src: "/7-illustration gallery/pini-sketches.webp",
        description: {
          title: "Pini",
          paragraph: `To reflect Pini's curious and brave personality straight from the text, I designed him to feel active and fun-loving. His dynamic postures and distinctive purple color bring his love for play and freedom across the ice to life.`,
        },
      },
      {
        type: "video",
        src: "/7-illustration gallery/pini-scene-buildup.mp4",
        clipSides: true,
        description: {
          title: "Scene Buildup",
          paragraph: `Building upon the initial sketch, I blocked in the flat colors and then incorporated custom textures made with acrylic paint. By applying Photoshop clipping masks to weave the colors and textures into the illustration, I created the f\u200Cinal version.`,
        },
      },
      {
        type: "image",
        spread: true,
        crisp: true,
        src: [
          "/7-illustration gallery/pini-gallery-1.jpg",
          "/7-illustration gallery/pini-gallery-2.jpg",
          "/7-illustration gallery/pini-gallery-3.jpg",
          "/7-illustration gallery/pini-gallery-4.jpg",
          "/7-illustration gallery/pini-gallery-5.jpg",
          "/7-illustration gallery/pini-gallery-6.jpg",
          "/7-illustration gallery/pini-gallery-7.jpg",
        ],
      },
    ],
  },
  {
    title: "05 / The Eternal Israeli / Typography Course  / 2024",
    name: "The Eternal Israeli",
    menu: {
      thumb: "/menu/eternal-israeli.webp",
      caption: "The Eternal Israeli | Typography",
    },
    info: {
      course: "Typography",
      instructor: "Dan Ozeri",
      skills: "Typography, Micro-typography, Complex Layout",
    },
    assets: [
      {
        type: "image",
        src: "/6-eternal israeli/1.webp",
        info: true,
        description: {
          title: "The Eternal Israeli",
          paragraph: `
The Eternal Israeli is a typographic interpretation of Nisan Shor’s essay on identity and disillusionment in Israeli society, using rhythm, density, and fragmentation to reflect the tension between language, heritage, and belonging.          `,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/2.webp",
        description: {
          title: "Parallel Text",
          paragraph: `
This broadsheet pairs “The Eternal Israeli” with Shakespeare’s The Tempest, creating a dialogue between two emotional texts. The repetitive, collapsing language of Shor’s text mirrors the gathering storm in Shakespeare’s play. Visually, the parallel layout transforms the page into a confrontation between inner turmoil and external chaos.          `,
        },
      },
      {
        type: "video",
        src: "/6-eternal israeli/storm-buildup.mp4",
        loop: true,
        description: {
          title: "The Storm",
          paragraph: `Throughout the broadsheet, text from Shakespeare’s The Tempest gradually overtakes the page layout. As the sequence progresses, columns of storm text absorb more space while embedded thumbnails of disaster aftermath become increasingly prevalent.`,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/storm-index.webp",
        crisp: true,
        description: {
          title: "The Storm Index",
          paragraph: `This spread catalogs recorded storm events through paired pages of photography and text. Numbered thumbnails link each image to data on a specific disaster, turning the aftermath of the tempest into an index rather than a single scene of collapse.`,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/4.webp",
        description: {
          title: "Front & Back Cover",
          paragraph: `
The front cover presents a dense, agitated flow of text so heavily crossed out 
that it is now unreadable, reflecting the frustration and anger described in The Eternal Israeli. The back cover serves as an index of storms, a quiet aftermath
that catalogs destruction through imagery and information, turning chaos
into documentation.          `,
        },
      },
      {
        type: "image",
        grid: 2,
        wide: [0],
        crop: [0],
        cropAspect: "1920 / 1080",
        hideDivider: true,
        crisp: true,
        src: [
          "/6-eternal israeli/gallery-2.webp",
          "/6-eternal israeli/gallery-1.webp",
          "/6-eternal israeli/gallery-5.webp",
          "/6-eternal israeli/gallery-7.webp",
          "/6-eternal israeli/gallery-8.webp",
        ],
      },
      {
        type: "image",
        src: [
          "/6-eternal israeli/7a.webp",
          "/6-eternal israeli/7b.webp",
          "/6-eternal israeli/7c.webp",
          "/6-eternal israeli/7d.webp",
          "/6-eternal israeli/7e.webp",
          "/6-eternal israeli/7f.webp",
        ],
      },
    ],
  },
  {
    name: "Mass Disruption",
    title: "06 / Mass Disruption  / Final Project",
    menu: {
      thumb: "/menu/mass-disruption-menu.webp",
      caption: "Mass Disruption | Final Project",
    },
    info: {
      course: "Final Project",
      instructors: "Renana Irshi, Nir Shaked",
      skills: "Speculative Design, Deep Research, Spatial Design, UX/UI, Creative Coding",
    },
    assets: [
      {
        type: "image",
        src: "/mass-disruption/hero.webp",
        crisp: true,
        info: true,
        description: {
          title: "Mass\nDisruption",
          paragraph: `A 360° interactive tour exploring reality’s delicate balance. By altering just one physical constant of the universe, this simulation reveals how landscapes and living structures must radically re-engineer their geometry or face collapse.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/explainer.mp4",
        description: {
          title: "What If?",
          paragraph: `Built as an interactive web experience, the project translates speculative physics into spatial design. By manipulating mass and height, the simulation guides users through altered environments where structures must radically re-engineer their geometry or face collapse.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/360-view.mp4",
        zoom: 1.03,
        zoomY: -4,
        zoomTop: 10,
        zoomOutPx: 30,
        description: {
          title: "360 View",
          paragraph: `The 360-degree view immerses visitors in a spherical environment, allowing them to look around and explore the space from every angle. By navigating freely within the panorama, viewers can experience the altered landscape and observe how structures adapt to shifting physical constants.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/transition-points.mp4",
        loop: true,
        description: {
          title: "The\nTransition",
          paragraph: `The interactive slider lets users transition between different physical states, from Linear World and Lightweight to Our World, Lattice, and Critical Mass. Moving the marker along the timeline allows visitors to shift parameters and watch the landscape change in real time.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/hotspot.mp4",
        zoom: 1.04,
        zoomY: -4,
        description: {
          title: "Hot Spot\nButton",
          paragraph: `Clicking on interactive hotspots within the 360-degree environment opens detailed comparison windows. These popups reveal specific structural data like height, mass, and footprint, while explaining how physical phenomena like weak gravity allow formations to support their own weight and maintain height.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/sketches-5.mp4",
        clipSides: true,
        description: {
          title: "Sketches",
          paragraph: `To develop the visual language, I first used AI to run simulations and then explored colored pencil illustrations. I ultimately landed on a digital collage format, testing custom textures to bring the f\u200Cinal design together.`,
        },
      },
      {
        type: "image",
        src: "/mass-disruption/textures-grid.webp",
        crisp: true,
        description: {
          title: "Collage\nTextures",
          paragraph: `To give the digital environment physical weight, I built a library of abstract textures ranging from organic cellular networks to weathered mineral surfaces and fine linear grain fields. Layering these elements created a tactile depth that grounds the entire project.`,
        },
      },
      {
        type: "video",
        src: "/mass-disruption/scene-buildup.mp4",
        description: {
          title: "Scene\nBuildup",
          paragraph: `To prepare the artwork for spherical wrapping, I carefully mirrored the composition's outer edges for a seamless fit. I began with an empty canvas, gradually layering the background, foreground elements, and rock formations until the complete landscape emerged.`,
        },
      },
      {
        type: "image",
        grid: 2,
        wide: [0, 3],
        crisp: true,
        src: [
          "/mass-disruption/gallery-1-crop.webp",
          "/mass-disruption/gallery-2-crop.webp",
          "/mass-disruption/gallery-3-crop.webp",
          "/mass-disruption/gallery-4-crop.webp",
          "/mass-disruption/gallery-5-crop.webp",
          "/mass-disruption/gallery-6-crop.webp",
        ],
      },
    ],
  },
  {
    title: "07 / Illustration Gallery/ Illustration  / 2022- 2025",
    name: "Illustration Gallery",
    menu: {
      thumb: "/menu/illustration.webp",
      caption: "Illustration Gallery",
    },
    assets: [
      {
        type: "image",
        src: "/7-illustration gallery/1.webp",
        info: true,
        description: {
          title: "Illustration Gallery",
          paragraph: `
Illustrations created throughout my degree, many of them shaped by specific texts and small narrative moments. I enjoy using illustration to communicate ideas in a clear and personal way.           `,
        },
      },
      {
        type: "image",
        mosaic: true,
        src: [
          "/7-illustration gallery/ostrich-sketches.webp",
          "/7-illustration gallery/2a.webp",
          "/7-illustration gallery/ostrich-keychain.webp",
          "/7-illustration gallery/ostrich-coaster.webp",
          "/7-illustration gallery/ostrich-mugs.webp",
        ],
        description: {
          title: "Ostrich Attack Survival Guide",
          paragraph: `
A humorous illustrated user guide explaining how to survive an ostrich encounter. The drawings use a pen and minimalist watercolor technique. The gallery includes the main illustration and a set of merch items that grew from the same visual language and concept.          `,
        },
      },
      {
        type: "image",
        stack: true,
        crisp: true,
        src: [
          "/7-illustration gallery/forest-cleanup-3.webp",
          "/7-illustration gallery/forest-cleanup-2.webp",
          "/7-illustration gallery/forest-cleanup-1.webp",
        ],
        description: {
          title: "Forest Guardian",
          paragraph: `
Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.`,
        },
      },

      {
        type: "image",
        src: [
          "/7-illustration gallery/4a.webp",
          "/7-illustration gallery/4b.webp",
          "/7-illustration gallery/4c.webp",
        ],
        description: {
          title: "Eleven",
          paragraph: `
A three-part illustration of Eleven by Sandra Cisneros, focusing on how Rachel’s birthday doesn’t feel as bright as she hoped. The red sweater becomes a creature in her imagination, the gathering at home shows her surrounded yet lonely, and the tiny zero balloon hints at how small she feels. The acrylic technique, limited palette, and rough textures amplify the intensity of her emotions and the way the day overwhelms her.`,
        },
      },
      {
        type: "image",
        grid: 2,
        crisp: true,
        src: [
          "/7-illustration gallery/vantage-1.webp",
          "/7-illustration gallery/vantage-4.webp",
          "/7-illustration gallery/vantage-3.webp",
          "/7-illustration gallery/vantage-2.webp",
        ],
        description: {
          title: "The Vantage Point",
          paragraph: `A collection of three comic shorts and ink studies exploring urban perspective, movement, and city life. It follows intersecting moments across New York City, capturing bustling commercial districts, hidden alleyways, and shifting neighborhood angles.`,
        },
      },
      {
        type: "video",
        src: "/7-illustration gallery/three-little-pigs.mp4",
        description: {
          title: "The Three\nLittle Pigs",
          paragraph: `
A 3-still retelling of The Three Little Pigs created in Cinema 4D, reimagining the familiar tale as a cozy, theatrical digital diorama. Embracing a tactile mixed-media aesthetic, it pairs origami-inspired papercraft silhouettes with plush, felt-like hills, giving each scene its own distinct texture, mood, and cinematic atmosphere as the story unfolds.`,
        },
      },
    ],
  },
  {
    title: "08 / Animation Gallery / Animation  / 2022- 2025",
    name: "Animation Gallery",
    menu: {
      thumb: "/menu/motion.webp",
      caption: "Motion Gallery",
    },
    assets: [
      {
        type: "video",
        src: "/animations/map.mp4",
        description: {
          title: "Animation Gallery",
          paragraph:
            "Motion work from different stages of my degree, including projects made for branding alongside short clips focused on simple storytelling. The collection reflects an ongoing exploration of form, pacing, and visual structure across contexts.",
        },
      },

      {
        type: "video",
        src: "/animations/2.mp4",
        description: {
          title: "Why? Because!",
          paragraph: `Animation for a brief to transform one word into another. The transition moves between the Hebrew words for “why?” and “because!”. They are common everyday words often said together, which makes them a simple base for a clean morph. The animation focuses on the shift in letterforms, using bold shapes and color to highlight the motion.`,
        },
      },
      {
        type: "video",
        src: "/animations/lo-besheirut.mp4",
        clipSides: true,
        sound: true,
        above: [
          "/animations/lo-besheirut-sketches.jpg",
          "/animations/lo-besheirut-storyboard.jpg",
        ],
        crisp: true,
        description: {
          title: "Lo Be'sherut",
          paragraph: `Created for an index course, this oil pastel animation brings my sister's chaotic audio diary to life. The project systematically catalogs a day defined by Murphy’s Law, turning every missed connection, transit disaster, and frustrating detour into a playful frame-by-frame archive.`,
        },
      },
      {
        type: "video",
        src: "/animations/4.mp4",
        sound: true,
        audioSrc: "/animations/hippopotamus-song.mp3",
        description: {
          title: "The Hippo Song",
          paragraph: `
          An animation gif for Oscar Isaac’s “The Hippopotamus Song”. The gif shows a small hippo dancing around a swamp on stepping stones. The movement is done in clear cuts that follow the rhythm of the music, and the style leans on rough shapes, soft colors and grainy textures.
          `,
        },
      },
      {
        type: "video",
        src: "/animations/joe-rogan-frame.mp4",
        above: "/animations/podcast-mockup.jpg",
        crisp: true,
        description: {
          title: "Podcast Visualizer",
          paragraph: `
A podcast visualizer for three of Joe Rogan’s most eccentric guests, touching on conspiracies, aliens, pyramids, and mushrooms. The animation loops in a psychedelic dive through an eye, revealing each guest and topic as it goes deeper. Bold colors and trippy motion match the wild energy of the episodes.          `,
        },
      },
    ],
  }
];

export default projectsData;
