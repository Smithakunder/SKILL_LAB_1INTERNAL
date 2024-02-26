// webhookHandler.js
const axios = require('axios');

const sendNotification = async (userData) => {
    try {
        // Define the webhook URL
        const webhookUrl = 'https://example.com/webhook';

        // Create payload data to send to the webhook
        const payload = {
            message: 'Most ordered food of the day: ' + userData.mostOrderedFood,
            userId: userData.userId,
            // Add any other relevant data
        };

        // Send a POST request to the webhook URL with the payload data
        const response = await axios.post(webhookUrl, payload);

        // Handle the response from the webhook
        console.log('Webhook response:', response.data);
    } catch (error) {
        // Handle errors
        console.error('Error sending notification:', error.message);
    }
};

module.exports = sendNotification;
