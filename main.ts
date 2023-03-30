
import {Express} from 'express'
import { stringify } from 'querystring';
var express = require('express')

const app:Express = express();
app.set('view engine', 'pug')

app.use( express.json()) 
app.use( express.urlencoded({ extended:true}))

const port = 5000;

app.get('/', (req, res) => {
  res.render ('main', { greeting: "Hi Welcome to Fansville" } );
});

app.post( '/', (req, res) => {
  
  // Process the first example
  let date_input = req.body.date_input
  let raw = Date.parse( date_input )
  let parsed
  try {  parsed = new Date( raw ).toISOString() } catch( err ) { parsed = ''}
    
  let estimated = req.body.estimated ? true : false

  //process the second example
  let day = req.body.day
  let month = req.body.month
  let year = req.body.year
  
  let daymonthyear

  // utilty to clear split date fields
  let clearsplitdates = () => {
    daymonthyear = ''
    day=''
    month=''
    year='' 
  }

  // error handling for split date example
  if ( isNaN(year) ||  isNaN(day)) {
    clearsplitdates()  
  } else {
    try { daymonthyear = new Date(Date.parse( `${year} ${month} ${day}` )).toISOString() }
    catch( e ) { clearsplitdates()}
  }
  
  
  res.render ( 'main', {greeting: "Response", parsed, estimated, daymonthyear,day, month, year })
})

app.listen(port, () => {
    
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
