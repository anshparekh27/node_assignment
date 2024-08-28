const express = require('express');
const connectToDatabase = require('./db/connection');
const workerRoutes = require('./routes/worker');
const bonusRoutes = require('./routes/bonus'); 

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( workerRoutes);
app.use( bonusRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome ")
})

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at PORT ${PORT}`);
    });
});
