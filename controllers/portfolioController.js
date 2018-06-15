exports.home = function(req, res, next) {
    res.render('index', { title: 'Jashandeep Kaur' });
};

exports.about = function(req, res, next) {
    res.render('about', { title: 'About Me' });
};

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
};

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' });
};

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
};

exports.mail = function(req, res) {

    try{
        const nodemailer = require('nodemailer');
        // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.port,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.mail, // sender address
        to: 587, // list of receivers
        subject: 'Message from ' + req.body.name , // Subject line
        text: req.body.message, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

    });
    res.redirect('/');
}
    catch(err){
        console.log(err);
    }
};