var SimpleImap = require('simple-imap');

var options = {
    user: 'eugeniebastille@gmail.com',
    password: 'hedotech78',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    mailbox: 'INBOX'
};

var simpleImap = new SimpleImap(options);

simpleImap.on('error', function(err) {
    console.log(err);
});

simpleImap.on('mail', function(mail) {
    console.log(mail);
});

simpleImap.start();