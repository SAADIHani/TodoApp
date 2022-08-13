const express = require('express')
const app = express()
const connectDB = require('./config/db');
const cors = require('cors')

connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/todo', require('./routes/api/todo'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(5000, () => {
  console.log(`Server listening on port 5000`)
})