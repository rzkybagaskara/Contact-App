const connection = require('../model/connectDB');

// check duplicate
const checkDuplicate = (npm) => {
  let bool = true;
  connection.query(`SELECT npm FROM table_kontak WHERE npm = ${npm}`, (err, result) => {
    const resultCheck = result || [];
    console.log(resultCheck);
    if (resultCheck.length !== 0) {
      bool = true;
    } else {
      bool = false;
    }
  });
  return bool;
};

module.exports = checkDuplicate;
