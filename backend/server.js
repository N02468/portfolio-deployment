const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const contactRoutes = require('./routes/Contactroute');
// Use routes




const app = express();

//Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

//connection of mongo db
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('cyber');
  });  
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  