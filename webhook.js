const express = require('express');
const router = express.Router();

router.post('/webhook/sms-status', (req, res) => {
    const { smsId, status } = req.body;
    // Logique pour traiter la notification de statut
    console.log(`Statut de SMS ${smsId}: ${status}`);
    res.status(200).send({ success: true });
});

module.exports = router;
