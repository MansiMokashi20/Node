const express = require('express');
const app = express();
const path=require('path')

app.use(express.static(path.join(__dirname,'public')));  // represents application is serving static webpage in public directory

// app.get('/', (req, res) => {
// res.send('Hello World!');
// });

app.listen(3000, () =>{console.log('Server listening on port: 3000');
})
