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
};

export type Info = {
  course?: string;
  instructor?: string;
  partner?: string;
  skills?: string;
  role?: string;
};

export type Project = {
  name: string;
  info?: Info;
  assets: Asset[];
  title: string;
};

const projectsData: Project[] = [
  {
    name: "Cactus UX",
    title: "01 / Cactus UX  / Startup course  / 2024-2025",
    info: {
      course: "Startup, Ux Ui",
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
          title: "Cactus ux ui",
          paragraph:
            "Cactus is a UX UI project focused on planning road trips around educational experiences. It combines route planning with curated learning stops, making it simple for families to build journeys that are both practical and meaningful.",
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/2.webp",
        description: {
          title: "The Inspiration",
          paragraph: `
The inspiration behind Cactus comes from the spirit of the American road, wide skies, winding highways, and the promise of discovery around every turn. It draws from the nostalgia of Route 66 signs, vintage motels, and desert landscapes that evoke both adventure and comfort. Just like these timeless journeys, Cactus encourages families to slow down, explore, and learn together along the way, turning travel into a shared experience of curiosity and growth.
          `,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/3.webp",
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
        src: "/1-cactus ux/3.webp",
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
    name: "Cactus Brand",
    title: "02 / Cactus Brand  /Startup course  / 2024-2025",
    info: {
      course: "Startup, Ux Ui",
      instructor: "Nomi Gelbach",
      partner: "Elya Asulin",
      skills: "Design System, Prototype",
    },
    assets: [
      {
        type: "image",
        src: "/2-cactus brand/1.webp",
        info: true,
        description: {
          title: "Cactus",
          paragraph: `
Cactus is an app for parents living on the road, helping turn travel into learning with educational stops across the U.S. museums, parks, and historic sites, through a simple, intuitive interface.
`,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/2.webp",
        description: {
          title: "The Inspiration",
          paragraph: `
The inspiration behind Cactus comes from the spirit of the American road, wide skies, winding highways, and the promise of discovery around every turn. It draws from the nostalgia of Route 66 signs, vintage motels, and desert landscapes that evoke both adventure and comfort. Just like these timeless journeys, Cactus encourages families to slow down, explore, and learn together along the way, turning travel into a shared experience of curiosity and growth.

          `,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/3.webp",
        description: {
          title: "Our Logo",
          paragraph: `

The Cactus logo is based on the iconic Route 66 shield, a symbol of freedom and the open road. The unique silhouette of the sign is combined with a cactus to reflect curiosity, exploration, and learning on the move. It captures what our app is all about: helping families turn every journey into an educational adventure.
          `,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/4.webp",
        description: {
          title: "Color palette",
          paragraph: `
The color palette is inspired by nature and the open road. The most prominante color is the blue brings a sense of space and freedom,  while warm gold, rust, and earth tones reflect the Western landscape. The colors feel natural, grounded, and welcoming, perfect for family adventures and hands-on discovery.
`,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/5.webp",
        description: {
          title: " Typography",
          paragraph: `
Our typography combines warmth with clarity. Job Clarendon adds a bold, Western charm that feels adventurous and familiar, while Open Sans keeps everything clean, simple, and easy to read. Together, they reflect the friendly, down to earth spirit of Cactus.

          `,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/6.webp",
        description: {
          title: "Image style",
          paragraph: `
Our image style highlights authentic family moments, surrounded by nature and the warmth of the open road. Sunlit deserts, winding highways, and real-life adventures evoke a sense of freedom and connection. Every photo invites you into a world where learning happens through experience, where the journey itself becomes the classroom.
          `,
        },
      },
      {
        type: "image",
        src: "/2-cactus brand/7.webp",
        description: {
          title: "Icons, Design, Copywrite",
          paragraph: `
          Cactus uses vintage highway inspired icons and shield shapes to capture the spirit of the open road. Friendly, bold typography keeps the design approachable, while playful copy like “Hit the Road” and “Grow with every mile!” sets an adventurous, family friendly tone. Together, the visuals and words create a style that feels intuitive, inviting, and full of discovery.
`,
        },
      },
      {
        type: "video",
        src: "/2-cactus brand/8.mp4",
      },
    ],
  },
  {
    title: "03 / Open House Festival  / Branding course  / 2024-2025",
    name: "Open House Festival",
    info: {
      course: "Startup, Ux Ui, ",
      instructor: "Rotem Bix",
      partner: "Leah Litov",
      skills: "Branding, Layout, Typography photography, ",
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
The logo is typographic, designed to capture the atmosphere of Jerusalem’s alleys and intimate corners. Its structure reflects the city’s layered character, while textures drawn from photography emphasize the way light and shadow shape these spaces. The black and white palette reinforces this focus, giving familiar places a new  perspective.

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
The first poster presents the Open House festival as a whole, using bigger an bolder typography and a clear grid structure and the festival branding. The second focuses on specific events, using a more dynamic layout with more details. Both share a unified visual language with strong typography and high contrast, creating a cohesive identity that connects the main event with its individual experiences.
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
        src: [
          "/3-open house/6a.webp",
          "/3-open house/6b.webp",
          "/3-open house/6c.webp",
          "/3-open house/6d.webp",
        ],

        description: {
          title: "Merch",
          paragraph:
            "The merch collection serves as both keepsakes and navigation tools for festival visitors. Postcards, itineraries, and bookmarks are designed as simple, elegant souvenirs that capture the festival’s architectural atmosphere through black and white imagery and clean layouts. Flags placed at event locations extend this language into the city, marking each site with the same visual clarity.",
        },
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
    title: "04 / Wanderlust / Branding course  / 2024",
    name: "Wanderlust",
    info: {
      course: "Branding introduction",
      instructor: "Adlai Stock",
      skills:
        "Product & Package design, Typography, Branding, Copy writing ",
    },
    assets: [
      {
        type: "image",
        src: "/4-wanderlust/1.webp",
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
          Wanderlust is inspired by the hazy romance and quiet mystery of golden light over rooftops, mist covered mountains, and landmarks emerging from the fog. Golden dawns and blue-tinted dusks cast over iconic landmarks evoke a deep sense of nostalgia.
          `,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/3.webp",
        description: {
          title: "Logo",
          paragraph: `
The Wanderlust logo is typographic, inspired by the layered, paper-cut look of the light boxes. The overlapping letters create a sense of depth and form a window-like composition, echoing the way light passes through the product itself.           `,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/4.webp",
        description: {
          title: "Design System",
          paragraph: `
The design system combines color and typography into a calm, cohesive language inspired by light and atmosphere. Soft blues, warm golden tones, and gentle neutrals are paired with Cormorant Garamond to create a refined, timeless feel that supports storytelling across titles and body text.          `,
        },
      },
      {
        type: "image",
        src: "/4-wanderlust/5.webp",
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
          "/4-wanderlust/6b.webp",
          "/4-wanderlust/6c.webp",
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
        src: "/4-wanderlust/8.mp4",
      },
    ],
  },
  {
    name: "Forest Guardian",
    title: "05 / Forest Guardian  / Illustration course  / 2025",
    info: {
      course: "Illustration and Innovation in the Industry",
      instructor: "Limor Snochemer",
      skills: "Design, illustration, concept.",
    },
    assets: [
      {
        src: "/5-forest guardian/1.webp",
        type: "image",
        info: true,
        description: {
          title: "Forest Guardian",
          paragraph:
            "Forest Guardian is a public awareness campaign led by “Grandpa Yochanan”, teaching about the effects of trash on the forest and encouraging responsibility for the environment.",
        },
      },
      {
        src: "/5-forest guardian/2.webp",
        type: "image",
        description: {
          title: "Concept",
          paragraph:
            "The Forest Cleanup campaign features “Grandpa Yochanan,” a wise mushroom who shares friendly messages about the effects of trash on nature. Placed in key forest spots, his warm illustrations spark curiosity and inspire visitors to protect the environment.",
        },
      },
      {
        src: "/5-forest guardian/3.webp",
        type: "image",
        description: {
          title: "Saba Yochanan",
          paragraph:
            "Saba Yochanan is the guardian of the forest, a wise old mushroom who shares his knowledge of the woods with kindness and patience, teaching visitors to care for nature through simple, thoughtful messages. His friendly and approachable personality makes learning about the forest and about the negative impact of garbage feel educational rather than an attack.",
        },
      },
      {
        src: "/5-forest guardian/4.webp",
        type: "image",
        description: {
          title: "Assets",
          paragraph:
            "The campaign’s assets consist of hand-drawn watercolor illustrations of mushrooms, plants, and forest litter. These elements create a visual language that is both warm and approachable, while highlighting the impact of trash on nature. The illustrations can be used across posters, signs, and information stands.",
        },
      },
      {
        src: "/5-forest guardian/5.webp",
        type: "image",
        description: {
          title: "Posters",
          paragraph:
            "The posters bring “Grandpa Yochanan’s” messages into large public spaces, making the campaign visible even from a distance. Their simple layouts combine hand-drawn illustrations with short, memorable phrases that highlight the impact of trash on the forest. ",
        },
      },
      {
        src: [
          "/5-forest guardian/6a.webp",
          "/5-forest guardian/6b.webp",
          "/5-forest guardian/6c.webp",
          "/5-forest guardian/6d.webp",
        ],
        type: "image",
        description: {
          title: "The Campaign",
          paragraph:
            "Each stand presents a clear timeline of how long different types of waste remain in the forest, illustrated with familiar items like bottles, bags, and fruit peels. “Grandpa Yochanan” guides visitors through the facts, making the message fun and easy to remember. ",
        },
      },
      {
        src: "/5-forest guardian/7.webp",
        type: "image",
      },
    ],
  },
  {
    title: "06 / The Eternal Israeli / Typography course  / 2024",
    name: "The Eternal Israeli",
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
          title: "Paralel Text",
          paragraph: `
This broadsheet pairs “The Eternal Israeli” with Shakespeare’s The Tempest, creating a dialogue between two emotional texts. The repetitive, collapsing language of Shor’s text mirrors the gathering storm in Shakespeare’s play. Visually, the parallel layout transforms the page into a confrontation between inner turmoil and external chaos.          `,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/3.webp",
        description: {
          title: "The storm",
          paragraph: `
          This sequence shows The Tempest gradually overtaking the broadsheet, each page more consumed by the storm’s text. Each column of the storm gets more and more images of the damage in the aftermath of famous storms. The last page is an accumulation of the tempest alone, captures the point of full collapse, where language, image, and meaning are swept into the chaos left in its wake.
          `,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/4.webp",
        description: {
          title: "Front & Back Cover ",
          paragraph: `
The front cover presents a dense, agitated flow of text so heavily crossed out 
that it is not unreadable, reflecting the frustration and anger described in The Eternal Israeli. The back cover serves as an index of storms, a quiet aftermath
that catalogs destruction through imagery and information, turning chaos
into documentation.          `,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/5.webp",
        description: {
          title: "Opening Page",
          paragraph: `
The opening spread introduces the two texts that will run side by side throughout the broadsheet. The following page dives in without any imagery, letting the storm begin to build through the typography alone.          `,
        },
      },
      {
        type: "image",
        src: "/6-eternal israeli/6.webp",
        description: {
          title: "Last Page",
          paragraph: `
The last page places the final lines of the text in a wide field of negative space, signaling the storm’s end. On the left begins the visual index of the storm images seen throughout the broadsheet, which continues onto the back to form a clear, structured archive.`,
        },
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
    title: "07 / Illustration Gallery/ Illustration  / 2022- 2025",
    name: "Illustration Gallery",

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
        src: [
          "/7-illustration gallery/2a.webp",
          "/7-illustration gallery/2b.webp",
          "/7-illustration gallery/2c.webp",
          "/7-illustration gallery/2d.webp",
          "/7-illustration gallery/2e.webp",
        ],
        description: {
          title: "Ostrich Attack Survival Guide",
          paragraph: `
A humorist illustrated user guide explaining how to survive an ostrich encounter. The drawings use a pen and minimalist watercolor technique. The gallery includes the main illustration and a set of merch items that grew from the same visual language and concept.          `,
        },
      },
      {
        type: "image",
        src: [
          "/7-illustration gallery/3a.webp",
          "/7-illustration gallery/3b.webp",
        ],
        description: {
          title: "Two Poems",
          paragraph: `
Two illustrations for poems about the way children slip between imagination and reality. One shows a boy still afraid of the tiger under his bed even as his parents head to the theatre. The other follows a boy intrigued by a visiting woman and her bag, imagining candy inside while in truth it’s cigarettes, pairing his fantasy with what is actually there.`,
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
A three part illustration of Eleven by Sandra Cisneros, focusing on how Rachel’s birthday doesn’t feel as bright as she hoped. The red sweater becomes a creature in her imagination, the gathering at home shows her surrounded yet lonely, and the tiny zero balloon hints at how small she feels. The acrylic technique, limited palette, and rough textures amplify the intensity of her emotions and the way the day overwhelms her.`,
        },
      },
      {
        type: "image",
        src: [
          "/7-illustration gallery/5a.webp",
          "/7-illustration gallery/5b.webp",
        ],
        description: {
          title: "Urban Density",
          paragraph: `
Two ink studies of crowded city life. One looks down at the packed parking lot beneath our school, capturing the industrial clutter of cars and buildings. The other follows a New Year’s Eve market scene through different angles, showing how people create their own sense of density as they gather and celebrate.`,
        },
      },

      {
        type: "image",
        src: "/7-illustration gallery/6.webp",
      },
    ],
  },
  {
    title: "08 / Animation Gallery / Animation  / 2022- 2025",
    name: "Animation Gallery",

    assets: [
      {
        type: "video",
        src: "/animations/1.mp4",
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
        src: "/animations/3.mp4",
        description: {
          title: "Community Circus",
          paragraph: `Bardelas Circus imagines a circus troupe performing on a grassy hill near Beit Shemesh, beside old stone ruins. The visuals mix hand painted curtains with the open landscape, creating a small stage in the hills. The gallery shows the poster, close details, and invitations built from the same simple, handmade style.`,
        },
      },
      {
        type: "video",
        src: "/animations/4.mp4",
        description: {
          title: "The Hippo Song",
          paragraph: `
          Animation gif for Oscar Isaac’s “The Hippopotamus Song”. the gif shows a small hippo dancing around a swamp on stepping stones. The movement is done in clear cuts that follow the rhythm of the music, and the style leans on rough shapes, soft colors  and grainy textures.
          `,
        },
      },
      {
        type: "video",
        src: "/animations/5.mp4",
        description: {
          title: "Podcast Visualizer:",
          paragraph: `
A podcast visualizer for three of Joe Rogan’s most eccentric guests, touching on conspiracies, aliens, pyramids, and mushrooms. The animation loops in a psychedelic dive through an eye, revealing each guest and topic as it goes deeper. Bold colors and trippy motion match the wild energy of the episodes.          `,
        },
      },
      {
        type: "video",
        src: "/animations/6.mp4",
      },
    ],
  },
];

export default projectsData;
