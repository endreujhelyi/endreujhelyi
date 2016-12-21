var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'szomoruszamuraj',
  database: 'bookstore'
});


connection.connect(function (error) {
  if (error) {
    console.log('JAAAJ', error);
  }
  console.log('SIKER!');
});


connection.query(
  `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast
  LEFT JOIN author
    ON book_mast.aut_id = author.aut_id
  LEFT JOIN category
    ON book_mast.cate_id = category.cate_id
  LEFT JOIN publisher
    ON book_mast.pub_id = publisher.pub_id;`, function(err, rows) {
    if (err) {
      console.error(err.toString());
      return;
    }

  console.log("Data received from Db:\n");
  console.log(rows);
});



connection.end();
