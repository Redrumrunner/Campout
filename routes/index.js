module.exports = function(app) {
    var campgrounds = [
    ]
    app.get('/', function(req,res){
        res.render('pages/landing');
    });
    app.get('/campgrounds', function(req,res){
        res.render('pages/campgrounds', {campgrounds: campgrounds});
    });
    app.get('/campgrounds/create', function(req,res){
        res.render('pages/create')
    });
    app.post('/campgrounds',function(req,res){
        var name = req.body.name;
        var image = req.body.image;
        var newCampground = {name: name, image: image};
        campgrounds.push(newCampground);
        console.log(campgrounds);
        res.redirect('/campgrounds')
    });
};