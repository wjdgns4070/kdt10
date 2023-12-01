const express = require('express');
const app = express();
const PORT = 8000;
const Router = require('./routes/practice2')

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/',Router)



app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})