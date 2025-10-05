const express = require('express');
const router = express.Router();

router.post('/webhook/sms-status', (req, res) => {
    const { smsId, status } = req.body;
    // Logic to process the status notification
    console.log(`SMS Status ${smsId}: ${status}`);
    res.status(200).send({ success: true });
});

module.exports = router;