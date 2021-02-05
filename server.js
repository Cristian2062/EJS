var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get ('/', function(req,res) {
    var mascots = [
        {name: 'Pocco', empresa: "Windows", año_nacimiento: 2000},
        {name: 'Pieck', empresa: "Mac", año_nacimiento: 2002},
        {name: 'Zeke', empresa: "Linux", año_nacimiento: 2020},
    ]

    var tagline = "Esta es una linea de codigo creada desde el server"

    res.render('pages/index',{
        mascotas: mascots,
        linea: tagline,
    });
});

app.get ('/about', function(req,res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('ESCUCHANDO POR EL PUERTO 8080');