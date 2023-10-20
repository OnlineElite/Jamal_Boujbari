const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')

async function contactMessage (req, res){
    try{
        const {userName, userEmail ,userPhoneNumber, userMessage} = req.body
        let myEmail = process.env.EMAIL;
        let myPassword = process.env.PASSWORD;
        let config = {
            service : 'gmail',
            auth : {
            user : myEmail,   //here should use userEmail from database
            pass : myPassword  //here should use userPassword from database
            }
        }
        let transporter = nodemailer.createTransport(config);
        let MailGenerateur = new Mailgen({
            theme : 'default',
            product :{
            name : userName,
            link : 'https://mailgen.js'
            }
        })
        let response = {
            body : {
            name: 'TechWave',
            intro : 'This is a new contact message',
            table :{
                data : [
                {
                    Name : userName,
                    phone_Number : userPhoneNumber,
                    Message : userMessage
                }]
            },
            outro : 'Thank you in advance'
            }
        }
        let mail = MailGenerateur.generate(response);
        let message = {
            from : userEmail,
            to : myEmail,
            subject : 'TechWave Customer Message',
            html : mail
        }
        transporter.sendMail(message).then(()=>{
            return res.status(201).json({message : 'Your message has been sent successfully'})
        }).catch((error)=>{
            return res.status(500).json({error})
        })
  
    }catch(err){
        console.error(err)
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    contactMessage
};
