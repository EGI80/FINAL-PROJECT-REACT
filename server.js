import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Sesuaikan dengan password MySQL Anda jika diatur
  database: 'pembelian'
});

// Test connection
db.connect(err => {
  if (err) {
    console.error('error connecting to database: ' + err.stack);
    return;
  }
  console.log('connected to database as id ' + db.threadId);
});

// Endpoint for user registration
app.post('/api/register', (req, res) => {
  const { username, password, email } = req.body;

  // Check if username already exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else if (results.length > 0) {
      res.status(409).json({ success: false, message: 'Username already exists' });
    } else {
      // Insert new user into the database
      db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, password, email], (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Failed to register user' });
        } else {
          res.status(201).json({ success: true, message: 'Registration successful' });
        }
      });
    }
  });
});

// Endpoint for user login
// Endpoint for user login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else if (results.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect Username and/or Password' });
    }
  });
});

// Server listening
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
