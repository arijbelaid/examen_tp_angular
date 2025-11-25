const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const postList = [
  { id: '1', titre: "Premier post", contenu: 'détails premier post' },
  { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
  { id: '3', titre: "Troisième post", contenu: 'détails troisième post' },
];

app.get('/postList', (req, res) => res.json(postList));

// Servir le build Angular
const wwwPath = path.join(__dirname, 'dist/exam-arij-belaid');
app.use(express.static(wwwPath));

// Catch-all pour Angular
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(wwwPath, 'index.html'));
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
