
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // localhost:PORT/user 가 기본경로

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.get('*', (req,res)=>{
    res.render('404')
})
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/user`)
})