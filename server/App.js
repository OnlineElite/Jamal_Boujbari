const exp = require('express');
const cors = require('cors');
const bp = require('body-parser')
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
const app = exp();
const port = 7000;

require("dotenv").config();
app.use('/',exp.static(__dirname+'/public'));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(cors());

app.post('/contact', (req, res)=>{
    try{
        //console.log(req.body)
        const {userName, userEmail ,userPhoneNumber, userMessage} = req.body.info
        let myEmail = process.env.EMAIL;
        let myPassword = process.env.PASSWORD;
        let config = {
            service : 'gmail',
            auth : {
            user : myEmail,
            pass : myPassword
            }
        }
        let transporter = nodemailer.createTransport(config);
        // Define the email content
        const emailContent = `
        Name: ${userName}
        Email: ${userEmail}
        Phone Number: ${userPhoneNumber}

        Message:
        ${userMessage}

        ---

        This is a new contact message. Thank you in advance. `;

        // Set the email subject
        const emailSubject = 'New Portfolio Message';

        // Send the email
        let email = {
            text: emailContent,
            subject: emailSubject,
            to: myEmail,
        };

        transporter.sendMail(email).then(()=>{
            return res.status(201).json({message : 'Your message has been sent successfully'})
        }).catch((error)=>{
            return res.status(500).json({error})
        })
  
    }catch(err){
        console.error(err)
        res.status(500).json({ error: "Internal server error" });
    }
})


app.listen(port, ()=> console.log(`Server listening on port ${port}`))
