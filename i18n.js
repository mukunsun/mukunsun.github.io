export const DEFAULT_LANGUAGE = 'en';
export const STORAGE_KEY = 'portfolio-language';
export const I18N_CACHE_KEY = '20260924-yuyo-restored';
export const PAGE_KEYS = ['home', 'vertex', 'teaching', 'campus', 'hotel', 'visual', 'music', 'photography', 'travel', 'xinyuyou'];

const en = {
  title: 'Mukun Sun | Website',
  description: 'A professional and personal portfolio of communication, community work, visual projects, education, music, and photography by Mukun Sun.',
  metadata: {
    home: {
      title: 'Mukun Sun | Website',
      description: 'A professional and personal portfolio of communication, community work, visual projects, education, music, and photography by Mukun Sun.',
      imageAlt: 'Mukun Sun | Communication, Community & Music',
    },
    vertex: {
      title: 'Reddit Community Operations | Mukun Sun',
      description: "Mukun Sun's overseas community operations internship at Vertex Marketing: community entry strategy, native English content, and data-driven iteration across 15+ communities for Chinese brands going global.",
    },
    xinyuyou: {
      title: 'Influencer Marketing | Mukun Sun',
      description: "Mukun Sun's influencer marketing internship at YUYO INNOVATIONS LLC (Pawreto): sourcing, negotiating, and running creator partnerships across the US and Canada for a pet brand going global.",
    },
    teaching: {
      title: 'Teaching Assistant | Mukun Sun',
      description: 'Classroom and course support for Southern Utah University English writing courses in Wuhan.',
    },
    campus: {
      title: 'Campus Integrated Campaign | Mukun Sun',
      description: 'Promotion coordination for campus welcome and New Year events across online and offline channels.',
    },
    hotel: {
      title: 'Hotel × Jazz | Mukun Sun',
      description: 'Event concept, partner coordination, WeChat promotion, and visual identity for a hotel and jazz collaboration.',
    },
    visual: {
      title: 'Selected Visual Work | Mukun Sun',
      description: 'A selected archive of posters, print design, event visuals, and photography by Mukun Sun.',
    },
    music: {
      title: 'Music | Mukun Sun',
      description: 'Performances, music projects, and study in upright and electric bass by Mukun Sun.',
    },
    photography: {
      title: 'Photography | Mukun Sun',
      description: 'Original photography by Mukun Sun focused on light, structure, landscape, and atmosphere.',
    },
    travel: {
      title: 'Travel | Mukun Sun',
      description: 'A concise record of places visited across the United States and China by Mukun Sun.',
    },
  },
  navLabels: { home: 'Primary navigation', vertex: 'Project navigation', teaching: 'Internship navigation', campus: 'Project navigation', hotel: 'Project navigation', visual: 'Visual work navigation', music: 'Music navigation', photography: 'Photography navigation', travel: 'Travel navigation', xinyuyou: 'Internship navigation' },
  attributes: {
    '#nav .lang-switch': { 'aria-label': 'Language' },
    '#nav .compact-nav summary': { 'aria-label': 'Open section navigation' },
    '#nav .compact-links': { 'aria-label': 'Section navigation' },
    '#experience .experience-row--vertex .experience-media img': { alt: 'A bright shared workspace at Vertex Marketing in Shenzhen' },
    '#experience .experience-row--teaching .experience-media img': { alt: 'Mukun Sun speaking to an English writing class in Wuhan' },
    '#projects .project-row:nth-child(1) img': { alt: 'A large campus gala audience facing a lit stage' },
    '#projects .project-row:nth-child(2) img': { alt: 'Jazz musicians performing at a hotel beside an upright bass' },
    '#projects .project-row:nth-child(3) img': { alt: 'Winter Jazz Concert key visual poster designed for a hotel jazz event' },
    '#outside-work .outside-card:nth-child(1) img': { alt: 'Mukun Sun performing upright bass at SUU Jazz Fest' },
    '#outside-work .outside-card:nth-child(2) img': { alt: 'Curved metal architecture at Walt Disney Concert Hall' },
    '#outside-work .outside-card:nth-child(3) img': { alt: 'Bryce Canyon amphitheater in warm afternoon light' },
    '#vertex-nav .lang-switch': { 'aria-label': 'Language' },
    '#vertex-nav .compact-nav summary': { 'aria-label': 'Open project navigation' },
    '#vertex-nav .compact-links': { 'aria-label': 'Project sections' },
    '#teaching-nav .lang-switch': { 'aria-label': 'Language' },
    '#teaching-nav .compact-nav summary': { 'aria-label': 'Open internship navigation' },
    '#teaching-nav .compact-links': { 'aria-label': 'Internship sections' },
    '#xinyuyou-nav .lang-switch': { 'aria-label': 'Language' },
    '#xinyuyou-nav .compact-nav summary': { 'aria-label': 'Open internship navigation' },
    '#xinyuyou-nav .compact-links': { 'aria-label': 'Internship sections' },
    '#teaching-media .detail-media:nth-child(1) img': { alt: 'An SUU instructor leading an English writing class in Wuhan' },
    '#teaching-media .detail-media:nth-child(2) img': { alt: 'Mukun Sun with the SUU instructor after the teaching period' },
    '#teaching-dialog': { 'aria-label': 'Enlarged classroom image' },
    '#teaching-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#campus-nav .lang-switch': { 'aria-label': 'Language' },
    '#campus-nav .compact-nav summary': { 'aria-label': 'Open project navigation' },
    '#campus-nav .compact-links': { 'aria-label': 'Project sections' },
    '#campus-media img': { alt: 'A large campus gala audience facing a lit stage' },
    '#campus-dialog': { 'aria-label': 'Enlarged project image' },
    '#campus-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#hotel-nav .lang-switch': { 'aria-label': 'Language' },
    '#hotel-nav .compact-nav summary': { 'aria-label': 'Open project navigation' },
    '#hotel-nav .compact-links': { 'aria-label': 'Project sections' },
    '#hotel-media .detail-media:nth-child(1) img': { alt: 'Wide Hotel × Jazz event composition showing the performance and instruments' },
    '#hotel-media .detail-media:nth-child(2) img': { alt: 'Audience and performance area at the Hotel × Jazz event' },
    '#hotel-dialog': { 'aria-label': 'Enlarged project image' },
    '#hotel-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#visual-nav .lang-switch': { 'aria-label': 'Language' },
    '#visual-nav .compact-nav summary': { 'aria-label': 'Open visual work navigation' },
    '#visual-nav .compact-links': { 'aria-label': 'Visual work sections' },
    '#visual-gallery .detail-media:nth-child(1) img': { alt: 'HOTONE tenth-anniversary product poster for the Ampero II Stomp' },
    '#visual-gallery .detail-media:nth-child(2) img': { alt: 'HOTONE product poster featuring an electric guitar and effects processor' },
    '#visual-gallery .detail-media:nth-child(3) img': { alt: 'HOTONE Ampero II Stomp product-detail poster' },
    '#visual-gallery .detail-media:nth-child(4) img': { alt: 'Coastline JAZZ NIGHT concert poster in magenta and deep blue' },
    '#visual-gallery .detail-media:nth-child(5) img': { alt: 'Coastline JAZZ NIGHT poster variation in orange and dark red' },

    '#visual-gallery .detail-media:nth-child(6) img': { alt: 'Winter Jazz Concert key visual poster designed for a hotel jazz event' },
    '#visual-gallery .detail-media:nth-child(7) img': { alt: 'International Museum Day banner for Wuhan Museum' },
    '#visual-dialog': { 'aria-label': 'Enlarged visual work' },
    '#visual-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#music-nav .lang-switch': { 'aria-label': 'Language' },
    '#music-nav .compact-nav summary': { 'aria-label': 'Open music navigation' },
    '#music-nav .compact-links': { 'aria-label': 'Music sections' },
    '#music-intro .music-lead img': { alt: 'Mukun Sun performing upright bass at SUU Jazz Fest' },
    '#music-artist-finalist img': { alt: 'Mukun Sun with the band for the SUU International Student Artist performance' },
    '#music-student-center img': { alt: 'The SUU Jazz Big Band performing in the Student Center' },
    '#music-grand-ball img': { alt: 'Mukun Sun with the Grand Ball jazz ensemble in Hildale' },
    '#music-tbird img': { alt: 'Mukun Sun in a T-Bird jersey at a basketball game in the SUU arena' },
    '#music-jazz-fest img': { alt: 'Mukun Sun playing upright bass on the SUU Jazz Fest stage' },
    '#music-campus-concert img': { alt: 'Musicians gathered at the independently organized campus jazz concert' },
    '#music-welcome-gala img': { alt: 'Band members at the Wuhan Polytechnic University freshmen welcome gala' },
    '#music-ni-jazz-bar img': { alt: 'Mukun Sun playing electric bass at a jam session at NI Jazz Bar' },
    '#music-fashion-show img': { alt: 'The band performing at the Environmental Fashion Design Competition' },
    '#music-study-sun img': { alt: 'Mukun Sun with SUU professor Xun Sun' },
    '#music-study-burns img': { alt: 'Mukun Sun with jazz bassist Daren Burns in Beijing' },
    '#music-dialog': { 'aria-label': 'Enlarged music image' },
    '#music-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#photography-nav .lang-switch': { 'aria-label': 'Language' },
    '#photography-nav .compact-nav summary': { 'aria-label': 'Open photography navigation' },
    '#photography-nav .compact-links': { 'aria-label': 'Photography sections' },
    '#photography-gallery .detail-media:nth-child(1) img': { alt: 'White residential buildings against a clear blue sky' },
    '#photography-gallery .detail-media:nth-child(2) img': { alt: 'Illuminated bridge structure at night in Chongqing' },
    '#photography-gallery .detail-media:nth-child(3) img': { alt: 'Curved metal architecture at Walt Disney Concert Hall' },
    '#photography-gallery .detail-media:nth-child(4) img': { alt: 'A seabird crossing the sunset at Santa Monica Beach' },
    '#photography-gallery .detail-media:nth-child(5) img': { alt: 'Water terraces and paths surrounded by greenery in Tongren' },
    '#photography-gallery .detail-media:nth-child(6) img': { alt: 'Small boats resting on blue water' },
    '#photography-gallery .detail-media:nth-child(7) img': { alt: 'The Las Vegas Strip at night, viewed along Las Vegas Boulevard' },
    '#photography-dialog': { 'aria-label': 'Enlarged photograph' },
    '#photography-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
    '#travel-nav .lang-switch': { 'aria-label': 'Language' },
    '#travel-nav .compact-nav summary': { 'aria-label': 'Open travel navigation' },
    '#travel-nav .compact-links': { 'aria-label': 'Travel sections' },
    '#travel-dialog': { 'aria-label': 'Enlarged travel image' },
    '#travel-dialog .dialog-close': { 'aria-label': 'Close image', 'title': 'Close (Esc)' },
  },
  alts: {
    'portrait.jpg': 'Portrait of Mukun Sun',
    'jazz_winter.jpg': 'Winter Jazz Concert key visual poster designed for a hotel jazz event',
    'hotone_main.jpg': 'HOTONE tenth-anniversary product poster for the Ampero II Stomp',
    'hotone_guitar.jpg': 'HOTONE product poster featuring an electric guitar and effects processor',
    'hotone_pedal.jpg': 'HOTONE Ampero II Stomp product-detail poster',
    'jazz_coast_a.png': 'Coastline JAZZ NIGHT concert poster in magenta and deep blue',
    'jazz_coast_b.png': 'Coastline JAZZ NIGHT poster variation in orange and dark red',
            'banner_museum.png': 'International Museum Day banner for Wuhan Museum',
    'building.webp': 'White residential buildings against a clear blue sky',
    'chongqing.webp': 'Illuminated bridge structure at night in Chongqing',
    'santa_monica_beach.webp': 'A seabird crossing the sunset at Santa Monica Beach',
    'tongren.webp': 'Water terraces and paths surrounded by greenery in Tongren',
    'walter_disney.webp': 'Curved metal architecture at Walt Disney Concert Hall',
  },
  copy: {
    '#teaching-nav .brand': 'Mukun Sun · Teaching Assistant',
    '#teaching-nav .links': '<a href="#teaching-context">Context</a><a href="#teaching-classroom">Classroom</a><a href="#teaching-operations">Operations</a><a href="#teaching-bridge">Bridge</a><a href="#teaching-media">Media</a>',
    '#teaching-nav .compact-nav summary': 'Sections',
    '#teaching-nav .compact-links': '<a href="#teaching-context">Context</a><a href="#teaching-classroom">Classroom</a><a href="#teaching-operations">Operations</a><a href="#teaching-bridge">Bridge</a><a href="#teaching-media">Media</a><a href="../index.html#experience">Portfolio index</a>',
    '#teaching-nav .back-link': '← Portfolio index',
    '#teaching-hero h1': 'Teaching Assistant',
    '#teaching-hero .detail-eyebrow': 'Southern Utah University · Internship',
    '#teaching-hero .detail-deck': 'Classroom and course support for English writing courses serving 200+ students in Wuhan.',
    '#teaching-hero .detail-meta': 'May 2026 · Wuhan, China',
    '#teaching-context h2': 'Role & Context',
    '#teaching-context p': "I was a teaching assistant for Southern Utah University's English writing program in Wuhan, run in partnership with Wuhan Polytechnic University. An SUU professor led intensive writing courses for 200+ students in five classes across two majors, advertising and construction management. I supported the classroom and ran the course operations.",
    '#teaching-classroom h2': 'Classroom Support',
    '#teaching-classroom p': 'I provided bilingual support and interpreted between the professor and the students. I helped students understand the professor, and I helped the professor understand how teaching and communication work in a Chinese classroom. Since students\' English ranged widely, I adjusted my explanations and feedback to each level.',
    '#teaching-operations h2': 'Course Operations',
    '#teaching-operations p': "I managed attendance, graded assignments against the professor's rubric (spelling, structure, grammar, logic), gave written feedback, and built the final-grade spreadsheets and course-completion reports in Excel myself.",
    '#teaching-bridge h2': 'Cultural Bridge',
    '#teaching-bridge p': 'The professor was visiting China for the first time. I helped close the distance that unfamiliarity can create: I taught her to use Alipay for the subway, took her to try local food, visited the Yellow Crane Tower together, and planned a trip to Mount Lu. What I took away: communication depends less on perfect understanding than on an open, attentive, responsive attitude.',
    '#teaching-media h2': 'In the Classroom',
    '#teaching-media .detail-media:nth-child(1) figcaption': 'English writing course · Wuhan',
    '#teaching-media .detail-media:nth-child(2) figcaption': 'After the teaching period · May 2026',
    '#teaching-footer span': 'Mukun Sun · Teaching Assistant',
    '#teaching-footer a': 'Return to internship',
    '#nav .brand': 'Mukun Sun<span class="en">孙慕坤</span>',
    '#nav .links': '<a href="#about">About</a><a href="#experience">Work</a><a href="#outside-work">Outside Work</a><a href="#contact">Contact</a>',
    '#nav .compact-nav summary': 'Sections',
    '#nav .compact-links': '<a href="#about">About</a><a href="#experience">Work</a><a href="#outside-work">Outside Work</a><a href="#contact">Contact</a>',
    '.hero h1': 'Mukun Sun',
    '.hero .role': 'Communication, community, and music.',
    '.hero .scrollcue': 'Scroll to explore<span class="bar" aria-hidden="true"></span>',
    '#about .stitle': 'About Me',
    '#about .about-copy p:nth-child(1)': 'I study Strategic Communication at Southern Utah University, with a minor in Business Analytics. My work spans social media, community operations, visual communication, and event promotion. I like learning how an audience actually behaves before deciding what to make.',
    '#about .about-copy p:nth-child(2)': 'Outside work, I play upright and electric bass in SUU ensembles. Music has also taken me into concert planning, photography, and the small details that make an event feel memorable.',
    '#vertex-nav .brand': 'Mukun Sun<span class="en">Vertex</span>',
    '#vertex-nav .links': '<a href="#vertex-context">Context</a><a href="#vertex-scope">Work</a><a href="#vertex-approach">How</a><a href="#vertex-data">Data</a><a href="#vertex-tooling">Tools</a><a href="#vertex-evidence">Numbers</a><a href="#vertex-community">Community</a>',
    '#vertex-nav .compact-nav summary': 'Sections',
    '#vertex-nav .compact-links': '<a href="#vertex-context">Context</a><a href="#vertex-scope">Work</a><a href="#vertex-approach">How</a><a href="#vertex-data">Data</a><a href="#vertex-tooling">Tools</a><a href="#vertex-evidence">Numbers</a><a href="#vertex-community">Community</a><a href="../index.html#experience">Portfolio index</a>',
    '#vertex-nav .back-link': '← Portfolio index',
    '#campus-nav .brand': 'Mukun Sun · Campus Campaign',
    '#campus-nav .links': '<a href="#campus-context">Context</a><a href="#campus-contribution">Contribution</a><a href="#campus-media">Media</a>',
    '#campus-nav .compact-nav summary': 'Sections',
    '#campus-nav .compact-links': '<a href="#campus-context">Context</a><a href="#campus-contribution">Contribution</a><a href="#campus-media">Media</a><a href="../index.html#projects">Portfolio index</a>',
    '#campus-nav .back-link': '← Portfolio index',
    '#campus-hero h1': 'Campus Integrated Campaign',
    '#campus-hero .detail-eyebrow': 'Campus Campaign',
    '#campus-hero .detail-deck': 'Coordinated promotion for campus welcome and New Year events across online and offline channels.',
    '#campus-hero .detail-meta': 'Promotion Team Lead · 2024–2025',
    '#campus-context h2': 'Context',
    '#campus-context p': 'Campus welcome and New Year events needed coordinated promotion across online and offline channels.',
    '#campus-contribution h2': 'Contribution',
    '#campus-contribution p': 'I led the promotion work, adapted content for each platform, and connected on-site activity with online publishing.',
    '#campus-media h2': 'Event view',
    '#campus-media figcaption': 'Campus welcome gala · event view',
    '#campus-footer span': 'Mukun Sun · Campus Integrated Campaign',
    '#campus-footer a': 'Return to projects',
    '#hotel-nav .brand': 'Mukun Sun · Hotel × Jazz',
    '#hotel-nav .links': '<a href="#hotel-context">Context</a><a href="#hotel-contribution">Contribution</a><a href="#hotel-media">Media</a>',
    '#hotel-nav .compact-nav summary': 'Sections',
    '#hotel-nav .compact-links': '<a href="#hotel-context">Context</a><a href="#hotel-contribution">Contribution</a><a href="#hotel-media">Media</a><a href="../index.html#projects">Portfolio index</a>',
    '#hotel-nav .back-link': '← Portfolio index',
    '#hotel-hero h1': 'Hotel × Jazz',
    '#hotel-hero .detail-eyebrow': 'Hotel &amp; Art Event',
    '#hotel-hero .detail-deck': 'A balcony performance and visual campaign connecting a hotel with a local jazz partner.',
    '#hotel-hero .detail-meta': 'Campaign &amp; Visual Communication · 2024',
    '#hotel-context h2': 'Context',
    '#hotel-context p': 'A balcony performance connected Ni Jazz Bar with Fengmao Andi Hotel around a hotel-and-art event concept.',
    '#hotel-contribution h2': 'Contribution',
    '#hotel-contribution p': 'I developed the event concept, coordinated the partners and performance, planned WeChat promotion, and designed a consistent visual identity.',
    '#hotel-media h2': 'Event views',
    '#hotel-media .detail-media:nth-child(1) figcaption': 'Hotel × Jazz · balcony performance',
    '#hotel-media .detail-media:nth-child(2) figcaption': 'Hotel × Jazz · audience and performance area',
    '#hotel-footer span': 'Mukun Sun · Hotel × Jazz',
    '#hotel-footer a': 'Return to projects',
    '#visual-nav .brand': 'Mukun Sun · Selected Visual Work',
    '#visual-nav .links': '<a href="#visual-gallery">Visual work</a>',
    '#visual-nav .compact-nav summary': 'Sections',
    '#visual-nav .compact-links': '<a href="#visual-gallery">Visual work</a><a href="../index.html#projects">Portfolio index</a>',
    '#visual-nav .back-link': '← Portfolio index',
    '#visual-hero h1': 'Selected Visual Work',
    '#visual-hero .detail-eyebrow': 'Visual Work',
    '#visual-hero .detail-deck': 'Event, product, print, and photographic work.',
    '#visual-gallery h2': 'Selected Visual Work',
    '#visual-gallery .detail-media:nth-child(1) figcaption': 'HOTONE · Tenth-Anniversary Poster',
    '#visual-gallery .detail-media:nth-child(2) figcaption': 'HOTONE · Release Your Musical Passion',
    '#visual-gallery .detail-media:nth-child(3) figcaption': 'HOTONE · Ampero II Stomp Detail',
    '#visual-gallery .detail-media:nth-child(4) figcaption': 'JAZZ NIGHT · Coastline',
    '#visual-gallery .detail-media:nth-child(5) figcaption': 'JAZZ NIGHT · Variation',

    '#visual-gallery .detail-media:nth-child(6) figcaption': 'Winter Jazz Concert · Hotel Event Visual',
    '#visual-gallery .detail-media:nth-child(7) figcaption': 'International Museum Day · Wuhan Museum',
    '#visual-footer span': 'Mukun Sun · Selected Visual Work',
    '#visual-footer a': 'Return to projects',
    '#music-nav .brand': 'Mukun Sun · Music',
    '#music-nav .links': '<a href="music.html" aria-current="page">Music</a><a href="photography.html">Photography</a><a href="travel.html">Travel</a>',
    '#music-nav .compact-nav summary': 'Sections',
    '#music-nav .compact-links': '<a href="music.html" aria-current="page">Music</a><a href="photography.html">Photography</a><a href="travel.html">Travel</a><a href="index.html#outside-work">Return home</a>',
    '#music-nav .back-link': '← Return home',
    '#music-hero h1': 'Music',
    '#music-hero .detail-eyebrow': 'Upright Bass · Electric Bass',
    '#music-hero .detail-deck': 'Performances, independent projects, and the work that happens before the stage.',
    '#music-intro h2': 'Music',
    '#music-intro .music-intro-copy': 'I play upright and electric bass, but much of my music work also happens before the stage: arranging, organizing rehearsals, coordinating venues, and building an event around a band.',
    '#music-intro .music-lead figcaption': 'SUU Jazz Fest · February 21, 2026',
    '#music-timeline-title': 'Selected performances &amp; projects',
    '#music-artist-finalist .music-event-meta': '<time datetime="2026-04-14">Apr 14, 2026</time><span>Cedar City, Utah</span>',
    '#music-artist-finalist h2': 'Finalist · SUU International Student Artist',
    '#music-artist-finalist .music-event-copy p': 'Named a finalist, then organized rehearsals and coordinated the band for a performance at the SUU Alumni Center. Upright bass.',
    '#music-artist-finalist figcaption': 'After the Alumni Center performance',
    '#music-student-center .music-event-meta': '<time datetime="2026-03-31">Mar 31, 2026</time><span>Cedar City, Utah</span>',
    '#music-student-center h2': 'SUU Jazz Big Band',
    '#music-student-center p': 'Performed on upright bass with the Jazz Big Band at the SUU Student Center.',
    '#music-student-center .music-watch': 'Watch the performance ↗',
    '#music-student-center figcaption': 'SUU Student Center',
    '#music-grand-ball .music-event-meta': '<time datetime="2026-03-28">Mar 28, 2026</time><span>Hildale, Utah</span>',
    '#music-grand-ball h2': 'Grand Ball',
    '#music-grand-ball .music-event-copy p': 'Invited to play upright bass with the jazz ensemble accompanying the Grand Ball.',
    '#music-grand-ball figcaption': 'Grand Ball · Hildale, Utah',
    '#music-tbird .music-event-meta': '<time datetime="2026-02">Feb–Mar 2026</time><span>Cedar City, Utah</span>',
    '#music-tbird h2': 'T-Bird Marching Band',
    '#music-tbird p': 'Joined as a substitute electric bassist and performed with the pep band during basketball games at the SUU arena.',
    '#music-tbird figcaption': 'T-Bird Marching Band · SUU arena',
    '#music-jazz-fest .music-event-meta': '<time datetime="2026-02-21">Feb 21, 2026</time><span>Cedar City, Utah</span>',
    '#music-jazz-fest h2': 'SUU Jazz Fest',
    '#music-jazz-fest p': 'Performed on upright bass with the SUU Jazz Big Band at the Heritage Center.',
    '#music-jazz-fest .music-watch': 'Watch the performance ↗',
    '#music-jazz-fest figcaption': 'Heritage Center · SUU Jazz Fest',
    '#music-campus-concert .music-event-meta': '<time datetime="2024-11-16">Nov 16, 2024</time><span>Wuhan, China</span>',
    '#music-campus-concert h2': 'Independent Jazz Concert',
    '#music-campus-concert .music-event-copy p': 'Produced a jazz concert at a campus café from start to finish: secured the venue, arranged music, organized rehearsals, designed and promoted the event, and led on-site execution.',
    '#music-campus-concert figcaption': 'Campus café jazz concert',
    '#music-welcome-gala .music-event-meta': '<time datetime="2024-09-15">Sep 15, 2024</time><span>Wuhan, China</span>',
    '#music-welcome-gala h2': 'Freshmen Welcome Gala',
    '#music-welcome-gala .music-event-copy p': "While serving as one of the gala's promotion leads, I also assembled the band, organized rehearsals, and performed on stage.",
    '#music-welcome-gala figcaption': 'Freshmen Welcome Gala · Wuhan Polytechnic University',
    '#music-ni-jazz-bar .music-event-meta': '<time datetime="2024-03-25">Mar 25, 2024</time><span>Wuhan, China</span>',
    '#music-ni-jazz-bar h2': 'NI Jazz Bar Jam Session',
    '#music-ni-jazz-bar p': 'Joined the jam session as a bassist.',
    '#music-ni-jazz-bar figcaption': 'NI Jazz Bar · Wuhan',
    '#music-fashion-show .music-event-meta': '<time datetime="2023-12-04">Dec 4, 2023</time><span>Wuhan, China</span>',
    '#music-fashion-show h2': 'Environmental Fashion Design Competition',
    '#music-fashion-show p': 'Rearranged "Just the Two of Us" for the warm-up performance, organized rehearsals, and designed the promotional poster.',
    '#music-fashion-show figcaption': 'Warm-up performance · Wuhan',
    '#music-study h2': 'Study',
    '#music-study-sun time': 'Sep 2025',
    '#music-study-sun p': 'Studied with SUU professor Xun Sun.',
    '#music-study-sun figcaption': 'Southern Utah University · September 2025',
    '#music-study-burns time': 'Jul 2023',
    '#music-study-burns p': 'Studied jazz bass with American bassist Daren Burns in Beijing.',
    '#music-study-burns figcaption': 'Beijing · July 2023',
    '#music-footer span': 'Mukun Sun · Music',
    '#music-footer a': 'Return home',
    '#photography-nav .brand': 'Mukun Sun · Photography',
    '#photography-nav .links': '<a href="music.html">Music</a><a href="photography.html" aria-current="page">Photography</a><a href="travel.html">Travel</a>',
    '#photography-nav .compact-nav summary': 'Sections',
    '#photography-nav .compact-links': '<a href="music.html">Music</a><a href="photography.html" aria-current="page">Photography</a><a href="travel.html">Travel</a><a href="index.html#outside-work">Return home</a>',
    '#photography-nav .back-link': '← Return home',
    '#photography-hero h1': 'Photography',
    '#photography-hero .detail-eyebrow': 'Light · Structure · Atmosphere',
    '#photography-hero .detail-deck': 'A personal sequence of architecture, landscape, and light.',
    '#photography-gallery h2': 'Selected photographs',
    '#photography-gallery .photography-intro': 'Photography is another way I study light, objects, and atmosphere.',
    '#photography-gallery .detail-media:nth-child(1) figcaption': 'Blue and concrete',
    '#photography-gallery .detail-media:nth-child(2) figcaption': 'Chongqing · Night structure',
    '#photography-gallery .detail-media:nth-child(3) figcaption': 'Walt Disney Concert Hall · Curves',
    '#photography-gallery .detail-media:nth-child(4) figcaption': 'Santa Monica · Sunset',
    '#photography-gallery .detail-media:nth-child(5) figcaption': 'Tongren · Water and paths',
    '#photography-gallery .detail-media:nth-child(6) figcaption': 'San Francisco · Boats on blue water',
    '#photography-gallery .detail-media:nth-child(7) figcaption': 'Las Vegas · The Strip',
    '#photography-footer span': 'Mukun Sun · Photography',
    '#photography-footer a': 'Return home',
    '#travel-nav .brand': 'Mukun Sun · Travel',
    '#travel-nav .links': '<a href="music.html">Music</a><a href="photography.html">Photography</a><a href="travel.html" aria-current="page">Travel</a>',
    '#travel-nav .compact-nav summary': 'Sections',
    '#travel-nav .compact-links': '<a href="music.html">Music</a><a href="photography.html">Photography</a><a href="travel.html" aria-current="page">Travel</a><a href="index.html#outside-work">Return home</a>',
    '#travel-nav .back-link': '← Return home',
    '#travel-hero h1': 'Travel',
    '#travel-hero .detail-eyebrow': 'Places visited',
    '#travel-hero .detail-deck': 'Continuously updating...',
    '#travel-notes h2': 'Travel record',
    '#travel-notes .travel-intro': 'Places I have visited, grouped simply by region.',
    '#travel-us h2': 'United States',
    '#travel-us .travel-region-copy': '<p><strong>California</strong><span>Los Angeles · San Diego · San Francisco</span></p><p><strong>Nevada</strong><span>Las Vegas</span></p><p><strong>Utah</strong><span>Cedar City · St. George · Salt Lake City · Zion N.P. · Bryce Canyon N.P.</span></p>',
    '#travel-china h2': 'China',
    '#travel-china .travel-region-copy': '<p><strong>Municipalities &amp; regions</strong><span>Beijing · Shanghai · Hong Kong · Chongqing</span></p><p><strong>Guangdong</strong><span>Guangzhou · Shenzhen</span></p><p><strong>Hubei</strong><span>Wuhan · Xianning</span></p><p><strong>Henan</strong><span>Shangqiu · Zhengzhou · Kaifeng</span></p><p><strong>Jiangsu</strong><span>Suzhou · Lake Taihu</span></p><p><strong>Guizhou</strong><span>Guiyang · Tongren</span></p><p><strong>Sichuan</strong><span>Chengdu</span></p>',
    '#travel-footer span': 'Mukun Sun · Travel',
    '#travel-footer a': 'Return home',
    '#experience .stitle': 'Internship',
    '#experience .experience-row--suu-tutoring .experience-company': 'SUU - Tutoring Center',
    '#experience .experience-row--suu-tutoring .experience-role': 'Marketing Intern',
    '#experience .experience-row--suu-tutoring .experience-status': 'Coming soon...',
    '#experience .experience-row--vertex .experience-company': 'Vertex Marketing',
    '#experience .experience-row--vertex .experience-role': 'Reddit Community Operations Intern',
    '#experience .experience-row--vertex .experience-dates': 'Jun–Sep 2026 · Shenzhen, China',
    '#experience .experience-row--vertex .experience-responsibility': 'I worked on Reddit community operations across consumer technology, smart-home, lifestyle, finance, and family-oriented communities, adapting content and interaction to subreddit rules, audience context, and visible performance.',
    '#experience .experience-row--teaching .experience-company': 'Southern Utah University',
    '#experience .experience-row--teaching .experience-role': 'English Writing Teaching Assistant',
    '#experience .experience-row--teaching .experience-dates': 'May 2026 · Wuhan, China',
    '#experience .experience-row--teaching .experience-responsibility': 'Supported an SUU instructor in English writing courses serving 200+ students in Wuhan. Provided bilingual classroom support, managed attendance and assignment grading, delivered written feedback, and organized final-grade data and course completion reporting in Excel.',
    '#experience .experience-row--xinyuyou .experience-company': 'YUYO INNOVATIONS LLC',
    '#experience .experience-row--xinyuyou .experience-role': 'Influencer Marketing Intern',
    '#experience .experience-row--xinyuyou .experience-dates': 'Jun–Aug 2025 · Shenzhen, China',
    '#experience .experience-row--xinyuyou .experience-responsibility': 'I worked on overseas influencer marketing for a pet brand going global (Pawreto, pet safety gates): sourcing and running creator partnerships across the US and Canada, reaching 476 influencers, closing 45 collaborations, and evaluating creators with reach and cost data.',
    '#experience .experience-row--xinyuyou .experience-proofline': '<strong>476</strong> creators reached · <strong>45</strong> collaborations · <strong>545K</strong> single-post reach',
    '#experience .experience-row--vertex .experience-proofline': '<strong>793K</strong> views · <strong>3,548</strong> upvotes · up to <strong>91.7%</strong> U.S. audience share',
    '#experience .experience-link': 'Learn more about this <span aria-hidden="true">→</span>',
    '#vertex-hero': `<p class="eyebrow">Vertex Marketing · Overseas Community Operations</p>
      <h1>Reddit community operations for brands going global.</h1>
      <p class="hero-deck">An overseas community operations internship at Vertex Marketing: community entry strategy, native English content, and data-driven iteration across 15+ communities, helping Chinese brands be seen and trusted by the world.</p>
      <p class="hero-meta">Reddit Community Operations Intern · Jun–Sep 2026 · Shenzhen, China</p>`,
    '#vertex-context': `<h2 id="vertex-context-title">Context</h2>
      <div class="section-copy">
        <p>Over the past decade, "Made in China" has been turning into "brands from China." More and more Chinese companies are building sustainable brand equity overseas, and communities are where a brand earns the trust of real users. People discuss products, share experiences, and shape each other's decisions there in ways no ad campaign can replace.</p>
        <p>I joined a full-service marketing agency serving leading Chinese consumer-technology brands expanding globally. My account-operations team was the foundation of that work: we built, ran, and kept healthy the community content assets behind every campaign. It was my first look at the whole chain, from a brand's overseas goals to community content on the ground, and user feedback flowing back into strategy.</p>
      </div>`,
    '#vertex-scope': `<h2 id="vertex-scope-title">What I did</h2>
      <div class="section-copy">
        <p>My work ran across content strategy, audience operations, and data. I ran community entry strategies for brand projects, studying each community's rules, tone, and sentiment before designing an account's positioning and content approach. At peak I managed 18 account onboarding cycles in parallel and kept every project on schedule.</p>
        <p>Beyond client projects, I maintained a content matrix spanning 15+ vertical communities, from consumer tech and smart home to gaming, finance, food &amp; drink, parenting, mental health, and careers. Each community has its own rules and preferences: finance wants precision, lifestyle wants warmth, parenting wants genuine empathy. The core skill is not writing English; it's speaking the way each audience speaks.</p>
      </div>`,
    '#vertex-approach': `<h2 id="vertex-approach-title">How I worked</h2>
      <div class="section-copy">
        <p>I treated every community as its own audience. Before writing anything, I read the subreddit's rules and the posts already doing well, so my content added to the conversation instead of cluttering it. I wrote native English for US-based audiences and kept adjusting it: reading user sentiment, following discussion trends, and managing the safety boundaries of brand mentions, staying brand-friendly without inviting negative engagement. When the platform's rules or algorithm shifted, I adapted the content and the timing.</p>
      </div>`,
    '#vertex-data': `<h2 id="vertex-data-title">Data</h2>
      <div class="section-copy">
        <p>I kept a data record for everything I published: impressions, upvotes, comments, upvote ratio, and audience geography. I also completed asset audits for 5 representative accounts, covering positioning, content structure, and top-performing posts. Those numbers became a verifiable way to evaluate my work, and they taught me to let data, not instinct, decide what to publish next.</p>
      </div>`,
    '#vertex-tooling': `<h2 id="vertex-tooling-title">Building tools</h2>
      <div class="section-copy">
        <p>Repetition pushed me to build. I built an AI-assisted content workflow covering ideation, drafting, and quality checks that cut drafting time by roughly 40%, while baking in checks for naturalness, factual grounding, and brand boundaries. I presented the workflow's design and usage to company leadership and the AI engineering team, and the optimization was approved and is now being piloted. I also put together a daily work-summary dashboard that turned real content-performance data into something measurable.</p>
      </div>`,
    '#vertex-evidence': `<h2 id="vertex-evidence-title">Numbers</h2>
      <div class="section-copy">
        <table class="evidence-table"><tbody>
          <tr><th scope="row">Accounts</th><td><strong>5</strong> accounts</td></tr>
          <tr><th scope="row">Account history</th><td><strong>15,433</strong> cumulative Karma</td></tr>
          <tr><th scope="row">Contributions</th><td><strong>472</strong> cumulative contributions</td></tr>
          <tr><th scope="row">Visible views</th><td><strong>793K</strong> views across 15 view-visible posts</td></tr>
          <tr><th scope="row">Engagement</th><td><strong>3,548</strong> upvotes and <strong>482</strong> comments across 16 posts</td></tr>
          <tr><th scope="row">Single-post peak</th><td><strong>406K</strong> views / <strong>891</strong> upvotes / <strong>90</strong> comments / <strong>100%</strong> upvote ratio</td></tr>
          <tr><th scope="row">Audience</th><td><strong>91.7%</strong> highest observed U.S. audience share</td></tr>
          <tr><th scope="row">Drafting speed</th><td>About <strong>40%</strong> faster with the AI-assisted workflow</td></tr>
          <tr><th scope="row">Community coverage</th><td>At least <strong>15</strong> communities</td></tr>
        </tbody></table>
        <p class="evidence-note">Every deliverable was on time, with zero major content violations and no account assets lost.</p>
      </div>`,
    '#vertex-community': `<h2 id="vertex-community-title">Community</h2>
      <div class="section-copy">
        <p>The work spans broad-interest and vertical communities. I adapted research, content, and interaction to each subreddit's rules and audience language, and took part in the early setup of an official brand community from zero.</p>
        <ul class="community-list" aria-label="Community themes"><li>Consumer technology</li><li>Smart home</li><li>Gaming</li><li>Programming</li><li>Finance</li><li>Food &amp; drink</li><li>Parenting</li><li>Mental health</li><li>Relationships</li><li>Careers</li></ul>
      </div>`,
    '.marquee .track': '<span>Community Operations<span class="mut">·</span>Teaching<span class="mut">·</span>Campaigns<span class="mut">·</span>Jazz Performance<span class="mut">·</span>Visual Communication<span class="mut">·</span></span><span>Community Operations<span class="mut">·</span>Teaching<span class="mut">·</span>Campaigns<span class="mut">·</span>Jazz Performance<span class="mut">·</span>Visual Communication<span class="mut">·</span></span>',
    '#projects .stitle': 'Projects',
    '#projects .section-intro': 'Three selected routes into campaign coordination, event promotion, and visual communication.',
    '#projects .project-row:nth-child(1) .project-copy strong': 'Campus Integrated Campaign',
    '#projects .project-row:nth-child(1) .project-copy span': 'Promotion coordination for campus welcome and New Year events across online and offline channels.',
    '#projects .project-row:nth-child(1) .project-action': 'View project <span aria-hidden="true">→</span>',
    '#projects .project-row:nth-child(2) .project-copy strong': 'Hotel × Jazz Brand Event',
    '#projects .project-row:nth-child(2) .project-copy span': 'Event concept, partner coordination, WeChat promotion, and visual identity for a hotel × jazz collaboration.',
    '#projects .project-row:nth-child(2) .project-action': 'View project <span aria-hidden="true">→</span>',
    '#projects .project-row:nth-child(3) .project-copy strong': 'Selected Visual Work',
    '#projects .project-row:nth-child(3) .project-copy span': 'A selected archive of posters, print design, event visuals, and photography.',
    '#projects .project-row:nth-child(3) .project-action': 'View project <span aria-hidden="true">→</span>',
    '#edu .stitle': 'Education',
    '#edu .edu-entry:nth-child(1) .edu-school': 'Southern Utah University',
    '#edu .edu-entry:nth-child(1) .edu-dates': 'Aug 2025 — May 2027',
    '#edu .edu-entry:nth-child(1) .edu-degree': 'B.S. in Strategic Communication',
    '#edu .edu-entry:nth-child(1) .edu-secondary': 'Minor · Business Analytics',
    '#edu .edu-entry:nth-child(1) .edu-focus': 'Coursework: Social Media Strategy, Social Media Branding, Strategic Campaigns, Content Creation, Statistical Inference, Data Analytics.',
    '#edu .edu-entry:nth-child(2) .edu-school': 'Wuhan Polytechnic University',
    '#edu .edu-entry:nth-child(2) .edu-dates': 'Sep 2023 — Jun 2025',
    '#edu .edu-entry:nth-child(2) .edu-degree': 'B.A. in Advertising',
    '#edu .edu-entry:nth-child(2) .edu-focus': 'Coursework: Writing for Communication, Digital Copy Layout &amp; Design, Advertising Investigation &amp; Analysis, Organizational Communication.',
    '#outside-work .stitle': 'Outside Work',
    '#outside-work .section-intro': 'Music, photography, and travel shape how I pay attention to people and atmosphere.',
    '#outside-work .outside-card:nth-child(1) strong': 'Music',
    '#outside-work .outside-card:nth-child(1) p': 'Upright and electric bass performance, ensemble work, and the planning behind live events.',
    '#outside-work .outside-card:nth-child(2) strong': 'Photography',
    '#outside-work .outside-card:nth-child(2) p': 'Small studies in performance, objects, light, and atmosphere.',
    '#outside-work .outside-card:nth-child(3) strong': 'Travel',
    '#outside-work .outside-card:nth-child(3) p': 'Notes from cities and landscapes that sharpen how I notice culture, rhythm, and everyday detail.',
    '#contact h2': 'Get in touch.',
    '#contact .contact-intro': 'You can reach me by email or LinkedIn.',
    '#contact .contact-action:nth-child(1) .contact-label': 'Email Me',
    '#contact .contact-action:nth-child(2) .contact-label': 'LinkedIn',
    '#contact .sign': '— Mukun Sun / 孙慕坤',
    '#site-footer span:first-child': '© 2026 Mukun Sun',
    '#vertex-footer span:first-child': 'Mukun Sun · Vertex Marketing',
    '#vertex-footer span:last-child': 'Internship · Jun–Sep 2026',
    '#xinyuyou-nav .brand': 'Mukun Sun · YUYO INNOVATIONS',
    '#xinyuyou-nav .links': '<a href="#xinyuyou-context">Context</a><a href="#xinyuyou-scope">Work</a><a href="#xinyuyou-approach">Approach</a><a href="#xinyuyou-projects">Projects</a><a href="#xinyuyou-evidence">Numbers</a>',
    '#xinyuyou-nav .compact-nav summary': 'Sections',
    '#xinyuyou-nav .compact-links': '<a href="#xinyuyou-context">Context</a><a href="#xinyuyou-scope">Work</a><a href="#xinyuyou-approach">Approach</a><a href="#xinyuyou-projects">Projects</a><a href="#xinyuyou-evidence">Numbers</a><a href="../index.html#experience">Portfolio index</a>',
    '#xinyuyou-nav .back-link': '← Portfolio index',
    '#xinyuyou-hero': `<h1>Influencer marketing for a pet brand going global.</h1>
      <div class="detail-hero-copy">
        <p class="detail-eyebrow">YUYO INNOVATIONS LLC · Overseas Influencer Marketing</p>
        <p class="detail-deck">An influencer marketing internship at YUYO INNOVATIONS LLC, the company behind the pet-safety-gate brand Pawreto: finding, negotiating with, and running creator partnerships across the US and Canada, from first outreach to published content.</p>
        <p class="detail-meta">Influencer Marketing Intern · Jun–Aug 2025 · Shenzhen, China</p>
      </div>`,
    '#xinyuyou-context': `<h2 id="xinyuyou-context-title">Context</h2>
      <div class="detail-section-copy">
        <p>Chinese supply chains turned pet products into a fast-growing export category, but exporting products and building a brand are different jobs. On platforms like Instagram and TikTok, creators are the most direct bridge between a brand and its customers: they show products in real homes, in everyday language, in ways advertising cannot. That is the trust gap influencer marketing exists to close.</p>
        <p>I joined YUYO INNOVATIONS LLC, a pet-product brand going global under the name Pawreto, which makes safety gates for dogs and cats and sells through Amazon in the United States and Canada. My team ran the front end of the company's growth engine — finding the right creators, building the relationships, and making sure every partnership delivered content the brand could stand behind.</p>
      </div>`,
    '#xinyuyou-scope': `<h2 id="xinyuyou-scope-title">What I did</h2>
      <div class="detail-section-copy">
        <p>Over the summer I worked across the whole arc of influencer marketing, from sourcing to measurement. I built and ran a scaled outreach system for US and Canadian creators on Instagram, reaching 476 influencers and closing 45 collaborations across gifted, affiliate, and paid models. For the paid partnerships I handled end to end, I negotiated rates, evaluated creator value, and managed contracts and payments.</p>
        <p>As the work scaled, I managed up to 14 collaborations in parallel and reviewed the content creators produced, checking drafts against product selling points, giving revision feedback, and managing publication. The work spanned both the dog-gate and cat-gate product lines, each with its own audience and content requirements.</p>
      </div>`,
    '#xinyuyou-approach': `<h2 id="xinyuyou-approach-title">How I worked</h2>
      <div class="detail-section-copy">
        <p>Data shaped every decision. I tracked published reach, engagement, and cost per result, and used it to evaluate creators beyond follower counts: one mid-size creator's post reached 545,000 views at a cost per thousand under one dollar, more than ten times the reach of another partnership at a fraction of the cost. Cases like that taught me to weigh content fit, audience overlap, and past performance over follower numbers alone.</p>
        <p>I also adjusted strategy product by product. The cat-gate line needed a different creator profile than the dog-gate line, so I redefined screening criteria, outreach messages, and target accounts based on what each product's content actually required.</p>
      </div>`,
    '#xinyuyou-projects': `<h2 id="xinyuyou-projects-title">Projects</h2>
      <div class="detail-section-copy">
        <p>Beyond day-to-day partnerships, I contributed to two larger initiatives. I helped run the Amazon Installation Video UGC project, consolidating shoot requirements, writing and refining creator briefs, coordinating scope and timelines with an external production partner, and aligning product, marketing, and creator teams. I also took part in the Babelio Safety Month campaign from kickoff through creator selection, content review, and results reporting, and supported a social-media giveaway for the brand.</p>
      </div>`,
    '#xinyuyou-evidence': `<h2 id="xinyuyou-evidence-title">Numbers</h2>
      <div class="detail-section-copy">
        <table class="evidence-table"><tbody>
          <tr><th scope="row">Creators reached</th><td><strong>476</strong> influencers across the US &amp; Canada, Instagram-first</td></tr>
          <tr><th scope="row">Collaborations</th><td><strong>45</strong> across gifted, affiliate, and paid models</td></tr>
          <tr><th scope="row">Paid collaborations</th><td><strong>8</strong>, managed end to end</td></tr>
          <tr><th scope="row">Videos published</th><td><strong>20+</strong> reviewed and pushed to publication</td></tr>
          <tr><th scope="row">Peak outreach</th><td><strong>50</strong> creators in a single day</td></tr>
          <tr><th scope="row">Parallel management</th><td><strong>14</strong> collaborations at peak</td></tr>
          <tr><th scope="row">Single-post reach</th><td><strong>545K</strong> views at a <strong>$0.83</strong> CPM, mid-size creator</td></tr>
          <tr><th scope="row">Product coverage</th><td><strong>7</strong> core products across dog and cat safety gates</td></tr>
        </tbody></table>
        <p class="evidence-note">Every collaboration was tracked from first contact to payment, with no major errors and no missed deliverables.</p>
      </div>`,
    '#xinyuyou-footer span': 'Mukun Sun · YUYO INNOVATIONS',
    '#xinyuyou-footer a': 'Return to internship',
  },
};

const zh = {
  title: '孙慕坤｜传播、社群与音乐',
  description: '孙慕坤的个人网站：社交媒体与社群运营、传播项目、视觉作品、教育经历，以及音乐与摄影。',
  metadata: {
    home: {
      title: '孙慕坤｜传播、社群与音乐',
      description: '孙慕坤的个人网站：社交媒体与社群运营、传播项目、视觉作品、教育经历，以及音乐与摄影。',
      imageAlt: 'Mukun Sun | 传播、社群与音乐',
    },
    vertex: {
      title: 'Reddit 社群运营 | 孙慕坤',
      description: '孙慕坤在 Vertex Marketing 的 Reddit 社群运营实习：社区进入策略、原生英文内容与数据驱动迭代，覆盖 15+ 社区，服务中国品牌出海。',
    },
    xinyuyou: {
      title: '达人营销实习｜孙慕坤',
      description: '孙慕坤在新昱佑（YUYO INNOVATIONS LLC）的海外达人营销实习：面向美加市场的创作者开发、合作运营与数据评估，服务中国宠物品牌出海。',
    },
    teaching: {
      title: '英语写作助教｜孙慕坤',
      description: '孙慕坤在武汉为南犹他大学英语写作课程提供课堂与课程运营支持。',
    },
    campus: {
      title: '校园整合传播｜孙慕坤',
      description: '面向校园迎新与新年活动的线上线下宣传协调项目。',
    },
    hotel: {
      title: '酒店 × 爵士｜孙慕坤',
      description: '一场酒店与爵士合作活动的概念策划、合作方协调、微信推广与视觉识别。',
    },
    visual: {
      title: '视觉作品精选｜孙慕坤',
      description: '孙慕坤的海报、印刷设计、活动视觉与摄影作品精选。',
    },
    music: {
      title: '音乐｜孙慕坤',
      description: '孙慕坤的低音提琴与电贝斯演出、音乐项目及学习经历。',
    },
    photography: {
      title: '摄影｜孙慕坤',
      description: '孙慕坤围绕光线、结构、风景与氛围创作的原创摄影。',
    },
    travel: {
      title: '旅行｜孙慕坤',
      description: '孙慕坤在美国与中国到访地点的简洁记录。',
    },
  },
  navLabels: { home: '主导航', vertex: '项目导航', teaching: '实习导航', campus: '项目导航', hotel: '项目导航', visual: '视觉作品导航', music: '音乐导航', photography: '摄影导航', travel: '旅行导航', xinyuyou: '实习导航' },
  attributes: {
    '#nav .lang-switch': { 'aria-label': '语言' },
    '#nav .compact-nav summary': { 'aria-label': '打开章节导航' },
    '#nav .compact-links': { 'aria-label': '章节导航' },
    '#experience .experience-row--vertex .experience-media img': { alt: 'Vertex Marketing 深圳办公空间的一角' },
    '#experience .experience-row--teaching .experience-media img': { alt: '孙慕坤在武汉面向英语写作课堂讲课' },
    '#projects .project-row:nth-child(1) img': { alt: '大型校园晚会观众面向灯光舞台' },
    '#projects .project-row:nth-child(2) img': { alt: '爵士乐手在酒店演出，旁边摆放着低音提琴' },
    '#projects .project-row:nth-child(3) img': { alt: '为酒店爵士活动设计的冬日爵士音乐会主视觉海报' },
    '#outside-work .outside-card:nth-child(1) img': { alt: '孙慕坤在 SUU Jazz Fest 舞台上演奏低音提琴' },
    '#outside-work .outside-card:nth-child(2) img': { alt: '华特·迪士尼音乐厅的金属曲面建筑' },
    '#outside-work .outside-card:nth-child(3) img': { alt: '午后暖光下的布莱斯峡谷露天剧场' },
    '#vertex-nav .lang-switch': { 'aria-label': '语言' },
    '#vertex-nav .compact-nav summary': { 'aria-label': '打开项目导航' },
    '#vertex-nav .compact-links': { 'aria-label': '项目章节' },
    '#teaching-nav .lang-switch': { 'aria-label': '语言' },
    '#teaching-nav .compact-nav summary': { 'aria-label': '打开实习导航' },
    '#teaching-nav .compact-links': { 'aria-label': '实习章节' },
    '#xinyuyou-nav .lang-switch': { 'aria-label': '语言' },
    '#xinyuyou-nav .compact-nav summary': { 'aria-label': '打开实习导航' },
    '#xinyuyou-nav .compact-links': { 'aria-label': '实习章节' },
    '#teaching-media .detail-media:nth-child(1) img': { alt: 'SUU 教师在武汉讲授英语写作课程' },
    '#teaching-media .detail-media:nth-child(2) img': { alt: '孙慕坤与 SUU 教师在教学阶段结束后合影' },
    '#teaching-dialog': { 'aria-label': '放大的课堂图片' },
    '#teaching-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#campus-nav .lang-switch': { 'aria-label': '语言' },
    '#campus-nav .compact-nav summary': { 'aria-label': '打开项目导航' },
    '#campus-nav .compact-links': { 'aria-label': '项目章节' },
    '#campus-media img': { alt: '大型校园晚会观众面向灯光舞台' },
    '#campus-dialog': { 'aria-label': '放大的项目图片' },
    '#campus-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#hotel-nav .lang-switch': { 'aria-label': '语言' },
    '#hotel-nav .compact-nav summary': { 'aria-label': '打开项目导航' },
    '#hotel-nav .compact-links': { 'aria-label': '项目章节' },
    '#hotel-media .detail-media:nth-child(1) img': { alt: '酒店 × 爵士活动全景，画面包含演出与乐器' },
    '#hotel-media .detail-media:nth-child(2) img': { alt: '酒店 × 爵士活动的观众与演出区域' },
    '#hotel-dialog': { 'aria-label': '放大的项目图片' },
    '#hotel-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#visual-nav .lang-switch': { 'aria-label': '语言' },
    '#visual-nav .compact-nav summary': { 'aria-label': '打开视觉作品导航' },
    '#visual-nav .compact-links': { 'aria-label': '视觉作品章节' },
    '#visual-gallery .detail-media:nth-child(1) img': { alt: 'HOTONE Ampero II Stomp 十周年产品海报' },
    '#visual-gallery .detail-media:nth-child(2) img': { alt: '电吉他与效果器构成的 HOTONE 产品海报' },
    '#visual-gallery .detail-media:nth-child(3) img': { alt: 'HOTONE Ampero II Stomp 产品特写海报' },
    '#visual-gallery .detail-media:nth-child(4) img': { alt: '洋红与深蓝配色的海岸线 JAZZ NIGHT 演出海报' },
    '#visual-gallery .detail-media:nth-child(5) img': { alt: '暖橙与暗红配色的海岸线 JAZZ NIGHT 海报变体' },

    '#visual-gallery .detail-media:nth-child(6) img': { alt: '为酒店爵士演出设计的冬日爵士主视觉海报' },
    '#visual-gallery .detail-media:nth-child(7) img': { alt: '武汉博物馆国际博物馆日活动 Banner' },
    '#visual-dialog': { 'aria-label': '放大的视觉作品' },
    '#visual-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#music-nav .lang-switch': { 'aria-label': '语言' },
    '#music-nav .compact-nav summary': { 'aria-label': '打开音乐导航' },
    '#music-nav .compact-links': { 'aria-label': '音乐章节' },
    '#music-intro .music-lead img': { alt: '孙慕坤在 SUU Jazz Fest 舞台上演奏低音提琴' },
    '#music-artist-finalist img': { alt: '孙慕坤与 SUU International Student Artist 演出的乐队成员' },
    '#music-student-center img': { alt: 'SUU 爵士大乐队在 Student Center 演出' },
    '#music-grand-ball img': { alt: '孙慕坤与 Hildale Grand Ball 爵士乐队成员' },
    '#music-tbird img': { alt: '孙慕坤身穿 T-Bird 队服在 SUU 体育馆篮球比赛现场' },
    '#music-jazz-fest img': { alt: '孙慕坤在 SUU Jazz Fest 舞台上演奏低音提琴' },
    '#music-campus-concert img': { alt: '在自主组织的校内爵士音乐会现场合影的乐手' },
    '#music-welcome-gala img': { alt: '武汉轻工大学迎新晚会的乐队成员' },
    '#music-ni-jazz-bar img': { alt: '孙慕坤在 NI Jazz Bar Jam Session 中演奏电贝斯' },
    '#music-fashion-show img': { alt: '乐队在环保服装设计大赛上演出' },
    '#music-study-sun img': { alt: '孙慕坤与 SUU 教授孙逊老师合影' },
    '#music-study-burns img': { alt: '孙慕坤与爵士贝斯手 Daren Burns 在北京合影' },
    '#music-dialog': { 'aria-label': '放大的音乐图片' },
    '#music-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#photography-nav .lang-switch': { 'aria-label': '语言' },
    '#photography-nav .compact-nav summary': { 'aria-label': '打开摄影导航' },
    '#photography-nav .compact-links': { 'aria-label': '摄影章节' },
    '#photography-gallery .detail-media:nth-child(1) img': { alt: '蓝天下的白色住宅建筑' },
    '#photography-gallery .detail-media:nth-child(2) img': { alt: '重庆夜色中亮起的桥梁结构' },
    '#photography-gallery .detail-media:nth-child(3) img': { alt: '华特·迪士尼音乐厅的金属曲面建筑' },
    '#photography-gallery .detail-media:nth-child(4) img': { alt: '圣莫尼卡海滩日落中飞过的海鸟' },
    '#photography-gallery .detail-media:nth-child(5) img': { alt: '铜仁绿意环绕的水景台地与步道' },
    '#photography-gallery .detail-media:nth-child(6) img': { alt: '停在蓝色水面上的小船' },
    '#photography-gallery .detail-media:nth-child(7) img': { alt: '从拉斯维加斯大道望向夜色中的拉斯维加斯大道区' },
    '#photography-dialog': { 'aria-label': '放大的摄影作品' },
    '#photography-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
    '#travel-nav .lang-switch': { 'aria-label': '语言' },
    '#travel-nav .compact-nav summary': { 'aria-label': '打开旅行导航' },
    '#travel-nav .compact-links': { 'aria-label': '旅行章节' },
    '#travel-dialog': { 'aria-label': '放大的旅行图片' },
    '#travel-dialog .dialog-close': { 'aria-label': '关闭图片', 'title': '关闭（Esc）' },
  },
  alts: {
    'portrait.jpg': '孙慕坤 Mukun Sun 肖像照',
    'jazz_winter.jpg': '为酒店爵士演出设计的冬日爵士主视觉海报',
    'hotone_main.jpg': 'HOTONE Ampero II Stomp 十周年产品海报',
    'hotone_guitar.jpg': '电吉他与效果器构成的 HOTONE 产品海报',
    'hotone_pedal.jpg': 'HOTONE Ampero II Stomp 产品特写海报',
    'jazz_coast_a.png': '洋红与深蓝配色的海岸线 JAZZ NIGHT 演出海报',
    'jazz_coast_b.png': '暖橙与暗红配色的海岸线 JAZZ NIGHT 海报变体',
            'banner_museum.png': '武汉博物馆国际博物馆日活动 Banner',
    'building.webp': '晴朗蓝天下的白色住宅建筑',
    'chongqing.webp': '重庆夜色中被灯光照亮的桥梁结构',
    'santa_monica_beach.webp': '圣莫尼卡海滩日落前飞过的海鸟',
    'tongren.webp': '铜仁绿意环绕的水景台地与步道',
    'walter_disney.webp': '华特·迪士尼音乐厅的金属曲面建筑',
  },
  copy: {
    '#teaching-nav .brand': '孙慕坤 · 英语写作助教',
    '#teaching-nav .links': '<a href="#teaching-context">背景</a><a href="#teaching-classroom">课堂</a><a href="#teaching-operations">课程运营</a><a href="#teaching-bridge">文化桥梁</a><a href="#teaching-media">现场</a>',
    '#teaching-nav .compact-nav summary': '章节',
    '#teaching-nav .compact-links': '<a href="#teaching-context">背景</a><a href="#teaching-classroom">课堂</a><a href="#teaching-operations">课程运营</a><a href="#teaching-bridge">文化桥梁</a><a href="#teaching-media">现场</a><a href="../index.html#experience">返回作品集</a>',
    '#teaching-nav .back-link': '← 返回作品集',
    '#teaching-hero h1': '英语写作助教',
    '#teaching-hero .detail-eyebrow': '南犹他大学 · 实习',
    '#teaching-hero .detail-deck': '在武汉为服务 200 多名学生的英语写作课程提供课堂与课程支持。',
    '#teaching-hero .detail-meta': '2026 年 5 月 · 中国武汉',
    '#teaching-context h2': '角色与背景',
    '#teaching-context p': '我担任南犹他大学（SUU）与武汉轻工大学合作开展的英语写作课程助教。SUU 教授为广告学与工程管理两个专业、共 5 个班的 200 多名学生集中授课，我负责课堂支持与课程运营。',
    '#teaching-classroom h2': '课堂支持',
    '#teaching-classroom p': '我提供中英双语支持，并在教授与学生之间担任口译：帮学生理解教授，也帮教授理解中国课堂的沟通方式。由于学生英语水平跨度很大，我会针对不同水平调整讲解与反馈。',
    '#teaching-operations h2': '课程运营',
    '#teaching-operations p': '我负责考勤管理，按教授设计的评分标准批改作业（拼写、结构、语法、逻辑）并给出书面反馈，独立使用 Excel 完成期末成绩表与课程完成情况报告的制作。',
    '#teaching-bridge h2': '文化桥梁',
    '#teaching-bridge p': '教授是第一次来中国。我帮她缩小“不熟悉”带来的距离感——教她用支付宝坐地铁、带她尝中国食物、参观黄鹤楼、规划庐山游。我的体会是：交流顺畅的关键不在于 100% 听懂，而在于友好开放的态度与认真聆听、积极回应的姿态。',
    '#teaching-media h2': '课堂现场',
    '#teaching-media .detail-media:nth-child(1) figcaption': '英语写作课程 · 武汉',
    '#teaching-media .detail-media:nth-child(2) figcaption': '教学阶段结束后 · 2026 年 5 月',
    '#teaching-footer span': '孙慕坤 · 英语写作助教',
    '#teaching-footer a': '返回实习经历',
    '#nav .brand': '孙慕坤<span class="en">Mukun&nbsp;Sun</span>',
    '#nav .links': '<a href="#about">关于</a><a href="#experience">工作</a><a href="#outside-work">工作之外</a><a href="#contact">联系</a>',
    '#nav .compact-nav summary': '章节',
    '#nav .compact-links': '<a href="#about">关于</a><a href="#experience">工作</a><a href="#outside-work">工作之外</a><a href="#contact">联系</a>',
    '.hero h1': '孙慕坤',
    '.hero .role': '传播、社群与音乐。',
    '.hero .scrollcue': '向下浏览<span class="bar" aria-hidden="true"></span>',
    '#about .stitle': '关于我',
    '#about .about-copy p:nth-child(1)': '我在南犹他大学学习战略传播，辅修商业分析。我的实践涉及社交媒体、社群运营、视觉传播和活动推广。我习惯先理解受众实际如何参与，再决定要做什么内容。',
    '#about .about-copy p:nth-child(2)': '工作之外，我在 SUU 的乐团中演奏低音提琴和电贝斯。音乐也让我参与音乐会策划、摄影，以及那些真正影响一场活动体验的细节。',
    '#vertex-nav .brand': '孙慕坤<span class="en">Vertex</span>',
    '#vertex-nav .links': '<a href="#vertex-context">背景</a><a href="#vertex-scope">工作</a><a href="#vertex-approach">方法</a><a href="#vertex-data">数据</a><a href="#vertex-tooling">工具</a><a href="#vertex-evidence">数字</a><a href="#vertex-community">社区</a>',
    '#vertex-nav .compact-nav summary': '章节',
    '#vertex-nav .compact-links': '<a href="#vertex-context">背景</a><a href="#vertex-scope">工作</a><a href="#vertex-approach">方法</a><a href="#vertex-data">数据</a><a href="#vertex-tooling">工具</a><a href="#vertex-evidence">数字</a><a href="#vertex-community">社区</a><a href="../index.html#experience">返回作品集</a>',
    '#vertex-nav .back-link': '← 返回作品集',
    '#campus-nav .brand': '孙慕坤 · 校园整合传播',
    '#campus-nav .links': '<a href="#campus-context">背景</a><a href="#campus-contribution">负责内容</a><a href="#campus-media">现场</a>',
    '#campus-nav .compact-nav summary': '章节',
    '#campus-nav .compact-links': '<a href="#campus-context">背景</a><a href="#campus-contribution">负责内容</a><a href="#campus-media">现场</a><a href="../index.html#projects">返回作品集</a>',
    '#campus-nav .back-link': '← 返回作品集',
    '#campus-hero h1': '校园整合传播',
    '#campus-hero .detail-eyebrow': '校园活动',
    '#campus-hero .detail-deck': '面向校园迎新与新年活动的线上线下协同宣传。',
    '#campus-hero .detail-meta': '宣传负责人 · 2024–2025',
    '#campus-context h2': '背景',
    '#campus-context p': '校园迎新与新年活动需要在线上线下渠道之间保持协调一致的宣传。',
    '#campus-contribution h2': '负责内容',
    '#campus-contribution p': '我负责宣传工作的组织协调，根据不同平台调整内容，并衔接现场活动与线上发布。',
    '#campus-media h2': '活动现场',
    '#campus-media figcaption': '校园迎新晚会 · 活动现场',
    '#campus-footer span': '孙慕坤 · 校园整合传播',
    '#campus-footer a': '返回项目列表',
    '#hotel-nav .brand': '孙慕坤 · 酒店 × 爵士',
    '#hotel-nav .links': '<a href="#hotel-context">背景</a><a href="#hotel-contribution">负责内容</a><a href="#hotel-media">现场</a>',
    '#hotel-nav .compact-nav summary': '章节',
    '#hotel-nav .compact-links': '<a href="#hotel-context">背景</a><a href="#hotel-contribution">负责内容</a><a href="#hotel-media">现场</a><a href="../index.html#projects">返回作品集</a>',
    '#hotel-nav .back-link': '← 返回作品集',
    '#hotel-hero h1': '酒店 × 爵士',
    '#hotel-hero .detail-eyebrow': '酒店与艺术活动',
    '#hotel-hero .detail-deck': '一场连接酒店与本地爵士合作方的阳台演出与视觉传播。',
    '#hotel-hero .detail-meta': '活动传播与视觉设计 · 2024',
    '#hotel-context h2': '背景',
    '#hotel-context p': '一场阳台演出以“酒店与艺术”为概念，连接了 Ni Jazz Bar 与风貌安坻酒店。',
    '#hotel-contribution h2': '负责内容',
    '#hotel-contribution p': '我构思活动概念，协调合作方与演出，策划微信推广，并设计统一的视觉识别。',
    '#hotel-media h2': '活动现场',
    '#hotel-media .detail-media:nth-child(1) figcaption': '酒店 × 爵士 · 阳台演出',
    '#hotel-media .detail-media:nth-child(2) figcaption': '酒店 × 爵士 · 观众与演出区域',
    '#hotel-footer span': '孙慕坤 · 酒店 × 爵士',
    '#hotel-footer a': '返回项目列表',
    '#visual-nav .brand': '孙慕坤 · 视觉作品精选',
    '#visual-nav .links': '<a href="#visual-gallery">视觉作品</a>',
    '#visual-nav .compact-nav summary': '章节',
    '#visual-nav .compact-links': '<a href="#visual-gallery">视觉作品</a><a href="../index.html#projects">返回作品集</a>',
    '#visual-nav .back-link': '← 返回作品集',
    '#visual-hero h1': '视觉作品精选',
    '#visual-hero .detail-eyebrow': '视觉作品',
    '#visual-hero .detail-deck': '活动、产品、印刷与摄影作品。',
    '#visual-gallery h2': '视觉作品精选',
    '#visual-gallery .detail-media:nth-child(1) figcaption': 'HOTONE · 十周年海报',
    '#visual-gallery .detail-media:nth-child(2) figcaption': 'HOTONE · Release Your Musical Passion',
    '#visual-gallery .detail-media:nth-child(3) figcaption': 'HOTONE · Ampero II Stomp 细节',
    '#visual-gallery .detail-media:nth-child(4) figcaption': 'JAZZ NIGHT · 海岸线',
    '#visual-gallery .detail-media:nth-child(5) figcaption': 'JAZZ NIGHT · 变体',

    '#visual-gallery .detail-media:nth-child(6) figcaption': '冬日爵士音乐会 · 酒店活动视觉',
    '#visual-gallery .detail-media:nth-child(7) figcaption': '国际博物馆日 · 武汉博物馆',
    '#visual-footer span': '孙慕坤 · 视觉作品精选',
    '#visual-footer a': '返回项目列表',
    '#music-nav .brand': '孙慕坤 · 音乐',
    '#music-nav .links': '<a href="music.html" aria-current="page">音乐</a><a href="photography.html">摄影</a><a href="travel.html">旅行</a>',
    '#music-nav .compact-nav summary': '章节',
    '#music-nav .compact-links': '<a href="music.html" aria-current="page">音乐</a><a href="photography.html">摄影</a><a href="travel.html">旅行</a><a href="index.html#outside-work">返回首页</a>',
    '#music-nav .back-link': '← 返回首页',
    '#music-hero h1': '音乐',
    '#music-hero .detail-eyebrow': '低音提琴 · 电贝斯',
    '#music-hero .detail-deck': '演出、自主项目，以及登台之前发生的工作。',
    '#music-intro h2': '音乐',
    '#music-intro .music-intro-copy': '我演奏低音提琴和电贝斯，但很多音乐工作发生在登台之前：编曲、组织排练、协调场地，以及围绕一支乐队完成整场活动。',
    '#music-intro .music-lead figcaption': 'SUU Jazz Fest · 2026 年 2 月 21 日',
    '#music-timeline-title': '演出与项目精选',
    '#music-artist-finalist .music-event-meta': '<time datetime="2026-04-14">2026 年 4 月 14 日</time><span>美国犹他州锡达城</span>',
    '#music-artist-finalist h2': 'SUU International Student Artist · Finalist',
    '#music-artist-finalist .music-event-copy p': '入选 Finalist 后，组织排练并协调乐队，在 SUU Alumni Center 完成演出，演奏低音提琴。',
    '#music-artist-finalist figcaption': 'Alumni Center 演出结束后',
    '#music-student-center .music-event-meta': '<time datetime="2026-03-31">2026 年 3 月 31 日</time><span>美国犹他州锡达城</span>',
    '#music-student-center h2': 'SUU 爵士大乐队',
    '#music-student-center p': '随爵士大乐队在 SUU Student Center 演出，演奏低音提琴。',
    '#music-student-center .music-watch': '观看演出 ↗',
    '#music-student-center figcaption': 'SUU Student Center',
    '#music-grand-ball .music-event-meta': '<time datetime="2026-03-28">2026 年 3 月 28 日</time><span>美国犹他州 Hildale</span>',
    '#music-grand-ball h2': 'Grand Ball',
    '#music-grand-ball .music-event-copy p': '受邀加入 Grand Ball 的爵士伴奏乐队，演奏低音提琴。',
    '#music-grand-ball figcaption': 'Grand Ball · 美国犹他州 Hildale',
    '#music-tbird .music-event-meta': '<time datetime="2026-02">2026 年 2–3 月</time><span>美国犹他州锡达城</span>',
    '#music-tbird h2': 'T-Bird Marching Band',
    '#music-tbird p': '作为替补电贝斯手加入，并在 SUU 体育馆的篮球比赛中随助威乐队演出。',
    '#music-tbird figcaption': 'T-Bird Marching Band · SUU 体育馆',
    '#music-jazz-fest .music-event-meta': '<time datetime="2026-02-21">2026 年 2 月 21 日</time><span>美国犹他州锡达城</span>',
    '#music-jazz-fest h2': 'SUU Jazz Fest',
    '#music-jazz-fest p': '随 SUU 爵士大乐队在 Heritage Center 演出，演奏低音提琴。',
    '#music-jazz-fest .music-watch': '观看演出 ↗',
    '#music-jazz-fest figcaption': 'Heritage Center · SUU Jazz Fest',
    '#music-campus-concert .music-event-meta': '<time datetime="2024-11-16">2024 年 11 月 16 日</time><span>中国武汉</span>',
    '#music-campus-concert h2': '自主爵士音乐会',
    '#music-campus-concert .music-event-copy p': '在校内咖啡馆从零组织一场爵士音乐会：对接场地、完成乐队编曲与排练组织、设计并宣传活动，以及负责现场执行。',
    '#music-campus-concert figcaption': '校内咖啡馆爵士音乐会',
    '#music-welcome-gala .music-event-meta': '<time datetime="2024-09-15">2024 年 9 月 15 日</time><span>中国武汉</span>',
    '#music-welcome-gala h2': '迎新晚会',
    '#music-welcome-gala .music-event-copy p': '在担任晚会宣发负责人之一的同时，组建乐队、组织排练并登台演出。',
    '#music-welcome-gala figcaption': '武汉轻工大学迎新晚会',
    '#music-ni-jazz-bar .music-event-meta': '<time datetime="2024-03-25">2024 年 3 月 25 日</time><span>中国武汉</span>',
    '#music-ni-jazz-bar h2': 'NI Jazz Bar Jam Session',
    '#music-ni-jazz-bar p': '作为贝斯手参加 Jam Session。',
    '#music-ni-jazz-bar figcaption': 'NI Jazz Bar · 武汉',
    '#music-fashion-show .music-event-meta': '<time datetime="2023-12-04">2023 年 12 月 4 日</time><span>中国武汉</span>',
    '#music-fashion-show h2': '环保服装设计大赛',
    '#music-fashion-show p': '为暖场节目重新编排《Just the Two of Us》，组织排练，并设计宣传海报。',
    '#music-fashion-show figcaption': '暖场演出 · 武汉',
    '#music-study h2': '学习经历',
    '#music-study-sun time': '2025 年 9 月',
    '#music-study-sun p': '师从 SUU 教授 Xun Sun。',
    '#music-study-sun figcaption': 'Southern Utah University · 2025 年 9 月',
    '#music-study-burns time': '2023 年 7 月',
    '#music-study-burns p': '在北京师从美国爵士贝斯手 Daren Burns 学习爵士贝斯。',
    '#music-study-burns figcaption': '北京 · 2023 年 7 月',
    '#music-footer span': '孙慕坤 · 音乐',
    '#music-footer a': '返回首页',
    '#photography-nav .brand': '孙慕坤 · 摄影',
    '#photography-nav .links': '<a href="music.html">音乐</a><a href="photography.html" aria-current="page">摄影</a><a href="travel.html">旅行</a>',
    '#photography-nav .compact-nav summary': '章节',
    '#photography-nav .compact-links': '<a href="music.html">音乐</a><a href="photography.html" aria-current="page">摄影</a><a href="travel.html">旅行</a><a href="index.html#outside-work">返回首页</a>',
    '#photography-nav .back-link': '← 返回首页',
    '#photography-hero h1': '摄影',
    '#photography-hero .detail-eyebrow': '光线 · 结构 · 氛围',
    '#photography-hero .detail-deck': '一组关于建筑、风景与光线的个人摄影。',
    '#photography-gallery h2': '摄影精选',
    '#photography-gallery .photography-intro': '摄影是我观察光线、物体与氛围的另一种方式。',
    '#photography-gallery .detail-media:nth-child(1) figcaption': '蓝色与混凝土',
    '#photography-gallery .detail-media:nth-child(2) figcaption': '重庆 · 夜间结构',
    '#photography-gallery .detail-media:nth-child(3) figcaption': '华特·迪士尼音乐厅 · 曲线',
    '#photography-gallery .detail-media:nth-child(4) figcaption': '圣莫尼卡 · 日落',
    '#photography-gallery .detail-media:nth-child(5) figcaption': '铜仁 · 水与步道',
    '#photography-gallery .detail-media:nth-child(6) figcaption': '旧金山 · 蓝色水面上的船只',
    '#photography-gallery .detail-media:nth-child(7) figcaption': '拉斯维加斯 · 大道夜景',
    '#photography-footer span': '孙慕坤 · 摄影',
    '#photography-footer a': '返回首页',
    '#travel-nav .brand': '孙慕坤 · 旅行',
    '#travel-nav .links': '<a href="music.html">音乐</a><a href="photography.html">摄影</a><a href="travel.html" aria-current="page">旅行</a>',
    '#travel-nav .compact-nav summary': '章节',
    '#travel-nav .compact-links': '<a href="music.html">音乐</a><a href="photography.html">摄影</a><a href="travel.html" aria-current="page">旅行</a><a href="index.html#outside-work">返回首页</a>',
    '#travel-nav .back-link': '← 返回首页',
    '#travel-hero h1': '旅行',
    '#travel-hero .detail-eyebrow': '到访地点',
    '#travel-hero .detail-deck': '持续更新中...',
    '#travel-notes h2': '旅行记录',
    '#travel-notes .travel-intro': '按地区整理我曾到访的地点。',
    '#travel-us h2': '美国',
    '#travel-us .travel-region-copy': '<p><strong>加利福尼亚州</strong><span>洛杉矶 · 圣迭戈 · 旧金山</span></p><p><strong>内华达州</strong><span>拉斯维加斯</span></p><p><strong>犹他州</strong><span>锡达城 · 圣乔治 · 盐湖城 · 锡安国家公园 · 布莱斯峡谷国家公园</span></p>',
    '#travel-china h2': '中国',
    '#travel-china .travel-region-copy': '<p><strong>直辖市与地区</strong><span>北京 · 上海 · 香港 · 重庆</span></p><p><strong>广东</strong><span>广州 · 深圳</span></p><p><strong>湖北</strong><span>武汉 · 咸宁</span></p><p><strong>河南</strong><span>商丘 · 郑州 · 开封</span></p><p><strong>江苏</strong><span>苏州 · 太湖</span></p><p><strong>贵州</strong><span>贵阳 · 铜仁</span></p><p><strong>四川</strong><span>成都</span></p>',
    '#travel-footer span': '孙慕坤 · 旅行',
    '#travel-footer a': '返回首页',
    '#experience .stitle': '实习',
    '#experience .experience-row--suu-tutoring .experience-company': '南犹他大学 · Tutoring Center',
    '#experience .experience-row--suu-tutoring .experience-role': '市场营销实习生',
    '#experience .experience-row--suu-tutoring .experience-status': '即将开始......',
    '#experience .experience-row--vertex .experience-company': 'Vertex Marketing',
    '#experience .experience-row--vertex .experience-role': 'Reddit 社群运营实习生',
    '#experience .experience-row--vertex .experience-dates': '2026.06–2026.09 · Shenzhen, China',
    '#experience .experience-row--vertex .experience-responsibility': '我负责消费科技、智能家居、生活方式、金融与家庭等方向的 Reddit 海外社区运营，根据 Subreddit 规则、受众语境与可见表现调整内容和互动方式。',
    '#experience .experience-row--teaching .experience-company': '南犹他大学',
    '#experience .experience-row--teaching .experience-role': '英语写作课程助教',
    '#experience .experience-row--teaching .experience-dates': '2026 年 5 月 · Wuhan, China',
    '#experience .experience-row--teaching .experience-responsibility': '在武汉协助 SUU 教师为 200 多名学生开展英语写作课程，提供中英双语课堂支持；负责考勤、作业评分与书面反馈，并使用 Excel 整理期末成绩和课程完成情况。',
    '#experience .experience-row--xinyuyou .experience-company': '新昱佑（YUYO INNOVATIONS LLC）',
    '#experience .experience-row--xinyuyou .experience-role': '海外达人营销实习生',
    '#experience .experience-row--xinyuyou .experience-dates': '2025.06–2025.08 · Shenzhen, China',
    '#experience .experience-row--xinyuyou .experience-responsibility': '我负责新昱佑（YUYO INNOVATIONS LLC）的海外达人营销：面向美加市场开发创作者并推进置换、佣金与付费合作，累计触达 476 位达人、达成 45 个合作，并以曝光与成本数据评估达人价值。',
    '#experience .experience-row--xinyuyou .experience-proofline': '<strong>476</strong> 位达人触达 · <strong>45</strong> 个合作 · 单条最高 <strong>54.5 万</strong> 曝光',
    '#experience .experience-row--vertex .experience-proofline': '<strong>793K</strong> 浏览量 · <strong>3,548</strong> 点赞 · 美国受众占比最高 <strong>91.7%</strong>',
    '#experience .experience-link': '进一步了解 <span aria-hidden="true">→</span>',
    '#vertex-hero': `<p class="eyebrow">Vertex Marketing · 海外社区运营</p>
      <h1>面向出海品牌的 Reddit 社群运营。</h1>
      <p class="hero-deck">我在 Vertex Marketing 的海外社区运营实习：社区进入策略、原生英文内容与数据驱动迭代，覆盖 15+ 个社区——让中国品牌被世界真诚地看见。</p>
      <p class="hero-meta">Reddit 社群运营实习生 · 2026.06–2026.09 · 中国深圳</p>`,
    '#vertex-context': `<h2 id="vertex-context-title">背景</h2>
      <div class="section-copy">
        <p>过去十年，"中国制造"正在向"中国品牌"跃迁。越来越多的中国企业在产品力之外，开始寻求在海外建立可持续的品牌资产，而海外社区正是品牌与真实用户建立信任的关键阵地：用户在这里讨论产品、分享体验、影响彼此的决策，其真实性与说服力远非传统广告投放可以替代。</p>
        <p>我加入的这家整合营销服务商，正服务于这一趋势，客户覆盖多家中国出海消费硬件品牌。我所在的账号运营团队是这条价值链的底座，负责品牌社区内容资产的构建、运营与健康管理。在这里，我第一次完整看见了一条"从品牌出海诉求，到社区内容落地，再到用户反馈回流"的营销链路。</p>
      </div>`,
    '#vertex-scope': `<h2 id="vertex-scope-title">做了什么</h2>
      <div class="section-copy">
        <p>我的工作横跨内容策略、受众运营与数据洞察三个维度。我负责为品牌项目执行社区进入策略：研究目标社区的规则、语气与情绪风向，再据此设计账号的内容定位，在 5 个工作日内完成一个账号从策略准备到可交付的全流程；高峰期同时并行管理 18 个账号的进入周期，保障项目按时交付。</p>
        <p>除项目定向运营外，我维护横跨 15+ 垂直社区的内容矩阵，从消费科技、智能家居、游戏到金融、食品饮料、母婴、心理健康与职业发展。不同社区需要不同的互动方式：金融社区要专业严谨，生活方式社区要自然亲切，母婴社区要真诚共情。核心能力不是"写英文"，而是"用目标人群的方式说话"。</p>
      </div>`,
    '#vertex-approach': `<h2 id="vertex-approach-title">怎么做的</h2>
      <div class="section-copy">
        <p>我把每个社区当成一个独立的受众来对待。动笔之前，我先研究 subreddit 的规则，以及社区里已经获得认可的话题与讨论，让我的内容成为对话的加分项而不是噪音。我面向以美国为主的海外用户创作原生英文内容，并持续依据社区实时风向调优：判断用户情绪、跟随讨论趋势、管理内容安全边界，在保持品牌友好的前提下避免引发负面互动。平台规则与算法变化时，我相应调整内容与发布节奏。</p>
      </div>`,
    '#vertex-data': `<h2 id="vertex-data-title">数据</h2>
      <div class="section-copy">
        <p>我坚持为工作建立数据记录与评估体系：追踪内容的曝光、点赞、评论、好评率与受众地区分布，并完成 5 个代表性账号的资产盘点，包括账号定位、内容贡献结构与代表内容表现。这些数据沉淀为一套可验证的量化评估体系，也让我养成了"用数据说话"的习惯：内容创作不是凭感觉，而是基于受众反馈的持续迭代。</p>
      </div>`,
    '#vertex-tooling': `<h2 id="vertex-tooling-title">自建工具</h2>
      <div class="section-copy">
        <p>重复性工作推动我动手做工具。我基于 AI 工具自研了一套内容创作工作流，覆盖"构思—起草—质量检查"全环节，将单条内容从构思到成稿的时间压缩约 40%，同时内置内容自然度、事实依据与品牌边界检查，兼顾效率与质量。实习后期，我把这套工具的设计思路与使用流程向公司负责人与 AI 工程团队做了完整展示，优化方案获得批准并进入试点。我也搭建了每日工作总结看板，把真实的内容表现数据沉淀为可量化素材。</p>
      </div>`,
    '#vertex-evidence': `<h2 id="vertex-evidence-title">数字</h2>
      <div class="section-copy">
        <table class="evidence-table"><tbody>
          <tr><th scope="row">账号</th><td><strong>5</strong> 个账号</td></tr>
          <tr><th scope="row">账号历史</th><td><strong>15,433</strong> 累计 Karma</td></tr>
          <tr><th scope="row">内容贡献</th><td><strong>472</strong> 条累计 Contributions</td></tr>
          <tr><th scope="row">可见浏览量</th><td>15 条可见浏览量的内容累计 <strong>793K</strong> 浏览</td></tr>
          <tr><th scope="row">互动</th><td>16 条内容累计 <strong>3,548</strong> 点赞与 <strong>482</strong> 评论</td></tr>
          <tr><th scope="row">单帖峰值</th><td><strong>406K</strong> 浏览 / <strong>891</strong> 点赞 / <strong>90</strong> 评论 / <strong>100%</strong> Upvote Ratio</td></tr>
          <tr><th scope="row">受众</th><td>单帖美国受众占比最高 <strong>91.7%</strong></td></tr>
          <tr><th scope="row">内容效率</th><td>AI 工作流让单条内容创作提速约 <strong>40%</strong></td></tr>
          <tr><th scope="row">社区覆盖</th><td>至少 <strong>15</strong> 个社区</td></tr>
        </tbody></table>
        <p class="evidence-note">所有任务按时交付并留痕，全程零重大内容违规，未造成任何账号资产损失。</p>
      </div>`,
    '#vertex-community': `<h2 id="vertex-community-title">社区语境</h2>
      <div class="section-copy">
        <p>这些工作覆盖泛兴趣与垂直社区。我根据不同 Subreddit 的规则与受众语言调整调研、内容和互动方式，也参与一个品牌官方社区从 0 到 1 的早期搭建与管理。</p>
        <ul class="community-list" aria-label="社区主题"><li>消费科技</li><li>智能家居</li><li>游戏</li><li>编程</li><li>金融</li><li>食品饮料</li><li>母婴</li><li>心理健康</li><li>家庭关系</li><li>职业发展</li></ul>
      </div>`,
    '.marquee .track': '<span>社群运营<span class="mut">·</span>教学<span class="mut">·</span>活动传播<span class="mut">·</span>爵士演奏<span class="mut">·</span>视觉传播<span class="mut">·</span></span><span>社群运营<span class="mut">·</span>教学<span class="mut">·</span>活动传播<span class="mut">·</span>爵士演奏<span class="mut">·</span>视觉传播<span class="mut">·</span></span>',
    '#projects .stitle': '项目',
    '#projects .section-intro': '三条精选入口，分别呈现活动统筹、推广与视觉传播。',
    '#projects .project-row:nth-child(1) .project-copy strong': '校园整合传播',
    '#projects .project-row:nth-child(1) .project-copy span': '为迎新晚会、元旦晚会等校园活动协调线上线下宣发。',
    '#projects .project-row:nth-child(1) .project-action': '查看项目 <span aria-hidden="true">→</span>',
    '#projects .project-row:nth-child(2) .project-copy strong': '酒店 × 爵士品牌活动',
    '#projects .project-row:nth-child(2) .project-copy span': '为酒店 × 爵士合作完成活动概念、合作方协调、微信推广与视觉识别。',
    '#projects .project-row:nth-child(2) .project-action': '查看项目 <span aria-hidden="true">→</span>',
    '#projects .project-row:nth-child(3) .project-copy strong': '精选视觉作品',
    '#projects .project-row:nth-child(3) .project-copy span': '海报、印刷设计、活动视觉与摄影作品精选。',
    '#projects .project-row:nth-child(3) .project-action': '查看项目 <span aria-hidden="true">→</span>',
    '#edu .stitle': '教育经历',
    '#edu .edu-entry:nth-child(1) .edu-school': '南犹他大学',
    '#edu .edu-entry:nth-child(1) .edu-dates': '2025.08 — 2027.05',
    '#edu .edu-entry:nth-child(1) .edu-degree': '战略传播理学学士（在读）',
    '#edu .edu-entry:nth-child(1) .edu-secondary': '辅修 · 商业分析',
    '#edu .edu-entry:nth-child(1) .edu-focus': '课程：社交媒体策略、社交媒体品牌、战略传播活动、内容创作、统计推断、数据分析。',
    '#edu .edu-entry:nth-child(2) .edu-school': '武汉轻工大学',
    '#edu .edu-entry:nth-child(2) .edu-dates': '2023.09 — 2025.06',
    '#edu .edu-entry:nth-child(2) .edu-degree': '广告学文学学士',
    '#edu .edu-entry:nth-child(2) .edu-focus': '课程：传播写作、数字文案编排与设计、广告调查与分析、组织传播。',
    '#outside-work .stitle': '工作之外',
    '#outside-work .section-intro': '音乐、摄影与旅行经历，塑造了我观察人与氛围的方式。',
    '#outside-work .outside-card:nth-child(1) strong': '音乐',
    '#outside-work .outside-card:nth-child(1) p': '低音提琴与电贝斯演奏、乐团合作，以及现场活动背后的策划。',
    '#outside-work .outside-card:nth-child(2) strong': '摄影',
    '#outside-work .outside-card:nth-child(2) p': '对演出、物件、光线与氛围的小型观察。',
    '#outside-work .outside-card:nth-child(3) strong': '旅行',
    '#outside-work .outside-card:nth-child(3) p': '来自城市与风景的记录，让我更敏锐地观察文化、节奏与日常细节。',
    '#contact h2': '联系我。',
    '#contact .contact-intro': '你可以通过电子邮件或 LinkedIn 联系我。',
    '#contact .contact-action:nth-child(1) .contact-label': '给我发邮件',
    '#contact .contact-action:nth-child(2) .contact-label': 'LinkedIn',
    '#contact .sign': '— 孙慕坤 / Mukun Sun',
    '#site-footer span:first-child': '© 2026 孙慕坤',
    '#vertex-footer span:first-child': '孙慕坤 · Vertex Marketing',
    '#vertex-footer span:last-child': '实习 · 2026.06–2026.09',
    '#xinyuyou-nav .brand': '孙慕坤 · 新昱佑',
    '#xinyuyou-nav .links': '<a href="#xinyuyou-context">背景</a><a href="#xinyuyou-scope">工作</a><a href="#xinyuyou-approach">方法</a><a href="#xinyuyou-projects">项目</a><a href="#xinyuyou-evidence">数字</a>',
    '#xinyuyou-nav .compact-nav summary': '章节',
    '#xinyuyou-nav .compact-links': '<a href="#xinyuyou-context">背景</a><a href="#xinyuyou-scope">工作</a><a href="#xinyuyou-approach">方法</a><a href="#xinyuyou-projects">项目</a><a href="#xinyuyou-evidence">数字</a><a href="../index.html#experience">返回作品集</a>',
    '#xinyuyou-nav .back-link': '← 返回作品集',
    '#xinyuyou-hero': `<h1>面向出海宠物品牌的达人营销。</h1>
      <div class="detail-hero-copy">
        <p class="detail-eyebrow">新昱佑（YUYO INNOVATIONS LLC）· 海外达人营销</p>
        <p class="detail-deck">我在新昱佑（YUYO INNOVATIONS）的达人营销实习——这家公司以 Pawreto 品牌出海，主营宠物安全门栏：从首次触达到内容发布，我负责面向美加市场的创作者开发、商务推进与合作运营。</p>
        <p class="detail-meta">海外达人营销实习生 · 2025.06–2025.08 · 中国深圳</p>
      </div>`,
    '#xinyuyou-context': `<h2 id="xinyuyou-context-title">背景</h2>
      <div class="detail-section-copy">
        <p>过去十年，宠物经济随全球化升温，中国供应链优势让越来越多宠物用品企业走向海外——但产品出海和品牌出海是两件事。在 Instagram、TikTok 等主流平台上，达人是品牌与真实用户之间最直接的信任桥梁：他们用真实的家居场景和日常语言展示产品，其说服力远非传统广告投放可以替代——这正是达人营销要弥合的那道信任落差。</p>
        <p>我实习的新昱佑（YUYO INNOVATIONS LLC）是一家宠物用品出海品牌公司，自主品牌 Pawreto，主营犬猫安全门栏，通过 Amazon 在美加市场销售。我所在的达人运营团队是公司增长引擎的前端：找到对的创作者、经营合作关系，并确保每一场合作都交付品牌可以放心的内容。</p>
      </div>`,
    '#xinyuyou-scope': `<h2 id="xinyuyou-scope-title">做了什么</h2>
      <div class="detail-section-copy">
        <p>那个夏天，我的工作覆盖了达人营销的完整链路，从开发到衡量。我为美国、加拿大市场的创作者建立并运行了一套可规模化的触达体系，以 Instagram 为主要平台，累计触达 476 位达人、达成 45 个合作，覆盖置换、佣金与付费三种模式；付费合作从询价、谈判到合同与付款，我全程跟进。</p>
        <p>随着业务推进，我高峰时期并行管理 14 个合作项目，并审核创作者交付的内容——对照产品卖点检查成片、给出修改反馈、跟进发布节点。工作横跨犬门与猫门两条产品线，每一条都有不同的受众与内容要求。</p>
      </div>`,
    '#xinyuyou-approach': `<h2 id="xinyuyou-approach-title">怎么做的</h2>
      <div class="detail-section-copy">
        <p>数据是我做每个决策的依据。我持续跟踪已发布内容的曝光、互动与单位成本，并用它来评估达人，而不只参考粉丝量：一位中腰部创作者的单条内容获得 54.5 万曝光，千次成本不到 1 美元，是另一场合作的十倍曝光、几分之一的价格。这样的案例让我学会把内容匹配度、受众重合与历史表现放在粉丝数之前。</p>
        <p>我也会按产品线调整策略。比如猫门产品需要的达人画像与犬门不同，于是我从筛选标准、触达话术到目标账号都重新定义，让内容需求决定开发方向。</p>
      </div>`,
    '#xinyuyou-projects': `<h2 id="xinyuyou-projects-title">项目</h2>
      <div class="detail-section-copy">
        <p>除了日常合作，我还参与了两项更大的项目。在 Amazon 安装视频（UGC）项目中，我负责整理拍摄需求、撰写并完善创作者 Brief、与外部制作方协调拍摄范围与交付周期，并推动产品、市场与创作团队的信息对齐。我也全程参与了 Babelio Safety Month 活动，从 Kickoff、达人筛选到内容审核与数据汇总，并协助品牌组织了社媒 Giveaway 活动。</p>
      </div>`,
    '#xinyuyou-evidence': `<h2 id="xinyuyou-evidence-title">数字</h2>
      <div class="detail-section-copy">
        <table class="evidence-table"><tbody>
          <tr><th scope="row">达人触达</th><td><strong>476</strong> 位，覆盖美加市场，Instagram 为主</td></tr>
          <tr><th scope="row">达成合作</th><td><strong>45</strong> 个，置换/佣金/付费多模式</td></tr>
          <tr><th scope="row">付费合作</th><td><strong>8</strong> 个，全流程跟进</td></tr>
          <tr><th scope="row">视频发布</th><td><strong>20+</strong> 条，审核后推动上线</td></tr>
          <tr><th scope="row">单日峰值</th><td><strong>50</strong> 位达人开发</td></tr>
          <tr><th scope="row">并行管理</th><td>高峰 <strong>14</strong> 个合作项目</td></tr>
          <tr><th scope="row">单条曝光</th><td><strong>54.5 万</strong> 次，CPM <strong>0.83 美元</strong>（中腰部达人）</td></tr>
          <tr><th scope="row">产品覆盖</th><td><strong>7</strong> 款核心产品，犬猫安全门栏</td></tr>
        </tbody></table>
        <p class="evidence-note">所有合作从建联到付款全程留痕，无重大失误、无遗漏交付。</p>
      </div>`,
    '#xinyuyou-footer span': '孙慕坤 · 新昱佑',
    '#xinyuyou-footer a': '返回实习经历',
  },
};

export const LANGUAGES = { en, zh };

function getPageKey(doc) {
  const key = doc?.documentElement?.dataset?.page;
  return PAGE_KEYS.includes(key) ? key : 'home';
}

export function normalizeLanguage(value) {
  return value === 'zh' ? 'zh' : DEFAULT_LANGUAGE;
}

export function getInitialLanguage(storage = globalThis.localStorage) {
  try { return normalizeLanguage(storage?.getItem(STORAGE_KEY)); }
  catch { return DEFAULT_LANGUAGE; }
}

export function applyLanguage(value, doc = globalThis.document, storage = globalThis.localStorage, persist = false) {
  const language = normalizeLanguage(value);
  const config = LANGUAGES[language];
  const pageKey = getPageKey(doc);
  const metadata = config.metadata[pageKey] ?? config.metadata.home;
  doc.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  doc.documentElement.dataset.language = language;
  doc.title = metadata.title;
  const meta = doc.querySelector('meta[name="description"]');
  if (meta) meta.content = metadata.description;
  const socialMetadata = [
    ['meta[property="og:title"]', metadata.title],
    ['meta[property="og:description"]', metadata.description],
    ['meta[name="twitter:title"]', metadata.title],
    ['meta[name="twitter:description"]', metadata.description],
  ];
  for (const [selector, content] of socialMetadata) {
    const socialMeta = doc.querySelector(selector);
    if (socialMeta) socialMeta.content = content;
  }
  if (metadata.imageAlt) {
    const openGraphImageAlt = doc.querySelector('meta[property="og:image:alt"]');
    const twitterImageAlt = doc.querySelector('meta[name="twitter:image:alt"]');
    if (openGraphImageAlt) openGraphImageAlt.content = metadata.imageAlt;
    if (twitterImageAlt) twitterImageAlt.content = metadata.imageAlt;
  }
  const nav = doc.querySelector('.nav, .detail-nav');
  if (nav) nav.setAttribute('aria-label', config.navLabels[pageKey] ?? config.navLabels.home);
  for (const [selector, html] of Object.entries(config.copy)) {
    const elements = doc.querySelectorAll?.(selector) ?? [];
    elements.forEach((element) => { element.innerHTML = html; });
  }
  for (const [file, alt] of Object.entries(config.alts)) {
    const image = doc.querySelector(`img[src$="${file}"]`);
    if (image) image.setAttribute('alt', alt);
  }
  for (const [selector, attributes] of Object.entries(config.attributes)) {
    const element = doc.querySelector(selector);
    if (!element) continue;
    for (const [name, text] of Object.entries(attributes)) element.setAttribute(name, text);
  }
  doc.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  if (persist) {
    try { storage?.setItem(STORAGE_KEY, language); } catch { /* Storage may be unavailable. */ }
  }
  return language;
}

function boot() {
  const language = getInitialLanguage(localStorage);
  applyLanguage(language);
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang, document, localStorage, true));
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
}
