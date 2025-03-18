let express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const portfolioRoute = require('./Routes/PortfolioRoute');



app.use(cors());
app.use(express.json());

app.use('/api/auth', portfolioRoute);

app.use('/api/portfolio', portfolioRoute);

app.use((err, req, res, next) => {
   err.statuscode = err.statuscode || 500;
   err.status = err.status || 'error';

   res.status(err.statuscode).json({
       status : err.status,
       message : err.message,
   });
});

const port =process.env.PORT || 5000;
    app.listen(port, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}`);
});

