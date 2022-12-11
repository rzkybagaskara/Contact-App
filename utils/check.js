const connection = require('../model/connectDB');

// check duplicate
const checkDuplicate = () => {
  connection.query('SELECT npm, COUNT(npm) FROM table_kontak GROUP BY npm HAVING COUNT(npm) > 1');
};

module.exports = { checkDuplicate };
