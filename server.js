const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/sms/send', (req, res) => {
    const { phone, message } = req.body;
    // Logique pour envoyer un SMS ici
    res.status(201).send({ success: true, message: 'SMS envoyé avec succès!' });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
