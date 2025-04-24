const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/Database/db');
const uploadRoutes = require('./src/Routes/uploadRoutes');

dotenv.config({
    path: './src/config/.env'
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', require('./src/Routes/userRoutes'));
app.use('/api/trips', require('./src/Routes/tripRoutes'));
app.use('/api/expenses', require('./src/Routes/expenseRoutes'));

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

app.listen(PORT, async() => {
    try{
        await connectDB(URL);
        console.log(`server is running in port ${PORT}`);
    }
    catch(err){
        console.log("error in index",err);
    }
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});