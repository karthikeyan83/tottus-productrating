import _ from 'lodash';

const inventory = [
  {
    id: 12,
    name: 'Y-Solowarm',
    description: 'Mandatory stable internet solution',
    price: '8.67',
    category: 'Automotive',
    rating:5,
  },
  {
    id: 27,
    name: 'Bitchip',
    description: 'Team-oriented optimal hub',
    price: '4.06',
    category: 'Automotive',
    rating:5,
  },
  {
    id: 91,
    name: 'Flexidy',
    description: 'Profound uniform database',
    price: '2.27',
    category: 'Automotive',
    rating:5,
  },
  {
    id: 6,
    name: 'Redhold',
    description: 'Optional holistic leverage',
    price: '6.30',
    category: 'Baby',
    rating:5,
  },

  {
    id: 15,
    name: 'Daltfresh',
    description: 'Operative asymmetric customer loyalty',
    price: '1.73',
    category: 'Baby',
    rating:5,
  },
  {
    id: 26,
    name: 'Sonsing',
    description: 'Centralized 4th generation superstructure',
    price: '3.19',
    category: 'Beauty',
    rating:5,
  },
  {
    id: 154,
    name: 'Aerified',
    description: 'Right-sized impactful circuit',
    price: '1.49',
    category: 'Beauty',
    rating:5,
  },
  {
    id: 20,
    name: 'Bamity',
    description: 'Managed full-range collaboration',
    price: '0.76',
    category: 'Books',
    rating:5,
  },
  {
    id: 23,
    name: 'Biodex',
    description: 'Expanded system-worthy groupware',
    price: '7.20',
    category: 'Books',
    rating:5,
  },
  {
    id: 13,
    name: 'Viva',
    description: 'Polarised stable website',
    price: '9.46',
    category: 'Clothing',
    rating:5,
  },
  {
    id: 18,
    name: 'Cookley',
    description: 'Expanded systemic analyzer',
    price: '0.81',
    category: 'Clothing',
    rating:5,
  },
  {
    id: 5,
    name: 'Sonair',
    description: 'Horizontal even-keeled internet solution',
    price: '8.62',
    category: 'Computers',
    rating:5,
  },
  {
    id: 31,
    name: 'Span',
    description: 'Proactive attitude-oriented approach',
    price: '6.94',
    category: 'Computers',
    rating:5,
  },
  {
    id: 114,
    name: 'Gembucket',
    description: 'Open-architected interactive Graphic Interface',
    price: '2.87',
    category: 'Computers',
    rating:5,
  },
  {
    id: 130,
    name: 'Quo Lux',
    description: 'Total tertiary approach',
    price: '8.41',
    category: 'Computers',
    rating:5,
  },
  {
    id: 9,
    name: 'Rank',
    description: 'Expanded exuding encoding',
    price: '8.47',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 25,
    name: 'Fintone',
    description: 'Team-oriented bifurcated array',
    price: '5.85',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 33,
    name: 'Solarbreeze',
    description: 'Customizable scalable methodology',
    price: '8.27',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 50,
    name: 'Bytecard',
    description: 'Multi-layered reciprocal initiative',
    price: '7.13',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 167,
    name: 'Otcom',
    description: 'Sharable high-level matrix',
    price: '0.01',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 178,
    name: 'Regrant',
    description: 'Face to face grid-enabled forecast',
    price: '6.89',
    category: 'Electronics',
    rating:5,
  },
  {
    id: 65,
    name: 'Veribet',
    description: 'Grass-roots demand-driven function',
    price: '7.60',
    category: 'Games',
    rating:5,
  },
  {
    id: 80,
    name: 'Voltsillam',
    description: 'Progressive hybrid productivity',
    price: '7.55',
    category: 'Games',
    rating:5,
  },
  {
    id: 242,
    name: 'It',
    description: 'Synergistic logistical info-mediaries',
    price: '7.35',
    category: 'Games',
    rating:5,
  },
  {
    id: 342,
    name: 'Opela',
    description: 'Networked composite emulation',
    price: '5.72',
    category: 'Games',
    rating:5,
  },
  {
    id: 29,
    name: 'Ronstring',
    description: 'Customizable optimizing hierarchy',
    price: '8.89',
    category: 'Garden',
    rating:5,
  },
  {
    id: 46,
    name: 'Job',
    description: 'Front-line bandwidth-monitored system engine',
    price: '7.20',
    category: 'Garden',
    rating:5,
  },
  {
    id: 227,
    name: 'Konklab',
    description: 'Upgradable even-keeled structure',
    price: '2.14',
    category: 'Garden',
    rating:4,
  },
  {
    id: 11,
    name: 'Zoolab',
    description: 'Reactive leading edge access',
    price: '4.29',
    category: 'Grocery',
    rating:4,
  },
  {
    id: 86,
    name: 'Pannier',
    description: 'Focused secondary approach',
    price: '0.09',
    category: 'Grocery',
    rating:4,
  },
  {
    id: 103,
    name: 'Tin',
    description: 'Programmable demand-driven installation',
    price: '1.14',
    category: 'Grocery',
    rating:4,
  },
  {
    id: 111,
    name: 'Vagram',
    description: 'Self-enabling multi-state challenge',
    price: '5.38',
    category: 'Grocery',
    rating:4,
  },
  {
    id: 2,
    name: 'Trippledex',
    description: 'Ergonomic stable pricing structure',
    price: '8.45',
    category: 'Health',
    rating:4,
  },
  {
    id: 34,
    name: 'Zontrax',
    description: 'Compatible impactful firmware',
    price: '9.87',
    category: 'Health',
    rating:4,
  },
  {
    id: 52,
    name: 'Wrapsafe',
    description: 'Upgradable mission-critical encryption',
    price: '8.31',
    category: 'Health',
    rating:4,
  },
  {
    id: 70,
    name: 'Home Ing',
    description: 'Synergized heuristic toolset',
    price: '3.02',
    category: 'Health',
    rating:3,
  },
  {
    id: 89,
    name: 'Namfix',
    description: 'Up-sized encompassing algorithm',
    price: '4.90',
    category: 'Health',
    rating:3,
  },
  {
    id: 117,
    name: 'Stringtough',
    description: 'Assimilated disintermediate pricing structure',
    price: '4.54',
    category: 'Health',
    rating:3,
  },
  {
    id: 42,
    name: 'Alphazap',
    description: 'Proactive impactful moratorium',
    price: '3.08',
    category: 'Home',
    rating:3,
  },
  {
    id: 98,
    name: 'Sub-Ex',
    description: 'Progressive disintermediate database',
    price: '6.97',
    category: 'Home',
    rating:3,
  },
  {
    id: 197,
    name: 'Domainer',
    description: 'Decentralized needs-based architecture',
    price: '1.78',
    category: 'Home',
    rating:3,
  },
  {
    id: 7,
    name: 'Zathin',
    description: 'Ameliorated bi-directional strategy',
    price: '6.13',
    category: 'Industrial',
    rating:2,
  },
  {
    id: 22,
    name: 'Mat Lam Tam',
    description: 'Inverse motivating groupware',
    price: '6.92',
    category: 'Industrial',
    rating:2,
  },
  {
    id: 68,
    name: 'Zamit',
    description: 'Organized empowering knowledge user',
    price: '5.78',
    category: 'Industrial',
    rating:2,
  },
  {
    id: 14,
    name: 'Konklux',
    description: 'Object-based even-keeled frame',
    price: '8.50',
    category: 'Jewelery',
    rating:2,
  },
  {
    id: 19,
    name: 'Lotstring',
    description: 'Upgradable human-resource conglomeration',
    price: '1.69',
    category: 'Jewelery',
    rating:2,
  },
  {
    id: 36,
    name: 'Temp',
    description: 'Decentralized user-facing access',
    price: '7.54',
    category: 'Jewelery',
    rating:2,
  },
  {
    id: 97,
    name: 'Cardify',
    description: 'Front-line attitude-oriented groupware',
    price: '5.28',
    category: 'Jewelery',
    rating:1,
  },
  {
    id: 24,
    name: 'Tampflex',
    description: 'Realigned mission-critical adapter',
    price: '9.78',
    category: 'Kids',
    rating:1,
  },
  {
    id: 72,
    name: 'Zaam-Dox',
    description: 'Digitized context-sensitive concept',
    price: '0.75',
    category: 'Kids',
    rating:1,
  },
  {
    id: 208,
    name: 'Fix San',
    description: 'Reduced intangible superstructure',
    price: '4.22',
    category: 'Kids',
    rating:1,
  },
  {
    id: 88,
    name: 'Ventosanzap',
    description: 'Open-source foreground portal',
    price: '8.66',
    category: 'Movies',
    rating:1,
  },
  {
    id: 159,
    name: 'Bigtax',
    description: 'Horizontal uniform middleware',
    price: '1.28',
    category: 'Movies',
    rating:1,
  },
  {
    id: 8,
    name: 'Tempsoft',
    description: 'Fundamental stable structure',
    price: '0.61',
    category: 'Music',
    rating:1,
  },
  {
    id: 44,
    name: 'Holdlamis',
    description: 'Exclusive explicit local area network',
    price: '8.77',
    category: 'Music',
    rating:1,
  },
  {
    id: 45,
    name: 'Subin',
    description: 'Sharable content-based local area network',
    price: '0.38',
    category: 'Music',
    rating:1,
  },
  {
    id: 54,
    name: 'Tres-Zap',
    description: 'Programmable eco-centric budgetary management',
    price: '3.91',
    category: 'Music',
    rating:1,
  },
  {
    id: 62,
    name: 'Hatity',
    description: 'Horizontal client-server migration',
    price: '4.85',
    category: 'Music',
    rating:1,
  },
  {
    id: 110,
    name: 'Fixflex',
    description: 'Mandatory intangible function',
    price: '5.29',
    category: 'Music',
    rating:1,
  },
  {
    id: 216,
    name: 'Bitwolf',
    description: 'Streamlined 4th generation definition',
    price: '1.51',
    category: 'Music',
    rating:1,
  },
  {
    id: 277,
    name: 'Treeflex',
    description: 'Innovative didactic framework',
    price: '4.38',
    category: 'Music',
    rating:1,
  },
  {
    id: 1,
    name: 'Duobam',
    description: 'Implemented even-keeled info-mediaries',
    price: '7.77',
    category: 'Outdoors',
    rating:1,
  },
  {
    id: 17,
    name: 'Matsoft',
    description: 'Operative static orchestration',
    price: '8.73',
    category: 'Outdoors',
    rating:1,
  },
  {
    id: 37,
    name: 'Lotlux',
    description: 'Proactive tangible support',
    price: '8.87',
    category: 'Outdoors',
    rating:1,
  },
  {
    id: 81,
    name: 'Transcof',
    description: 'Phased foreground extranet',
    price: '7.63',
    category: 'Outdoors',
    rating:1,
  },
  {
    id: 82,
    name: 'Overhold',
    description: 'Multi-layered maximized application',
    price: '5.86',
    category: 'Outdoors',
    rating:1,
  },
  {
    id: 207,
    name: 'Cardguard',
    description: 'Diverse asynchronous moratorium',
    price: '5.80',
    category: 'Outdoors',
    rating:3,
  },
  {
    id: 338,
    name: 'Stronghold',
    description: 'De-engineered didactic open architecture',
    price: '2.11',
    category: 'Outdoors',
    rating:3,
  },
  {
    id: 57,
    name: 'Stim',
    description: 'Compatible multimedia hierarchy',
    price: '3.08',
    category: 'Shoes',
    rating:3,
  },
  {
    id: 119,
    name: 'Latlux',
    description: 'Proactive fault-tolerant hardware',
    price: '0.38',
    category: 'Shoes',
    rating:3,
  },
  {
    id: 32,
    name: 'Andalax',
    description: 'Persistent multi-tasking intranet',
    price: '6.66',
    category: 'Sports',
    rating:3,
  },
  {
    id: 43,
    name: 'Y-find',
    description: 'User-centric 5th generation project',
    price: '0.86',
    category: 'Sports',
    rating:3,
  },
  {
    id: 84,
    name: 'Tresom',
    description: 'Managed directional hub',
    price: '8.07',
    category: 'Sports',
    rating:3,
  },
  {
    id: 156,
    name: 'Voyatouch',
    description: 'Decentralized 4th generation migration',
    price: '7.69',
    category: 'Sports',
    rating:3,
  },
  {
    id: 4,
    name: 'Keylex',
    description: 'Phased 24/7 capability',
    price: '5.41',
    category: 'Tools',
    rating:3,
  },
  {
    id: 49,
    name: 'Toughjoyfax',
    description: 'Assimilated responsive secured line',
    price: '6.85',
    category: 'Tools',
    rating:3,
  },
  {
    id: 64,
    name: 'Flowdesk',
    description: 'Cloned systemic contingency',
    price: '4.41',
    category: 'Tools',
    rating:3,
  },
  {
    id: 153,
    name: 'Greenlam',
    description: 'Centralized zero defect collaboration',
    price: '3.16',
    category: 'Tools',
    rating:3,
  },
  {
    id: 21,
    name: 'Kanlam',
    description: 'Cloned encompassing time-frame',
    price: '9.52',
    category: 'Toys',
    rating:3,
  },
  {
    id: 28,
    name: 'Prodder',
    description: 'Ameliorated object-oriented hierarchy',
    price: '1.47',
    category: 'Toys',
    rating:3,
  },
  {
    id: 139,
    name: 'Asoka',
    description: 'Phased analyzing array',
    price: '3.72',
    category: 'Toys',
    rating:3,
  },
  {
    id: 172,
    name: 'Alpha',
    description: 'Up-sized full-range database',
    price: '8.64',
    category: 'Toys',
    rating:3,
  },
];

// inventory = _.uniqBy(inventory, 'name')
const sortedInventory = _.sortBy(inventory, 'category');
const c = inventory.map(item => item.category);

export const categories = _.uniq(c);
export default sortedInventory;

// console.log(inventory)
// console.log(categories)
