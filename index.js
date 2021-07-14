const express = require('express');
const app = express();
app.get('/',(req,res) =>{
    res.send('i have done node')
})

app.listen(3000,() => console.log('Listening on 3000 port'))