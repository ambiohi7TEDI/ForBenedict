require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('./database')


/**
 * DATABASE stuff
 */
db.refreshDatabase()
const conn = db.connect()
db.createTables(conn)
// ******************************************************

const credentials ={
  apiKey:'9df2bd30f8cbd1ef6ac62fa5d96aa1703ead7d10607b09f4c7743630e8c7136e',
  username:'ambibi',
};
const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`)); // Serve static files in the public directory
app.use(express.static(`${__dirname}/public/pages`)); // Serve static files in the public directory

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/home.html`);
});
app.get('/contacts', (req, res) => {
    res.sendFile(`${__dirname}/public/pages/contacts.html`);
});

app.get('/allcontacts', (_, res) => {
  conn.query('SELECT * from contacts', (err, results, fields) => {
    if (err) {
      res.json([])
      return
    }
    res.json(results)
  })
})


app.get('/helpdesk', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/helpdesk.html`);
});
app.get('/contactgroup', (req, res) => {
  res.sendFile(`${__dirname}/public/pages/contactgroup.html`);
});
app.get('/phone-numbers', function(req, res) {
  var department = req.query.department;
  pool.query('SELECT phone FROM oilservemployee WHERE department = ?', [department], function(err, results) {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }
    var phoneNumbers = results.map(function(result) {
      return result.phone_number;
    });
    res.json(phoneNumbers);
  });
});
app.get('', (req, res) => {});
app.post('/contact', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const department = req.body.department;

  pool.query(
    'INSERT INTO oilservemployee (name, phone, department) VALUES (?, ?, ?)',
    [name, phone, department],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error saving contact to database');
      } else {
        console.log(`Contact ${name} saved to database`);
        res.send('Contact saved to database');
      }
    }
  );
});
app.post('/send', (req, res) => {
  const phoneNumbers = req.body.phone.split(',');
  const options = {
    to: phoneNumbers,
    message: req.body.message,
  };
  sms.send(options)
    .then((response) => {
      console.log(response);
      res.sendFile(__dirname + '/public/success.html');
    })
    .catch((error) => {
      console.log(error);
      res.sendFile(__dirname + '/public/failure.html');
    });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${listener.address().port}`);
});
