const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/sms/send', (req, res) => {
    const { phone, message } = req.body;
    // Logic to send an SMS goes here
    res.status(201).send({ success: true, message: `SMS sent to ${phone} successfully!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});