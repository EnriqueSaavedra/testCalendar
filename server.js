var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var calendar = require('./functions/calendarFunctions');
var calendarObj = require('./OBJS/calendar');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var lstInteracciones = {};

var server = app.listen(3000,function(){
    console.log("Express is running on port 3000");
});



app.post('/testCalendar',function(req, res){
    let parametros = req.body.queryResult.parameters;
    let intent =  req.body.queryResult.intent.displayName;
    let podoCalendar = new calendarObj();
    let response = 'listo';


    console.log(intent);
    console.log(parametros);
    try{
        switch(intent){
            case intentEnum.MES:
                calendarMesAno = calendar.configuracionMes(parametros);
                podoCalendar.ano = calendarMesAno.ano;
                podoCalendar.mes = calendarMesAno.mes;
                break;
            case intentEnum.DIA:
                break;
        }
    }catch(e){
        response = e;
    }
    console.log(podoCalendar);
    res.json({
        "fulfillmentText": response
    });
    console.log("--------------------------------");
});




const intentEnum = {
    MES: 'AgendaMesIntent',
    DIA: 'AgendaMesIntent'
}