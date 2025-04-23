const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/Database/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', require('./src/Routes/userRoutes'));
app.use('/api/trips', require('./src/Routes/tripRoutes'));
app.use('/api/expenses', require('./src/Routes/expenseRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
