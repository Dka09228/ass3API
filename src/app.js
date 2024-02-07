const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('/Users/kima/Desktop/aitu/Web Back /ass3API/config/db.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config({ path: './config/config.env' });
connectDB();

app.use('/blogs', require('/Users/kima/Desktop/aitu/Web Back /ass3API/routes/index.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
