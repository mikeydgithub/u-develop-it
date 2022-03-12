
// Connect to the MySQL Database
const mysql = require('mysql2');

const express = require('express');

// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'slack',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// Using the query() method. This method run the SQL query and executes the callback with rows.
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start Express.js server on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
