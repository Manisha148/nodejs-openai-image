const path = require('path');
// const openai = require('openai');
// openai.apiKey = "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";
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const axios = require('axios');

const client = axios.create({
  headers: {
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
  }

})
const params = {
  "prompt": "Once upon a time",
  "max_tokens": 10
}

// client.post('https://api.openai.com/v1/engines/davinci/completions', params)
//   .then(result => {
//     console.log(result.data);
//   }).catch(err => {
//     console.log(err);
// })
const app = express();


// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
