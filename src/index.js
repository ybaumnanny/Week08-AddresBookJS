const Contact = require('./models/Contact');
const contact1 = new Contact(
    "Yaman", "Mahtha", "Patna", "Bihar", "India", "800007", "9905046375", "mahthayaman@gmail.com"
);
console.log(contact1.displayContact())