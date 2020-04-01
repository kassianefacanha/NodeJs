const express = require('express');
const app = express();

app.get('/',(request,response)=>{
    response.send('Hello Rocketseat');
});

app.listen(3000);