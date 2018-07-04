const axios = require('axios');

var appRouter = function(app) {
    app.get("/", function(req,res) {
        res.status(200).send('YAY');
        axios.get('https://www.up.edu.ph/index.php/feed/')
        .then( (response) => {
          console.log(response);  
        })
        .catch((err)=>{
            console.log(err);
        });
    });
}

module.exports = appRouter