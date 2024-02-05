import express from 'express';
const app = express();

function getRandomColour() {
  let char = '0123456789ABCDEF';
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += char[Math.floor(Math.random() * 16)];
  }
  return colour.toLowerCase();
}
app.get('/', (req, res) => {
  const randomColour = getRandomColour();
  res.send(`
      <html>
        <body style="background-color: ${randomColour}; text-align: center; padding: 50px;">
          <h1 style="color: white;">Random Colour</h1>
          <p style="color: white;">Hex Code: ${randomColour}</p>
        </body>
      </html>
    `);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
