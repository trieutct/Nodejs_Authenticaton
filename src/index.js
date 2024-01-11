import {engine} from 'express-handlebars'
import express from 'express'
import routes from './public/routes/index.js';
import mongoose from 'mongoose';
const app=express();

app.engine('.hbs',engine({extname:'.hbs'}));
app.use(express.static('src/public'))
app.set('view engine','hbs');
app.set('views','./src/views'); 
app.use(express.json())
const port=3000;

app.get('/',(req,res)=>{
    res.render('new',{isShow:false,helpers:{
        message(){return 'SUCCES';},
        noti(){return 'ERROR';}
    }})
})
mongoose.connect('mongodb://127.0.0.1/f8_education_dev').then(()=>{
    console.log("Kết nối thành công")
}).catch((erro)=>{
    console.log(erro)
})
routes(app)
app.listen(port,()=>{
    console.log(port);
})