const express = require("express");
const app = express();
// write your middleware here

const verify = (req,res, next)=>{
    const currentday = new Date().getDay()
    const  currenthours = new Date().getHours();
    if(currentday >= 1 && currentday <= 5 && currenthours >= 9 && currenthours <= 17){
        next()
    } else{
        res.status(403).send('we apologize')
    }
    
};
app.use(verify)


app.use(express.static('public'))

//setting
app.set('view engine','ejs') 
app.set('views','./views')
// home page route here => path : /

app.get('/' , (req,res)=>{
    res.render('home')
})



// services page route here => path : /services
 app.get('/services', (req,res)=>{
    res.render('services')
 })




// contact page route here => path : /contact

app.get('/contact',(req,res)=>{
    res.render('contact')
})

// listen to your application here
port = 4000
app.listen(port , ()=>{
    console.log('server is runnig on port', port)
})