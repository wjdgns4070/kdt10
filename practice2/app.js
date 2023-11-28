const express = require('express');
const app = express();
const PORT = 8000;



app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(PORT, () => {
    console.log(`${PORT} port is opening!`);
})
