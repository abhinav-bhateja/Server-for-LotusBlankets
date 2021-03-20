const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', ()=>{
    res.send('welcome to my forma');
})

app.post('/api/forma', (req,res)=>{

let data=req.body;

let smtpTransport = nodemailer.createTransport({
   service:'Gmail' ,
   port:465,
   auth:{
    user:'managemicrointernational@gmail.com',
    pass:"Micro@123"
   }
});


let mailOptions={
    from:data.email,
    to:'managemicrointernational@gmail.com',
    subject:`Message from ${data.name}`,
    html:`
    
    <div class="table-title" style="display: block; margin: auto; max-width: 600px; padding: 5px; width: 100%;">
                <h3 style="color: black; font-size: 30px; font-weight: 400; font-style: normal; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); text-transform: uppercase;">Information</h3>
            </div>
            <table class="table-fill" style="background: white; border-radius: 3px; border-collapse: collapse; height: 320px; margin: auto; max-width: 600px; padding: 5px; width: 100%; box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); animation: float 5s infinite;" width="100%" height="320">
                <thead>
                    <tr style="border-bottom-: 1px solid #C1C3D1; color: #666B85; font-size: 16px; font-weight: normal; text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1); border-top: none; border-bottom: none;">
                        <th class="text-left" style="color: #D5DDE5; background: #1b1e24; border-bottom: 4px solid #9ea7af; border-right: 1px solid #343a45; font-size: 23px; font-weight: 100; padding: 24px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); vertical-align: middle; border-top-left-radius: 3px; text-align: left;" valign="middle" align="left">Type</th>
                        <th class="text-left" style="color: #D5DDE5; background: #1b1e24; border-bottom: 4px solid #9ea7af; font-size: 23px; font-weight: 100; padding: 24px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); vertical-align: middle; border-top-right-radius: 3px; border-right: none; text-align: left;" valign="middle" align="left">Info</th>
                    </tr>
                </thead>
                <tbody class="table-hover">
                    <tr style="border-bottom-: 1px solid #C1C3D1; color: #666B85; font-size: 16px; font-weight: normal; text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1); border-top: none;">
                        <td class="text-left" style="padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 1px solid #C1C3D1; background: #EBEBEB; text-align: left;" valign="middle" align="left">Name</td>
                        <td class="text-left" style="padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 0px; background: #EBEBEB; text-align: left;" valign="middle" align="left"> ${data.name}</td>
                    </tr>
                    <tr style="border-top: 1px solid #C1C3D1; border-bottom-: 1px solid #C1C3D1; color: #666B85; font-size: 16px; font-weight: normal; text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);">
                        <td class="text-left" style="background: #FFFFFF; padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 1px solid #C1C3D1; text-align: left;" valign="middle" align="left">Phone Number</td>
                        <td class="text-left" style="background: #FFFFFF; padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 0px; text-align: left;" valign="middle" align="left">${data.lastname}</td>
                    </tr>
                    <tr style="border-top: 1px solid #C1C3D1; border-bottom-: 1px solid #C1C3D1; color: #666B85; font-size: 16px; font-weight: normal; text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);">
                        <td class="text-left" style="padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 1px solid #C1C3D1; background: #EBEBEB; text-align: left;" valign="middle" align="left">Email</td>
                        <td class="text-left" style="padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 0px; background: #EBEBEB; text-align: left;" valign="middle" align="left">${data.email}</td>
                    </tr>
                    <tr style="border-top: 1px solid #C1C3D1; border-bottom-: 1px solid #C1C3D1; color: #666B85; font-size: 16px; font-weight: normal; text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1); border-bottom: none;">
                        <td class="text-left" style="background: #FFFFFF; padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 1px solid #C1C3D1; border-bottom-left-radius: 3px; text-align: left;" valign="middle" align="left">Message</td>
                        <td class="text-left" style="background: #FFFFFF; padding: 20px; vertical-align: middle; font-weight: 300; font-size: 18px; text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1); border-right: 0px; border-bottom-right-radius: 3px; text-align: left;" valign="middle" align="left">${data.message}</td>
                    </tr>
                </tbody>
            </table>
    
    `

};

smtpTransport.sendMail(mailOptions, (error, response)=>{
  
    if(error){
        res.send(error)
    }
    else{
        res.send('Success')
    }

    smtpTransport.close();
})





})


const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})