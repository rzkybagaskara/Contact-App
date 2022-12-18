const connection = require('../model/connectDB');

// check duplicate
const checkDuplicate = (npm) => {
  let bool = true;
<<<<<<< HEAD
  connection.query(`SELECT npm FROM table_kontak WHERE npm = ${npm}`, bool = (err, result) => {
    console.log(result);
    if (result.length == 0) {
      return false;
    }
  });
  return bool;
=======
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
>>>>>>> 9f941335966e7544edd15d5454095ca626ac0aca
};

module.exports = checkDuplicate;
