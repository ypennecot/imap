var SimpleImap = require('simple-imap');
var pwm = require('pwm');

var options = {
    user: 'eugeniebastille@gmail.com',
    password: 'hedotech78',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    mailbox: 'INBOX'
};

var pwm5 = pwm.export(0, 5, function() {
    console.log("Ready!");
});

// Enable pin
pwm5.setEnable(1, function() {
    console.log("Enabled!");
});

var simpleImap = new SimpleImap(options);

simpleImap.on('error', function(err) {
    console.log(err);
});

simpleImap.on('mail', function(mail) {
    console.log('coucou');
});

simpleImap.start();