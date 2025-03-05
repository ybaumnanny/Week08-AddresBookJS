const Contact = require("../model/contact");
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        const isDuplicate = this.contacts.filter(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        ).length > 0;

        if (isDuplicate) {
            throw new Error("Duplicate Contact.");
        }

        this.contacts.push(contact);
        return "Contact added!";
    }
}

module.exports = AddressBook;