var appRouter = function(app) {
    app.get("/", function(req,res) {
        res.status(200).send('YAY');
    });
}

module.exports = appRouter