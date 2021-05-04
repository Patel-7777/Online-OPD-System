const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){

    console.log(req.url);
    res.sendFile(path.join(__dirname, 'public','home.html'))
    // app.set('views', path.join(__dirname, 'public'));
    // app.set('view engine', 'ejs');

})

app.use(require('./routes/index'));
// app.use(require('./routes/cancel'));


// app.get('/cancel', function(req, res) {
//     app.set('views', path.join(__dirname, 'public'));
//     app.set('view engine', 'ejs');
  
//   });
  

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('Server on port 3000')