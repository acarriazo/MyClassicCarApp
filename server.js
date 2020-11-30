const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/myclassiccarapp'));
/* importante poner '/*' para utilizar correctamente el routing interno de angular
y evitar errores de redireccionamiento*/
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/myclassiccarapp/index.html'));
});

app.listen(process.env.PORT || 8080);

