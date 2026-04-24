
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');


const authRoutes = require('./routes/auth.js');
const eventRoutes = require('./routes/events.js');
const bookingRoutes = require('./routes/bookings.js');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Correct Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected ✅");
    console.log("DB:", mongoose.connection.name);
})
.catch((error) => {
    console.error("MongoDB Error ❌", error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});