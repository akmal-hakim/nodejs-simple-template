const path = require('path');

exports.homepageOverview = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views/index.html'));
}
