let contacts = [];

function addContact(name, phone) {
    contacts.push({ name, phone });
}

function getContacts() {
    return contacts;
}

module.exports = { addContact, getContacts };
