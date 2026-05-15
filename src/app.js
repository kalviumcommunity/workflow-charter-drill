const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/**
 * Root endpoint
 */
app.get('/', (req, res) => {
    res.send('Workflow Charter Drill API - Stable Version');
});

/**
 * Health check endpoint
 */
app.get('/status', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

/**
 * Data processing endpoint
 */
app.post('/data', (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ error: 'No data provided' });
    }
    res.status(201).json({ 
        message: 'Data processed successfully',
        receivedAt: new Date().toISOString()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
