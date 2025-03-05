const Contact = require('./model/contact');
const AddressBook = require('./service/AddressBook');

const addressBook = new AddressBook();

try{
    const contact1 = new Contact(
        "Yaman", "Mahtha", "Patna", "Bihar", "India", "800007", "9596897841", "pqruvw@gmail.com"
    );

    const contact2 = new Contact(
        "Vatsalya", "Katariya", "Katni", "MP", "India", "462022", "8978457889", "xyzabc@gmail.com"
    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    console.log(addressBook)

    console.log(addressBook.findContactByName("Yaman"));

    // console.log(addressBook.deleteContact("Yaman"));
    // console.log(addressBook);
    console.log(addressBook.countContacts())

    console.log(addressBook.searchByCityOrState("Katni"))   
}catch (error) {
    console.error("Error:", error.message);
}
