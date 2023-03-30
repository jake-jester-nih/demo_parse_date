
import {Express} from 'express'
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
  
  let date_input = req.body.date_input
  let estimated = req.body.estimated ? true : false
  
  let raw = Date.parse( date_input )
  let parsed = new Date( raw ).toISOString()
          
  res.render ( 'main', {greeting: "Response", parsed, estimated })
})

app.listen(port, () => {
    
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
