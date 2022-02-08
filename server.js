const express = require('express');
const mongoose = require('mongoose');
console.log("pre-app");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("post-app")

app.use(require('./routes'));
console.log("pre-goose")
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tender-foote', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("pre-set");
// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
