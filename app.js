 const express=require('express')
 const Mongoose=require('mongoose')
 const bodyParser=require('body-parser')
 const app=express()
 const port=process.env.PORT||8080
 Mongoose.connect('mongodb+srv://Ngagara:blaise123@cluster0.szja2.mongodb.net/todoapp?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
     console.log("connecte a la base de donnees")
 })
 const indexroutes=require('./routes/index')
 app.set('view engine','pug')
 app.use(bodyParser.urlencoded({extended:false}));
 app.use('/',indexroutes)
 app.use('/chambrette',indexroutes)

 app.listen(port,()=> console.log(`Serveur lance sur le port ${port}.`))
           