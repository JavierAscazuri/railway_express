const express=require("express");
const bodyParse=require("body-parser");

const app=express();
const PORT= process.env.PORT || 3977;

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.get("/", (req,res)=>{
    res.status(200).send({msg:"Hola Javier Ascazuri"});
});

app.post("/welcome", (req,res)=>{
    const {username}=rep.body;
    res.status(200).send({msg:"Hola: "+username});
});

app.listen(PORT, () =>{
    console.log("tu servidor esta listo en el puerto "+PORT)
})