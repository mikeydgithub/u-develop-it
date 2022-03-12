const express = require('express');
const express = require('express');


// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// Express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test the Express.js connection
// Create a GET test route.
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start Express.js server on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
