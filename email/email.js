const nodemailer = require('nodemailer');

var emailTransport = nodemailer.createTransport( 
    {
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME, 
            pass: process.env.EMAIL_PASSWORD
        }
    }
);

// verify connection configuration
emailTransport.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});

// var mail = {
//     from: "pakittie <littlepakittie@gmail.com>",
//     to: "benfroelich@gmail.com",
//     subject: "hi mama and papa!",
//     text: "hi mama this is little kittie!",
//     html: "<em>hi mama this is little kittie!</em>"
// }

// emailTransport.sendMail(mail, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Message sent: " + response.message);
//     }

//     emailTransport.close();
// });

module.exports = emailTransport;