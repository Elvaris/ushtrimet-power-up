const mysql=require('mysql');
const connection=mysql.createConnection({
    host:process.env.DATABASE_URL,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME,
    port:3306,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL database is connected successfully!');
});

module.exports = connection