require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db');
const nodemailer = require('nodemailer');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


//mailer contact
app.post('/contact', (req, res) => {

    let contact = req.body
    console.log(contact)
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port:465,
        auth:{
            user:'battalion0021@gmail.com',
            pass:'batgdud21'
          
        }
    });


    let mailOptions={
        from:`${contact.email}`,
        to: `nir.e.2007@gmail.com`,
        subject:`Message from ${contact.name}`,
        html:`
        <h3>מידע</h3>
        <ul>
        <li>שם: ${contact.name}</li>
        <li>מייל: ${contact.email}</li>
        <li>טלפון: ${contact.phoneNumber}</li>
        <li>עסק/מחפש/מציע: ${contact.seekObus}</li>
        <li>קטגוריות: ${contact.list}</li>
        <li>עיר: ${contact.city}</li>
        <li>אזור: ${contact.area}</li>
        <li>פלוגה: ${contact.platoon}</li>
        <li>קישור: ${contact.link}</li>
        </ul>

        <h3>הודעה</h3>
        <p>${contact.additional}</p>        
        `
    };

    smtpTransport.sendMail(mailOptions, (error,response)=>{
        if (error){
            res.send(error)
        }else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})



//mailer

app.post('/sendData', (req, res) => {

    let data = req.body
    console.log(data)
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        port:465,
        auth:{
            user:'battalion0021@gmail.com',
            pass:'batgdud21'
          
        }
    });


    let mailOptions={
        from:`${data.mail}`,
        to: `b_brinberg@hotmail.com`,
        subject:`Message from ${data.name}`,
        html:`
        <h3>מידע</h3>
        <ul>
        <li>שם: ${data.name}</li>
        <li>מייל: ${data.mail}</li>
        <li>טלפון: ${data.phone}</li>
        </ul>

        <h3>הודעה</h3>
        <p>${data.textBody}</p>        
        `
    };

    smtpTransport.sendMail(mailOptions, (error,response)=>{
        if (error){
            res.send(error)
        }else{
            res.send('Success')
        }
    })

    smtpTransport.close();
})


const soldierRouter = require('./routes/soldier-router')
app.use("/soldier", soldierRouter)
//manager page
app.use("/manager",soldierRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// server conection------------------
let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('we on', port)
})