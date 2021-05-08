require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 5000;
const models = require('./models/models'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: "Its working!"})
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
