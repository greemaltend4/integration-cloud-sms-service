const config = require('./config');

function sendSMS(phone, message) {
    // Logique pour sélectionner un fournisseur et envoyer un SMS
    return new Promise((resolve, reject) => {
        // Simule l'envoi de SMS
        if (!phone || !message) {
            return reject(new Error('Phone number and message are required.'));
        }
        if (typeof phone !== 'string' || typeof message !== 'string') {
            return reject(new Error('Phone number and message must be strings.'));
        }
        setTimeout(() => {
            console.log(`SMS envoyé à ${phone}: ${message}`);
            resolve({ success: true });
        }, 1000);
    });
}

module.exports = { sendSMS };