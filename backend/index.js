//importing express
const express = require('express');
const userRouter = require('./router/userrouter');
const cors = require('cors');
const propertyRouter = require('./router/propertyrouter');

//initializing express
const app = express();
const port = 5000;

//middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/user', userRouter);
app.use('/property', propertyRouter);
 


//accept and process request
//route

// '/'
app.get('/', (req, res) => {
  res.send('response from express');
});

//add
app.get('/add', (req, res) => {
  res.send(' add response from index')
});
//getall
app.get('/getall', (req, res) => {
  res.send('response from getall')
});
//delete
app.get('/delete', (req, res) => {
  res.send('response from delete')
});
//update
app.get('/update', (req, res) => {
  res.send('response from update')
});






//start  the server
app.listen(port, () => {
  console.log('server started');

});