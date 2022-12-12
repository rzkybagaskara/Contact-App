const connection = require('../model/connectDB');

// check duplicate
const checkDuplicate = (npm) => {
  let bool = true;
  connection.query(
    `SELECT npm FROM table_kontak WHERE npm = ${npm}`,
    (bool = (err, result) => {
      // const resultCheck = result || [];
      // console.log(resultCheck);
      // if (resultCheck?.length !== 0) {
      //   bool = true;
      // } else {
      //   bool = false;
      // }
      console.log(result);
      if (result.length === 0) {
        return bool;
      }
    })
  );
  // return bool;
};

module.exports = checkDuplicate;
