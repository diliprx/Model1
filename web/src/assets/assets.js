
// Image imports and exports
export const images = {
  logo: "https://tourism.jharkhand.gov.in/app-assets/image/newlogo.png",
  
  // Hero slider images
  heroSlides: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://s7ap1.scene7.com/is/image/incredibleindia/lodh-waterfalls-ranchi-jharkhand-3-attr-hero?qlt=82&ts=1727010856985",
    "https://www.tourmyindia.com/blog//wp-content/uploads/2015/10/Best-Places-to-Visit-in-Jharkhand.jpg",
    "https://clinical-magenta-xkykvqjniw.edgeone.app/Screenshot%202025-09-11%20175402.png",
    "https://media.istockphoto.com/id/1415368447/photo/patratu-valley-with-lush-greenery-and-scenic-views-of-hills-located-in-patratu-ranchi.jpg?s=612x612&w=0&k=20&c=DI61h0tsvXnbWuoeZTpMrB70ELM9iu_h2oJsRxawa4U=",
    "https://www.holidify.com/images/cmsuploads/compressed/parasailing_20190110014325.jpg",
],
  
  // Category images
  categories: {
    waterfalls: "https://vulnerable-lavender-urahxhtiri.edgeone.app/Screenshot%202025-09-11%20181204.png",
    heritage: "https://www.tourmyindia.com/blog//wp-content/uploads/2015/10/Best-Places-to-Visit-in-Jharkhand.jpg",
    wildlife: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    attractions: "https://images.unsplash.com/photo-1551524164-6cf1ac1d4d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  
  // Gallery images
  gallery: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551524164-6cf1ac1d4d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1549366021-9f761d040fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ]
};

// Hero slides data
export const heroSlidesData = [
  {
    id: 1,
    image: images.heroSlides[0],
    title: 'Welcome to Jharkhand',
    subtitle: "Nature's Hidden Jewel",
    description: 'Return to the lap of nature, to be one with the calmness and peace that surrounds the many deep, lush forests of Jharkhand.',
  },
  {
    id: 2,
    image: images.heroSlides[1],
    title: 'Magnificent Waterfalls',
    subtitle: 'Blessed with Enticing Waterfalls',
    description: 'Jharkhand is blessed with enticing waterfalls. These falls also provide an opportunity to indulge in various adventure sports.',
  },
  {
    id: 3,
    image: images.heroSlides[2],
    title: 'Rich Cultural Heritage',
    subtitle: 'Ancient Temples & Traditions',
    description: 'Spiritual places like Deoghar, Rajrappa housing some of the world most ancient Shiva Lingams and Shakti Peeths.',
  },
  {
    id: 4,
    image: images.heroSlides[3],
    title: 'Diverse Wildlife',
    subtitle: 'Sanctuaries & National Parks',
    description: 'Jharkhand is home to a variety of flora and fauna, with several wildlife sanctuaries and national parks that offer a glimpse into its rich biodiversity.',
  },
  {
    id: 5,
    image: images.heroSlides[4],
    title: 'Scenic Attractions',
    subtitle: 'Picturesque Landscapes',
    description: 'From the rolling hills of Ranchi to the serene lakes of Jamshedpur, Jharkhand offers a variety of scenic attractions that captivate every traveler.',
  }
];

// Navigation menu items
export const menuItems = [
  { name: 'Home', page: 'home' },
  { name: 'Districts', page: 'districts' },
  { name: 'Gallery', page: 'gallery' },
  { name: 'Contact', page: 'contact' }
];

// Quick stats data
// export const quickStats = [
//   { number: '24', label: 'Districts', color: 'orange-600' },
//   { number: '29%', label: 'Forest Cover', color: 'green-600' },
//   { number: '32', label: 'Tribal Communities', color: 'blue-600' },
//   { number: '15+', label: 'Languages', color: 'purple-600' }
// ];

export const languageGroups = [
    {
      name: "Angami-Pochuri",
      languages: ["Angami", "Chokri", "Kheza", "Pochuri"],
      speakers: "15%",
      regions: ["Kohima", "Phek", "Dimapur"],
      description: "One of the major language groups with rich literary traditions.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Ao",
      languages: ["Ao", "Lotha", "Sangtam"],
      speakers: "12%",
      regions: ["Mokokchung", "Wokha", "Tuensang"],
      description: "Known for early adoption of written script and literature development.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Konyak",
      languages: ["Konyak", "Chang", "Phom"],
      speakers: "18%",
      regions: ["Mon", "Tuensang", "Longleng"],
      description: "Diverse group with multiple dialects and rich oral traditions.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Zeme",
      languages: ["Zeme", "Liangmai", "Rongmei"],
      speakers: "8%",
      regions: ["Peren", "Tamenglong"],
      description: "Tibeto-Burman languages with unique grammatical structures.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Kukish",
      languages: ["Thadou", "Paite", "Vaiphei"],
      speakers: "7%",
      regions: ["Chandel", "Churachandpur"],
      description: "Part of the larger Kuki-Chin language family.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Tangkhul",
      languages: ["Tangkhul", "Maram", "Poumai"],
      speakers: "10%",
      regions: ["Ukhrul", "Senapati", "Noney"],
      description: "Naga languages with complex tone systems and rich folklore.",
      image: "/api/placeholder/300/200"
    }
  ];

// export const languageStats = [
//     {
//       title: "Major Languages",
//       count: "15+",
//       description: "Officially recognized tribal languages",
//       icon: <MessageCircle className="text-purple-600" size={24} />
//     },
//     {
//       title: "Dialects",
//       count: "60+",
//       description: "Various dialects and sub-dialects",
//       icon: <Globe className="text-purple-600" size={24} />
//     },
//     {
//       title: "Scripts",
//       count: "3",
//       description: "Roman, Devanagari, and traditional scripts",
//       icon: <BookOpen className="text-purple-600" size={24} />
//     },
//     {
//       title: "Language Families",
//       count: "2",
//       description: "Sino-Tibetan and Austroasiatic families",
//       icon: <Users className="text-purple-600" size={24} />
//     }
//   ];

export const quickStats = [
  { 
    number: '24', 
    label: 'Districts', 
    color: 'orange-600',
    route: '/districts',
    id: 'districts'
  },
  { 
    number: '29%', 
    label: 'Forest Cover', 
    color: 'green-600',
    route: '/forest-cover',
    id: 'forest-cover'
  },
  { 
    number: '32', 
    label: 'Tribal Communities', 
    color: 'blue-600',
    route: '/tribal-communities',
    id: 'tribal-communities'
  },
  { 
    number: '15+', 
    label: 'Languages', 
    color: 'purple-600',
    route: '/languages',
    id: 'languages'
  }
];

// Categories data
export const categoriesData = [
  {
    title: 'Waterfalls',
    subtitle: 'Enchanting cascades',
    image: images.categories.waterfalls,
    icon: 'Waves'
  },
  {
    title: 'Heritage',
    subtitle: 'Ancient temples',
    image: images.categories.heritage,
    icon: 'Mountain'
  },
  {
    title: 'Wildlife',
    subtitle: 'Rich biodiversity',
    image: images.categories.wildlife,
    icon: 'Trees'
  },
  {
    title: 'Attractions',
    subtitle: 'Scenic destinations',
    image: images.categories.attractions,
    icon: 'Camera'
  }
];

// Contact information
export const contactInfo = {
  phone: '+91-651-2490024',
  email: 'info@tourism.jharkhand.gov.in',
  address: {
    line1: 'Directorate of Tourism',
    line2: 'Project Bhawan, 3rd Floor',
    line3: 'Dhurwa, Ranchi - 834004',
    line4: 'Jharkhand, India'
  }
};

// Social media links
export const socialMedia = [
  { name: 'Facebook', icon: 'Facebook', color: 'blue-600', hoverColor: 'blue-700' },
  { name: 'Instagram', icon: 'Instagram', color: 'pink-600', hoverColor: 'pink-700' },
  { name: 'Twitter', icon: 'Twitter', color: 'blue-400', hoverColor: 'blue-500' },
  { name: 'Youtube', icon: 'Youtube', color: 'red-600', hoverColor: 'red-700' }
];

// Footer links
export const footerLinks = {
  quickLinks: ['Home', 'Districts', 'Gallery', 'Contact'],
  popularDistricts: ['Ranchi', 'Jamshedpur', 'Deoghar', 'Hazaribagh']
};

// District data with activities
export const districtData = {
  "Ranchi": {
    id: "ranchi",
    coordinates: { lat: 23.3441, lng: 85.3096 },
    activities: [
      { name: "Hundru Falls", type: "waterfall", distance: 45, height: "98m", description: "Created by the course of the Subarnarekha River" },
      { name: "Jonha Falls", type: "waterfall", distance: 40, height: "43m", description: "Also known as Gautam Dhara, surrounded by dense forests" },
      { name: "Dassam Falls", type: "waterfall", distance: 40, height: "44m", description: "Known for its spectacular beauty especially during monsoons" },
      { name: "Rock Garden", type: "attraction", distance: 8, description: "Beautiful landscaped garden with rock formations" },
      { name: "Tagore Hill", type: "heritage", distance: 5, description: "Historical hill where Rabindranath Tagore used to stay" }
    ]
  },
  "Dhanbad": {
    id: "dhanbad",
    coordinates: { lat: 23.7957, lng: 86.4304 },
    activities: [
      { name: "Maithon Dam", type: "attraction", distance: 15, description: "Large dam with boating facilities" },
      { name: "Topchanchi Lake", type: "attraction", distance: 22, description: "Scenic lake surrounded by hills" },
      { name: "Panchet Dam", type: "attraction", distance: 30, description: "Major dam on Damodar River" }
    ]
  },
  "Jamshedpur": {
    id: "jamshedpur",
    coordinates: { lat: 22.8046, lng: 86.2029 },
    activities: [
      { name: "Dalma Wildlife Sanctuary", type: "wildlife", distance: 10, area: "195 sq km", description: "Famous elephant reserve with scenic hilltop views" },
      { name: "Jubilee Park", type: "attraction", distance: 5, description: "Large urban park with rose garden and zoo" },
      { name: "Tata Steel Zoological Park", type: "attraction", distance: 8, description: "Well-maintained zoo with diverse species" },
      { name: "Dimna Lake", type: "attraction", distance: 13, description: "Artificial lake perfect for picnics" }
    ]
  },
  "Deoghar": {
    id: "deoghar",
    coordinates: { lat: 24.4844, lng: 86.6917 },
    activities: [
      { name: "Baidyanath Dham", type: "heritage", distance: 2, significance: "Jyotirlinga", description: "One of the twelve Jyotirlingas, major pilgrimage destination" },
      { name: "Nandan Pahar", type: "attraction", distance: 8, description: "Hill station with ropeway and amusement park" },
      { name: "Tapovan", type: "heritage", distance: 10, description: "Sacred place with caves and temples" }
    ]
  },
  "Bokaro": {
    id: "bokaro",
    coordinates: { lat: 23.6693, lng: 85.9576 },
    activities: [
      { name: "Bokaro Steel City Park", type: "attraction", distance: 5, description: "Large urban park with lake" },
      { name: "Jawaharlal Nehru Biological Park", type: "attraction", distance: 8, description: "Biological park with diverse flora and fauna" },
      { name: "Garga Dam", type: "attraction", distance: 20, description: "Dam with boating facilities" }
    ]
  },
  "Giridih": {
    id: "giridih",
    coordinates: { lat: 24.1908, lng: 86.3050 },
    activities: [
      { name: "Parasnath Hills", type: "heritage", distance: 15, significance: "Jain Pilgrimage", description: "Highest peak in Jharkhand, sacred to Jains" },
      { name: "Usri Falls", type: "waterfall", distance: 18, height: "12m", description: "Beautiful waterfall near Giridih" },
      { name: "Khandoli Park", type: "attraction", distance: 8, description: "Recreational park with gardens" }
    ]
  },
  "Hazaribagh": {
    id: "hazaribagh",
    coordinates: { lat: 23.9981, lng: 85.3514 },
    activities: [
      { name: "Hazaribagh Wildlife Sanctuary", type: "wildlife", distance: 20, area: "186 sq km", description: "Rolling hills and dense forests with diverse species" },
      { name: "Canary Hill", type: "attraction", distance: 12, description: "Hill station with panoramic views" },
      { name: "Hazaribagh Lake", type: "attraction", distance: 5, description: "Scenic lake in the city center" }
    ]
  },
  "Latehar": {
    id: "latehar",
    coordinates: { lat: 23.7441, lng: 84.5042 },
    activities: [
      { name: "Betla National Park", type: "wildlife", distance: 25, area: "979 sq km", description: "First national park of Jharkhand with tigers and elephants" },
      { name: "Lodh Falls", type: "waterfall", distance: 30, height: "60m", description: "One of the highest waterfalls in Jharkhand" },
      { name: "Kechki", type: "attraction", distance: 15, description: "Scenic valley with tribal culture" }
    ]
  },
  "Palamu": {
    id: "palamu",
    coordinates: { lat: 24.0498, lng: 84.0736 },
    activities: [
      { name: "Palamu Tiger Reserve", type: "wildlife", distance: 20, area: "1026 sq km", description: "Tiger reserve with rich biodiversity" },
      { name: "Palamu Fort", type: "heritage", distance: 8, description: "Historical fort ruins" }
    ]
  },
  "Garhwa": {
    id: "garhwa",
    coordinates: { lat: 24.1581, lng: 83.8061 },
    activities: [
      { name: "Garhwa Fort", type: "heritage", distance: 5, description: "Ancient fort with historical significance" },
      { name: "Rajdhar Falls", type: "waterfall", distance: 22, height: "20m", description: "Seasonal waterfall in dense forest" }
    ]
  },
  "Chatra": {
    id: "chatra",
    coordinates: { lat: 24.2061, lng: 84.8719 },
    activities: [
      { name: "Kauleshwari Devi Temple", type: "heritage", distance: 15, description: "Ancient temple dedicated to Goddess Kauleshwari" },
      { name: "Tilaiya Dam", type: "attraction", distance: 25, description: "Dam with scenic surroundings" }
    ]
  },
  "Koderma": {
    id: "koderma",
    coordinates: { lat: 24.4681, lng: 85.5986 },
    activities: [
      { name: "Koderma Wildlife Sanctuary", type: "wildlife", distance: 8, area: "177 sq km", description: "Wildlife sanctuary known for medicinal plants" },
      { name: "Tilaiya Dam", type: "attraction", distance: 15, description: "Popular picnic spot with boating" }
    ]
  },
  "Jamtara": {
    id: "jamtara",
    coordinates: { lat: 23.9628, lng: 86.8061 },
    activities: [
      { name: "Simultala Hill Station", type: "attraction", distance: 20, description: "Hill station with pleasant climate" },
      { name: "Narayanpur", type: "heritage", distance: 12, description: "Historical site with ancient temples" }
    ]
  },
  "Dumka": {
    id: "dumka",
    coordinates: { lat: 24.2676, lng: 87.2497 },
    activities: [
      { name: "Masanjor Dam", type: "attraction", distance: 18, description: "Large reservoir with scenic beauty" },
      { name: "Basukinath Temple", type: "heritage", distance: 35, description: "Famous Shiva temple" }
    ]
  },
  "Pakur": {
    id: "pakur",
    coordinates: { lat: 24.6352, lng: 87.8492 },
    activities: [
      { name: "Pakur Hills", type: "attraction", distance: 8, description: "Scenic hills with tribal culture" },
      { name: "Litipara", type: "heritage", distance: 15, description: "Historical site with archaeological importance" }
    ]
  },
  "Godda": {
    id: "godda",
    coordinates: { lat: 24.8267, lng: 87.2167 },
    activities: [
      { name: "Pathargama Hills", type: "attraction", distance: 20, description: "Hills with beautiful landscape" },
      { name: "Godda Thermal Power Station", type: "attraction", distance: 10, description: "Industrial tourism site" }
    ]
  },
  "Sahibganj": {
    id: "sahibganj",
    coordinates: { lat: 25.2425, lng: 87.6422 },
    activities: [
      { name: "Ganges River Ghat", type: "heritage", distance: 5, description: "Sacred ghat on River Ganges" },
      { name: "Udhwa Lake Bird Sanctuary", type: "wildlife", distance: 30, area: "5.65 sq km", description: "Bird sanctuary with migratory birds" }
    ]
  },
  "Rajmahal": {
    id: "rajmahal",
    coordinates: { lat: 25.0504, lng: 87.8314 },
    activities: [
      { name: "Rajmahal Hills", type: "attraction", distance: 10, description: "Ancient hills with fossil deposits" },
      { name: "Rajmahal Palace Ruins", type: "heritage", distance: 5, description: "Historical palace ruins" }
    ]
  },
  "Khunti": {
    id: "khunti",
    coordinates: { lat: 23.0708, lng: 85.2761 },
    activities: [
      { name: "Panchghagh Falls", type: "waterfall", distance: 12, height: "15m", description: "Series of five falls creating mesmerizing cascade" },
      { name: "Birsa Biological Park", type: "wildlife", distance: 15, description: "Park dedicated to tribal leader Birsa Munda" }
    ]
  },
  "Gumla": {
    id: "gumla",
    coordinates: { lat: 23.0489, lng: 84.5400 },
    activities: [
      { name: "Ghaghra Falls", type: "waterfall", distance: 25, height: "30m", description: "Beautiful waterfall in dense forest" },
      { name: "Nawatanr", type: "heritage", distance: 20, description: "Historical site with tribal significance" }
    ]
  },
  "Simdega": {
    id: "simdega",
    coordinates: { lat: 22.6186, lng: 84.5117 },
    activities: [
      { name: "Kolebira", type: "heritage", distance: 30, description: "Birthplace of tribal leader Birsa Munda" },
      { name: "Bano Forest", type: "attraction", distance: 18, description: "Dense forest area with wildlife" }
    ]
  },
  "West Singhbhum": {
    id: "west-singhbhum",
    coordinates: { lat: 22.5675, lng: 85.8246 },
    activities: [
      { name: "Chaibasa", type: "attraction", distance: 0, description: "District headquarters with tribal culture" },
      { name: "Saranda Forest", type: "attraction", distance: 25, description: "Dense forest known as '700 hills'" }
    ]
  },
  "East Singhbhum": {
    id: "east-singhbhum",
    coordinates: { lat: 22.8046, lng: 86.2029 },
    activities: [
      { name: "Dalma Wildlife Sanctuary", type: "wildlife", distance: 10, area: "195 sq km", description: "Famous elephant reserve" },
      { name: "Jamshedpur", type: "attraction", distance: 0, description: "Planned industrial city" }
    ]
  },
  "Seraikella Kharsawan": {
    id: "seraikella-kharsawan",
    coordinates: { lat: 22.6931, lng: 85.9692 },
    activities: [
      { name: "Hirni Falls", type: "waterfall", distance: 20, height: "37m", description: "Beautiful waterfall surrounded by forests" },
      { name: "Seraikella Palace", type: "heritage", distance: 5, description: "Historical palace of erstwhile princely state" }
    ]
  },
  "Ramgarh": {
    id: "ramgarh",
    coordinates: { lat: 23.6311, lng: 85.5144 },
    activities: [
      { 
    name: "Rajrappa Temple", 
    type: "Heritage", 
    distance: 15, 
    significance: "Pilgrimage", 
    description: "Ancient temple dedicated to Goddess Chinnamasta, a revered Shakti Peetha, located at the confluence of Damodar and Bhairavi rivers.", 
    image: "https://indiano.travel/wp-content/uploads/2022/05/Rajrappa-Mandir-1.jpg" 
  },
  { 
    name: "Rajrappa Falls", 
    type: "Nature", 
    distance: 20, 
    significance: "Waterfall", 
    description: "Picturesque waterfall located near the Rajrappa Temple, a popular spot for pilgrims and tourists alike.", 
    image: "https://i.pinimg.com/736x/5e/3f/7c/5e3f7c2dfdd231116019de943443c4fe.jpg" 
  },
  { 
    name: "Patratu Valley", 
    type: "Nature", 
    distance: 40, 
    significance: "Scenery", 
    description: "Famous for its winding ghats, lush green hills, and Patratu Dam; a blend of natural beauty and industrial heritage.", 
    image: "https://media.istockphoto.com/id/1415368447/photo/patratu-valley-with-lush-greenery-and-scenic-views-of-hills-located-in-patratu-ranchi.jpg?s=612x612&w=0&k=20&c=DI61h0tsvXnbWuoeZTpMrB70ELM9iu_h2oJsRxawa4U=" 
  },
  { 
    name: "Patratu Dam", 
    type: "Recreation", 
    distance: 42, 
    significance: "Boating", 
    description: "Large dam on the Nalkari River, offering boating, water sports, and serene views of surrounding forests and hills.", 
    image: "https://i0.wp.com/indianvagabond.com/wp-content/uploads/2024/01/Patratu-Valley-Ranchi-12.jpg?w=1200&ssl=1" 
  },
  { 
    name: "Chutupalu Valley", 
    type: "Nature", 
    distance: 25, 
    significance: "Valley", 
    description: "Green valley along NH-33, offering beautiful landscapes and a refreshing break for travelers.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/A_View_of_Ranchi_plateau_and_Damodar_Valley.jpg  " 
  },
  { 
    name: "Tuti Jharna Temple", 
    type: "Religious", 
    distance: 22, 
    significance: "Shrine", 
    description: "Temple dedicated to Lord Shiva with a natural stream and waterfall, blending spirituality with nature.", 
    image: "https://www.shutterstock.com/shutterstock/photos/1910641306/display_1500/stock-photo-tuti-jharna-shiv-temple-ramgarh-jharkhand-india-january-1910641306.jpg" 
  },
  { 
    name: "Jama Masjid Chitarpur", 
    type: "Heritage", 
    distance: 30, 
    significance: "Mosque", 
    description: "Built in 1670, this mosque is an architectural gem showcasing Mughal design and cultural heritage.", 
    image: "https://annoyed-green-plyfogthnq.edgeone.app/Screenshot%202025-09-11%20114544.png"
  },
  { 
    name: "Mine Tourism - Urimari", 
    type: "Industrial", 
    distance: 28, 
    significance: "Mining", 
    description: "A unique experience where visitors can see coal mining operations and understand Jharkhand’s mining heritage.", 
    image: "https://verbal-silver-nobrgnbaiw.edgeone.app/Screenshot%202025-09-11%20172418.png" 
  }
    ]
  }
};