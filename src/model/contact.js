class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName);
        this.lastName = this.validateName(lastName);
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    validateName(name) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
            throw new Error("Invalid Name! Name should start with a capital letter and have at least 3 characters.");
        }
        return name;
    }

    validateZip(zip) {
        if (!/^[1-9][0-9]{5}$/.test(zip)) {
            throw new Error("Invalid Zip Code! Must be in 5-digit or 9-digit format.");
        }
        return zip;
    }

    validatePhone(phone) {
        if (!/^\d{10}$/.test(phone)) {
            throw new Error("Invalid Phone Number! Must be exactly 10 digits.");
        }
        return phone;
    }

    validateEmail(email) {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Invalid Email Address!");
        }
        return email;
    }

    displayContact() {
        return `Name    : ${this.firstName} ${this.lastName}
Address : ${this.address}, ${this.city}, ${this.state} - ${this.zip}
Phone   : ${this.phone}
Email   : ${this.email}`;
    }
    
}

module.exports = Contact;