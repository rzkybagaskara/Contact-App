const connection = require('../model/connectDB');

// check duplicate
const checkDuplicate = (npm) => {
  let bool = true;
  connection.query(`SELECT npm FROM table_kontak WHERE npm = ${npm}`, bool = (err, result) => {
    console.log(result);
    if (result.length == 0) {
      return false;
    }
  });
  return bool;
};

module.exports = checkDuplicate;
