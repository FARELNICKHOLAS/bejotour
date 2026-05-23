const { Client } = require('pg');

const dbURI = 'postgresql://postgres:postgres@127.0.0.1:54322/postgres';

const tourPackagesData = [
  {
    title: 'Ubud Tour',
    description: 'Explore the cultural heart of Bali, featuring stunning rice terraces and sacred temples.',
    originalPrice: 700000,
    discountPrice: 600000,
    pricingUnit: '/car',
    features: ['Monkey Forest', 'Tegallalang Rice Terrace', 'Swing In Bali', 'Tirta Empul Temple', 'Coffee Plantation'],
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
    features: ['Tenganan Village', 'Taman Ujung Palace', 'Tirta Gangga Palace', 'Lempuyang Temple', 'Lahangan Sweet'],
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
    features: ['Leke-leke Waterfall', 'Ulun Danu Beratan Temple', 'Handara Gate', 'Jatiluwih Rice Terrace', 'Tanah Lot'],
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
    features: ['GWK', 'Melasti Beach', 'Pandawa Beach', 'Uluwatu Temple (Kecak dance)', 'Jimbaran Seafood (Dinner)'],
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
    features: ['Besakih Temple', 'Kintamani Area (Penelokan)', 'Penglipuran Village', 'Goa Giri Campuhan Waterfall', 'Goa Raja Waterfall'],
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
    features: ['Kato Lampo Waterfall', 'Goa Rangrang Waterfall', 'Tibumana Waterfall', 'Suwat Waterfall', 'Tukad Cepung Waterfall'],
    imagePath: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    category: 'Water',
    isBestSeller: false
  }
];

const seedSupabase = async () => {
  const client = new Client({
    connectionString: dbURI,
  });

  try {
    await client.connect();
    console.log('Connected to Supabase Postgres DB');

    // Create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS tour_packages (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        original_price INTEGER NOT NULL,
        discount_price INTEGER NOT NULL,
        pricing_unit VARCHAR(50) DEFAULT '/car',
        duration_hours INTEGER DEFAULT 10,
        features JSONB,
        image_path TEXT,
        category VARCHAR(50),
        is_best_seller BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "tour_packages" is ready.');

    // Clear existing data (optional, or just truncate)
    await client.query('TRUNCATE TABLE tour_packages RESTART IDENTITY;');
    console.log('Old tour packages cleared.');

    // Insert data
    for (const pkg of tourPackagesData) {
      const query = `
        INSERT INTO tour_packages 
        (title, description, original_price, discount_price, pricing_unit, features, image_path, category, is_best_seller) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;
      const values = [
        pkg.title,
        pkg.description,
        pkg.originalPrice,
        pkg.discountPrice,
        pkg.pricingUnit,
        JSON.stringify(pkg.features),
        pkg.imagePath,
        pkg.category,
        pkg.isBestSeller
      ];
      await client.query(query, values);
    }
    console.log('New tour packages seeded successfully to Supabase!');

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await client.end();
  }
};

seedSupabase();
