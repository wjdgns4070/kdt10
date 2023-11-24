const express = require('express')
const app = express()
PORT = 3500

app.set('view engine','ejs')
app.set('/views','view')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/',(req,res)=> {
    res.render('index1')
})

app.get('/prac1',(req,res)=>{
    console.log(req.query)
    res.render('result1',{title : 'get요청',userInfo: req.query})
})

app.post('/prac1', (req,res)=> {
    console.log(req.body)
    res.send('port요청 성공!')
})

app.listen(PORT, function () {
    console.log(`${PORT} is opening!`);
})