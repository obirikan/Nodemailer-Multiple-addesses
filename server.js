const nodemailer = require('nodemailer');

const getEmail=()=>{

  // create a transporter object with Gmail SMTP settings
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kelvinobiri313@gmail.com', // sender email address
        pass: '' // sender email password
    }
  });

  // set mail options including sender, recipients, subject, and message body
  let mailOptions = {
    from: 'kelvinobiri313@gmail.com', // sender email address
    to: ['aframson77@gmail.com','obirikan020@gmail.com'], // recipient email addresses
    subject: 'Test Email', // email subject
    text: 'This is a test email sent using Nodemailer!' // email message body
  };

  // send email using the transporter object and mail options
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
  });

}