require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes Placeholder
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Database connection placeholder (MongoDB)
// mongoose.connect(process.env.MONGO_URI)...

app.get('/', (req, res) => {
  res.json({ message: "B'jo Bali Tour API is running..." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
