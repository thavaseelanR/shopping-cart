const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmailToUser(userEmail, emailhtml) {
    const { EMAIL_HOST_NAME, EMAIL_HOST_NUMBER, GMAIL, GMAIL_ID, GMAIL_PASSWORD } = process.env
    var transporter = nodemailer.createTransport({
        host: EMAIL_HOST_NAME,
        port: EMAIL_HOST_NUMBER,
        auth: {
            service: GMAIL,
            user: GMAIL_ID,
            pass: GMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: GMAIL_ID,
        to: userEmail,
        subject: 'sample',
        html: emailhtml
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('email send:' + info.response)
        }
    });
    return true;
}

module.exports = sendEmailToUser;

