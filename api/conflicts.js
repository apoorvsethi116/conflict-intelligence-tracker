const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'public', 'api-data', 'conflicts.json');
const conflicts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { id, code, type, severity, status } = req.query;

  if (id) {
    const conflict = conflicts.find(c => c.id === id);
    if (!conflict) {
      res.status(404).json({ message: 'Conflict not found' });
      return;
    }
    res.json(conflict);
    return;
  }

  if (code) {
    const conflict = conflicts.find(c => c.countryCode === code.toUpperCase());
    if (!conflict) {
      res.status(404).json({ message: 'No conflict data for this country' });
      return;
    }
    res.json(conflict);
    return;
  }

  let filtered = [...conflicts];
  if (type) filtered = filtered.filter(c => c.conflictType === type);
  if (severity) filtered = filtered.filter(c => c.severity >= parseFloat(severity));
  if (status) filtered = filtered.filter(c => c.status === status);

  res.json({ count: filtered.length, data: filtered });
};
