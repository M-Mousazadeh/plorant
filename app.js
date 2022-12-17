const express = require('express');

const {static} = require('./utils/static');

const app = express();

//* setting up the render engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//* statics
static(app);

//* routes
app.get('/', (req, res)=>{
    res.render('index',{
        pageTitle : 'پلورانت'
    })
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})