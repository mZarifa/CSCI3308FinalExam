/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies
const axios = require('axios');
const qs = require('query-string');
const { response } = require('express');

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.
    We'll be using `db` as this is the name of the postgres container in our
    docker-compose.yml file. Docker will translate this into the actual ip of the
    container for us (i.e. can't be access via the Internet).
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab,
    we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database. We set this in the
    docker-compose.yml for now, usually that'd be in a seperate file so you're not pushing your credentials to GitHub :).
**********************/
const dev_dbConfig = {
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD
};

/** If we're running in production mode (on heroku), the we use DATABASE_URL
 * to connect to Heroku Postgres.
 */
const isProduction = process.env.NODE_ENV === 'production';
const dbConfig = isProduction ? process.env.DATABASE_URL : dev_dbConfig;

// Heroku Postgres patch for v10
// fixes: https://github.com/vitaly-t/pg-promise/issues/711
if (isProduction) {
  pgp.pg.defaults.ssl = { rejectUnauthorized: false };
}

const db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));//This line is necessary for us to use relative paths and access our resources directory

// Home page - DON'T CHANGE
app.get('/', function render_home(req, res) {
  res.status(200);
  res.render('pages/main', {
    my_title: "Artist search",
    items: '',
    error: false,
    message: ''
  });
});


//to request data from API for given search criteria
app.post('/get_feed', function render_artist_search(req, res) {
  var title = req.body.title;

  if (title) {
    axios({

      url: `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${title}`,
      method: 'GET',
      dataType: 'json',
    })
      .then(items => {
        res.render('pages/main', {
          my_title: "AudioDB Artist Info",
          items: items.data.artists,
          error: false,
          message: ''
        })
      })
      .catch(error => {
        console.log(error);
        res.render('pages/main', {
          my_title: "AudioDB Artist Info",
          items: '',
          error: true,
          message: 'Error with AudioDB API.'
        })
      });
  }

  else {
    res.render('pages/main', {
      my_title: "AudioDB Artist Info",
      items: '',
      error: true,
      message: 'Invalid search term'
    })
  }
});




app.get('/reviews', function get_review (req, res) {
  var query = 'select * from artist_reviews;';
  db.any(query)
    .then(function renderpage (rows) {
      res.status(200);
      res.render('pages/reviews', {
        my_title: "Review Page",
        data: rows,
        artist_name: '',
        review_text: '',
        review_date: ''
        
      })
    })
    .catch(err => {
      console.log('Uh Oh I made an oopsie');
      req.flash('error', err);
      res.render('pages/reviews', {
  
        my_title: "Review Page",
        data: rows,
        artist_name: '',
        review_text: '',
        review_date: ''
      })
    });
});


app.get('/artist_searcher', function artist_search(req, res) {
  var artist_search = req.query.artist_search;
  var searcher = "select * from artist_reviews where artist_name =" + "'" + artist_search + "';";
  db.task('post-data', task => {
    return task.batch([
      task.any(searcher)
    ]);
  })
    .then(function render_search_table(rows) {
      res.render('pages/reviews', {
        my_title: "Review Page",
        data: rows[0],
      })
    })
    .catch(err => {
      console.log('Uh Oh I made an oopsie');
      req.flash('error', err);
      res.render('pages/reviews', {
        my_title: "Review Page",
        data: rows,
        artist_name: '',
        review_text: '',
        review_date: ''
      })
    });
});




app.post('/add_review', function review_adder(req, res) {

  var id = Math.random(99999);
  var artist_name = req.body.artist_name;
  var review_text = req.body.review_text;
  var date;
  date = new Date();
  date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2);
  console.log(req.body.artist_name);
  console.log(req.body.review_text);
  console.log(req.body.current_date);
  var insert_statement = "INSERT INTO artist_reviews(id, artist_name, review_text, review_date) VALUES('" + id + "','" +
    artist_name + "','" + review_text + "','" + date + "') ON CONFLICT DO NOTHING;";
  var all_reviews = 'select * from artist_reviews;';

  db.task('post-data', task => {
    return task.batch([
      task.any(insert_statement),
      task.any(all_reviews)
    ]);
  })
    .then(info => {
      res.render('pages/reviews', {
        my_title: "Review Page",
        data: info[1],
      })
    })
    .catch(err => {
      console.log('Uh Oh I made an oopsie');
      req.flash('error', err);
      res.render('pages/reviews', {
        my_title: "Review Page",
        data: rows,
        artist_name: '',
        review_text: '',
        review_date: ''
      })
    });
});

//app.listen(3000);
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

