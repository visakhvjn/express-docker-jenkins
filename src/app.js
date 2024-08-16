import express from 'express';
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});