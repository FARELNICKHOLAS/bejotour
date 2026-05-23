const mongoose = require('mongoose');

const TourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  originalPrice: { type: Number, required: true }, // Harga asli yang dicoret
  discountPrice: { type: Number, required: true }, // Harga setelah diskon 100k
  pricingUnit: { type: String, default: '/car' }, // Satuan harga (e.g. /car, /pax)
  durationHours: { type: Number, default: 10 },
  features: [String],
  imagePath: { type: String },
  category: { type: String, enum: ['Nature', 'Culture', 'Water', 'Custom', 'All'], default: 'Nature' },
  isBestSeller: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('TourPackage', TourPackageSchema);
