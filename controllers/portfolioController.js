/*
File Name:portfolioController.js
Author's Name: Jashandeep Kaur
Website Name: jashandeepkaur.azurewebsites.net
File Description: exports functions for rendering different view pages.
*/

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

/* This is for redirection to home page after sending contact mail */
exports.mail = function(req, res) {

    try{
        const nodemailer = require('nodemailer');
        // Generate test SMTP service account from ethereal.email
        nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.host,
            port: process.env.port,
            secure: false, 
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: req.body.mail, // sender address
            to: process.removeListener.port, // list of receivers
            subject: 'Message from ' + req.body.name , // Subject line
            text: req.body.message, // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
        });
        res.redirect('/');
    }
    catch(err){
        console.log(err);
    }
};