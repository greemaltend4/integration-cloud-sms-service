const express = require('express');
const router = express.Router();

router.post('/webhook/sms-status', (req, res) => {
    const { smsId, status } = req.body;
    if (!smsId || !status) {
        return res.status(400).send({ success: false, message: 'smsId and status are required.' });
    }
    // Logic to process the status notification
    console.log(`SMS Status ${smsId}: ${status}`);
    res.status(200).send({ success: true });
});

module.exports = router;