const mongoose = require('mongoose');
require('dotenv').config();
const TourPackage = require('./models/TourPackage');

// Gunakan koneksi database dari .env, atau local fallback
const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bejotour';

const tourPackagesData = [
  {
    title: 'Ubud Tour',
    description: 'Explore the cultural heart of Bali, featuring stunning rice terraces and sacred temples.',
    originalPrice: 700000,
    discountPrice: 600000,
    pricingUnit: '/car',
    features: [
      'Monkey Forest',
      'Tegallalang Rice Terrace',
      'Swing In Bali',
      'Tirta Empul Temple',
      'Coffee Plantation'
    ],
    imagePath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    category: 'Culture',
    isBestSeller: false
  },
  {
    title: 'East Bali Tour',
    description: 'Journey to the majestic east of Bali for iconic photo spots and royal water palaces.',
    originalPrice: 850000,
    discountPrice: 750000,
    pricingUnit: '/car',
    features: [
      'Tenganan Village',
      'Taman Ujung Palace',
      'Tirta Gangga Palace',
      'Lempuyang Temple',
      'Lahangan Sweet'
    ],
    imagePath: 'https://images.unsplash.com/photo-1563191911-e65f8655ebf9?auto=format&fit=crop&w=600&q=80',
    category: 'Culture',
    isBestSeller: false
  },
  {
    title: 'North Bali Tour',
    description: 'Discover the breathtaking waterfalls, iconic lake temples, and lush landscapes of the north.',
    originalPrice: 850000,
    discountPrice: 750000,
    pricingUnit: '/car',
    features: [
      'Leke-leke Waterfall',
      'Ulun Danu Beratan Temple',
      'Handara Gate',
      'Jatiluwih Rice Terrace',
      'Tanah Lot'
    ],
    imagePath: 'https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=600&q=80',
    category: 'Nature',
    isBestSeller: false
  },
  {
    title: 'South Bali Tour',
    description: 'Experience Bali\'s finest beaches, spectacular cliffside views, and a magical sunset.',
    originalPrice: 850000,
    discountPrice: 750000,
    pricingUnit: '/car',
    features: [
      'GWK',
      'Melasti Beach',
      'Pandawa Beach',
      'Uluwatu Temple (Kecak dance)',
      'Jimbaran Seafood (Dinner)'
    ],
    imagePath: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=600&q=80',
    category: 'Water',
    isBestSeller: false
  },
  {
    title: 'Kintamani Tour',
    description: 'Enjoy the cool mountain breeze, volcanic views, and the biggest temple complex in Bali.',
    originalPrice: 850000,
    discountPrice: 750000,
    pricingUnit: '/car',
    features: [
      'Besakih Temple',
      'Kintamani Area (Penelokan)',
      'Penglipuran Village',
      'Goa Giri Campuhan Waterfall',
      'Goa Raja Waterfall'
    ],
    imagePath: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80',
    category: 'Nature',
    isBestSeller: true
  },
  {
    title: 'Waterfall Tour',
    description: 'Immerse yourself in nature by visiting Bali\'s most spectacular and hidden waterfalls.',
    originalPrice: 850000,
    discountPrice: 750000,
    pricingUnit: '/car',
    features: [
      'Kato Lampo Waterfall',
      'Goa Rangrang Waterfall',
      'Tibumana Waterfall',
      'Suwat Waterfall',
      'Tukad Cepung Waterfall'
    ],
    imagePath: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    category: 'Water',
    isBestSeller: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');

    // Hapus data lama agar tidak duplikat
    await TourPackage.deleteMany();
    console.log('Old tour packages cleared.');

    // Masukkan data baru
    await TourPackage.insertMany(tourPackagesData);
    console.log('New tour packages seeded successfully!');

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
