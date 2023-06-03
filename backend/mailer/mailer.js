require('dotenv')

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            paass: process.env.PASSWORD
        }
    }
)

const mailOptions = {
    from: "ash.sushi.delivery@gmail.com",
    to: "ash.sushi.delivery@gmail.com",
    subject: "test delivery massage",
    text: "Tекст письма"
}

const mail = () =>{
    transporter.sendMail(mailOptions, err=>{})

}

export default mail