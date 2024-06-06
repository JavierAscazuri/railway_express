const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {

    const express=require("express");
    const bodyParse=require("body-parser");
    
    const app=express();
    const PORT= process.env.PORT || 3977;
    
    app.use(bodyParse.urlencoded({extended:true}));
    app.use(bodyParse.json());

    app.options("/welcome", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.sendStatus(200);
      });
    app.options("/", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.sendStatus(200);
      });    
    app.get("/", (req,res)=>{
       client.sendText('5492494480219@c.us', 'Se ha cargado un nuevo Expediente')
        res.send({msg:"Hola Javier Ascazuri en este Host"});
       
    });
    app.post("/welcome", (req,res)=>{
        //client.sendText('5492494480219@c.us', 'Se ha cargado un nuevo Expediente');
        const {username}=req.body;
        //res.send({msg:"Hola: "+username});
        console.log("Hola: "+username)

        client.sendText('5492494480219@c.us', username);
    });

    app.listen(PORT, () =>{
        console.log("tu servidor esta listo en el puerto "+PORT)
    })

}




