// require axios
const axios = require('axios');
var fs = require('fs');

var appRouter = function(app) {
    app.get("/", function(req,res) {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.up.edu.ph/index.php/feed/')
        .then( (response) => {
            res.send(response.data);
            fs.writeFile('feed.json',JSON.stringify(response.data), (err)=>{
                if(err){
                    console.log(err);
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    });
}
module.exports = appRouter;