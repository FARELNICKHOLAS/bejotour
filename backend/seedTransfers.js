const { Client } = require('pg');

const dbURI = 'postgresql://postgres:postgres@127.0.0.1:54322/postgres';

const transferData = [
  { destination: 'KUTA', price_idr: 150000, price_aud: 15 },
  { destination: 'LEGIAN', price_idr: 200000, price_aud: 20 },
  { destination: 'SANUR', price_idr: 200000, price_aud: 20 },
  { destination: 'SEMINYAK', price_idr: 250000, price_aud: 25 },
  { destination: 'JIMBARAN', price_idr: 250000, price_aud: 25 },
  { destination: 'NUSA DUA', price_idr: 250000, price_aud: 25 },
  { destination: 'CANGGU', price_idr: 350000, price_aud: 35 },
  { destination: 'UBUD', price_idr: 400000, price_aud: 40 },
  { destination: 'ULUWATU', price_idr: 400000, price_aud: 40 },
  { destination: 'PADANG BAI', price_idr: 500000, price_aud: 50 },
  { destination: 'TANAH LOT', price_idr: 350000, price_aud: 35 },
  { destination: 'CANDIDASA', price_idr: 600000, price_aud: 60 },
  { destination: 'KINTAMANI', price_idr: 750000, price_aud: 75 },
  { destination: 'LOVINA', price_idr: 800000, price_aud: 80 },
  { destination: 'AMED', price_idr: 800000, price_aud: 80 },
  { destination: 'PEMUTERAN', price_idr: 900000, price_aud: 90 }
];

const seedSupabaseTransfers = async () => {
  const client = new Client({
    connectionString: dbURI,
  });

  try {
    await client.connect();
    console.log('Connected to Supabase Postgres DB');

    // Create table if not exists
    await client.query(`
      CREATE TABLE IF NOT EXISTS airport_transfers (
        id SERIAL PRIMARY KEY,
        destination VARCHAR(100) NOT NULL,
        price_idr INTEGER NOT NULL,
        price_aud INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Table "airport_transfers" is ready.');

    // Clear existing data
    await client.query('TRUNCATE TABLE airport_transfers RESTART IDENTITY;');
    console.log('Old transfers cleared.');

    // Insert data
    for (const item of transferData) {
      await client.query(
        'INSERT INTO airport_transfers (destination, price_idr, price_aud) VALUES ($1, $2, $3)',
        [item.destination, item.price_idr, item.price_aud]
      );
    }
    console.log('New airport transfers seeded successfully to Supabase!');

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await client.end();
  }
};

seedSupabaseTransfers();
