const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'Amblessed',
  password: 'Giftedhands12.',
  database: 'osltd',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const credentials ={
  apiKey:'9df2bd30f8cbd1ef6ac62fa5d96aa1703ead7d10607b09f4c7743630e8c7136e',
  username:'ambibi',
};
const AfricasTalking = require('africastalking')(credentials);
const sms = AfricasTalking.SMS;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files in the public directory

app.get('/', (req, res) => {
  res.send(`
  <head>
  <title>Oilserv SMS Service - Send Text Messages to Your Customers</title>
  <meta name="description" content="Send SMS messages to your customers in bulk. Reach them instantly with a personalized message. Sign up for our bulk SMS service today.">
    <style type="text/css">
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

aside {
  background-color: #fff;
  padding: 20px;
  flex-basis: 25%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  border-radius: 5px;
}

aside h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

aside ul {
  list-style: none;
  padding-left: 20px;
}

aside li {
  margin-bottom: 10px;
  color: #666;
}

main {
  padding: 20px;
  flex-basis: 75%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

header {
  background-color: #333;
  color: #fff;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.header-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 28px;
  margin-right: auto;
  line-height: 60px;
  color:gold;
}

nav ul {
  list-style: none;
  display: flex;
  align-items: center;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  color: #f5f5f5;
}

button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #444;
}

input[type="text"],
textarea {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
}

textarea {
  height: 120px;
}

label {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-container h2 {
font-size: 24px;
margin-bottom: 20px;
color: #333;
}

.form-container p {
margin-bottom: 20px;
color: #666;
}

.form-container button[type="submit"] {
display: block;
margin-top: 20px
}
  button[type="button"] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  button[type="button"]:hover {
    background-color: #3e8e41;
  }
.image-slider {
position: relative;
height: 400px;
overflow: hidden;
margin-bottom: 20px;
}

.image-slider img {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
transition: opacity 0.5s ease-in-out;
}

.image-slider img:first-child {
opacity: 1;
}

.image-slider .slider-nav {
position: absolute;
bottom: 20px;
left: 50%;
transform: translateX(-50%);
display: flex;
}

.image-slider .slider-nav button {
background-color: transparent;
border: none;
cursor: pointer;
margin-right: 10px;
width: 12px;
height: 12px;
border-radius: 50%;
transition: background-color 0.3s ease-in-out;
}

.image-slider .slider-nav button:hover {
background-color: #333;
}

.image-slider .slider-nav button.active {
background-color: #333;
}


  </style>
</head>

<body>
  <header>
    <div class="header-container">
      <h1>Oilserv SMS Service</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="helpdesk.html">Help</a></li>
          <li><a href="contacts.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="container">
    <aside>
      <h2>Welcome to OilServ Limited's Bulk SMS Platform!</h2>
      <ul>
        <li>We are thrilled to have you on board as one of our esteemed users.</li><li> Our platform is designed to offer you a hassle-free and cost-effective way to send SMS messages to your customers, clients, and prospects.</li>
        <li>Quick and easy to use</li>
        <li>With our user-friendly platform, you can send personalized messages, schedule messages for future delivery, and track the success of your campaigns.</li>
        <li>24/7 customer support</li>
      </ul>
      <a href="contactgroup.html" class="button">Create Contact Groups</a>
    </aside>
    <main>
      <div class="image-slider">
        <img src="/slide-1.jpg" alt="Slide 1">
        <img src="/slide-2.jpg" alt="Slide 2">
        <img src="/slide-3.jpg" alt="Slide 3">
      </div>
      <h2>Send Text Messages to Your Customers in Bulk</h2>
      <p>With our bulk SMS service, you can reach all your customers instantly with a personalized message. It's quick, easy, and affordable.</p>
      <form method="post" action="/send">
  <label for="phone">Phone number:</label>
  <input type="tel" id="phone" name="phone" required>
  <label for="department-select">Department:</label>
<select id="department-select" name="department">
  <option value="">--Select a department--</option>
</select>
<script>
  document.getElementById('department-select').addEventListener('change', function() {
    var department = this.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/phone-numbers?department=' + department);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var phoneNumbers = JSON.parse(xhr.responseText);
        document.getElementById('phone-number').value = phoneNumbers.join(', ');
      }
    };
    xhr.send();
  });
  </script>
  <label for="message">Message:</label>
  <input type="text" id="message" name="message" required>
  <br>
  <button type="submit">Send</button>
</form>
    </main>
  </div>
  <footer>
    <div class="footer-container">
      <p>&copy; 2023 Bulk SMS Service</p>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="contacts.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  
</body>
  `);
});
app.get('/contacts.html', (req, res) => {
  const query = 'SELECT * FROM oilservemployee';
  pool.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.send('An error occurred');
    } else {
      const oilservemployeeByDepartment = {};
      results.forEach(oilservemployee => {
        const { department, name, phone } = oilservemployee;
        if (!oilservemployeeByDepartment[department]) {
          oilservemployeeByDepartment[department] = [];
        }
        oilservemployeeByDepartment[department].push({ name, phone });
      });

      let content = `<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contacts</title>
      <style>
          * {
              box-sizing: border-box;
          }
          
          body {
              margin: 0;
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
          }
          
          header {
            background-color: #ff9900;
            color: #fff;
            padding: 10px;
            text-align: center;
            font-size: 24px;
        }

        header ul {
          display: flex;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        header li {
          margin: 0 10px;
        }

        header a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        header a:hover {
          color: #000;
          background-color: #fff;
          }
          
          .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
          }
          
          h2 {
              font-size: 20px;
              margin-bottom: 10px;
          }
          
          input[type="text"] {
              padding: 10px;
              width: 100%;
              margin-bottom: 20px;
              border: none;
              border-radius: 5px;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          }
          
          .contact-group {
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
          }
          
          .contact-group h3 {
              font-size: 16px;
              margin-bottom: 10px;
          }
          
          .contact-group ul {
              list-style: none;
              margin: 0;
              padding: 0;
          }
          
          .contact-group li {
              display: flex;
              justify-content: space-between;
              padding: 10px 0;
              border-bottom: 1px solid #ccc;
          }
          
          .contact-group li:last-child {
              border-bottom: none;
          }
          
          .contact-group li .name {
              font-weight: bold;
              margin-right: 10px;
          }
          
          .contact-group li .phone {
              color: #999;
          }
          
          footer {
              background-color: #0077B5;
              color: #fff;
              padding: 10px;
              text-align: center;
              font-size: 14px;
          }
      </style></head>
      <body>
      <header>
      <nav>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/contacts.html">Contacts</a></li>
      </ul>
      </nav>
      <h1>Contacts</h1>
      </header>
      <div class="container">
      <h2>Contact List</h2>;`;

      for (const [department, oilservemployee] of Object.entries(oilservemployeeByDepartment)) {
        content += `
        <div class="container">
        <input type="text" placeholder="Search contacts...">
        <h3>${department}</h3>
        `;
        oilservemployee.forEach(oilservemployee => {
          content += `<div class="contact-group">
          <ul>
          <li>
              <span class="name">${oilservemployee.name}</span>
              <span class="phone">${oilservemployee.phone}</span>
              <a href="/edit-contact/${oilservemployee.id}">Edit</a>
          </li>
          <li>
        </li>
      </ul>
  </div>
          `;
        });
      }

      content += `
          </div>
          <div class="alone">
  <button>Add Number</button>
  </div>
          <footer>
            &copy; 2023 My Company
          </footer>
        </body>
      `;
      res.send(content);
    }
  });
});

app.get('/helpdesk.html', (req, res) => {
  res.send(`
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Help Center | ICT Department</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-v4F4o63PQnREBcuvA7jGpS9JgITtWLlrjzK+V7RJcvT+Tz7sDSsF76a+QsYXok/ye3CU6xMx6bQ2cW8Mw/e3qg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }

    .header {
      background-color: #0033cc;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 40px;
    }

    .container {
      margin: 20px auto;
      max-width: 800px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

section h2 {
  font-size: 36px;
  margin-bottom: 30px;
}

section p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}

section .btn {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}

section .btn:hover {
  background-color: #0062cc;
  color: #fff;
}
    .contact {
      margin: 20px 0;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .contact h2 {
      margin-bottom: 10px;
      font-size: 28px;
      font-weight: bold;
      color: #0033cc;
    }

    .contact p {
      margin-bottom: 10px;
      font-size: 18px;
      color: #666;
    }

    .contact .phone {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .contact .message {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .contact .fa-phone {
      font-size: 40px;
      color: #0033cc;
    }

    .contact .fa-heart {
      font-size: 30px;
      color: #f44336;
      margin-right: 10px;
    }

    .contact .message a {
      color: #0033cc;
      font-weight: bold;
    }

    .contact .message a:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 600px) {
      .header h1 {
        font-size: 32px;
      }
    }
  </style>
</head>

<body>
  <div class="header">
    <h1>ICT Department Help Center</h1>
  </div>

  <div class="container">
    <h2>Getting Started</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
    </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>How To Get Help</h2>
        <p>
          If you're having issues with our Bulk SMS Portal, don't hesitate to contact us. We're here to help you every step of the way. 
        </p>
        <p>
          Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" class="form-control" id="phone" placeholder="Enter phone number">
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </div>
      <div class="col-md-6">
        <div class="contact">
          <h2>Contact Us</h2>
          <p>
            If you need help, please don't hesitate to contact us.
          </p>
          <p>
            <strong>Phone:</strong> 555-555-5555<br>
            <strong>Email:</strong> help@bulksmsportal.com
          </p>
          <p>
            We appreciate your patience as we work to resolve any issues you may have.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
   `);
});
app.get('/contactgroup.html', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Phone Number Groups</title>
    <style type="text/css">
          /* Global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }
  
  body {
    background-color: #f0f2f5;
  }
  
  header {
    background-color: #000000;
    color: #FFD700;
    padding: 20px;
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  nav ul {
    list-style: none;
    display: flex;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  main {
    display: flex;
    padding: 20px;
  }
  
  #sidebar {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin-right: 20px;
    flex: 0 0 200px;
  }
  
  #sidebar h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  
  #sidebar ul {
    list-style: none;
  }
  
  #sidebar li {
    margin-bottom: 10px;
  }
  
  #sidebar a {
    text-decoration: none;
    color: #3b5998;
  }
  
  #sidebar a:hover {
    text-decoration: underline;
  }
  
  #content {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    flex: 1;
  }
  
  #content h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  input, select {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
  }
  
  input[type="submit"] {
    background-color: #FFD700;
    color: #fff;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #000000;
  }
      </style>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="contacts.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="sidebar">
        <h2>Groups</h2>
        <ul>
          <li><a href="#">ICT</a></li>
          <li><a href="#">Human Resources</a></li>
          <li><a href="#">Finance</a></li>
        </ul>
      </section>
      <section id="content">
        <h1>Phone Number Groups</h1>
        <form method="POST" action="/contact">
        <label for="department">Department</label>
        <input type="text" id="department" name="department">
          <br>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="phone">Phone:</label>
  <input type="text" id="phone" name="phone">

  <button type="submit">Save contact</button>
        </form>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Phone Number Groups</p>
    </footer>
  </body>
  </html>
   `);
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
