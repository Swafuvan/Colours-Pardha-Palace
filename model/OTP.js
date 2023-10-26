const randomstring = require('randomstring')
const nodemailer = require('nodemailer');

function generateOtp() {
    return randomstring.generate({
        length: 6,
        charset: 'numeric'
    })
}


// Create a transporter
const sendOtp = async (senderEmail) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'swafuvancp@gmail.com', // Your email address
            pass: 'lfpm chhw wvbl qytc' // Your email password
        }
    });
    let otp = generateOtp()
    // Setup email data
    let mailOptions = {
        from: 'swafuvancp@gmail.com',
        to: senderEmail, // Receiver's email address
        subject: 'Email verification',
        text: `Your OTP is ${otp}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    console.log(otp);
    return otp;
}


module.exports = sendOtp;