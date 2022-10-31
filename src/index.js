import Express from './config/express';

const express = new Express();

express.start( () => {
    console.log(`Server listening on port ${express.env.PORT}`);
});