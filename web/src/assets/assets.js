
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
    attractions: "https://i.pinimg.com/1200x/4d/04/77/4d04772f1f8c237530a90a47d3c08d1e.jpg"
  },
  
  // Gallery images
  gallery: [
    "https://i.pinimg.com/736x/f1/af/1e/f1af1e7d7dc9a6471ee6b75f835ebeba.jpg",
    "https://i.pinimg.com/1200x/96/c2/93/96c2938cab67612420ae20e90cb1d233.jpg",
    "https://i.pinimg.com/1200x/9a/b4/97/9ab49766d1d10f7fd52b7223c3a7265c.jpg",
    "https://i.pinimg.com/1200x/3a/61/74/3a617421ab7657b9f009066b0a0de234.jpg",
    "https://i.pinimg.com/736x/01/97/b7/0197b7636f64fc79f2674f1ef8510d52.jpg",
    "https://i.pinimg.com/1200x/d0/12/f0/d012f0cf017b81268715108e98920a55.jpg",
    "https://i.pinimg.com/1200x/d7/5e/40/d75e407d0b80a59dfeef03e1e0c6b413.jpg",
    "https://i.pinimg.com/1200x/cd/25/e4/cd25e4e1eb90c2a9e7eefe49b6cd339a.jpg",
    "https://i.pinimg.com/736x/fd/65/61/fd6561de454d558341849a46ff8c1135.jpg",
   "https://thumbs.dreamstime.com/z/jonha-falls-ranchi-jharkhand-located-ranchi%C3%A2%E2%82%AC%E2%80%B9-tourism-88943694.jpg?ct=jpeg",
   "https://i.pinimg.com/1200x/01/41/fd/0141fdb901548f6eb28bd1e9872eae43.jpg",
   "https://sushantsinha77.com/wp-content/uploads/2023/09/maxresdefault.jpg?w=736",
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
// export const districtData = {
//   "Ranchi": {
//     id: "ranchi",
//     coordinates: { lat: 23.3441, lng: 85.3096 },
//     activities: [
//       { name: "Hundru Falls", type: "waterfall", distance: 45, height: "98m", description: "Created by the course of the Subarnarekha River" },
//       { name: "Jonha Falls", type: "waterfall", distance: 40, height: "43m", description: "Also known as Gautam Dhara, surrounded by dense forests" },
//       { name: "Dassam Falls", type: "waterfall", distance: 40, height: "44m", description: "Known for its spectacular beauty especially during monsoons" },
//       { name: "Rock Garden", type: "attraction", distance: 8, description: "Beautiful landscaped garden with rock formations" },
//       { name: "Tagore Hill", type: "heritage", distance: 5, description: "Historical hill where Rabindranath Tagore used to stay" }
//     ]
//   },
//   "Dhanbad": {
//     id: "dhanbad",
//     coordinates: { lat: 23.7957, lng: 86.4304 },
//     activities: [
//       { name: "Maithon Dam", type: "attraction", distance: 15, description: "Large dam with boating facilities" },
//       { name: "Topchanchi Lake", type: "attraction", distance: 22, description: "Scenic lake surrounded by hills" },
//       { name: "Panchet Dam", type: "attraction", distance: 30, description: "Major dam on Damodar River" }
//     ]
//   },
//   "Jamshedpur": {
//     id: "jamshedpur",
//     coordinates: { lat: 22.8046, lng: 86.2029 },
//     activities: [
//       { name: "Dalma Wildlife Sanctuary", type: "wildlife", distance: 10, area: "195 sq km", description: "Famous elephant reserve with scenic hilltop views" },
//       { name: "Jubilee Park", type: "attraction", distance: 5, description: "Large urban park with rose garden and zoo" },
//       { name: "Tata Steel Zoological Park", type: "attraction", distance: 8, description: "Well-maintained zoo with diverse species" },
//       { name: "Dimna Lake", type: "attraction", distance: 13, description: "Artificial lake perfect for picnics" }
//     ]
//   },
//   "Deoghar": {
//     id: "deoghar",
//     coordinates: { lat: 24.4844, lng: 86.6917 },
//     activities: [
//       { name: "Baidyanath Dham", type: "heritage", distance: 2, significance: "Jyotirlinga", description: "One of the twelve Jyotirlingas, major pilgrimage destination" },
//       { name: "Nandan Pahar", type: "attraction", distance: 8, description: "Hill station with ropeway and amusement park" },
//       { name: "Tapovan", type: "heritage", distance: 10, description: "Sacred place with caves and temples" }
//     ]
//   },
//   "Bokaro": {
//     id: "bokaro",
//     coordinates: { lat: 23.6693, lng: 85.9576 },
//     activities: [
//       { name: "Bokaro Steel City Park", type: "attraction", distance: 5, description: "Large urban park with lake" },
//       { name: "Jawaharlal Nehru Biological Park", type: "attraction", distance: 8, description: "Biological park with diverse flora and fauna" },
//       { name: "Garga Dam", type: "attraction", distance: 20, description: "Dam with boating facilities" }
//     ]
//   },
//   "Giridih": {
//     id: "giridih",
//     coordinates: { lat: 24.1908, lng: 86.3050 },
//     activities: [
//       { name: "Parasnath Hills", type: "heritage", distance: 15, significance: "Jain Pilgrimage", description: "Highest peak in Jharkhand, sacred to Jains" },
//       { name: "Usri Falls", type: "waterfall", distance: 18, height: "12m", description: "Beautiful waterfall near Giridih" },
//       { name: "Khandoli Park", type: "attraction", distance: 8, description: "Recreational park with gardens" }
//     ]
//   },
//   "Hazaribagh": {
//     id: "hazaribagh",
//     coordinates: { lat: 23.9981, lng: 85.3514 },
//     activities: [
//       { name: "Hazaribagh Wildlife Sanctuary", type: "wildlife", distance: 20, area: "186 sq km", description: "Rolling hills and dense forests with diverse species" },
//       { name: "Canary Hill", type: "attraction", distance: 12, description: "Hill station with panoramic views" },
//       { name: "Hazaribagh Lake", type: "attraction", distance: 5, description: "Scenic lake in the city center" }
//     ]
//   },
//   "Latehar": {
//     id: "latehar",
//     coordinates: { lat: 23.7441, lng: 84.5042 },
//     activities: [
//       { name: "Betla National Park", type: "wildlife", distance: 25, area: "979 sq km", description: "First national park of Jharkhand with tigers and elephants" },
//       { name: "Lodh Falls", type: "waterfall", distance: 30, height: "60m", description: "One of the highest waterfalls in Jharkhand" },
//       { name: "Kechki", type: "attraction", distance: 15, description: "Scenic valley with tribal culture" }
//     ]
//   },
//   "Palamu": {
//     id: "palamu",
//     coordinates: { lat: 24.0498, lng: 84.0736 },
//     activities: [
//       { name: "Palamu Tiger Reserve", type: "wildlife", distance: 20, area: "1026 sq km", description: "Tiger reserve with rich biodiversity" },
//       { name: "Palamu Fort", type: "heritage", distance: 8, description: "Historical fort ruins" }
//     ]
//   },
//   "Garhwa": {
//     id: "garhwa",
//     coordinates: { lat: 24.1581, lng: 83.8061 },
//     activities: [
//       { name: "Garhwa Fort", type: "heritage", distance: 5, description: "Ancient fort with historical significance" },
//       { name: "Rajdhar Falls", type: "waterfall", distance: 22, height: "20m", description: "Seasonal waterfall in dense forest" }
//     ]
//   },
//   "Chatra": {
//     id: "chatra",
//     coordinates: { lat: 24.2061, lng: 84.8719 },
//     activities: [
//       { name: "Kauleshwari Devi Temple", type: "heritage", distance: 15, description: "Ancient temple dedicated to Goddess Kauleshwari" },
//       { name: "Tilaiya Dam", type: "attraction", distance: 25, description: "Dam with scenic surroundings" }
//     ]
//   },
//   "Koderma": {
//     id: "koderma",
//     coordinates: { lat: 24.4681, lng: 85.5986 },
//     activities: [
//       { name: "Koderma Wildlife Sanctuary", type: "wildlife", distance: 8, area: "177 sq km", description: "Wildlife sanctuary known for medicinal plants" },
//       { name: "Tilaiya Dam", type: "attraction", distance: 15, description: "Popular picnic spot with boating" }
//     ]
//   },
//   "Jamtara": {
//     id: "jamtara",
//     coordinates: { lat: 23.9628, lng: 86.8061 },
//     activities: [
//       { name: "Simultala Hill Station", type: "attraction", distance: 20, description: "Hill station with pleasant climate" },
//       { name: "Narayanpur", type: "heritage", distance: 12, description: "Historical site with ancient temples" }
//     ]
//   },
//   "Dumka": {
//     id: "dumka",
//     coordinates: { lat: 24.2676, lng: 87.2497 },
//     activities: [
//       { name: "Masanjor Dam", type: "attraction", distance: 18, description: "Large reservoir with scenic beauty" },
//       { name: "Basukinath Temple", type: "heritage", distance: 35, description: "Famous Shiva temple" }
//     ]
//   },
//   "Pakur": {
//     id: "pakur",
//     coordinates: { lat: 24.6352, lng: 87.8492 },
//     activities: [
//       { name: "Pakur Hills", type: "attraction", distance: 8, description: "Scenic hills with tribal culture" },
//       { name: "Litipara", type: "heritage", distance: 15, description: "Historical site with archaeological importance" }
//     ]
//   },
//   "Godda": {
//     id: "godda",
//     coordinates: { lat: 24.8267, lng: 87.2167 },
//     activities: [
//       { name: "Pathargama Hills", type: "attraction", distance: 20, description: "Hills with beautiful landscape" },
//       { name: "Godda Thermal Power Station", type: "attraction", distance: 10, description: "Industrial tourism site" }
//     ]
//   },
//   "Sahibganj": {
//     id: "sahibganj",
//     coordinates: { lat: 25.2425, lng: 87.6422 },
//     activities: [
//       { name: "Ganges River Ghat", type: "heritage", distance: 5, description: "Sacred ghat on River Ganges" },
//       { name: "Udhwa Lake Bird Sanctuary", type: "wildlife", distance: 30, area: "5.65 sq km", description: "Bird sanctuary with migratory birds" }
//     ]
//   },
//   "Rajmahal": {
//     id: "rajmahal",
//     coordinates: { lat: 25.0504, lng: 87.8314 },
//     activities: [
//       { name: "Rajmahal Hills", type: "attraction", distance: 10, description: "Ancient hills with fossil deposits" },
//       { name: "Rajmahal Palace Ruins", type: "heritage", distance: 5, description: "Historical palace ruins" }
//     ]
//   },
//   "Khunti": {
//     id: "khunti",
//     coordinates: { lat: 23.0708, lng: 85.2761 },
//     activities: [
//       { name: "Panchghagh Falls", type: "waterfall", distance: 12, height: "15m", description: "Series of five falls creating mesmerizing cascade" },
//       { name: "Birsa Biological Park", type: "wildlife", distance: 15, description: "Park dedicated to tribal leader Birsa Munda" }
//     ]
//   },
//   "Gumla": {
//     id: "gumla",
//     coordinates: { lat: 23.0489, lng: 84.5400 },
//     activities: [
//       { name: "Ghaghra Falls", type: "waterfall", distance: 25, height: "30m", description: "Beautiful waterfall in dense forest" },
//       { name: "Nawatanr", type: "heritage", distance: 20, description: "Historical site with tribal significance" }
//     ]
//   },
//   "Simdega": {
//     id: "simdega",
//     coordinates: { lat: 22.6186, lng: 84.5117 },
//     activities: [
//       { name: "Kolebira", type: "heritage", distance: 30, description: "Birthplace of tribal leader Birsa Munda" },
//       { name: "Bano Forest", type: "attraction", distance: 18, description: "Dense forest area with wildlife" }
//     ]
//   },
//   "West Singhbhum": {
//     id: "west-singhbhum",
//     coordinates: { lat: 22.5675, lng: 85.8246 },
//     activities: [
//       { name: "Chaibasa", type: "attraction", distance: 0, description: "District headquarters with tribal culture" },
//       { name: "Saranda Forest", type: "attraction", distance: 25, description: "Dense forest known as '700 hills'" }
//     ]
//   },
//   "East Singhbhum": {
//     id: "east-singhbhum",
//     coordinates: { lat: 22.8046, lng: 86.2029 },
//     activities: [
//       { name: "Dalma Wildlife Sanctuary", type: "wildlife", distance: 10, area: "195 sq km", description: "Famous elephant reserve" },
//       { name: "Jamshedpur", type: "attraction", distance: 0, description: "Planned industrial city" }
//     ]
//   },
//   "Seraikella Kharsawan": {
//     id: "seraikella-kharsawan",
//     coordinates: { lat: 22.6931, lng: 85.9692 },
//     activities: [
//       { name: "Hirni Falls", type: "waterfall", distance: 20, height: "37m", description: "Beautiful waterfall surrounded by forests" },
//       { name: "Seraikella Palace", type: "heritage", distance: 5, description: "Historical palace of erstwhile princely state" }
//     ]
//   },
//   "Ramgarh": {
//     id: "ramgarh",
//     coordinates: { lat: 23.6311, lng: 85.5144 },
//     activities: [
//       { 
//     name: "Rajrappa Temple", 
//     type: "Heritage", 
//     distance: 15, 
//     significance: "Pilgrimage", 
//     description: "Ancient temple dedicated to Goddess Chinnamasta, a revered Shakti Peetha, located at the confluence of Damodar and Bhairavi rivers.", 
//     image: "https://indiano.travel/wp-content/uploads/2022/05/Rajrappa-Mandir-1.jpg" 
//   },
//   { 
//     name: "Rajrappa Falls", 
//     type: "Nature", 
//     distance: 20, 
//     significance: "Waterfall", 
//     description: "Picturesque waterfall located near the Rajrappa Temple, a popular spot for pilgrims and tourists alike.", 
//     image: "https://i.pinimg.com/736x/5e/3f/7c/5e3f7c2dfdd231116019de943443c4fe.jpg" 
//   },
//   { 
//     name: "Patratu Valley", 
//     type: "Nature", 
//     distance: 40, 
//     significance: "Scenery", 
//     description: "Famous for its winding ghats, lush green hills, and Patratu Dam; a blend of natural beauty and industrial heritage.", 
//     image: "https://media.istockphoto.com/id/1415368447/photo/patratu-valley-with-lush-greenery-and-scenic-views-of-hills-located-in-patratu-ranchi.jpg?s=612x612&w=0&k=20&c=DI61h0tsvXnbWuoeZTpMrB70ELM9iu_h2oJsRxawa4U=" 
//   },
//   { 
//     name: "Patratu Dam", 
//     type: "Recreation", 
//     distance: 42, 
//     significance: "Boating", 
//     description: "Large dam on the Nalkari River, offering boating, water sports, and serene views of surrounding forests and hills.", 
//     image: "https://i0.wp.com/indianvagabond.com/wp-content/uploads/2024/01/Patratu-Valley-Ranchi-12.jpg?w=1200&ssl=1" 
//   },
//   { 
//     name: "Chutupalu Valley", 
//     type: "Nature", 
//     distance: 25, 
//     significance: "Valley", 
//     description: "Green valley along NH-33, offering beautiful landscapes and a refreshing break for travelers.", 
//     image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/A_View_of_Ranchi_plateau_and_Damodar_Valley.jpg  " 
//   },
//   { 
//     name: "Tuti Jharna Temple", 
//     type: "Religious", 
//     distance: 22, 
//     significance: "Shrine", 
//     description: "Temple dedicated to Lord Shiva with a natural stream and waterfall, blending spirituality with nature.", 
//     image: "https://www.shutterstock.com/shutterstock/photos/1910641306/display_1500/stock-photo-tuti-jharna-shiv-temple-ramgarh-jharkhand-india-january-1910641306.jpg" 
//   },
//   { 
//     name: "Jama Masjid Chitarpur", 
//     type: "Heritage", 
//     distance: 30, 
//     significance: "Mosque", 
//     description: "Built in 1670, this mosque is an architectural gem showcasing Mughal design and cultural heritage.", 
//     image: "https://annoyed-green-plyfogthnq.edgeone.app/Screenshot%202025-09-11%20114544.png"
//   },
//   { 
//     name: "Mine Tourism - Urimari", 
//     type: "Industrial", 
//     distance: 28, 
//     significance: "Mining", 
//     description: "A unique experience where visitors can see coal mining operations and understand Jharkhand’s mining heritage.", 
//     image: "https://verbal-silver-nobrgnbaiw.edgeone.app/Screenshot%202025-09-11%20172418.png" 
//   }
//     ]
//   }
// };

export const districtData = {
  "Ranchi": {
    activities: [
      {
        name: "Hundru Falls",
        type: "waterfall",
        distance: 45,
        height: "98 meters",
        description: "One of the most spectacular waterfalls in Jharkhand, Hundru Falls is formed by the Subarnarekha River. The waterfall cascades down from a height of 98 meters, creating a mesmerizing view especially during monsoon season. The rocky terrain and lush green surroundings make it a perfect spot for nature lovers and photographers.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Hundru Falls, located about 45 km from Ranchi, is one of the highest waterfalls in Jharkhand state. The waterfall is formed by the Subarnarekha River as it falls from a height of 98 meters (322 feet). During the monsoon season (July to September), the waterfall is at its magnificent best with tremendous water flow. The area around the falls is surrounded by dense forests and rocky terrain, making it an ideal destination for trekking and adventure activities. The local tribal communities consider this place sacred, and there are several small shrines around the area. Best time to visit is during and immediately after monsoons when the water flow is at its peak.",
        bestTime: "July to October",
        activities: ["Photography", "Trekking", "Nature Walk", "Rock Climbing"],
        facilities: ["Parking", "Food Stalls", "Guided Tours", "Rest Areas"]
      },
      {
        name: "Rock Garden",
        type: "attraction",
        distance: 8,
        area: "5 acres",
        description: "A beautiful artificial garden created with rocks and sculptures, Rock Garden in Ranchi is a popular tourist destination. Built along the Kanke Dam, it features artistic rock formations, fountains, and landscaped gardens that provide a serene environment for families and visitors.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Rock Garden Ranchi is a beautiful man-made garden located on the Kanke Road, about 8 km from the main city. Spread across 5 acres, this garden is built along the Kanke Dam and features artistic arrangements of rocks, sculptures, and water features. The garden showcases creative use of natural rocks to create various formations, caves, and artistic structures. There are several fountains, waterfalls, and a lake that add to the beauty of the place. The garden also has a small zoo, boating facilities, and children's play areas. It's designed as a perfect picnic spot for families with well-maintained lawns, walkways, and seating areas. The garden offers a panoramic view of the Kanke Dam and the surrounding hills.",
        bestTime: "October to March",
        activities: ["Boating", "Photography", "Picnicking", "Children's Activities"],
        facilities: ["Boating", "Food Court", "Parking", "Restrooms", "Children's Play Area"]
      },
      {
        name: "Jagannath Temple",
        type: "heritage",
        distance: 12,
        significance: "Religious",
        description: "An ancient temple dedicated to Lord Jagannath, this temple in Ranchi is known for its traditional architecture and spiritual significance. The temple attracts thousands of devotees, especially during the annual Rath Yatra festival, making it an important religious center in Jharkhand.",
        image: "https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "The Jagannath Temple in Ranchi, located about 12 km from the city center, is a replica of the famous Jagannath Temple of Puri. Built in the traditional Kalinga architectural style, this temple is dedicated to Lord Jagannath, Lord Balabhadra, and Goddess Subhadra. The temple was constructed in the 17th century and has been a center of spiritual activities for centuries. The annual Rath Yatra (chariot festival) celebrated here attracts thousands of devotees from across the state. The temple complex features beautiful stone carvings, traditional sculptures, and a large courtyard. The temple follows the same rituals and traditions as the Puri temple, including the daily 'Mahaprasad' offering. The peaceful environment and spiritual atmosphere make it a perfect place for meditation and prayer.",
        bestTime: "Year Round",
        activities: ["Prayer", "Meditation", "Cultural Programs", "Festival Participation"],
        facilities: ["Prasadam Counter", "Parking", "Accommodation", "Guided Tours"]
      },
      {
        name: "Birsa Zoological Park",
        type: "wildlife",
        distance: 15,
        area: "104 hectares",
        description: "Spread over 104 hectares, Birsa Zoological Park is home to various species of animals, birds, and reptiles. Named after the tribal freedom fighter Birsa Munda, this zoo focuses on conservation and education while providing a natural habitat for wildlife species native to Jharkhand.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Birsa Zoological Park, located 15 km from Ranchi city, is spread across 104 hectares of natural forest area. Named after the great tribal freedom fighter Birsa Munda, this zoo was established in 1994 with the primary objective of wildlife conservation, education, and research. The zoo houses over 40 species of animals including tigers, leopards, elephants, bears, deer, and various species of birds and reptiles. The park is designed to provide natural habitats for animals with large enclosures, water bodies, and dense vegetation. It also features a safari area where visitors can see animals in a more natural setting. The zoo has a dedicated rescue and rehabilitation center for injured wildlife. There's also a natural history museum, aquarium, and butterfly garden within the complex. The zoo plays an important role in breeding programs for endangered species native to Jharkhand.",
        bestTime: "October to March",
        activities: ["Wildlife Safari", "Bird Watching", "Nature Photography", "Educational Tours"],
        facilities: ["Safari Rides", "Museum", "Cafeteria", "Gift Shop", "Parking"]
      }
    ]
  },
  "Dhanbad": {
    activities: [
      {
        name: "Maithon Dam",
        type: "attraction",
        distance: 52,
        height: "165 feet",
        description: "One of the first major multipurpose river valley projects in India, Maithon Dam is built across the Barakar River. The dam and its reservoir create a scenic landscape perfect for boating, fishing, and enjoying panoramic views of the surrounding hills.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Maithon Dam, located 52 km from Dhanbad, is one of India's pioneering multipurpose river valley projects. Built across the Barakar River, this impressive dam stands 165 feet high and was constructed as part of the Damodar Valley Corporation (DVC) project in 1957. The dam serves multiple purposes including flood control, irrigation, and hydroelectric power generation. The reservoir created by the dam spans a vast area and is surrounded by picturesque hills and forests. The calm waters of the reservoir reflect the surrounding landscape, creating stunning photographic opportunities. The dam area has been developed as a tourist destination with facilities for boating, water sports, and fishing. There are well-maintained gardens, viewpoints, and rest areas around the dam. The area is also popular for picnics and weekend getaways. The engineering marvel of the dam structure itself attracts visitors interested in understanding large-scale infrastructure projects.",
        bestTime: "October to March",
        activities: ["Boating", "Fishing", "Photography", "Sightseeing"],
        facilities: ["Boat Rides", "Guest House", "Restaurant", "Parking", "Viewpoints"]
      },
      {
        name: "Kalyaneshwari Temple",
        type: "heritage",
        distance: 8,
        significance: "Ancient Temple",
        description: "An ancient temple dedicated to Goddess Kalyaneshwari, this sacred site is known for its architectural beauty and religious significance. The temple attracts devotees from across the region who come to seek blessings and experience the peaceful spiritual atmosphere.",
        image: "https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Kalyaneshwari Temple, situated just 8 km from Dhanbad city, is an ancient temple dedicated to Goddess Kalyaneshwari, who is considered the presiding deity of the region. The temple has a rich history dating back several centuries and showcases traditional Bengali temple architecture with intricate terracotta work and stone carvings. The main sanctum houses the idol of the goddess, which is believed to be swayambhu (self-manifested). The temple complex includes several smaller shrines dedicated to other deities, creating a comprehensive spiritual center. The annual Kalyaneshwari Puja during Navratri attracts thousands of devotees from Bihar, West Bengal, and Jharkhand. The temple is surrounded by beautiful gardens and has facilities for devotees including prasadam distribution, accommodation, and meditation areas. The peaceful environment and spiritual vibrations make it a perfect place for those seeking divine blessings and inner peace.",
        bestTime: "Year Round",
        activities: ["Prayer", "Meditation", "Cultural Events", "Festival Celebrations"],
        facilities: ["Prasadam Counter", "Accommodation", "Parking", "Rest Areas"]
      },
      {
        name: "Parasnath Hills",
        type: "heritage",
        distance: 65,
        height: "1,365 meters",
        significance: "Jain Pilgrimage",
        description: "The highest peak in Jharkhand, Parasnath Hills is a sacred Jain pilgrimage site. The hills are home to 20 out of 24 Jain Tirthankaras who attained salvation here. The trek to the summit offers breathtaking views and a spiritual journey through ancient temples.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Parasnath Hills, located 65 km from Dhanbad, is the highest peak in Jharkhand state at 1,365 meters above sea level. This sacred hill is of immense significance to the Jain community as it is believed that 20 out of 24 Jain Tirthankaras attained moksha (salvation) here. The hill is also known as Sammed Shikhar and is considered the most important Jain pilgrimage site. The trek to the summit covers about 9 kilometers and passes through several temples and tonks (platforms) dedicated to different Tirthankaras. Each tonk marks the spot where a particular Tirthankara attained nirvana. The journey is both physically challenging and spiritually rewarding, offering panoramic views of the surrounding landscape. The hills are covered with dense forests and diverse flora and fauna. The main temples at the summit are architecturally beautiful with marble structures and intricate carvings. The area maintains strict environmental and religious protocols to preserve its sanctity.",
        bestTime: "October to March",
        activities: ["Trekking", "Pilgrimage", "Meditation", "Nature Photography"],
        facilities: ["Dharamshala", "Food Stalls", "Guided Tours", "Rest Points"]
      }
    ]
  },
  "Jamshedpur": {
    activities: [
      {
        name: "Dalma Wildlife Sanctuary",
        type: "wildlife",
        distance: 10,
        area: "193 sq km",
        description: "Home to elephants, tigers, and various species of flora and fauna, Dalma Wildlife Sanctuary is a biodiversity hotspot. The sanctuary offers excellent opportunities for wildlife photography, nature walks, and experiencing the natural beauty of Jharkhand's wilderness.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Dalma Wildlife Sanctuary, located just 10 km from Jamshedpur, is spread across 193 square kilometers of diverse terrain including hills, valleys, and grasslands. Established in 1975, this sanctuary is famous for its population of wild elephants, which migrate here seasonally. The sanctuary is home to over 40 species of mammals including tigers, leopards, wild boars, sambhar deer, and langurs. The avian population includes over 150 species of birds making it a paradise for bird watchers. The Dalma Hills, which form the backbone of the sanctuary, rise to a height of 3,000 feet and offer excellent trekking opportunities. The sanctuary has several natural springs, waterfalls, and streams that provide water to the wildlife throughout the year. There are well-marked nature trails and watchtowers for wildlife viewing. The forest department conducts regular safari tours and nature education programs. The sanctuary plays a crucial role in the elephant corridor between Jharkhand and Odisha.",
        bestTime: "November to March",
        activities: ["Wildlife Safari", "Trekking", "Bird Watching", "Nature Photography"],
        facilities: ["Forest Rest House", "Safari Jeeps", "Nature Trails", "Watchtowers"]
      },
      {
        name: "Jubilee Park",
        type: "attraction",
        distance: 3,
        area: "225 acres",
        description: "One of the largest parks in Asia, Jubilee Park is spread over 225 acres and features beautiful gardens, lakes, and recreational facilities. The park is perfect for morning walks, boating, and enjoying quality time with family in a well-maintained green environment.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Jubilee Park, located in the heart of Jamshedpur just 3 km from the city center, is one of the largest parks in Asia spanning 225 acres. Established by Tata Steel in 1958, this park was designed by the famous landscape architect A.D. Dalal. The park features beautifully landscaped gardens, several lakes, fountains, and a variety of recreational facilities. The main attractions include the Tata Steel Zoological Park within the premises, boating facilities on Jayanti Sarovar lake, and the spectacular musical fountain show in the evenings. The park has well-maintained jogging tracks, children's play areas, and numerous seating arrangements under shaded trees. The rose garden, with over 50 varieties of roses, is a major attraction especially during the blooming season. The park also houses the Tribal Culture Center which showcases the rich heritage of Jharkhand's tribal communities. The park serves as the green lung of the industrial city and provides a perfect escape from urban life.",
        bestTime: "October to March",
        activities: ["Boating", "Jogging", "Photography", "Family Picnics"],
        facilities: ["Zoo", "Boating", "Musical Fountain", "Food Courts", "Parking"]
      },
      {
        name: "Bhuvaneshwari Temple",
        type: "heritage",
        distance: 22,
        significance: "Ancient Shakti Peeth",
        description: "An ancient temple dedicated to Goddess Bhuvaneshwari, this sacred site is believed to be one of the 51 Shakti Peeths. The temple attracts devotees seeking blessings and offers a peaceful environment for meditation and spiritual practices.",
        image: "https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Bhuvaneshwari Temple, located 22 km from Jamshedpur, is an ancient temple dedicated to Goddess Bhuvaneshwari, considered one of the manifestations of Goddess Durga. According to Hindu mythology, this temple is believed to be one of the 51 Shakti Peeths where parts of Goddess Sati's body fell. The temple has a rich history spanning several centuries and showcases traditional Odia architectural style with intricate stone carvings and sculptures. The main sanctum houses the powerful idol of the goddess, and the temple complex includes several smaller shrines dedicated to other deities. The temple is particularly crowded during Navratri, Durga Puja, and other major Hindu festivals. The surrounding area is peaceful with natural beauty, making it ideal for meditation and spiritual retreats. The temple management organizes regular cultural programs, religious discourses, and community service activities. The temple also has facilities for devotees including accommodation, prasadam distribution, and guided religious tours.",
        bestTime: "Year Round",
        activities: ["Prayer", "Meditation", "Festival Participation", "Spiritual Learning"],
        facilities: ["Accommodation", "Prasadam Counter", "Parking", "Rest Areas"]
      }
    ]
  },
  "Bokaro": {
    activities: [
      {
        name: "Bokaro Steel Plant",
        type: "attraction",
        distance: 5,
        area: "14 sq km",
        description: "One of India's largest integrated steel plants, Bokaro Steel Plant offers guided industrial tours showcasing modern steel manufacturing processes. The plant is an engineering marvel and provides insights into India's industrial development and technological advancement.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Bokaro Steel Plant, located just 5 km from Bokaro city center, is one of India's largest and most modern integrated steel plants, spread across 14 square kilometers. Established in 1964 as a joint venture between India and the erstwhile Soviet Union, it was the first steel plant in the public sector to be set up after independence. The plant has a production capacity of 4.7 million tonnes of liquid steel per year and employs advanced technology for steel production. The guided industrial tours offer visitors a unique opportunity to witness the complete steel-making process from raw materials to finished products. The plant complex includes blast furnaces, steel melting shops, rolling mills, and various auxiliary units. The plant has been a pioneer in environmental conservation and has extensive green belt areas within its premises. The industrial tour includes visits to the coke oven batteries, blast furnaces, and the hot strip mill, providing educational insights into modern metallurgical processes.",
        bestTime: "October to March",
        activities: ["Industrial Tour", "Educational Visits", "Photography", "Learning Experience"],
        facilities: ["Guided Tours", "Visitor Center", "Canteen", "Safety Equipment", "Transportation"]
      },
      {
        name: "Garga Dam",
        type: "attraction",
        distance: 18,
        height: "40 meters",
        description: "Built across the Garga River, this dam creates a beautiful reservoir surrounded by hills and forests. The dam area is perfect for picnics, boating, and enjoying the scenic beauty. The peaceful environment makes it a popular weekend destination for families.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Garga Dam, located 18 km from Bokaro, is built across the Garga River and stands 40 meters high. This multipurpose dam serves irrigation, flood control, and water supply needs for the region. The reservoir created by the dam spans a large area and is surrounded by rolling hills and dense forests, creating a picturesque landscape. The dam area has been developed as a tourist destination with facilities for boating, fishing, and water sports. The calm waters of the reservoir reflect the surrounding greenery, making it a photographer's paradise. There are well-maintained gardens, walking paths, and picnic areas around the dam. The area is rich in biodiversity with various species of birds and small mammals inhabiting the surrounding forests. During monsoon season, the dam overflows creating spectacular waterfalls from the spillway. The sunset and sunrise views from the dam are particularly beautiful, attracting nature lovers and photography enthusiasts.",
        bestTime: "October to March",
        activities: ["Boating", "Fishing", "Photography", "Picnicking"],
        facilities: ["Boat Rides", "Rest House", "Food Stalls", "Parking", "Viewing Areas"]
      },
      {
        name: "Parashnath Wildlife Sanctuary",
        type: "wildlife",
        distance: 45,
        area: "18 sq km",
        description: "A lesser-known wildlife sanctuary that protects the biodiversity around the sacred Parashnath Hills. The sanctuary is home to various species of animals and birds, and offers excellent opportunities for wildlife enthusiasts and nature photographers.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Parashnath Wildlife Sanctuary, located 45 km from Bokaro, covers 18 square kilometers around the base of the sacred Parashnath Hills. This sanctuary was established to protect the rich biodiversity of the region and serves as a buffer zone for the main pilgrimage area. The sanctuary is home to various species including leopards, wild boars, sambhar deer, spotted deer, langurs, and jackals. The avian population is diverse with over 100 species of birds including peafowls, parrots, hornbills, and various migratory species. The sanctuary's terrain varies from dense forests to grasslands and rocky outcrops, providing diverse habitats for wildlife. There are several natural springs and seasonal streams that provide water sources for animals. The forest department has created nature trails and observation points for wildlife viewing. The sanctuary also plays an important role in protecting the medicinal plants and herbs that grow in this region. Due to its proximity to the Jain pilgrimage site, the sanctuary maintains strict conservation protocols.",
        bestTime: "November to February",
        activities: ["Wildlife Viewing", "Bird Watching", "Nature Trails", "Photography"],
        facilities: ["Forest Rest House", "Nature Trails", "Observation Points", "Guide Services"]
      }
    ]
  },
  "Hazaribagh": {
    activities: [
      {
        name: "Hazaribagh National Park",
        type: "wildlife",
        distance: 20,
        area: "186 sq km",
        description: "One of the earliest wildlife sanctuaries in India, Hazaribagh National Park is known for its diverse flora and fauna. The park offers excellent opportunities for wildlife spotting, bird watching, and experiencing the natural wilderness of Jharkhand.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Hazaribagh National Park, established in 1954, is located 20 km from Hazaribagh city and covers 186 square kilometers of diverse terrain including hills, valleys, grasslands, and dense forests. As one of India's earliest national parks, it has played a crucial role in wildlife conservation in the region. The park is home to tigers, leopards, wild boars, sambhar deer, spotted deer, nilgai, and sloth bears. The avian diversity includes over 180 species of birds making it a paradise for ornithologists. The park's landscape is characterized by the Chota Nagpur plateau with its rolling hills, rocky outcrops, and seasonal streams. There are several watchtowers and machans (elevated platforms) strategically placed for wildlife viewing. The park has well-marked safari routes and nature trails. The forest department organizes regular jeep safaris and guided nature walks. The park also houses a deer park and a lake that attracts various water birds. The best time for wildlife spotting is early morning and late afternoon when animals are most active.",
        bestTime: "October to March",
        activities: ["Wildlife Safari", "Bird Watching", "Nature Photography", "Trekking"],
        facilities: ["Safari Jeeps", "Forest Rest House", "Watchtowers", "Nature Trails"]
      },
      {
        name: "Canary Hill",
        type: "attraction",
        distance: 8,
        height: "2,019 feet",
        description: "The highest point in Hazaribagh, Canary Hill offers panoramic views of the surrounding landscape. The hill is perfect for trekking, sunrise and sunset viewing, and enjoying the cool mountain air. The area is also known for its rich birdlife and natural beauty.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Canary Hill, located 8 km from Hazaribagh, is the highest point in the district at 2,019 feet above sea level. This scenic hill station offers breathtaking panoramic views of the surrounding valleys, forests, and distant mountains. The hill gets its name from the numerous canary birds that were once found in large numbers in this area. The trek to the summit is moderately challenging and takes visitors through diverse landscapes including dense forests, grasslands, and rocky terrain. The hill is particularly famous for its spectacular sunrise and sunset views, attracting photographers and nature enthusiasts. During clear weather, visitors can see for miles in all directions, including views of other hills and the urban areas below. The area around Canary Hill is rich in biodiversity with various species of birds, butterflies, and small mammals. There are several natural springs and seasonal waterfalls in the vicinity. The hill has been developed with basic infrastructure including viewing points, rest areas, and marked trails.",
        bestTime: "October to March",
        activities: ["Trekking", "Photography", "Bird Watching", "Sunrise/Sunset Viewing"],
        facilities: ["Viewing Points", "Trekking Trails", "Rest Areas", "Parking"]
      },
      {
        name: "Rajrappa Temple",
        type: "heritage",
        distance: 35,
        significance: "Tantric Temple",
        description: "Located at the confluence of two rivers, Rajrappa Temple is dedicated to Goddess Chhinnamasta. This unique tantric temple is known for its powerful spiritual energy and attracts devotees from across India seeking blessings and spiritual experiences.",
        image: "https://images.unsplash.com/photo-1582632205149-b6e5eebbf1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Rajrappa Temple, located 35 km from Hazaribagh, is situated at the scenic confluence of the Bhera and Damodar rivers. This ancient temple is dedicated to Goddess Chhinnamasta, one of the ten Mahavidyas in Hinduism. The temple is unique as it represents the tantric tradition and is considered one of the most powerful Shakti Peethas in eastern India. The main deity, Goddess Chhinnamasta, is depicted in her fierce form, and the temple attracts tantric practitioners and devotees seeking spiritual powers. The temple's location at the river confluence is considered highly auspicious in Hindu tradition. The annual Chhinnamasta Puja during the Bhadra month attracts thousands of devotees from across the country. The temple complex includes several smaller shrines and has been recently renovated with modern facilities while maintaining its traditional architecture. The surrounding area is naturally beautiful with the two rivers creating a serene and powerful spiritual atmosphere. The temple is also associated with various legends and miraculous events reported by devotees over the centuries.",
        bestTime: "Year Round",
        activities: ["Prayer", "Meditation", "River Viewing", "Spiritual Practices"],
        facilities: ["Prasadam Counter", "Accommodation", "Parking", "Rest Areas", "River Ghats"]
      }
    ]
  }
};