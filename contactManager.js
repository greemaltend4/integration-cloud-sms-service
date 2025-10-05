let contacts = [];

function addContact(name, phone) {
    // Check if contact with the same name already exists
    const existingContact = contacts.find(contact => contact.name === name);
    if (!existingContact) {
        contacts.push({ name, phone });
    } else {
        console.warn('Contact with this name already exists.');
    }
}

function getContacts() {
    return contacts;
}

module.exports = { addContact, getContacts };