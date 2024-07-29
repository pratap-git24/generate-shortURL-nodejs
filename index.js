const path = require('path')
const express = require('express')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const {connetToMongoDB} = require('./conect')
const URL = require('./models/url')

const app = express();
const port = 4002
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/url',urlRoute)
app.use('/user',userRoute)
app.use('/',staticRoute)

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.get('/:shortId', async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{
        $push: {
            visitedHistory:{
                timestamp: Date.now()
            },
        },
    }
);
res.redirect(entry.redirectUrl)    
})

connetToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=> console.log('mongodb connected'))

app.listen(port,()=>{console.log(`Server running on port ${port}`)})