const Contact = require('./model/contact');
const AddressBook = require('./service/AddressBook');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Yaman", "Mahtha", "Patna", "Bihar", "India", "800007", "9596897841", "pqruvw@gmail.com"
    );

    const contact2 = new Contact(
        "Vatsalya", "Katariya", "Katni", "MP", "India", "462022", "8978457889", "xyzabc@gmail.com"
    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    console.log("Address Book:", addressBook);

    console.log("Find Contact by Name:", addressBook.findContactByName("Yaman"));

    console.log("Total Contacts:", addressBook.countContacts());

    console.log("Search by City or State:", addressBook.searchByCityOrState("Katni"));

    console.log("Persons grouped by City and State:", addressBook.viewPersonsByCityOrState());

    console.log("Count by City and State:", addressBook.countByCityOrState());

    console.log("Sorted by Name:");
    
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("Sorted by City:");
    console.log(addressBook.sortContactsByCity().map(contact => contact.toString()).join("\n"));

    console.log("Sorted by State:");
    console.log(addressBook.sortContactsByState().map(contact => contact.toString()).join("\n"));

    console.log("Sorted by Zip:");
    console.log(addressBook.sortContactsByZip().map(contact => contact.toString()).join("\n"));

} catch (error) {
    console.error("Error:", error.message);
}