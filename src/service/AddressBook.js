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
    findContactByName(name) {
        return this.contacts.find(c => c.firstName.toLowerCase() === name.toLowerCase());
    }
    editContact(name, updatedDetails) {
        let contact = this.findContactByName(name);
        if (!contact) {
            throw new Error("Contact not found!");
        }

        Object.keys(updatedDetails).forEach(key => {
            if (updatedDetails[key]) {
                contact[key] = updatedDetails[key];
            }
        });

        return "Successfully contact updated!";
    } 
}

module.exports = AddressBook;