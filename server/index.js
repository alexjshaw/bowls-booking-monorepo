const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectToDB } = require('./database/connect');

const userRoute = require('./routes/user')
const clubRoute = require('./routes/club')

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRoute)
app.use('/club', clubRoute)

const port = process.env.PORT || 5000;

connectToDB().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Failed to connect to MongoDB', error);
  process.exit(1);
});
