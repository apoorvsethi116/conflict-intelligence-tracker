const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'public', 'api-data', 'powerRankings.json');
const rankings = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { code } = req.query;

  if (code) {
    const entry = rankings.find(r => r.countryCode === code.toUpperCase());
    if (!entry) {
      res.status(404).json({ message: 'Country not found in rankings' });
      return;
    }
    res.json(entry);
    return;
  }

  res.json({ count: rankings.length, data: rankings });
};
