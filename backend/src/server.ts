import 'dotenv/config';
import express from 'express';
import payload from 'payload';

const app = express();

app.get('/', (_, res) => {
    res.redirect('/admin');
});

payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGODB_URI || '',
    mongoOptions: {
        dbName: 'snugbo',
    },
    express: app,
    onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
});

app.listen(3000);
