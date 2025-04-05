const express = require('express');
const dotenv = require('dotenv'); // Load dotenv FIRST
dotenv.config(); // <-- move this up here

const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const patientRoutes = require('./routes/patientRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const staffRoutes = require("./routes/staff");
const financeRoutes = require("./routes/finance");

console.log("Mongo URI:", process.env.MONGODB_URI);
mongoose.connect(process.env.MONGO_URI); // ✅ match the env variable

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/patients', patientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/finance", financeRoutes);

connectDB();

app.get('/', (req, res) => {
  res.send('Hospital Backend API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
