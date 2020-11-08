const nodemailer = require('nodemailer');
// TODO add oath
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

module.exports = emailTransport;
