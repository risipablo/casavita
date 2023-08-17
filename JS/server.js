

let badyParse = require ("badyparse");

const email = require("../JS/servidor/email");

const oEmail = new email({
    "host": "smtp.gmail.com",
    "port": "465 ",
    "secure": false,
    "auth" :{
        "type":"login",
        "user": "pablomatiasrisi@gmail.com",
        "pass": "Mila23142314"
    }
});

app.use(badyParse.json());
app.use(badyParse.urlencoded({extended:true}));

app.post("/api/contacto",function(req,res,next){

    let email ={
        from:"casavita720@gmail.com",
        to: "pablomatiasrisi@gmail.com",
        subject:"Nuevo mensaje",
        html:`
        <div> 
        <p> correo: ${req.bady.c} </p>
        <p> nombre: ${req.bady.n} </p>
        <p> mensaje: ${req.bady.m} </p>
        `
    };

    oEmail.enviarCorreo(email);
    res.send("ok");
    
});