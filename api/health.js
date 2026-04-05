module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.json({ status: 'ok', message: 'Conflict Intelligence Tracker API running' });
};
