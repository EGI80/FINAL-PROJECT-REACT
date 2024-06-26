import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pembelian_tiket'
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.post('/api/pembelian', (req, res) => {
  const { nama, alamat, noKtp, noHp, maskapai, rute, kelas, harga } = req.body;

  const sql = 'INSERT INTO pembelian (nama, alamat, no_ktp, no_hp, maskapai, rute, kelas, harga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [nama, alamat, noKtp, noHp, maskapai, rute, kelas, harga];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.status(200).json({ success: true, id: result.insertId });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
